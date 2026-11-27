import Link from "next/link";
export default function NotFound() {
  return <div className="wrap section empty"><h1>Page not found</h1><p>That page doesn&apos;t exist.</p><Link href="/shop" className="btn btn-primary">Browse printers</Link></div>;
}
