import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct, aud, discountPct, brandSlug } from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard, { sku } from "@/components/ProductCard";
import Tabs from "@/components/Tabs";
import { siteConfig } from "@/site.config";

type P = Promise<{ slug: string }>;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: P }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: `${p.brand} ${p.name} 3D Printer`, description: p.summary } : {};
}

export default async function ProductPage({ params }: { params: P }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.brand === p.brand && x.slug !== p.slug).slice(0, 5);
  const freeShip = p.price >= siteConfig.freeShippingThreshold;
  return (
    <div className="wrap page">
      <nav className="crumbs"><Link href="/">Home</Link> › <Link href="/shop">3D Printers</Link> › <Link href={`/shop?brand=${brandSlug(p.brand)}`}>{p.brand}</Link> › {p.name}</nav>
      <div className="pdp">
        <div className="pdp-img"><span className="badge-sale">SAVE {discountPct(p)}%</span><ProductImage product={p} /></div>
        <div className="pdp-info">
          <h1>{p.brand} {p.name} 3D Printer</h1>
          <div className="pdp-meta"><span>SKU: <b>{sku(p)}</b></span><span>Brand: <Link href={`/shop?brand=${brandSlug(p.brand)}`}>{p.brand}</Link></span></div>
          <ul className="bullets">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
        <div className="buybox">
          <div className="buy-was">Was <s>{aud(p.rrp)}</s> <span className="buy-save">Save {aud(p.rrp - p.price)}</span></div>
          <div className="buy-price">{aud(p.price)}</div>
          <div className="muted small">Inc. GST</div>
          <div className="buy-rows">
            <div><span>Availability</span><b className={p.stock < 10 ? "low" : "ok"}>{p.stock < 10 ? `Low stock (${p.stock} left)` : "In stock"}</b></div>
            <div><span>Dispatch</span><b>Same day if ordered before 1pm AEST</b></div>
            <div><span>Delivery</span><b>{freeShip ? "Free standard delivery" : `From ${aud(siteConfig.standardShipping)}`}</b></div>
            <div><span>Warranty</span><b>12 months, Australian</b></div>
          </div>
          <AddToCartButton slug={p.slug} withQty />
          <div className="buy-pay">Secure checkout by Stripe · Visa · Mastercard · Amex</div>
        </div>
      </div>
      <Tabs tabs={[
        ["Overview", <div key="o"><p>{p.summary}</p><ul className="bullets">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul></div>],
        ["Specifications", (
          <table className="specs" key="s"><tbody>
            <tr><th>Brand</th><td>{p.brand}</td></tr>
            <tr><th>Model</th><td>{p.name}</td></tr>
            <tr><th>Technology</th><td>{p.category === "FDM" ? "FDM (filament)" : "Resin (MSLA)"}</td></tr>
            {Object.entries(p.specs).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody></table>
        )],
        ["In the Box", <ul className="bullets" key="b">{p.inBox.map((i) => <li key={i}>{i}</li>)}</ul>],
        ["Delivery & Returns", <div key="d"><p>Orders placed before 1pm AEST on business days are dispatched the same day. Standard delivery is {aud(siteConfig.standardShipping)} (free over {aud(siteConfig.freeShippingThreshold)}); express is {aud(siteConfig.expressShipping)}.</p><p>See our <Link href="/shipping">delivery</Link>, <Link href="/returns">returns</Link> and <Link href="/warranty">warranty</Link> policies.</p></div>],
      ]} />
      {related.length > 0 && (
        <section className="block">
          <div className="block-h"><h2>More from {p.brand}</h2><Link href={`/shop?brand=${brandSlug(p.brand)}`}>View all ›</Link></div>
          <div className="grid grid-5">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
        </section>
      )}
    </div>
  );
}
