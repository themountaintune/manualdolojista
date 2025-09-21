import AuthorBox from "@/components/AuthorBox";
import CTABox from "@/components/CTABox";

export function generateStaticParams() {
  // minimal set of demo slugs to allow static export
  const slugs = ["exemplo-1", "exemplo-2"];
  return slugs.map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button className="mb-6 text-sm text-muted">← Voltar</button>
      <img
        src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
        className="w-full h-64 object-cover rounded-2xl border"
        alt="Hero"
      />
      <h1 className="text-3xl font-extrabold tracking-tight mt-6">Como escolher plataforma de e‑commerce em 2025</h1>
      <div className="mt-2 text-sm text-muted">19/09/2025 · 12 min · Ferramentas</div>
      <AuthorBox name="Carlos Andrade" role="Consultor Sênior em E‑commerce" linkedinUrl="#" />

      <article className="prose prose-zinc mt-8 max-w-none">
        <p>Conteúdo editorial, sem publicidade. Este é um placeholder do corpo do artigo.</p>
        <h2>Introdução</h2>
        <p>Mais parágrafos para demonstrar a tipografia e espaçamentos.</p>
      </article>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <CTABox title="Matriz de decisão (planilha)" description="Atribua pesos por critério e compare" ctaHref="#" kind="download" />
        <CTABox title="Checklist de lançamento" description="SEO, Pix, políticas, CRM" ctaHref="#" kind="checklist" />
      </div>

      <div className="mt-8 rounded-xl border border-brand-yellow/40 bg-brand-yellow/10 p-4 text-sm">
        Nota: Podemos receber comissão por links de afiliados sem custo adicional para você.
      </div>
    </div>
  );
}


