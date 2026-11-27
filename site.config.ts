/**
 * ============================================================
 *  BUSINESS DETAILS — REPLACE EVERY VALUE MARKED [REPLACE]
 * ============================================================
 * Every page (footer, contact, legal pages, checkout) reads from
 * this one file. Search the project for "[REPLACE]" to confirm
 * nothing is left over.
 *
 * While `isLive` is false the site shows a "template preview"
 * banner on every page so nobody mistakes it for a trading store.
 * Set it to true only once the details below are real and Stripe
 * is connected to your verified business account.
 */
export const siteConfig = {
  isLive: false,

  storeName: "3D Printing Australia",
  tagline: "Australia's 3D printer specialists",
  url: "https://example.com", // [REPLACE] your production domain

  legalName: "[REPLACE] Example Pty Ltd",
  abn: "[REPLACE] 00 000 000 000",
  acn: "[REPLACE] 000 000 000",

  address: {
    line1: "[REPLACE] 1 Example Street",
    suburb: "[REPLACE] Suburb",
    state: "[REPLACE] NSW",
    postcode: "[REPLACE] 0000",
    country: "Australia",
  },

  phone: "[REPLACE] (00) 0000 0000",
  email: "[REPLACE] hello@example.com",
  supportHours: "Mon–Fri, 9am–5pm AEST",

  social: {
    instagram: "#", // [REPLACE]
    facebook: "#", // [REPLACE]
    youtube: "#", // [REPLACE]
  },

  // Shipping rules (AUD, GST inclusive)
  freeShippingThreshold: 299,
  standardShipping: 19.95,
  expressShipping: 39.95,

  // Black Friday sale — banner + countdown
  sale: {
    active: true,
    name: "Black Friday Sale",
    endsAt: "2026-12-02T23:59:59+11:00",
  },

  legalUpdated: "26 November 2026",
};

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.line1}, ${a.suburb} ${a.state} ${a.postcode}, ${a.country}`;
};
