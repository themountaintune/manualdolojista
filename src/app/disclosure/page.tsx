import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DisclosurePage() {
  return (
    <div>
      <Navbar />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">Disclosure</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-sub mb-6">
              Transparência é fundamental para nós. Esta página explica como monetizamos nosso
              conteúdo.
            </p>

            <h2>Links de Afiliados</h2>
            <p>
              Alguns links em nosso site são links de afiliados. Isso significa que podemos receber
              uma pequena comissão se você fizer uma compra através desses links, sem custo
              adicional para você.
            </p>

            <h2>Nossa Independência Editorial</h2>
            <p>É importante esclarecer que:</p>
            <ul>
              <li>Nossas análises e recomendações são sempre baseadas em testes reais</li>
              <li>Não aceitamos pagamentos para alterar nossas opiniões</li>
              <li>Os links de afiliados não influenciam nossa metodologia de teste</li>
              <li>Priorizamos sempre o que é melhor para nossos leitores</li>
            </ul>

            <h2>Como Testamos</h2>
            <p>Nossa metodologia de teste inclui:</p>
            <ul>
              <li>Uso real das ferramentas por pelo menos 30 dias</li>
              <li>Testes em cenários reais de negócio</li>
              <li>Análise de custo-benefício</li>
              <li>Comparação com alternativas do mercado</li>
            </ul>

            <h2>Parcerias Comerciais</h2>
            <p>
              Quando temos parcerias comerciais, sempre deixamos claro no conteúdo. Nosso
              compromisso é manter a transparência total com nossos leitores.
            </p>

            <h2>Conteúdo Patrocinado</h2>
            <p>
              Qualquer conteúdo patrocinado será claramente identificado como tal. Mesmo em conteúdo
              patrocinado, mantemos nossos padrões de qualidade e honestidade.
            </p>

            <h2>Suporte ao Manual do Lojista</h2>
            <p>Ao usar nossos links de afiliados, você nos ajuda a:</p>
            <ul>
              <li>Manter o site gratuito para todos</li>
              <li>Investir em mais testes e análises</li>
              <li>Criar conteúdo de qualidade</li>
              <li>Melhorar constantemente nossos serviços</li>
            </ul>

            <h2>Dúvidas?</h2>
            <p>
              Se você tiver dúvidas sobre nossa política de disclosure ou quiser mais informações
              sobre como testamos produtos e serviços, entre em contato conosco.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
