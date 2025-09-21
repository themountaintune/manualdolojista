import CTABox from "@/components/CTABox";
import Card from "@/components/Card";

export default function MateriaisPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Materiais</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} title={`eBook ${i + 1}`} description="Descrição do material." imageSrc="/file.svg" ctaHref="#" ctaLabel="Baixar" />
        ))}
      </div>
      <CTABox title="Precisa de um template específico?" description="Conte pra gente o que você quer baixar." ctaHref="#" ctaLabel="Enviar pedido" />
    </div>
  );
}


