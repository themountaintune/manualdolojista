import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const terms = [
  {
    term: "A/B Test",
    description: "Experimento para comparar duas versões de uma página ou elemento.",
    letter: "A",
  },
  {
    term: "CAC",
    description:
      "Custo de Aquisição de Cliente - quanto você gasta para conquistar um novo cliente.",
    letter: "C",
  },
  {
    term: "CRO",
    description: "Conversion Rate Optimization - otimização da taxa de conversão.",
    letter: "C",
  },
  {
    term: "CTR",
    description: "Click-Through Rate - taxa de cliques em anúncios ou links.",
    letter: "C",
  },
  { term: "LTV", description: "Lifetime Value - valor do tempo de vida do cliente.", letter: "L" },
  {
    term: "MVP",
    description: "Minimum Viable Product - produto mínimo viável para testar o mercado.",
    letter: "M",
  },
  {
    term: "Omnichannel",
    description: "Estratégia que integra todos os canais de venda e atendimento.",
    letter: "O",
  },
  {
    term: "Pix Parcelado",
    description: "Pagamento via Pix dividido em parcelas sem juros.",
    letter: "P",
  },
  { term: "ROI", description: "Return on Investment - retorno sobre investimento.", letter: "R" },
  {
    term: "SEO",
    description: "Search Engine Optimization - otimização para mecanismos de busca.",
    letter: "S",
  },
  { term: "CWV", description: "Core Web Vitals - métricas de performance do Google.", letter: "C" },
  { term: "UX", description: "User Experience - experiência do usuário.", letter: "U" },
];

const letters = Array.from(new Set(terms.map((t) => t.letter))).sort();

export default function GlossarioPage() {
  return (
    <div>
      <Navbar />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">Glossário</h1>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Buscar termos..."
              className="w-full h-12 px-4 rounded-xl border border-line bg-panel text-ink placeholder-sub focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />
          </div>

          {/* A-Z Navigation */}
          <div className="mb-8 flex flex-wrap gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-line bg-panel text-ink hover:bg-white/5 focus:ring-2 focus:ring-brand-teal"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Terms by Letter */}
          {letters.map((letter) => {
            const letterTerms = terms.filter((t) => t.letter === letter);
            return (
              <section key={letter} id={letter} className="mb-12">
                <h2 className="text-2xl text-white font-bold mb-6">{letter}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {letterTerms.map((term, i) => (
                    <div key={i} className="p-4 rounded-xl border border-line bg-panel">
                      <h3 className="text-lg text-white font-semibold mb-2">{term.term}</h3>
                      <p className="text-sm text-sub">{term.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
