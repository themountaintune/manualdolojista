import Card from "@/components/Card";

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Cases de Sucesso</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} title={`Case ${i + 1}`} description="Resumo do case." imageSrc="/window.svg" ctaHref={`/cases/${i + 1}`} />
        ))}
      </div>
    </div>
  );
}


