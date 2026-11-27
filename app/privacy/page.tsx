import Legal from "@/components/Legal";
import { siteConfig as c, fullAddress } from "@/site.config";
export const metadata = { title: "Privacy policy" };
export default function Privacy() {
  return (
    <Legal title="Privacy policy">
      <p>{c.legalName} (ABN {c.abn}) is committed to protecting your privacy in accordance with the <i>Privacy Act 1988</i> (Cth) and the Australian Privacy Principles.</p>
      <h2>What we collect</h2>
      <p>When you order or contact us we collect your name, email, phone number, delivery address and order details. We also collect basic technical information such as browser type and pages visited.</p>
      <h2>Payment information</h2>
      <p>Card payments are processed by Stripe, Inc. Your card details are entered directly on Stripe&apos;s secure, PCI-DSS compliant checkout and are never sent to or stored by us.</p>
      <h2>How we use it</h2>
      <ul><li>To process, ship and support your order</li><li>To respond to your enquiries</li><li>To meet our legal and tax obligations</li><li>To send marketing, only if you opt in (you can unsubscribe at any time)</li></ul>
      <h2>Who we share it with</h2>
      <p>Only with service providers who help us run the store, such as our payment processor, couriers and email provider, and only as needed. We do not sell your personal information.</p>
      <h2>Storage and security</h2>
      <p>We take reasonable steps to protect your information from misuse, loss and unauthorised access. Some providers may store data outside Australia.</p>
      <h2>Cookies</h2>
      <p>We use local browser storage to remember your cart. We may use analytics cookies to understand how the site is used.</p>
      <h2>Access and correction</h2>
      <p>You can ask to access or correct your personal information by emailing {c.email}.</p>
      <h2>Complaints</h2>
      <p>Contact us at {c.email} or write to {fullAddress()}. If you are not satisfied with our response you may contact the Office of the Australian Information Commissioner (oaic.gov.au).</p>
    </Legal>
  );
}
