import Legal from "@/components/Legal";
import { siteConfig as c } from "@/site.config";
import { aud } from "@/lib/products";
export const metadata = { title: "Shipping" };
export default function Shipping() {
  return (
    <Legal title="Shipping">
      <table className="specs"><tbody>
        <tr><th>Standard (3–7 business days)</th><td>{aud(c.standardShipping)}, or FREE on orders over {aud(c.freeShippingThreshold)}</td></tr>
        <tr><th>Express (1–3 business days)</th><td>{aud(c.expressShipping)}</td></tr>
      </tbody></table>
      <h2>Dispatch</h2>
      <p>Orders placed before 1pm AEST on a business day are usually dispatched the same day. Otherwise we dispatch the next business day. You&apos;ll receive a tracking link by email once your order ships.</p>
      <h2>Where we ship</h2>
      <p>We ship to all Australian addresses, including PO boxes for smaller items. Delivery to regional and remote areas may take a few extra days.</p>
      <h2>Large items</h2>
      <p>Larger printers ship by courier and may need a signature. If you&apos;re not home, the courier will leave a card with collection details.</p>
      <h2>Damaged in transit</h2>
      <p>Please inspect your parcel on arrival and let us know within 7 days if anything is damaged. See our returns policy.</p>
    </Legal>
  );
}
