import React from "react";

export function TrendingTopics(): React.JSX.Element {
  const articles = [
    {
      title: "Tendências de E-commerce para 2024",
      excerpt:
        "Descubra as principais tendências que estão moldando o futuro do comércio eletrônico. De inteligência artificial a experiências personalizadas, explore o que está por vir.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=389&h=240&fit=crop&crop=center",
      author: "João Silva",
      readTime: "5min leitura",
    },
    {
      title: "Como Otimizar sua Loja Online para Conversões",
      excerpt:
        "Aprenda estratégias comprovadas para aumentar a taxa de conversão da sua loja online. De UX design a copywriting, descubra os segredos para vender mais.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=389&h=240&fit=crop&crop=center",
      author: "Maria Santos",
      readTime: "7min leitura",
    },
    {
      title: "Cases de Sucesso: Lojistas que Faturaram R$ 1M+",
      excerpt:
        "Conheça histórias inspiradoras de empreendedores que construíram impérios no e-commerce. Aprenda com seus erros e acertos para acelerar seu crescimento.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=389&h=240&fit=crop&crop=center",
      author: "Pedro Costa",
      readTime: "6min leitura",
    },
    {
      title: "Marketing Digital: Guia Completo para Iniciantes",
      excerpt:
        "Domine as principais estratégias de marketing digital para e-commerce. De SEO a redes sociais, aprenda a atrair e converter clientes online.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=389&h=240&fit=crop&crop=center",
      author: "Ana Oliveira",
      readTime: "8min leitura",
    },
    {
      title: "Entrevista Exclusiva: CEO da Maior Loja Online do Brasil",
      excerpt:
        "Ganhe insights valiosos com um dos maiores nomes do e-commerce brasileiro. Descubra estratégias, desafios e oportunidades no mercado digital.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=389&h=240&fit=crop&crop=center",
      author: "Carlos Mendes",
      readTime: "10min leitura",
    },
    {
      title: "Passo a Passo: Como Criar uma Loja Online do Zero",
      excerpt:
        "Aprenda a criar sua primeira loja online em 7 dias. Do planejamento à primeira venda, siga este guia completo para começar no e-commerce.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=389&h=240&fit=crop&crop=center",
      author: "Lucia Ferreira",
      readTime: "12min leitura",
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex items-end justify-between mb-10">
        <div className="space-y-6">
          <div className="section-title">
            <span className="text-sm font-medium text-[#F81539] uppercase tracking-wide">
              Tópicos em Destaque
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium text-[#3E3232] leading-tight max-w-lg">
            Últimas Tendências do E-commerce
          </h2>
        </div>
        <button className="border border-[#3E3232] text-[#3E3232] hover:bg-[#3E3232] hover:text-white px-6 py-2 rounded-md transition-colors duration-200">
          Ver Mais
        </button>
      </div>

      {/* Articles Grid */}
      <div className="space-y-8">
        {/* First row */}
        <div className="flex gap-4">
          {articles.slice(0, 3).map((article, index) => (
            <article key={index} className="w-[405px] bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 rounded-xl object-cover"
              />
              <div className="p-2 space-y-4">
                <h3 className="text-2xl font-normal text-[#3E3232] leading-tight">{article.title}</h3>
                <p className="text-base font-light text-[rgba(62,50,50,0.75)] leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#3E3232]">{article.author}</span>
                    <span className="text-sm text-[#3E3232]">{article.readTime}</span>
                  </div>
                  <div className="w-5 h-2 bg-[#F81539] rounded-full"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Second row */}
        <div className="flex gap-4">
          {articles.slice(3, 6).map((article, index) => (
            <article key={index + 3} className="w-[405px] bg-white rounded-2xl p-4 shadow-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 rounded-xl object-cover"
              />
              <div className="p-2 space-y-4">
                <h3 className="text-2xl font-normal text-[#3E3232] leading-tight">{article.title}</h3>
                <p className="text-base font-light text-[rgba(62,50,50,0.75)] leading-relaxed tracking-wide">
                  {article.excerpt}
                </p>
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#3E3232]">{article.author}</span>
                    <span className="text-sm text-[#3E3232]">{article.readTime}</span>
                  </div>
                  <div className="w-5 h-2 bg-[#F81539] rounded-full"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingTopics;
