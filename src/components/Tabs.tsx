"use client";

import { useState } from "react";
import type { JSX } from "react";

export type Tab = { id: string; label: string };

export function Tabs({ tabs, onChange, className }: { tabs: Tab[]; onChange?: (id: string) => void; className?: string }): JSX.Element {
  const [active, setActive] = useState(tabs[0]?.id);

  function click(id: string) {
    setActive(id);
    onChange?.(id);
  }

  return (
    <div className={className}>
      <div className="inline-flex rounded-md border border-neutral-200 bg-white p-1 text-sm">
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => click(t.id)}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                isActive ? "bg-teal text-white" : "text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;


