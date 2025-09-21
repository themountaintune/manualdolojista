import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

type Mini = { title: string; tag: string; img: string };

const topRight: Mini[] = [
	{ title: "Novo Smartphone Projetor 3D chega ao mercado, transformando a forma como vemos nossas telas!", tag: "HOLOGRAMAS", img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
	{ title: "Tecnologia 6G chega às metrópoles brasileiras, prometendo revolucionar a forma como vivemos e nos comunicamos.", tag: "INTERNET", img: "https://images.pexels.com/photos/5867441/pexels-photo-5867441.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
];

const midGrid: Mini[] = [
	{ title: "Protótipo de veículo voador é apresentado", tag: "VEÍCULOS", img: "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
	{ title: "Plataforma de videoconferência apresenta nova função de hologramas", tag: "HOLOGRAMAS", img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
	{ title: "Nova geração de consoles de videogame é lançada", tag: "REALIDADE VIRTUAL", img: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
	{ title: "Projeto busca oferecer internet de alta velocidade por satélites", tag: "INTERNET", img: "https://images.pexels.com/photos/5860563/pexels-photo-5860563.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop" },
];

function Chip({ children }: { children: string }): JSX.Element {
	return (
		<span className="inline-flex items-center rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-wide bg-white/10 text-white/90 border border-white/15">
			{children}
		</span>
	);
}

function MiniCard({ item }: { item: Mini }): JSX.Element {
	return (
		<Link href="#" className="group grid grid-cols-[120px_1fr] gap-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
			<div className="relative h-24 w-full overflow-hidden rounded-l-lg">
				<Image src={item.img} alt="" fill sizes="(max-width:768px) 40vw, 200px" className="object-cover" />
			</div>
			<div className="pr-3 py-3">
				<Chip>{item.tag}</Chip>
				<p className="mt-1 text-sm text-white/90 line-clamp-2 group-hover:underline">{item.title}</p>
			</div>
		</Link>
	);
}

export default function TechNewsPage(): JSX.Element {
	return (
		<div className="min-h-screen bg-[#0B1220] text-white">
			<header className="sticky top-0 z-30 bg-[#0B1220]/80 backdrop-blur border-b border-white/10">
				<div className="mx-auto max-w-[1200px] h-14 px-4 md:px-6 flex items-center gap-4">
					<button className="text-sm">☰ Menu</button>
					<h1 className="ml-2 text-sm font-bold tracking-widest">TECH NEWS</h1>
					<nav className="ml-6 hidden lg:flex items-center gap-5 text-xs text-white/70">
						<a href="#" className="hover:text-white">Inteligência Artificial</a>
						<a href="#" className="hover:text-white">Blockchain</a>
						<a href="#" className="hover:text-white">Hologramas</a>
						<a href="#" className="hover:text-white">Internet</a>
						<a href="#" className="hover:text-white">Vestíveis</a>
						<a href="#" className="hover:text-white">Realidade Aumentada</a>
						<a href="#" className="hover:text-white">Realidade Virtual</a>
					</nav>
					<div className="ml-auto">
						<input className="h-9 w-40 rounded-lg border border-white/10 bg-white/5 px-3 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="Buscar" />
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-[1200px] px-4 md:px-6 py-8 space-y-10">
				{/* Hero Grid */}
				<section className="grid gap-4 md:grid-cols-3">
					<article className="md:col-span-2 relative overflow-hidden rounded-2xl border border-white/10">
						<div className="relative aspect-[16/9]">
							<Image src="https://images.pexels.com/photos/8068355/pexels-photo-8068355.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop" alt="Robô doméstico" fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" />
						</div>
						<div className="p-4 md:p-5">
							<Chip>ROBÓTICA</Chip>
							<h2 className="mt-2 text-xl md:text-2xl font-extrabold leading-snug">Robôs domésticos começam a ser adotados para tarefas diárias, prometendo mais conforto e eficiência nas residências.</h2>
						</div>
					</article>
					<div className="grid gap-4">
						{topRight.map((it) => (
							<MiniCard key={it.title} item={it} />
						))}
					</div>
				</section>

				{/* Mais lidas */}
				<section className="space-y-3">
					<h3 className="text-sm font-semibold text-white/70">Mais lidas da semana</h3>
					<div className="grid gap-4 md:grid-cols-4">
						{midGrid.map((it) => (
							<Link key={it.title} href="#" className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
								<div className="relative aspect-[4/3]">
									<Image src={it.img} alt="" fill sizes="(max-width:768px) 50vw, 280px" className="object-cover" />
								</div>
								<div className="p-3">
									<Chip>{it.tag}</Chip>
									<h4 className="mt-2 text-sm font-semibold line-clamp-2 group-hover:underline">{it.title}</h4>
								</div>
							</Link>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}


