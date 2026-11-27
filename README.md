# 3D Printing Australia — store template

A Next.js e-commerce storefront for 3D printers: Bambu Lab and Creality lineups (plus Prusa, Elegoo, Anycubic), product pages, cart, Black Friday sale styling, Stripe Checkout, and Australian legal pages.

## Run locally

```bash
npm install
cp .env.example .env.local   # add your Stripe test key
npm run dev                  # http://localhost:3000
```

## Before you go live — checklist

1. **Business details** — edit `site.config.ts`. Every `[REPLACE]` value (legal name, ABN, ACN, address, phone, email, socials, domain) feeds the header, footer, contact page and every legal page. Search the project for `[REPLACE]` to confirm none are left (the About page has one too).
2. **Product photos** — put each printer's official photo in `public/products/<slug>.jpg` (slugs are in `lib/products.ts`, e.g. `public/products/bambu-lab-a1-mini.jpg`). Square, white-background images look best. Until a photo exists, a clean branded placeholder tile is shown. You can also set `image: "https://..."` on any product.
3. **Prices & stock** — `lib/products.ts` holds RRP, sale price and stock. The figures are indicative placeholders; check current pricing and your supplier terms.
4. **Legal pages** — `app/terms`, `app/privacy`, `app/returns`, `app/shipping`, `app/warranty`. They're written for the Australian Consumer Law and Privacy Act, but have them reviewed for your business.
5. **Payments** — create a Stripe account for your verified business and set `STRIPE_SECRET_KEY` (in `.env.local` locally, or in Vercel → Project → Settings → Environment Variables). Use `sk_test_...` while testing (card `4242 4242 4242 4242`, any future expiry, any CVC).
6. **Switch on** — set `isLive: true` in `site.config.ts`. This removes the "template preview" banner and lets search engines index the site. The checkout refuses a live Stripe key while `isLive` is false.

## How payments work

The cart posts product slugs and quantities to `/api/checkout`. The server looks up prices from the catalogue (never trusting the browser), creates a Stripe Checkout Session, and redirects the shopper to Stripe's hosted payment page. Card numbers are entered only on Stripe's page; this app never receives or stores them. After payment Stripe returns the shopper to `/checkout/success`, which confirms the payment with Stripe and shows the order summary.

To fulfil orders, watch the Stripe dashboard (or add a webhook for `checkout.session.completed`).

## Deploy to Vercel

Import the GitHub repo at vercel.com/new (framework: Next.js, no build settings needed), add `STRIPE_SECRET_KEY` as an environment variable, and deploy.

## Structure

```
site.config.ts        business details, shipping rates, sale dates
lib/products.ts       catalogue
lib/cart.tsx          cart state (saved in the browser)
app/                  pages: home, shop, black-friday, product/[slug], cart, checkout/success, legal pages
app/api/checkout      Stripe Checkout session
components/           header, footer, product card/image, countdown
```
