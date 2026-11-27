"use client";
import { useEffect, useState } from "react";

export default function Countdown({ to, compact }: { to: string; compact?: boolean }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return <span className="cd">…</span>;
  const ms = Math.max(0, new Date(to).getTime() - now);
  const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  if (compact) return <span className="cd">{d}d {pad(h)}h {pad(m)}m {pad(s)}s</span>;
  return (
    <div className="cd-big">
      {[["Days", d], ["Hours", h], ["Mins", m], ["Secs", s]].map(([l, v]) => (
        <div key={l as string}><b>{pad(v as number)}</b><span>{l}</span></div>
      ))}
    </div>
  );
}
