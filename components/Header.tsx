"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { siteConfig } from "@/site.config";
import Countdown from "./Countdown";

export default function Header() {
  const { count, ready } = useCart();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    router.push(`/shop${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""}`);
  };
  const nav = [
    ["/shop", "All printers"],
    ["/shop?brand=bambu-lab", "Bambu Lab"],
    ["/shop?brand=creality", "Creality"],
    ["/shop?category=Resin", "Resin"],
    ["/black-friday", "Black Friday"],
    ["/contact", "Contact"],
  ];
  return (
    <>
      {!siteConfig.isLive && (
        <div className="setup-banner">
          Template preview — this store is not trading yet. Orders cannot be placed and no payments are taken.
        </div>
      )}
      {siteConfig.sale.active && (
        <div className="promo">
          <strong>{siteConfig.sale.name.toUpperCase()}</strong> · Up to 25% off printers · Free shipping over ${siteConfig.freeShippingThreshold}
          <span className="promo-cd"> · Ends in <Countdown to={siteConfig.sale.endsAt} compact /></span>
        </div>
      )}
      <header className="header">
        <div className="wrap header-in">
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-mark">3D</span>
            <span className="logo-text">Printing<b>Australia</b></span>
          </Link>
          <form className="search" onSubmit={search} role="search">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search printers…" aria-label="Search printers" />
            <button type="submit" aria-label="Search">⌕</button>
          </form>
          <Link href="/cart" className="cart-link" aria-label={`Cart, ${count} items`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" /><circle cx="10" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /></svg>
            <span>Cart</span>
            {ready && count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>
        <nav className={`nav ${open ? "open" : ""}`}>
          <div className="wrap nav-in">
            {nav.map(([h, l]) => (
              <Link key={h} href={h} onClick={() => setOpen(false)} className={l === "Black Friday" ? "nav-bf" : ""}>{l}</Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
