"use client";
import Link from "next/link";
import type { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-[#0C1424]/80 backdrop-blur">
      <div className="container h-16 flex items-center gap-6">
        <button className="text-sm text-muted">☰ Menu</button>
        <Link href="/" className="text-sm font-extrabold tracking-[0.2em]">AI BLOG</Link>
        <nav className="ml-6 hidden md:flex items-center gap-2">
          {['IA','Blockchain','Hologramas','Internet','Vestíveis','AR','VR'].map((x) => (
            <Link key={x} href="#" className="px-3 h-8 inline-flex items-center rounded-full text-[12px] text-muted hover:text-ink hover:bg-white/8 border border-transparent hover:border-white/10">
              {x}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <div className="relative">
            <input className="h-9 w-48 rounded-lg border border-border bg-white/5 pl-8 pr-3 text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Buscar" />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted">🔍</span>
          </div>
        </div>
      </div>
    </header>
  );
}


