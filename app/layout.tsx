import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: { default: `${siteConfig.storeName} | 3D Printers — Bambu Lab, Creality & more`, template: `%s | ${siteConfig.storeName}` },
  description: "Shop Bambu Lab, Creality, Prusa, Elegoo and Anycubic 3D printers. Black Friday sale now on, with fast shipping Australia-wide.",
  robots: siteConfig.isLive ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
