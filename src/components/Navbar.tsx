import type { JSX } from "react";

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 bg-panel border-b border-line shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute w-4 h-6 bg-accent top-0 left-0 rounded-sm"></div>
            <div className="absolute w-4 h-6 bg-ink top-1 left-3 rounded-sm"></div>
          </div>
          <div className="text-lg font-semibold text-ink">
            Manual do <span className="text-accent">Lojista</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Artigos", href: "/artigo" },
            { name: "Cases", href: "/cases" },
            { name: "Materiais", href: "/materiais" },
            { name: "Como Testamos", href: "/como-testamos" },
            { name: "Glossário", href: "/glossario" }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-sm px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#newsletter"
            className="hidden sm:inline-flex text-sm font-medium text-ink hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded-sm px-2 py-1"
          >
            Newsletter
          </a>
          <button className="btn btn-primary text-sm">
            Começar
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-ink hover:bg-ink/5 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
