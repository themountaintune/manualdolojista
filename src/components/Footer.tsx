import type { JSX } from "react";

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
            <a href="/" className="hover:text-ink">Início</a>
            <a href="/glossario" className="hover:text-ink">Glossário</a>
            <a href="/materiais" className="hover:text-ink">Materiais</a>
            <a href="/cases" className="hover:text-ink">Cases</a>
          </nav>
        </div>
        <div>
          <div className="font-semibold text-ink">Transparência</div>
          <nav className="mt-2 grid gap-1">
            <a href="/privacy-policy" className="hover:text-ink">Privacidade</a>
            <a href="/disclosure" className="hover:text-ink">Disclosure</a>
            <a href="/como-testamos" className="hover:text-ink">Como testamos</a>
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


