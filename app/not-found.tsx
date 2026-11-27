import Link from "next/link";
export default function NotFound() {
  return <div className="wrap page empty"><h1>Page not found</h1><p>That page doesn&apos;t exist.</p><Link href="/shop" className="btn btn-cart">Browse printers</Link></div>;
}
