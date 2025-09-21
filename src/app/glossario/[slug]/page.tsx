export function generateStaticParams() {
  const slugs = ["ab-test", "cac", "ltv"];
  return slugs.map((slug) => ({ slug }));
}

export default function TermPage({ params }: { params: { slug: string } }) {
  return (
    <div className="prose">
      <h1>{params.slug.toUpperCase()}</h1>
      <p>Definição do termo em detalhes.</p>
    </div>
  );
}


