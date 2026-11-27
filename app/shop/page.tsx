import Link from "next/link";
import type { Metadata } from "next";
import { products, brands, brandSlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "Shop 3D printers" };

type SP = Promise<{ brand?: string; category?: string; q?: string; sort?: string }>;

export default async function Shop({ searchParams }: { searchParams: SP }) {
  const { brand, category, q, sort = "featured" } = await searchParams;
  let list = products.filter(
    (p) =>
      (!brand || brandSlug(p.brand) === brand) &&
      (!category || p.category === category) &&
      (!q || `${p.brand} ${p.name} ${p.summary}`.toLowerCase().includes(q.toLowerCase()))
  );
  if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (sort === "discount") list = [...list].sort((a, b) => b.rrp - b.price - (a.rrp - a.price));

  const href = (o: Record<string, string | undefined>) => {
    const s = new URLSearchParams();
    const merged = { brand, category, q, sort, ...o };
    Object.entries(merged).forEach(([k, v]) => v && !(k === "sort" && v === "featured") && s.set(k, v));
    const qs = s.toString();
    return `/shop${qs ? `?${qs}` : ""}`;
  };
  const brandName = brands.find((b) => brandSlug(b) === brand);
  const title = q ? `Results for “${q}”` : brandName ? `${brandName} 3D printers` : category ? `${category} 3D printers` : "All 3D printers";

  return (
    <div className="wrap section shop">
      <aside className="filters">
        <h3>Brand</h3>
        <Link href={href({ brand: undefined })} className={!brand ? "on" : ""}>All brands</Link>
        {brands.map((b) => (
          <Link key={b} href={href({ brand: brandSlug(b) })} className={brand === brandSlug(b) ? "on" : ""}>
            {b} <small>({products.filter((p) => p.brand === b).length})</small>
          </Link>
        ))}
        <h3>Type</h3>
        <Link href={href({ category: undefined })} className={!category ? "on" : ""}>All types</Link>
        <Link href={href({ category: "FDM" })} className={category === "FDM" ? "on" : ""}>FDM (filament)</Link>
        <Link href={href({ category: "Resin" })} className={category === "Resin" ? "on" : ""}>Resin</Link>
      </aside>
      <div>
        <div className="shop-head">
          <div>
            <h1>{title}</h1>
            <p className="muted">{list.length} product{list.length === 1 ? "" : "s"}</p>
          </div>
          <div className="sort">
            <span>Sort:</span>
            {[["featured", "Featured"], ["price-asc", "Price ↑"], ["price-desc", "Price ↓"], ["discount", "Biggest saving"]].map(([v, l]) => (
              <Link key={v} href={href({ sort: v })} className={sort === v ? "on" : ""}>{l}</Link>
            ))}
          </div>
        </div>
        {list.length ? (
          <div className="grid">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
        ) : (
          <div className="empty"><p>No printers match that search.</p><Link href="/shop" className="btn btn-primary">Clear filters</Link></div>
        )}
      </div>
    </div>
  );
}
