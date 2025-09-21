export function generateStaticParams() {
  const ids = ["1", "2", "3"];
  return ids.map((id) => ({ id }));
}

export default function CasePage({ params }: { params: { id: string } }) {
  return (
    <div className="prose">
      <h1>Case {params.id}</h1>
      <p>Histórico, desafios, solução e resultados.</p>
    </div>
  );
}


