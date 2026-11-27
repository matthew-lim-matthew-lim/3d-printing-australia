import Link from "next/link";
import Stripe from "stripe";
import ClearCart from "./ClearCart";
import { aud } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function Success({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let s: Stripe.Checkout.Session | null = null;
  let items: Stripe.LineItem[] = [];
  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      s = await stripe.checkout.sessions.retrieve(session_id);
      items = (await stripe.checkout.sessions.listLineItems(session_id)).data;
    } catch { s = null; }
  }
  if (!s || s.payment_status !== "paid") {
    return (
      <div className="wrap page empty">
        <h1>We couldn&apos;t find that order</h1>
        <p>If you were charged, please contact us with your email address and we&apos;ll sort it out.</p>
        <Link href="/contact" className="btn btn-cart">Contact us</Link>
      </div>
    );
  }
  return (
    <div className="wrap page confirm">
      <ClearCart />
      <div className="confirm-tick">✓</div>
      <h1>Thanks for your order!</h1>
      <p>Order reference <b>{s.id.slice(-10).toUpperCase()}</b>. A receipt has been sent to <b>{s.customer_details?.email}</b>.</p>
      <div className="summary confirm-box">
        {items.map((i) => <div className="sum-row" key={i.id}><span>{i.quantity} × {i.description}</span><span>{aud((i.amount_total ?? 0) / 100)}</span></div>)}
        <div className="sum-row"><span>Shipping</span><span>{aud((s.shipping_cost?.amount_total ?? 0) / 100)}</span></div>
        <div className="sum-row total"><span>Total paid</span><span>{aud((s.amount_total ?? 0) / 100)}</span></div>
      </div>
      <p className="muted">We&apos;ll email tracking details as soon as your order ships.</p>
      <Link href="/shop" className="btn btn-cart btn-lg">Continue shopping</Link>
    </div>
  );
}
