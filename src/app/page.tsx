import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import NewsletterForm from "@/components/NewsletterForm";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  const tabs = [
    { id: "marketing", label: "Marketing" },
    { id: "ferramentas", label: "Ferramentas" },
    { id: "logistica", label: "Logística" },
    { id: "gestao", label: "Gestão" },
  ];

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <img src="/window.svg" alt="Hero" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Manual do Lojista</h1>
            <p className="mt-2 text-neutral-100">Conteúdos práticos para e-commerce e varejo.</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container">
        <Tabs tabs={tabs} />
      </section>

      {/* Mais lidos */}
      <section className="container">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mais lidos</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} title="Título do artigo" description="Resumo do artigo com 2-3 linhas." imageSrc="/globe.svg" />
          ))}
        </div>
      </section>

      {/* Todos os conteúdos */}
      <section className="container">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Todos os conteúdos</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} title={`Post ${i + 1}`} description="Um breve resumo do post." imageSrc="/window.svg" />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container">
        <NewsletterForm />
      </section>

      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
