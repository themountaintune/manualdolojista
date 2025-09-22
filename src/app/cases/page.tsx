import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cases = [
  {
    title: "Como uma loja de roupas aumentou 340% as vendas em 6 meses",
    company: "Moda & Estilo",
    description:
      "Estratégia completa de SEO + Google Ads que transformou uma loja local em referência nacional.",
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["+340% vendas", "+280% tráfego", "+150% conversão"],
    timeframe: "6 meses",
  },
  {
    title: "De R$ 0 a R$ 50k/mês: a jornada de uma loja de cosméticos",
    company: "Beleza Natural",
    description:
      "Como uma empreendedora solteira construiu um império de cosméticos naturais do zero.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["R$ 50k/mês", "15k seguidores", "95% NPS"],
    timeframe: "18 meses",
  },
  {
    title: "Como reduzir custos operacionais em 60% com automação",
    company: "TechGadgets",
    description:
      "Implementação de automação que reduziu custos e aumentou a satisfação dos clientes.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["-60% custos", "+40% eficiência", "+25% satisfação"],
    timeframe: "4 meses",
  },
  {
    title: "Estratégia de marketplace que gerou R$ 200k em 1 ano",
    company: "Casa & Decoração",
    description:
      "Como diversificar vendas entre site próprio e marketplaces para maximizar receita.",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["R$ 200k receita", "5 marketplaces", "+180% crescimento"],
    timeframe: "12 meses",
  },
  {
    title: "Como uma loja de pets conquistou 10k clientes fiéis",
    company: "PetLove Store",
    description:
      "Programa de fidelidade e atendimento personalizado que criou uma comunidade engajada.",
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["10k clientes", "85% retenção", "4.9★ avaliação"],
    timeframe: "24 meses",
  },
  {
    title: "De loja física a e-commerce: transformação digital completa",
    company: "Livraria Cultural",
    description:
      "Como uma livraria tradicional se reinventou e hoje vende mais online que na loja física.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["+200% vendas online", "3x mais produtos", "Nacional"],
    timeframe: "8 meses",
  },
];

export default function CasesPage() {
  return (
    <div>
      <Navbar />
      <main className="container py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">
            Cases de Sucesso
          </h1>
          <p className="text-lg text-sub mb-12">
            Histórias reais de empreendedores que transformaram seus negócios com estratégias
            testadas.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((caseStudy, i) => (
              <article key={i} className="card overflow-hidden">
                <img src={caseStudy.image} alt="" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-brand-teal font-semibold">
                      {caseStudy.timeframe}
                    </span>
                  </div>
                  <h3 className="text-lg text-white font-semibold mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-brand-teal font-medium mb-2">{caseStudy.company}</p>
                  <p className="text-sm text-sub mb-4">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.results.map((result, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  <button className="w-full h-10 px-4 inline-flex items-center justify-center rounded-xl bg-panel border border-line text-ink hover:bg-white/5 focus:ring-2 focus:ring-brand-teal">
                    Ler Case Completo
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="card p-8">
              <h2 className="text-2xl text-white font-bold mb-4">Tem um case para compartilhar?</h2>
              <p className="text-sub mb-6">
                Conte sua história e inspire outros empreendedores. Entre em contato conosco.
              </p>
              <button className="btn btn-primary">Compartilhar Case</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
