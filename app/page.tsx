import Link from "next/link";
import { products, brands, brandSlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { siteConfig } from "@/site.config";
import { IconLock, IconReturn, IconShield, IconTruck } from "@/components/Icons";

const rows: { title: string; brand: string }[] = [
  { title: "Bambu Lab", brand: "Bambu Lab" },
  { title: "Creality", brand: "Creality" },
];

export default function Home() {
  const deals = [...products].sort((a, b) => b.rrp - b.price - (a.rrp - a.price)).slice(0, 10);
  return (
    <>
      <div className="wrap home-top">
        <aside className="catmenu">
          <div className="catmenu-h">Shop by Category</div>
          {brands.map((b) => (
            <Link key={b} href={`/shop?brand=${brandSlug(b)}`}>{b} 3D Printers <span>›</span></Link>
          ))}
          <Link href="/shop?category=FDM">FDM / Filament Printers <span>›</span></Link>
          <Link href="/shop?category=Resin">Resin Printers <span>›</span></Link>
          <Link href="/black-friday" className="catmenu-bf">Black Friday Deals <span>›</span></Link>
        </aside>
        <div className="banners">
          <Link href="/black-friday" className="banner banner-main">
            <span className="banner-tag">BLACK FRIDAY</span>
            <strong>Save up to $400 on 3D printers</strong>
            <span>Bambu Lab, Creality, Prusa and more. Ends {new Date(siteConfig.sale.endsAt).toLocaleDateString("en-AU", { day: "numeric", month: "long" })}.</span>
            <em>Shop Deals</em>
          </Link>
          <Link href="/shop?brand=bambu-lab" className="banner banner-a">
            <strong>Bambu Lab</strong><span>A1, P1S, P2S, X1 and H2 series in stock</span><em>Shop Bambu Lab</em>
          </Link>
          <Link href="/shop?brand=creality" className="banner banner-b">
            <strong>Creality</strong><span>Ender-3 V3, K1, K2 and HALOT</span><em>Shop Creality</em>
          </Link>
        </div>
      </div>

      <div className="wrap trustbar">
        <div><IconTruck /><span><b>Fast Dispatch</b>Same day before 1pm AEST</span></div>
        <div><IconShield /><span><b>Australian Warranty</b>Genuine local stock</span></div>
        <div><IconLock /><span><b>Secure Checkout</b>Payments by Stripe</span></div>
        <div><IconReturn /><span><b>30 Day Returns</b>On unopened items</span></div>
      </div>

      <section className="wrap block">
        <div className="block-h"><h2>Black Friday Hot Deals</h2><Link href="/black-friday">View all deals ›</Link></div>
        <div className="grid">{deals.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>

      {rows.map((r) => (
        <section className="wrap block" key={r.brand}>
          <div className="block-h"><h2>{r.title}</h2><Link href={`/shop?brand=${brandSlug(r.brand)}`}>View all {r.title} ›</Link></div>
          <div className="grid">{products.filter((p) => p.brand === r.brand).slice(0, 5).map((p) => <ProductCard key={p.slug} p={p} />)}</div>
        </section>
      ))}

      <section className="wrap block">
        <div className="block-h"><h2>Shop by Brand</h2></div>
        <div className="brandstrip">
          {brands.map((b) => <Link key={b} href={`/shop?brand=${brandSlug(b)}`}>{b}</Link>)}
        </div>
      </section>
    </>
  );
}
