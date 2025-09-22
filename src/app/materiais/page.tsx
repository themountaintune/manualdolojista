import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const materials = [
	{
		title: "Planilha: Matriz de Decisão - Plataformas de E-commerce",
		description: "Compare todas as principais plataformas com critérios objetivos e escolha a melhor para seu negócio.",
		cover: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
		type: "Planilha",
		pages: "12 páginas",
		downloads: "2.3k downloads"
	},
	{
		title: "Checklist: Lançamento de E-commerce",
		description: "Lista completa de 47 tarefas essenciais para abrir sua loja online sem esquecer nada importante.",
		cover: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
		type: "Checklist",
		pages: "8 páginas",
		downloads: "1.8k downloads"
	},
	{
		title: "Template: Fluxos de CRM para E-commerce",
		description: "Automatize seu atendimento com templates prontos para WhatsApp, email e chat.",
		cover: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
		type: "Template",
		pages: "15 páginas",
		downloads: "1.2k downloads"
	}
];

export default function MateriaisPage() {
	return (
		<div>
			<Navbar />
			<main className="container py-8">
				<div className="max-w-6xl mx-auto">
					<h1 className="text-4xl text-white font-extrabold tracking-tight mb-8">Materiais Gratuitos</h1>
					<p className="text-lg text-sub mb-12">
						Baixe nossos templates, planilhas e checklists criados especialmente para empreendedores digitais.
					</p>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{materials.map((material, i) => (
							<div key={i} className="card overflow-hidden">
								<img src={material.cover} alt="" className="w-full h-48 object-cover" />
								<div className="p-6">
									<div className="flex items-center gap-2 mb-3">
										<span className="inline-flex text-xs px-2 py-1 rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/30">
											{material.type}
										</span>
									</div>
									<h3 className="text-lg text-white font-semibold mb-2">{material.title}</h3>
									<p className="text-sm text-sub mb-4">{material.description}</p>
									<div className="flex items-center justify-between text-xs text-sub mb-4">
										<span>{material.pages}</span>
										<span>{material.downloads}</span>
									</div>
									<button className="w-full h-10 px-4 inline-flex items-center justify-center rounded-xl bg-brand-teal text-black hover:opacity-90 focus:ring-2 focus:ring-brand-teal">
										Baixar Gratuitamente
									</button>
								</div>
							</div>
						))}
					</div>

					{/* CTA Section */}
					<section className="mt-16 text-center">
						<div className="card p-8">
							<h2 className="text-2xl text-white font-bold mb-4">Precisa de algo específico?</h2>
							<p className="text-sub mb-6">
								Tem uma ideia de material que gostaria de ver aqui? Entre em contato conosco.
							</p>
							<button className="btn btn-primary">
								Sugerir Material
							</button>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
