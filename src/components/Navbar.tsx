import React from "react";

export function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute w-4 h-6 bg-[#F81539] top-0 left-0 rounded-sm"></div>
            <div className="absolute w-4 h-6 bg-[#3E3232] top-1 left-3 rounded-sm"></div>
          </div>
          <div className="text-lg font-medium text-[#3E3232]">
            Manual do <span className="text-[#F81539]">Lojista</span>
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
              className="text-sm font-medium text-[#3E3232] hover:text-[#F81539] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F81539] focus:ring-opacity-50 rounded-sm px-2 py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#newsletter"
            className="hidden sm:inline-flex text-sm font-medium text-[#3E3232] hover:text-[#F81539] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F81539] focus:ring-opacity-50 rounded-sm px-2 py-1"
          >
            Newsletter
          </a>
          <button className="gradient-button px-6 py-2 text-sm font-medium">
            Começar
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-[#3E3232] hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F81539]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
