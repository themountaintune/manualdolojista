import MaterialCard from "@/components/MaterialCard";

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Cases de Sucesso</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <MaterialCard key={i}
            img={`https://images.pexels.com/photos/31844${60 + i}/pexels-photo-31844${60 + i}.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop`}
            title={`Case ${i + 1}`}
            desc="Resumo do case."
          />
        ))}
      </div>
    </div>
  );
}


