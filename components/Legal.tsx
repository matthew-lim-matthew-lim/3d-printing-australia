import { siteConfig } from "@/site.config";
export default function Legal({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="wrap section legal">
      <h1>{title}</h1>
      <p className="muted small">Last updated {siteConfig.legalUpdated}</p>
      {children}
    </div>
  );
}
