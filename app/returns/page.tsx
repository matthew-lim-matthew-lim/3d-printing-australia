import Legal from "@/components/Legal";
import { siteConfig as c, fullAddress } from "@/site.config";
export const metadata = { title: "Returns & refunds" };
export default function Returns() {
  return (
    <Legal title="Returns & refunds">
      <h2>Change of mind</h2>
      <p>We accept change-of-mind returns within 30 days of delivery for items that are unopened, unused and in their original packaging. Return shipping is at your cost and refunds are made to your original payment method within 5 business days of us receiving the item.</p>
      <h2>Faulty or damaged items</h2>
      <p>If your item arrives damaged or develops a fault, contact us within 7 days of delivery where possible, with photos or a short video. We will arrange a repair, replacement or refund in line with the Australian Consumer Law, and we will cover return shipping for faulty goods.</p>
      <h2>Your rights under the Australian Consumer Law</h2>
      <p>Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. Nothing in this policy limits those rights.</p>
      <h2>How to start a return</h2>
      <ol><li>Email {c.email} with your order number and reason for return.</li><li>We&apos;ll send you a return authorisation and instructions.</li><li>Send the item to: {fullAddress()}</li></ol>
      <p>Items sent without a return authorisation may be delayed.</p>
    </Legal>
  );
}
