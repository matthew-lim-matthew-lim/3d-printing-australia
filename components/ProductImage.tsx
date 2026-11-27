"use client";
import { useEffect, useRef, useState } from "react";
import { Product, imageFor } from "@/lib/products";

const brandColour: Record<string, string> = {
  "Bambu Lab": "#00ae42",
  Creality: "#1a73e8",
  "Prusa Research": "#fa6831",
  Elegoo: "#2b6cb0",
  Anycubic: "#4f46e5",
};

/** Shows the product photo; falls back to a clean branded tile if the file is missing. */
export default function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  // Catch images that failed before React hydrated (onError would have been missed).
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  const c = brandColour[product.brand] ?? "#333";
  if (failed) {
    return (
      <div className={`pimg pimg-fallback ${className}`} style={{ ["--bc" as string]: c }} role="img" aria-label={`${product.brand} ${product.name}`}>
        <svg viewBox="0 0 120 120" width="42%" aria-hidden="true">
          <rect x="18" y="14" width="84" height="92" rx="8" fill="none" stroke={c} strokeWidth="5" />
          <rect x="30" y="26" width="60" height="48" rx="3" fill={c} opacity=".12" />
          <path d="M44 40h32M60 40v14" stroke={c} strokeWidth="5" strokeLinecap="round" />
          <rect x="40" y="62" width="40" height="8" rx="2" fill={c} />
          <rect x="30" y="86" width="60" height="8" rx="2" fill={c} opacity=".5" />
        </svg>
        <span className="pimg-brand">{product.brand}</span>
        <span className="pimg-name">{product.name}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={`pimg ${className}`}
      src={imageFor(product)}
      alt={`${product.brand} ${product.name} 3D printer`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
