"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getProduct, Product } from "./products";

type Line = { slug: string; qty: number };
type CartCtx = {
  lines: (Line & { product: Product })[];
  count: number;
  subtotal: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  ready: boolean;
  toast: string | null;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "3dpa-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      const s = localStorage.getItem(KEY);
      if (s) setRaw(JSON.parse(s));
    } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(raw)); } catch {}
  }, [raw, ready]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const lines = raw
    .map((l) => ({ ...l, product: getProduct(l.slug)! }))
    .filter((l) => l.product);

  const value: CartCtx = {
    lines,
    count: lines.reduce((n, l) => n + l.qty, 0),
    subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
    ready,
    toast,
    add: (slug, qty = 1) => {
      const p = getProduct(slug);
      setRaw((r) => {
        const ex = r.find((l) => l.slug === slug);
        if (ex) return r.map((l) => (l.slug === slug ? { ...l, qty: Math.min(10, l.qty + qty) } : l));
        return [...r, { slug, qty }];
      });
      if (p) setToast(`${p.brand} ${p.name} added to cart`);
    },
    setQty: (slug, qty) =>
      setRaw((r) => (qty < 1 ? r.filter((l) => l.slug !== slug) : r.map((l) => (l.slug === slug ? { ...l, qty: Math.min(10, qty) } : l)))),
    remove: (slug) => setRaw((r) => r.filter((l) => l.slug !== slug)),
    clear: () => setRaw([]),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
};
