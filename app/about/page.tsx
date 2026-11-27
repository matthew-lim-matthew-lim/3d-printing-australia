import { siteConfig as c } from "@/site.config";
export const metadata = { title: "About us" };
export default function About() {
  return (
    <div className="wrap section legal">
      <h1>About {c.storeName}</h1>
      <p className="lead">[REPLACE] Tell your story here: who you are, why you started, and what makes your store different.</p>
      <p>We are an Australian-owned 3D printing specialist. We stock the printers we use ourselves, from first-time-friendly machines like the Bambu Lab A1 mini and Creality Ender-3 V3 SE through to multi-material workhorses like the H2D and K2 Plus.</p>
      <p>Every order is packed locally and backed by our team for setup help, troubleshooting and warranty support.</p>
    </div>
  );
}
