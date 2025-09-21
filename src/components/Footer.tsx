import type { JSX } from "react";
import Link from "next/link";

export function Footer(): JSX.Element {
  return (
    <footer className="mt-16 py-12 text-sm bg-zinc-50 border-t border-border text-slate">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-ink">Sobre o projeto</div>
          <p className="mt-2 text-sm">Manual editorial, sem publicidade. Conteúdo independente para lojistas.</p>
        </div>
        <div>
          <div className="font-semibold text-ink">Navegação</div>
          <nav className="mt-2 grid gap-1">
            <Link href="/" className="hover:text-ink">Início</Link>
            <Link href="/glossario" className="hover:text-ink">Glossário</Link>
            <Link href="/materiais" className="hover:text-ink">Materiais</Link>
            <Link href="/cases" className="hover:text-ink">Cases</Link>
          </nav>
        </div>
        <div>
          <div className="font-semibold text-ink">Transparência</div>
          <nav className="mt-2 grid gap-1">
            <Link href="/privacy-policy" className="hover:text-ink">Privacidade</Link>
            <Link href="/disclosure" className="hover:text-ink">Disclosure</Link>
            <Link href="/como-testamos" className="hover:text-ink">Como testamos</Link>
          </nav>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-border text-xs text-muted">
        © {new Date().getFullYear()} Manual do Lojista
      </div>
    </footer>
  );
}

export default Footer;


