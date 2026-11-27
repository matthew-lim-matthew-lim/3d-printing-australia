"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart";
export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return <div className="toast" role="status"><span>✓ {toast}</span><Link href="/cart">View Cart</Link></div>;
}
