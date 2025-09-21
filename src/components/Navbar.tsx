"use client";
import Link from "next/link";
import type { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-paper/80 backdrop-blur">
      <div className="container h-14 flex items-center gap-6">
        <button className="text-sm text-muted">☰ Menu</button>
        <Link href="/" className="text-sm font-bold tracking-widest">AI BLOG</Link>
        <nav className="ml-6 hidden md:flex items-center gap-5 text-xs text-muted">
          <Link href="#" className="hover:text-ink">IA</Link>
          <Link href="#" className="hover:text-ink">Blockchain</Link>
          <Link href="#" className="hover:text-ink">Hologramas</Link>
          <Link href="#" className="hover:text-ink">Internet</Link>
        </nav>
        <div className="ml-auto">
          <input className="h-9 w-44 rounded-lg border border-border bg-white/5 px-3 text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Buscar" />
        </div>
      </div>
    </header>
  );
}


