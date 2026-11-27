"use client";
import { useRouter } from "next/navigation";
export default function SortSelect({ value, base }: { value: string; base: string }) {
  const router = useRouter();
  return (
    <label className="sortsel">Sort by
      <select value={value} onChange={(e) => {
        const s = new URLSearchParams(base);
        if (e.target.value === "featured") s.delete("sort"); else s.set("sort", e.target.value);
        router.push(`/shop${s.toString() ? `?${s}` : ""}`);
      }}>
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="discount">Biggest Saving</option>
      </select>
    </label>
  );
}
