"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { JSX } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/glossario", label: "Glossário" },
  { href: "/cases", label: "Cases" },
  { href: "/materiais", label: "Materiais" },
  { href: "/como-testamos", label: "Como testamos" },
];

export function Navbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-neutral-900">
          Manual do Lojista
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-teal ${
                  isActive ? "text-teal font-semibold" : "text-neutral-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


