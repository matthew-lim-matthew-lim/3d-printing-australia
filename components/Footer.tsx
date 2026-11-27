import Link from "next/link";
import { siteConfig, fullAddress } from "@/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="logo logo-foot"><span className="logo-mark">3D</span><span className="logo-text">Printing<b>Australia</b></span></div>
          <p>{siteConfig.tagline}. Genuine printers, local support and fast shipping Australia-wide.</p>
          <p className="small">{siteConfig.legalName}<br />ABN {siteConfig.abn}<br />{fullAddress()}</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/shop">All printers</Link>
          <Link href="/shop?brand=bambu-lab">Bambu Lab</Link>
          <Link href="/shop?brand=creality">Creality</Link>
          <Link href="/shop?category=Resin">Resin printers</Link>
          <Link href="/black-friday">Black Friday deals</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link href="/contact">Contact us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/returns">Returns &amp; refunds</Link>
          <Link href="/warranty">Warranty</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About us</Link>
          <Link href="/terms">Terms &amp; conditions</Link>
          <Link href="/privacy">Privacy policy</Link>
          <p className="small">{siteConfig.phone}<br />{siteConfig.email}<br />{siteConfig.supportHours}</p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.storeName}. All prices in AUD and include GST.</span>
        <span className="pay">Secure payments by Stripe · Visa · Mastercard · Amex</span>
      </div>
    </footer>
  );
}
