"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function AddToCartButton({ slug, small, withQty }: { slug: string; small?: boolean; withQty?: boolean }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);
  const click = () => {
    add(slug, qty);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  };
  return (
    <div className="atc">
      {withQty && (
        <div className="qty" aria-label="Quantity">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">+</button>
        </div>
      )}
      <button type="button" className={`btn btn-primary ${small ? "btn-sm" : "btn-lg"}`} onClick={click} data-testid="add-to-cart">
        {done ? "✓ Added" : "Add to cart"}
      </button>
    </div>
  );
}
