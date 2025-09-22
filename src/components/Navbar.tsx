import type { JSX } from "react";

export function Navbar(): JSX.Element {
	return (
		<header className="sticky top-0 z-30 bg-black/30 backdrop-blur border-b border-line">
			<div className="container h-16 flex items-center gap-6">
				<a href="/" className="text-white font-extrabold tracking-tight">Manual do Lojista</a>
				<nav className="ml-auto flex items-center gap-5 text-sm text-sub">
					{["Início", "Glossário", "Materiais", "Cases"].map((t, i) => (
						<a key={i} href={t === "Início" ? "/" : `/${t.toLowerCase()}`} className="hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-brand-teal">
							{t}
						</a>
					))}
					<a href="#newsletter" className="h-9 px-4 inline-flex items-center rounded-xl bg-panel border border-line text-ink hover:bg-white/5 focus:ring-2 focus:ring-brand-teal">Assinar</a>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
