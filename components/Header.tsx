"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { aud } from "@/lib/products";
import { siteConfig } from "@/site.config";
import Countdown from "./Countdown";
import { IconCart, IconPhone, IconSearch, IconUser } from "./Icons";

const nav: [string, string][] = [
  ["/shop?brand=bambu-lab", "Bambu Lab"],
  ["/shop?brand=creality", "Creality"],
  ["/shop?brand=prusa-research", "Prusa"],
  ["/shop?brand=elegoo", "Elegoo"],
  ["/shop?brand=anycubic", "Anycubic"],
  ["/shop?category=FDM", "FDM Printers"],
  ["/shop?category=Resin", "Resin Printers"],
];

export default function Header() {
  const { count, subtotal, ready } = useCart();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const router = useRouter();
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    const s = new URLSearchParams();
    if (q.trim()) s.set("q", q.trim());
    if (cat) s.set("brand", cat);
    router.push(`/shop${s.toString() ? `?${s}` : ""}`);
  };
  return (
    <>
      {!siteConfig.isLive && (
        <div className="setup-banner">Template preview: this store is not trading yet. Orders cannot be placed and no payments are taken.</div>
      )}
      <div className="util">
        <div className="wrap util-in">
          <span className="util-l"><IconPhone /> {siteConfig.phone} <span className="sep">|</span> {siteConfig.supportHours}</span>
          <span className="util-r">
            <Link href="/shipping">Delivery</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/faq">Help</Link>
            <Link href="/contact">Contact Us</Link>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-in">
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark">3D</span>
            <span className="logo-text"><b>PRINTING</b> AUSTRALIA</span>
          </Link>
          <form className="search" onSubmit={search} role="search">
            <select value={cat} onChange={(e) => setCat(e.target.value)} aria-label="Search in brand">
              <option value="">All Brands</option>
              <option value="bambu-lab">Bambu Lab</option>
              <option value="creality">Creality</option>
              <option value="prusa-research">Prusa</option>
              <option value="elegoo">Elegoo</option>
              <option value="anycubic">Anycubic</option>
            </select>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by model, brand or keyword" aria-label="Search products" />
            <button type="submit" aria-label="Search"><IconSearch /></button>
          </form>
          <Link href="/contact" className="hdr-link hide-sm"><IconUser /><span>Need help?<small>Contact us</small></span></Link>
          <Link href="/cart" className="hdr-link hdr-cart" aria-label={`Cart, ${count} items`}>
            <span className="cart-ico"><IconCart />{ready && count > 0 && <em className="cart-count">{count}</em>}</span>
            <span className="hide-sm">My Cart<small>{ready ? aud(subtotal) : aud(0)}</small></span>
          </Link>
        </div>
        <nav className={`nav ${open ? "open" : ""}`}>
          <div className="wrap nav-in">
            <Link href="/shop" className="nav-all" onClick={() => setOpen(false)}>☰ All Products</Link>
            {nav.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)}>{l}</Link>)}
            <Link href="/black-friday" className="nav-bf" onClick={() => setOpen(false)}>Black Friday Deals</Link>
          </div>
        </nav>
      </header>
      {siteConfig.sale.active && (
        <div className="promo">
          <div className="wrap promo-in">
            <span><b>BLACK FRIDAY</b> Sale prices on every printer. Free metro delivery over ${siteConfig.freeShippingThreshold}.</span>
            <span className="promo-cd">Ends in <Countdown to={siteConfig.sale.endsAt} compact /></span>
          </div>
        </div>
      )}
    </>
  );
}
