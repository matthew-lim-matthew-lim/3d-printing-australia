import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Countdown from "@/components/Countdown";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = { title: "Black Friday 3D printer deals" };

export default function BlackFriday() {
  const list = [...products].sort((a, b) => b.rrp - b.price - (a.rrp - a.price));
  return (
    <div className="wrap page">
      <nav className="crumbs"><Link href="/">Home</Link> › Black Friday Deals</nav>
      <div className="bf-head">
        <div><h1>Black Friday Deals</h1><p>Sale prices on every printer while stock lasts. Sorted by biggest saving.</p></div>
        <div className="bf-cd"><span>Sale ends in</span><Countdown to={siteConfig.sale.endsAt} /></div>
      </div>
      <div className="grid grid-5">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
    </div>
  );
}
