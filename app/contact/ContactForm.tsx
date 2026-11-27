"use client";
import { useState } from "react";
import { siteConfig } from "@/site.config";

/** Opens the visitor's email app with the message pre-filled. Swap for a form service later if you prefer. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nOrder #: ${f.get("order") || "-"}\n\n${f.get("message")}`;
    const to = siteConfig.email.replace("[REPLACE] ", "");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <form className="form" onSubmit={submit}>
      <label>Name<input name="name" required autoComplete="name" /></label>
      <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      <label>Order number (optional)<input name="order" /></label>
      <label>Subject
        <select name="subject" defaultValue="Product question">
          <option>Product question</option><option>Order enquiry</option><option>Returns &amp; warranty</option><option>Business / bulk order</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={5} required /></label>
      <button className="btn btn-cart btn-lg" type="submit">Send message</button>
      {sent && <p className="green small">Your email app should now be open with the message ready to send.</p>}
    </form>
  );
}
