import React from "react";

export function Hero(): React.JSX.Element {
  return (
    <section className="container py-20">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1 space-y-12">
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:opacity-70 transition-opacity">
              <svg width="20" height="7" viewBox="0 0 20 7" fill="none">
                <path d="M0 3.5L5 0V3H20V4H5V7L0 3.5Z" fill="rgba(62, 50, 50, 0.60)"/>
              </svg>
            </button>
            <button className="p-2.5 hover:opacity-70 transition-opacity">
              <svg width="20" height="7" viewBox="0 0 20 7" fill="none">
                <path d="M20 3.5L15 7V4H0V3H15V0L20 3.5Z" fill="#3E3232"/>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="section-title">
              <span className="text-sm font-medium text-[#F81539] uppercase tracking-wide">
                FEATURED
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-medium text-[#3E3232] leading-tight">
              10 Estratégias Essenciais para Aumentar suas Vendas Online
            </h1>
            <p className="text-lg text-[rgba(62,50,50,0.75)] max-w-lg leading-relaxed">
              Descubra as estratégias comprovadas que podem transformar seu negócio online. De
              otimização de conversão a marketing digital, aprenda os segredos para aumentar suas
              vendas e crescer no e-commerce.
            </p>
          </div>

          <button className="gradient-button px-8 py-3 text-base font-medium">
            Ler mais
          </button>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=450&h=550&fit=crop&crop=center" 
            alt="E-commerce business" 
            className="w-[450px] h-[550px] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
