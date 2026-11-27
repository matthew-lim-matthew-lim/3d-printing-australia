import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Countdown from "@/components/Countdown";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = { title: "Black Friday 3D printer deals" };

export default function BlackFriday() {
  const list = [...products].sort((a, b) => b.rrp - b.price - (a.rrp - a.price));
  return (
    <>
      <section className="hero hero-sm">
        <div className="wrap hero-in">
          <div>
            <span className="eyebrow">{siteConfig.sale.name}</span>
            <h1>Every printer on sale</h1>
            <p>Sorted by biggest saving. Prices valid until the countdown hits zero or while stock lasts.</p>
          </div>
          <div className="hero-cd"><div className="hero-cd-label">Ends in</div><Countdown to={siteConfig.sale.endsAt} /></div>
        </div>
      </section>
      <div className="wrap section"><div className="grid">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div></div>
    </>
  );
}
