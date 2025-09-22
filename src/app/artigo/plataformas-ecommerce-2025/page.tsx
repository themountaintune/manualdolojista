import Navbar from "@/components/Navbar";
import AuthorBox from "@/components/AuthorBox";
import PostCard from "@/components/PostCard";
import Footer from "@/components/Footer";

const relatedPosts = [
	{
		img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "FERRAMENTAS",
		title: "Checklist completo para abrir sua loja online",
		excerpt: "Lista detalhada de tudo que você precisa antes de lançar seu e-commerce.",
		meta: "8 min de leitura • 18/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "VENDAS",
		title: "Técnicas de conversão que funcionam em 2025",
		excerpt: "Aumente suas vendas com estratégias testadas e comprovadas.",
		meta: "10 min de leitura • 14/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "MARKETING",
		title: "SEO para e-commerce: guia completo 2025",
		excerpt: "Posicione sua loja no topo do Google com estratégias atualizadas.",
		meta: "18 min de leitura • 10/01/2025"
	}
];

export default function ArtigoPage() {
	return (
		<div>
			<Navbar />
			<main className="container py-8">
				<article className="max-w-4xl mx-auto">
					{/* Hero Image */}
					<div className="mb-8">
						<img 
							src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
							alt="Plataformas de e-commerce" 
							className="w-full h-80 object-cover rounded-2xl"
						/>
					</div>

					{/* Meta */}
					<div className="mb-6">
						<span className="inline-flex text-xs px-2 py-0.5 rounded-full bg-white/10 text-ink border border-line">MARKETING</span>
						<div className="mt-2 text-sm text-sub">15 min de leitura • 20/01/2025</div>
					</div>

					{/* Title */}
					<h1 className="text-4xl text-white font-extrabold tracking-tight mb-6">
						Como escolher a melhor plataforma de e-commerce em 2025
					</h1>

					<AuthorBox />

					{/* Article Body */}
					<div className="prose prose-invert max-w-none mt-8">
						<p className="text-lg text-sub mb-6">
							Escolher a plataforma certa é fundamental para o sucesso do seu e-commerce. 
							Com tantas opções disponíveis, é fácil se perder. Neste guia, analisamos as 
							principais plataformas do mercado brasileiro em 2025.
						</p>

						<h2>Principais plataformas analisadas</h2>
						<p>
							Para esta análise, testamos as seguintes plataformas durante 30 dias cada:
						</p>
						<ul>
							<li>Shopify</li>
							<li>WooCommerce</li>
							<li>Magento</li>
							<li>Nuvemshop</li>
							<li>Loja Integrada</li>
						</ul>

						<h2>Critérios de avaliação</h2>
						<p>
							Avaliamos cada plataforma com base nos seguintes critérios:
						</p>
						<ol>
							<li><strong>Facilidade de uso:</strong> Interface intuitiva e curva de aprendizado</li>
							<li><strong>Custos:</strong> Taxas mensais, transacionais e de setup</li>
							<li><strong>Performance:</strong> Velocidade de carregamento e SEO</li>
							<li><strong>Integrações:</strong> Apps, plugins e APIs disponíveis</li>
							<li><strong>Suporte:</strong> Qualidade do atendimento ao cliente</li>
						</ol>

						<h2>Resultados da análise</h2>
						<p>
							Após 150 dias de testes, chegamos aos seguintes resultados:
						</p>

						<table>
							<thead>
								<tr>
									<th>Plataforma</th>
									<th>Facilidade</th>
									<th>Custo Mensal</th>
									<th>Performance</th>
									<th>Nota Geral</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Shopify</td>
									<td>9/10</td>
									<td>R$ 29</td>
									<td>8/10</td>
									<td>8.5/10</td>
								</tr>
								<tr>
									<td>WooCommerce</td>
									<td>6/10</td>
									<td>R$ 0</td>
									<td>7/10</td>
									<td>7.0/10</td>
								</tr>
								<tr>
									<td>Nuvemshop</td>
									<td>8/10</td>
									<td>R$ 19</td>
									<td>8/10</td>
									<td>8.0/10</td>
								</tr>
							</tbody>
						</table>

						<h2>Nossa recomendação</h2>
						<p>
							Para a maioria dos pequenos e médios negócios brasileiros, recomendamos o 
							<strong>Shopify</strong> pela facilidade de uso e ecossistema robusto. 
							Para quem tem orçamento limitado, o <strong>WooCommerce</strong> é uma 
							excelente opção gratuita.
						</p>

						<h2>Próximos passos</h2>
						<p>
							Depois de escolher sua plataforma, baixe nossa planilha de comparação 
							detalhada e siga nosso checklist de implementação.
						</p>
					</div>

					{/* Disclosure */}
					<div className="mt-8 p-4 rounded-xl border border-brand-yellow/20 bg-brand-yellow/5">
						<p className="text-sm text-brand-yellow">
							<strong>Disclosure:</strong> Alguns links neste artigo podem ser de afiliados. 
							Isso não afeta nossa análise independente.
						</p>
					</div>

					{/* Related Posts */}
					<section className="mt-12">
						<h3 className="text-2xl text-white font-bold mb-6">Artigos relacionados</h3>
						<div className="grid gap-6 md:grid-cols-3">
							{relatedPosts.map((post, i) => (
								<PostCard key={i} {...post} />
							))}
						</div>
					</section>
				</article>
			</main>
			<Footer />
		</div>
	);
}
