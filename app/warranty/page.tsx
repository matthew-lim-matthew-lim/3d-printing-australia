import Legal from "@/components/Legal";
import { siteConfig as c } from "@/site.config";
export const metadata = { title: "Warranty" };
export default function Warranty() {
  return (
    <Legal title="Warranty">
      <p>Every printer we sell is genuine Australian stock and comes with the manufacturer&apos;s warranty, typically 12 months on the printer and shorter periods on consumable parts such as nozzles, hotends and build plates.</p>
      <h2>Making a claim</h2>
      <p>Email {c.email} with your order number, a description of the problem and a photo or video. Our team will troubleshoot with you first, and if needed we&apos;ll arrange parts, a repair or a replacement.</p>
      <h2>Australian Consumer Law</h2>
      <p>Manufacturer warranties are in addition to your rights under the Australian Consumer Law, which cannot be excluded.</p>
    </Legal>
  );
}
