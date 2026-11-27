import Link from "next/link";
import { products, discountPct } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Countdown from "@/components/Countdown";
import { siteConfig } from "@/site.config";

export default function Home() {
  const featured = products.filter((p) => p.featured);
  const maxOff = Math.max(...products.map(discountPct));
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <span className="eyebrow">Black Friday · Limited time</span>
            <h1>Up to {maxOff}% off<br />the best 3D printers</h1>
            <p>Bambu Lab, Creality and more at their lowest prices of the year. Genuine Australian stock, local warranty, free shipping over ${siteConfig.freeShippingThreshold}.</p>
            <div className="hero-cta">
              <Link href="/black-friday" className="btn btn-primary btn-lg">Shop the sale</Link>
              <Link href="/shop" className="btn btn-ghost btn-lg">Browse all printers</Link>
            </div>
          </div>
          <div className="hero-cd">
            <div className="hero-cd-label">Sale ends in</div>
            <Countdown to={siteConfig.sale.endsAt} />
          </div>
        </div>
      </section>

      <section className="usp wrap">
        <div><b>🚚 Fast shipping</b><span>Dispatched in 1 business day</span></div>
        <div><b>🇦🇺 Local warranty</b><span>Genuine AU stock</span></div>
        <div><b>🔒 Secure checkout</b><span>Payments by Stripe</span></div>
        <div><b>↩ 30-day returns</b><span>On unopened items</span></div>
      </section>

      <section className="wrap section">
        <h2>Shop by brand</h2>
        <div className="brands">
          <Link href="/shop?brand=bambu-lab" className="brand-tile bambu"><b>Bambu Lab</b><span>A1 · P1S · P2S · X1 · H2 series</span></Link>
          <Link href="/shop?brand=creality" className="brand-tile creality"><b>Creality</b><span>Ender · K1 · K2 · Hi · HALOT</span></Link>
          <Link href="/shop?brand=prusa-research" className="brand-tile other"><b>More brands</b><span>Prusa · Elegoo · Anycubic</span></Link>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>Black Friday best sellers</h2>
          <Link href="/shop">View all →</Link>
        </div>
        <div className="grid">{featured.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </section>

      <section className="wrap section newsletter">
        <div>
          <h2>Not sure which printer is right for you?</h2>
          <p>Our team prints every day. Tell us what you want to make and we will point you to the right machine.</p>
        </div>
        <Link href="/contact" className="btn btn-primary btn-lg">Ask an expert</Link>
      </section>
    </>
  );
}
