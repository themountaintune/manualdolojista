import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import TagPill from "@/components/TagPill";
import CTABox from "@/components/CTABox";
import Footer from "@/components/Footer";

const featuredPosts = [
	{
		img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "MARKETING",
		title: "Como escolher a melhor plataforma de e-commerce em 2025",
		excerpt: "Análise completa das principais plataformas: Shopify, WooCommerce, Magento e outras.",
		meta: "15 min de leitura • 20/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "FERRAMENTAS",
		title: "Checklist completo para abrir sua loja online",
		excerpt: "Lista detalhada de tudo que você precisa antes de lançar seu e-commerce.",
		meta: "8 min de leitura • 18/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "LOGÍSTICA",
		title: "Gestão de estoque: estratégias para pequenos negócios",
		excerpt: "Como evitar rupturas e otimizar seu capital de giro com estoque inteligente.",
		meta: "12 min de leitura • 16/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "VENDAS",
		title: "Técnicas de conversão que funcionam em 2025",
		excerpt: "Aumente suas vendas com estratégias testadas e comprovadas.",
		meta: "10 min de leitura • 14/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "GESTÃO",
		title: "Como calcular o ROI do seu e-commerce",
		excerpt: "Métricas essenciais para acompanhar a performance do seu negócio online.",
		meta: "7 min de leitura • 12/01/2025"
	},
	{
		img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
		tag: "MARKETING",
		title: "SEO para e-commerce: guia completo 2025",
		excerpt: "Posicione sua loja no topo do Google com estratégias atualizadas.",
		meta: "18 min de leitura • 10/01/2025"
	}
];

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className="container py-8 space-y-8">
				<Hero />
				
				<section className="space-y-4">
					<h2 className="text-2xl text-white font-bold">Posts em destaque</h2>
					<TagPill />
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{featuredPosts.map((post, i) => (
							<PostCard key={i} {...post} />
						))}
					</div>
				</section>

				<section className="grid gap-6 md:grid-cols-2">
					<CTABox 
						title="Matriz de Decisão: Plataformas de E-commerce" 
						text="Planilha interativa para escolher a melhor plataforma para seu negócio." 
						kind="download" 
					/>
					<CTABox 
						title="Checklist: Lançamento de E-commerce" 
						text="Lista completa de tarefas para abrir sua loja online sem esquecer nada." 
						kind="checklist" 
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}
