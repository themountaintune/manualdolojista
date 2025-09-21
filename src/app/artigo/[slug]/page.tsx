import AuthorBox from "@/components/AuthorBox";
import Card from "@/components/Card";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <img src="/window.svg" alt="Hero" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-6">
            <p className="text-sm text-neutral-200">Marketing • 5 min de leitura • 20/09/2025</p>
            <h1 className="mt-1 text-3xl md:text-5xl font-bold text-white">Título do artigo</h1>
          </div>
        </div>
      </section>

      <AuthorBox name="Ana Silva" role="Editora-chefe" linkedinUrl="#" />

      {/* Body */}
      <article className="prose">
        <p>
          Conteúdo rico estilizado pelo plugin de tipografia do Tailwind. Este é um placeholder para o corpo do artigo.
        </p>
        <h2>Subtítulo</h2>
        <p>Mais parágrafos para demonstrar estilo.</p>
      </article>

      {/* Related */}
      <section>
        <h3 className="mb-4 text-xl font-bold">Artigos relacionados</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} title="Outro artigo" description="Resumo do artigo." imageSrc="/globe.svg" />
          ))}
        </div>
      </section>

      {/* Disclosure box */}
      <div className="rounded-lg border border-yellow/40 bg-yellow/10 p-4 text-sm">
        Nota: Podemos receber comissão por links de afiliados sem custo adicional para você.
      </div>
    </div>
  );
}


