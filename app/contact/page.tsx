import { siteConfig as c, fullAddress } from "@/site.config";
import ContactForm from "./ContactForm";
export const metadata = { title: "Contact us" };
export default function Contact() {
  return (
    <div className="wrap page">
      <h1>Contact us</h1>
      <div className="contact">
        <div className="contact-info">
          <p className="lead">Questions about a printer or an order? We&apos;re happy to help.</p>
          <dl>
            <dt>Phone</dt><dd>{c.phone}</dd>
            <dt>Email</dt><dd>{c.email}</dd>
            <dt>Hours</dt><dd>{c.supportHours}</dd>
            <dt>Address</dt><dd>{fullAddress()}</dd>
            <dt>Business</dt><dd>{c.legalName}<br />ABN {c.abn}</dd>
          </dl>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
