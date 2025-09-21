import CTABox from "@/components/CTABox";
import MaterialCard from "@/components/MaterialCard";

export default function MateriaisPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Materiais</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <MaterialCard key={i}
            img={`https://images.pexels.com/photos/31844${50 + i}/pexels-photo-31844${50 + i}.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop`}
            title={`eBook ${i + 1}`}
            desc="Descrição do material."
          />
        ))}
      </div>
      <CTABox title="Precisa de um template específico?" description="Conte pra gente o que você quer baixar." ctaHref="#" ctaLabel="Enviar pedido" />
    </div>
  );
}


