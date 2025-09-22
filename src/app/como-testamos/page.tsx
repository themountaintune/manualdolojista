import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComoTestamosPage() {
	return (
		<div>
			<Navbar />
			<main className="container py-8">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">Como Testamos</h1>
					
					<div className="prose prose-invert max-w-none">
						<p className="text-lg text-sub mb-6">
							Nossa metodologia de teste é rigorosa e transparente. Saiba como chegamos às nossas conclusões.
						</p>

						<h2>Nossa Filosofia</h2>
						<p>
							Acreditamos que a melhor forma de avaliar uma ferramenta ou serviço é usá-la 
							em cenários reais de negócio. Por isso, testamos tudo que recomendamos.
						</p>

						<h2>Metodologia de Teste</h2>
						<h3>1. Período de Teste</h3>
						<p>
							Testamos cada ferramenta por pelo menos 30 dias, mas muitas vezes estendemos 
							para 60 ou 90 dias para ter uma visão mais completa.
						</p>

						<h3>2. Cenários Reais</h3>
						<p>
							Não fazemos testes superficiais. Usamos as ferramentas em situações reais:
						</p>
						<ul>
							<li>Configuração completa de lojas</li>
							<li>Processamento de pedidos reais</li>
							<li>Teste de integrações</li>
							<li>Análise de performance</li>
							<li>Experiência do cliente final</li>
						</ul>

						<h3>3. Critérios de Avaliação</h3>
						<p>
							Avaliamos cada ferramenta com base em:
						</p>
						<ul>
							<li><strong>Facilidade de uso:</strong> Interface intuitiva e curva de aprendizado</li>
							<li><strong>Performance:</strong> Velocidade, estabilidade e confiabilidade</li>
							<li><strong>Custo-benefício:</strong> Valor entregue pelo preço cobrado</li>
							<li><strong>Suporte:</strong> Qualidade e velocidade do atendimento</li>
							<li><strong>Integrações:</strong> Compatibilidade com outras ferramentas</li>
							<li><strong>Escalabilidade:</strong> Crescimento junto com o negócio</li>
						</ul>

						<h2>Nossa Equipe de Teste</h2>
						<p>
							Nossa equipe é composta por:
						</p>
						<ul>
							<li>Especialistas em e-commerce com 10+ anos de experiência</li>
							<li>Desenvolvedores que testam aspectos técnicos</li>
							<li>Designers que avaliam UX/UI</li>
							<li>Analistas que medem performance e métricas</li>
						</ul>

						<h2>Transparência Total</h2>
						<p>
							Para cada teste, documentamos:
						</p>
						<ul>
							<li>Data de início e fim do teste</li>
							<li>Versão da ferramenta testada</li>
							<li>Configurações utilizadas</li>
							<li>Problemas encontrados</li>
							<li>Pontos positivos e negativos</li>
							<li>Comparação com alternativas</li>
						</ul>

						<h2>Atualizações Contínuas</h2>
						<p>
							O mundo do e-commerce muda rapidamente. Por isso:
						</p>
						<ul>
							<li>Retestamos ferramentas periodicamente</li>
							<li>Atualizamos nossas análises quando necessário</li>
							<li>Monitoramos mudanças de preços e funcionalidades</li>
							<li>Mantemos nossos leitores informados sobre novidades</li>
						</ul>

						<h2>Limitações</h2>
						<p>
							É importante entender que:
						</p>
						<ul>
							<li>Nossos testes refletem nossa experiência específica</li>
							<li>Resultados podem variar dependendo do tipo de negócio</li>
							<li>Ferramentas evoluem constantemente</li>
							<li>Recomendamos sempre fazer seu próprio teste</li>
						</ul>

						<h2>Feedback dos Leitores</h2>
						<p>
							Valorizamos muito o feedback de nossos leitores. Se você tem experiência 
							diferente com alguma ferramenta que testamos, entre em contato conosco.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
