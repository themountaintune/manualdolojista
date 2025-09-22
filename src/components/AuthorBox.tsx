import type { JSX } from "react";

export function AuthorBox(): JSX.Element {
  return (
    <div className="mt-6 flex items-center gap-4 p-4 rounded-xl border border-line bg-panel">
      <img
        src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
        className="w-16 h-16 rounded-full object-cover"
        alt="Autor"
      />
      <div>
        <div className="text-white font-semibold">Carlos Andrade</div>
        <div className="text-sm text-sub">
          Consultor Sênior em E‑commerce — 15+ anos de experiência
        </div>
        <a className="text-xs text-brand-teal underline" href="#">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default AuthorBox;
