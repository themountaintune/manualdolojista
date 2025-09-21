"use client";

import Link from "next/link";
import type { JSX } from "react";

const navLinks = [
	{ href: "/", label: "Início" },
	{ href: "/glossario/", label: "Glossário" },
	{ href: "/materiais/", label: "Materiais" },
	{ href: "/cases/", label: "Cases" },
];

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
			<div className="max-w-[1200px] mx-auto px-4 h-14 flex items-center gap-6">
				<Link href="/" className="font-extrabold tracking-tight">Manual do Lojista</Link>
				<nav className="ml-auto flex items-center gap-4 text-sm text-ink/80">
					{navLinks.map((link) => (
						<Link key={link.href} href={link.href} className="hover:text-ink">
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
  );
}

export default Navbar;


