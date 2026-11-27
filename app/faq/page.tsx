import Link from "next/link";
import { siteConfig as c } from "@/site.config";
export const metadata = { title: "FAQ" };
const faqs: [string, React.ReactNode][] = [
  ["Which printer should I buy first?", "For most beginners we recommend the Bambu Lab A1 mini or A1 for ease of use, or the Creality Ender-3 V3 SE if budget is the priority. Want to print ABS or ASA? Choose an enclosed printer like the P1S or K1C."],
  ["Are your printers genuine Australian stock?", "Yes. All printers are sourced through official distribution and include the manufacturer's warranty."],
  ["How long does shipping take?", <>Most orders ship within one business day. Standard delivery takes 3–7 business days. See <Link href="/shipping">shipping</Link>.</>],
  ["Is checkout secure?", "Yes. Payments are handled by Stripe on their secure, PCI-compliant page. We never see or store your card number."],
  ["Can I return a printer?", <>Unopened items can be returned within 30 days. Faulty items are covered under the Australian Consumer Law. See <Link href="/returns">returns</Link>.</>],
  ["Do you offer business invoices?", `Yes. Every order includes a tax invoice with our ABN. For purchase orders, email ${c.email}.`],
];
export default function Faq() {
  return (
    <div className="wrap section legal">
      <h1>Frequently asked questions</h1>
      {faqs.map(([q, a]) => (
        <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>
      ))}
    </div>
  );
}
