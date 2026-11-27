import Link from "next/link";
import { Product, aud, discountPct } from "@/lib/products";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton";

export const sku = (p: Product) => p.slug.toUpperCase().replace(/-/g, "").slice(0, 14);

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <Link href={`/product/${p.slug}`} className="card-img">
        <span className="badge-sale">SAVE {discountPct(p)}%</span>
        <ProductImage product={p} />
      </Link>
      <div className="card-body">
        <Link href={`/product/${p.slug}`} className="card-title">{p.brand} {p.name} 3D Printer</Link>
        <div className="card-sku">SKU: {sku(p)}</div>
        <div className={`avail ${p.stock < 10 ? "low" : ""}`}><i />{p.stock < 10 ? `Low stock (${p.stock})` : "In stock"}</div>
        <div className="card-price">
          <span className="was">Was {aud(p.rrp)}</span>
          <span className="price">{aud(p.price)}</span>
        </div>
        <AddToCartButton slug={p.slug} small />
      </div>
    </article>
  );
}
