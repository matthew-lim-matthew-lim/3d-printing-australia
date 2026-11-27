import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";
import { siteConfig } from "@/site.config";

/**
 * Creates a Stripe Checkout Session from the cart.
 * Prices are looked up server-side from the catalogue (never trusted from the browser).
 * Card details are entered on Stripe's hosted page — this server never receives them.
 */
export async function POST(req: Request) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!siteConfig.isLive && key && key.startsWith("sk_live_")) {
    return NextResponse.json({ error: "This store is still in template mode. Set isLive in site.config.ts before using a live Stripe key." }, { status: 503 });
  }
  if (!key) {
    return NextResponse.json({ error: "Payments are not connected yet. The store owner needs to add a Stripe key (see README)." }, { status: 503 });
  }

  let body: { items?: { slug: string; qty: number }[] };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  const items = (body.items ?? [])
    .map((i) => ({ p: getProduct(i.slug), qty: Math.max(1, Math.min(10, Math.floor(Number(i.qty) || 0))) }))
    .filter((i) => i.p);
  if (!items.length) return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });

  const subtotal = items.reduce((n, i) => n + i.p!.price * i.qty, 0);
  const free = subtotal >= siteConfig.freeShippingThreshold;
  const origin = req.headers.get("origin") ?? siteConfig.url;
  const cents = (n: number) => Math.round(n * 100);

  const stripe = new Stripe(key);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    currency: "aud",
    line_items: items.map(({ p, qty }) => ({
      quantity: qty,
      price_data: {
        currency: "aud",
        unit_amount: cents(p!.price),
        product_data: { name: `${p!.brand} ${p!.name}`, metadata: { slug: p!.slug } },
      },
    })),
    shipping_address_collection: { allowed_countries: ["AU"] },
    phone_number_collection: { enabled: true },
    shipping_options: [
      { shipping_rate_data: { display_name: free ? "Free standard shipping" : "Standard shipping (3–7 business days)", type: "fixed_amount", fixed_amount: { amount: free ? 0 : cents(siteConfig.standardShipping), currency: "aud" } } },
      { shipping_rate_data: { display_name: "Express shipping (1–3 business days)", type: "fixed_amount", fixed_amount: { amount: cents(siteConfig.expressShipping), currency: "aud" } } },
    ],
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });
  return NextResponse.json({ url: session.url });
}
