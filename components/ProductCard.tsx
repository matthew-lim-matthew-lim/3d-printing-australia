import Link from "next/link";
import { Product, aud, discountPct } from "@/lib/products";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card">
      <Link href={`/product/${p.slug}`} className="card-img">
        <span className="badge-sale">-{discountPct(p)}%</span>
        <ProductImage product={p} />
      </Link>
      <div className="card-body">
        <div className="card-brand">{p.brand}</div>
        <Link href={`/product/${p.slug}`} className="card-title">{p.name}</Link>
        <p className="card-sum">{p.summary}</p>
        <div className="price-row">
          <span className="price">{aud(p.price)}</span>
          <s className="rrp">RRP {aud(p.rrp)}</s>
        </div>
        <div className="save">Save {aud(p.rrp - p.price)}</div>
        <AddToCartButton slug={p.slug} small />
      </div>
    </article>
  );
}
