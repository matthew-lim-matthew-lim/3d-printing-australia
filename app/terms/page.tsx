import Link from "next/link";
import Legal from "@/components/Legal";
import { siteConfig as c, fullAddress } from "@/site.config";
export const metadata = { title: "Terms & conditions" };
export default function Terms() {
  return (
    <Legal title="Terms & conditions">
      <p>These terms apply to your use of this website and to any purchase you make from {c.legalName} (ABN {c.abn}, ACN {c.acn}) trading as {c.storeName} (&quot;we&quot;, &quot;us&quot;). By placing an order you agree to these terms. Please read them carefully.</p>
      <h2>1. About us</h2>
      <p>{c.storeName} is operated by {c.legalName}, {fullAddress()}. You can contact us on {c.phone} or at {c.email}.</p>
      <h2>2. Products and pricing</h2>
      <p>All prices are in Australian dollars and include GST. We take care to describe products and prices accurately, but errors can happen. If a product is listed at an incorrect price, we will contact you before dispatch and you may choose to proceed at the correct price or cancel for a full refund. Product images are for illustration and may differ slightly from the item supplied.</p>
      <h2>3. Sale and promotional pricing</h2>
      <p>Sale prices, including Black Friday pricing, apply only during the advertised period and while stock lasts. &quot;RRP&quot; refers to the manufacturer&apos;s or our regular recommended retail price. Promotions cannot be combined unless stated.</p>
      <h2>4. Orders and payment</h2>
      <p>Your order is an offer to buy. A contract is formed when we confirm your order by email. Payments are processed securely by Stripe; we do not see or store your full card details. We may decline or cancel an order (with a full refund) if a product is unavailable, if there is a pricing error, or if we suspect fraud.</p>
      <h2>5. Delivery</h2>
      <p>Delivery times and charges are set out in our <Link href="/shipping">shipping policy</Link>. Risk in the goods passes to you on delivery. Title passes once we have received full payment.</p>
      <h2>6. Returns and the Australian Consumer Law</h2>
      <p>Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure. See our <Link href="/returns">returns policy</Link> and <Link href="/warranty">warranty</Link> page.</p>
      <h2>7. Manufacturer warranties</h2>
      <p>Products are also covered by the manufacturer&apos;s warranty. We will help you make a warranty claim. Manufacturer warranties are in addition to your rights under the Australian Consumer Law.</p>
      <h2>8. Use of this website</h2>
      <p>You must not misuse this site, attempt to gain unauthorised access to it, or use it for any unlawful purpose. Content on this site is owned by us or our licensors. Brand names and trademarks belong to their respective owners.</p>
      <h2>9. Limitation of liability</h2>
      <p>To the extent permitted by law, and subject to your rights under the Australian Consumer Law, our liability for any loss arising from your use of this site or the products is limited to resupplying the goods or refunding the price paid.</p>
      <h2>10. Privacy</h2>
      <p>We handle your personal information in accordance with our <Link href="/privacy">privacy policy</Link>.</p>
      <h2>11. Governing law</h2>
      <p>These terms are governed by the laws of {c.address.state.replace("[REPLACE] ", "")}, Australia, and you submit to the non-exclusive jurisdiction of its courts.</p>
      <h2>12. Changes</h2>
      <p>We may update these terms from time to time. The version on this page at the time you place your order applies to that order.</p>
    </Legal>
  );
}
