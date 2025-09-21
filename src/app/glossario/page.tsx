import GlossaryCard from "@/components/GlossaryCard";

const TERMS = [
  { term: "A/B Test", description: "Experimento para comparar duas versões.", href: "/glossario/ab-test" },
  { term: "CAC", description: "Custo de aquisição de clientes.", href: "/glossario/cac" },
  { term: "LTV", description: "Valor do tempo de vida do cliente.", href: "/glossario/ltv" },
];

export default function GlossarioPage() {
  const groups = TERMS.reduce<Record<string, typeof TERMS>>( (acc, item) => {
    const letter = item.term[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(item);
    return acc;
  }, {} as Record<string, typeof TERMS>);

  const letters = Array.from(new Set(TERMS.map((t) => t.term[0].toUpperCase()))).sort();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <input className="w-full rounded-xl border border-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="Buscar termos..." />
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {letters.map((l) => (
            <a key={l} href={`#${l}`} className="rounded-xl border border-zinc-200 px-2 py-1 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-brand-teal">{l}</a>
          ))}
        </nav>
      </div>

      {letters.map((l) => (
        <section key={l} id={l} className="space-y-3">
          <h2 className="text-xl font-bold">{l}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(groups[l] || []).map((t) => (
              <GlossaryCard key={t.term} term={t.term} description={t.description} href={t.href} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}


