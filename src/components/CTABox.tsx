import type { JSX } from "react";

export function CTABox({
  title,
  text,
  kind,
}: {
  title: string;
  text: string;
  kind: "download" | "checklist";
}): JSX.Element {
  const cls = kind === "download" ? "bg-brand-teal text-black" : "bg-brand-yellow text-black";
  return (
    <div className="p-5 rounded-2xl border border-line bg-panel">
      <div className="text-sm text-ink font-semibold">{title}</div>
      <p className="text-sm text-sub mt-1">{text}</p>
      <a className={`inline-flex mt-3 h-10 px-4 items-center rounded-xl ${cls}`} href="#">
        {kind === "download" ? "Baixar" : "Ver checklist"}
      </a>
    </div>
  );
}

export default CTABox;
