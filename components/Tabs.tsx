"use client";
import { useState, ReactNode } from "react";
export default function Tabs({ tabs }: { tabs: [string, ReactNode][] }) {
  const [i, setI] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs-h" role="tablist">
        {tabs.map(([t], n) => <button key={t} role="tab" aria-selected={i === n} className={i === n ? "on" : ""} onClick={() => setI(n)}>{t}</button>)}
      </div>
      <div className="tabs-b" role="tabpanel">{tabs[i][1]}</div>
    </div>
  );
}
