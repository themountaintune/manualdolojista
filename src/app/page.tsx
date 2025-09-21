import CookieBanner from "@/components/CookieBanner";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 space-y-10">
      <Hero />

      <section>
        <h2 className="text-xl font-semibold mb-3">Mais lidos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard img="https://images.pexels.com/photos/3184630/pexels-photo-3184630.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" cat="Ferramentas" title="Plataformas em 2025" excerpt="Matriz neutra de decisão" meta="19/09/2025 · 8 min" />
          <ArticleCard img="https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" cat="Marketing" title="Primeira campanha do zero" excerpt="Guia rápido com exemplos" meta="18/09/2025 · 6 min" />
          <ArticleCard img="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" cat="Gestão" title="Fluxo de caixa simples" excerpt="Planilha pronta para baixar" meta="17/09/2025 · 4 min" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Explore por categoria</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Marketing" },
            { label: "Ferramentas" },
            { label: "Logística" },
            { label: "Gestão" },
          ].map((b) => (
            <button key={b.label} className="h-9 px-4 rounded-xl border hover:shadow-hover focus:outline-none focus:ring-2 focus:ring-brand-teal">
              {b.label}
            </button>
          ))}
        </div>
      </section>

      <section className="p-5 rounded-2xl border">
        <div className="text-sm font-medium">Assine a newsletter</div>
        <div className="mt-3 flex gap-2">
          <input className="h-10 px-3 rounded-xl border border-border w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="seu@e-mail.com" />
          <button className="h-10 px-4 rounded-xl bg-brand-teal text-white focus:outline-none focus:ring-2 focus:ring-brand-teal">Quero receber</button>
        </div>
      </section>

      <CookieBanner />
    </div>
  );
}
