"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { aud } from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import { siteConfig } from "@/site.config";

export default function CartPage() {
  const { lines, subtotal, setQty, remove, ready } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const free = subtotal >= siteConfig.freeShippingThreshold;

  const checkout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: lines.map((l) => ({ slug: l.slug, qty: l.qty })) }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Checkout is unavailable right now.");
      window.location.href = data.url; // Stripe-hosted checkout page
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  };

  if (!ready) return <div className="wrap page"><h1 className="page-h">Shopping Cart</h1><p className="muted">Loading…</p></div>;
  if (!lines.length)
    return (
      <div className="wrap page empty">
        <h1>Your cart is empty</h1>
        <p>Black Friday prices won&apos;t last. Find your next printer.</p>
        <Link href="/black-friday" className="btn btn-cart btn-lg">Shop the sale</Link>
      </div>
    );

  return (
    <div className="wrap page">
      <h1 className="page-h">Shopping Cart</h1>
      <div className="cart">
        <div className="cart-lines">
          {lines.map(({ slug, qty, product: p }) => (
            <div className="cart-line" key={slug}>
              <Link href={`/product/${slug}`} className="cart-thumb"><ProductImage product={p} /></Link>
              <div className="cart-meta">
                <div className="card-brand">{p.brand}</div>
                <Link href={`/product/${slug}`} className="card-title">{p.name}</Link>
                <div className="muted small">{aud(p.price)} each · <s>{aud(p.rrp)}</s></div>
                <button className="link-btn" onClick={() => remove(slug)}>Remove</button>
              </div>
              <div className="qty">
                <button onClick={() => setQty(slug, qty - 1)} aria-label={`Decrease ${p.name}`}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(slug, qty + 1)} aria-label={`Increase ${p.name}`}>+</button>
              </div>
              <div className="cart-total">{aud(p.price * qty)}</div>
            </div>
          ))}
        </div>
        <aside className="summary">
          <h2>Order summary</h2>
          <div className="sum-row"><span>Subtotal</span><span>{aud(subtotal)}</span></div>
          <div className="sum-row"><span>You save</span><span className="green">{aud(lines.reduce((n, l) => n + (l.product.rrp - l.product.price) * l.qty, 0))}</span></div>
          <div className="sum-row"><span>Shipping</span><span>{free ? "FREE" : `From ${aud(siteConfig.standardShipping)}`}</span></div>
          {!free && <p className="muted small">Add {aud(siteConfig.freeShippingThreshold - subtotal)} more for free shipping.</p>}
          <div className="sum-row total"><span>Total (inc. GST)</span><span>{aud(subtotal + (free ? 0 : siteConfig.standardShipping))}</span></div>
          <button className="btn btn-cart btn-lg btn-block" onClick={checkout} disabled={loading} data-testid="checkout">
            {loading ? "Redirecting to secure checkout…" : "Proceed to secure checkout"}
          </button>
          {error && <p className="error" role="alert">{error}</p>}
          <p className="muted small center">You&apos;ll enter payment details on Stripe&apos;s secure page. We never see or store your card number.</p>
          <Link href="/shop" className="link-btn center-block">Continue shopping</Link>
        </aside>
      </div>
    </div>
  );
}
