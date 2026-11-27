import Link from "next/link";
import { siteConfig, fullAddress } from "@/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h4>Customer Service</h4>
          <Link href="/contact">Contact Us</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/shipping">Delivery Information</Link>
          <Link href="/returns">Returns &amp; Refunds</Link>
          <Link href="/warranty">Warranty &amp; RMA</Link>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/shop?brand=bambu-lab">Bambu Lab</Link>
          <Link href="/shop?brand=creality">Creality</Link>
          <Link href="/shop?category=Resin">Resin Printers</Link>
          <Link href="/black-friday">Black Friday Deals</Link>
          <Link href="/shop">All Products</Link>
        </div>
        <div>
          <h4>About</h4>
          <Link href="/about">About Us</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <p>{siteConfig.phone}<br />{siteConfig.email}<br />{siteConfig.supportHours}</p>
          <p>{fullAddress()}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom-in">
          <span>© {new Date().getFullYear()} {siteConfig.legalName} · ABN {siteConfig.abn} · All prices in AUD inc. GST</span>
          <span className="cards"><b>VISA</b><b>Mastercard</b><b>AMEX</b><b>stripe</b></span>
        </div>
      </div>
    </footer>
  );
}
