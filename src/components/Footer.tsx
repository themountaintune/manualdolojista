import type { JSX } from "react";

export default function Footer(): JSX.Element {
	return (
		<footer className="mt-12 border-t border-border bg-[#0C1424] text-muted">
			<div className="container py-8 grid gap-6 md:grid-cols-3">
				<div>
					<p className="text-sm font-extrabold tracking-[0.2em] text-ink">AI BLOG</p>
					<p className="mt-2 text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
				</div>
				<nav className="text-sm grid grid-cols-2 gap-2">
					<a href="#" className="hover:text-ink">Sobre</a>
					<a href="#" className="hover:text-ink">Contato</a>
					<a href="/privacy-policy" className="hover:text-ink">Privacidade</a>
					<a href="/disclosure" className="hover:text-ink">Disclosure</a>
				</nav>
				<div className="flex items-center gap-2">
					<a className="btn btn-ghost h-9" href="#">Twitter</a>
					<a className="btn btn-ghost h-9" href="#">LinkedIn</a>
				</div>
			</div>
		</footer>
	);
}


