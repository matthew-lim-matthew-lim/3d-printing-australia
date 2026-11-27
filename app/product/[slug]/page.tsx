import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct, aud, discountPct, brandSlug } from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { siteConfig } from "@/site.config";

type P = Promise<{ slug: string }>;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: P }): Promise<Metadata> {
  const p = getProduct((await params).slug);
  return p ? { title: `${p.brand} ${p.name}`, description: p.summary } : {};
}

export default async function ProductPage({ params }: { params: P }) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const related = products.filter((x) => x.brand === p.brand && x.slug !== p.slug).slice(0, 4);
  const freeShip = p.price >= siteConfig.freeShippingThreshold;
  return (
    <div className="wrap section">
      <nav className="crumbs"><Link href="/">Home</Link> / <Link href={`/shop?brand=${brandSlug(p.brand)}`}>{p.brand}</Link> / <span>{p.name}</span></nav>
      <div className="pdp">
        <div className="pdp-img"><span className="badge-sale">-{discountPct(p)}%</span><ProductImage product={p} /></div>
        <div className="pdp-info">
          <div className="card-brand">{p.brand}</div>
          <h1>{p.brand} {p.name}</h1>
          <p className="lead">{p.summary}</p>
          <div className="price-row big">
            <span className="price">{aud(p.price)}</span>
            <s className="rrp">RRP {aud(p.rrp)}</s>
            <span className="save-pill">Save {aud(p.rrp - p.price)}</span>
          </div>
          <p className="muted small">Inc. GST · {freeShip ? "Free shipping Australia-wide" : `Shipping from ${aud(siteConfig.standardShipping)}`}</p>
          <p className={p.stock < 10 ? "stock low" : "stock"}>{p.stock < 10 ? `Only ${p.stock} left in stock` : "In stock, ships in 1 business day"}</p>
          <AddToCartButton slug={p.slug} withQty />
          <ul className="ticks">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <div className="trust"><span>🔒 Secure checkout</span><span>🇦🇺 Local warranty</span><span>↩ 30-day returns</span></div>
        </div>
      </div>
      <div className="pdp-more">
        <section>
          <h2>Specifications</h2>
          <table className="specs"><tbody>
            <tr><th>Brand</th><td>{p.brand}</td></tr>
            <tr><th>Model</th><td>{p.name}</td></tr>
            <tr><th>Technology</th><td>{p.category === "FDM" ? "FDM (filament)" : "Resin (MSLA)"}</td></tr>
            {Object.entries(p.specs).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody></table>
        </section>
        <section>
          <h2>What&apos;s in the box</h2>
          <ul className="ticks">{p.inBox.map((i) => <li key={i}>{i}</li>)}</ul>
          <h2>Shipping &amp; returns</h2>
          <p className="muted">Orders placed before 1pm AEST on business days are dispatched the same day. See our <Link href="/shipping">shipping</Link> and <Link href="/returns">returns</Link> policies.</p>
        </section>
      </div>
      {related.length > 0 && (
        <section className="section">
          <h2>More from {p.brand}</h2>
          <div className="grid">{related.map((r) => <ProductCard key={r.slug} p={r} />)}</div>
        </section>
      )}
    </div>
  );
}
