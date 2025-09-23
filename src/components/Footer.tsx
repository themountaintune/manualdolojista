import React from "react";
import Link from "next/link";

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-white">
      <div className="container">
        {/* Main footer content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-12">
                  <div className="absolute w-5 h-7 bg-[#3E3232] top-0 left-0"></div>
                  <div className="absolute w-5 h-7 bg-[#F81539] top-2 left-4"></div>
                </div>
                <div className="text-sm text-[#3E3232]">
                  <span className="text-[#3E3232]">daily </span>
                  <span className="text-[#F81539]">beauty</span>
                </div>
              </div>
              <p className="text-sm text-[rgba(62,50,50,0.75)] max-w-md">
                Seu guia completo para o comércio eletrônico. Descubra as melhores práticas, tendências e estratégias para o seu negócio online.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-medium text-[#3E3232] mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Início</Link></li>
                <li><Link href="/cases" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Cases</Link></li>
                <li><Link href="/materiais" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Materiais</Link></li>
                <li><Link href="/glossario" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Glossário</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium text-[#3E3232] mb-4">Contato</h3>
              <ul className="space-y-2">
                <li><Link href="/privacidade" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Política de Privacidade</Link></li>
                <li><Link href="/disclosure" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Divulgação</Link></li>
                <li><Link href="/como-testamos" className="text-sm text-[rgba(62,50,50,0.75)] hover:text-[#F81539]">Como Testamos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <span>política de privacidade | termos e condições</span>
          </div>
          <div className="text-center sm:text-right">
            <span>todos os direitos reservados (c) 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
