import Link from "next/link";
import type { Metadata } from "next";
import { products, brands, brandSlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SortSelect from "@/components/SortSelect";

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

  const params = (o: Record<string, string | undefined>) => {
    const s = new URLSearchParams();
    Object.entries({ brand, category, q, sort, ...o }).forEach(([k, v]) => v && !(k === "sort" && v === "featured") && s.set(k, v));
    return s.toString();
  };
  const href = (o: Record<string, string | undefined>) => { const qs = params(o); return `/shop${qs ? `?${qs}` : ""}`; };
  const brandName = brands.find((b) => brandSlug(b) === brand);
  const title = q ? `Search results for "${q}"` : brandName ? `${brandName} 3D Printers` : category ? `${category} 3D Printers` : "3D Printers";

  return (
    <div className="wrap page">
      <nav className="crumbs"><Link href="/">Home</Link> › <Link href="/shop">3D Printers</Link>{brandName && <> › {brandName}</>}</nav>
      <div className="shop">
        <aside className="filters">
          <div className="fbox">
            <div className="fbox-h">Brand</div>
            {brands.map((b) => {
              const on = brand === brandSlug(b);
              return (
                <Link key={b} href={href({ brand: on ? undefined : brandSlug(b) })} className={`chk ${on ? "on" : ""}`}>
                  <i />{b}<small>{products.filter((p) => p.brand === b).length}</small>
                </Link>
              );
            })}
          </div>
          <div className="fbox">
            <div className="fbox-h">Printer Type</div>
            {(["FDM", "Resin"] as const).map((c) => {
              const on = category === c;
              return (
                <Link key={c} href={href({ category: on ? undefined : c })} className={`chk ${on ? "on" : ""}`}>
                  <i />{c === "FDM" ? "FDM (Filament)" : "Resin (MSLA)"}<small>{products.filter((p) => p.category === c).length}</small>
                </Link>
              );
            })}
          </div>
          {(brand || category || q) && <Link href="/shop" className="clear">Clear all filters</Link>}
        </aside>
        <div>
          <h1 className="page-h">{title}</h1>
          <div className="toolbar">
            <span>Showing {list.length} of {products.length} products</span>
            <SortSelect value={sort} base={params({ sort: undefined })} />
          </div>
          {list.length ? (
            <div className="grid grid-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          ) : (
            <div className="empty"><p>No products match your selection.</p><Link href="/shop" className="btn btn-cart btn-lg">Clear filters</Link></div>
          )}
        </div>
      </div>
    </div>
  );
}
