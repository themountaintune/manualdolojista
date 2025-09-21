import type { JSX } from "react";

export function Hero(): JSX.Element {
	return (
		<section className="rounded-2xl overflow-hidden border shadow-card">
			<div className="relative">
				<img
					src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
					className="w-full object-cover aspect-hero"
					alt="Equipe pequena trabalhando"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/70 via-brand-green/60 to-brand-teal/60 mix-blend-multiply" />
				<div className="absolute inset-0 flex items-center">
					<div className="p-8 text-white max-w-3xl">
						<h1 className="text-4xl font-extrabold tracking-tight drop-shadow">Abra sua primeira loja online — com método</h1>
						<p className="mt-2 text-white/95">Conteúdo editorial, zero publicidade. Planilhas e checklists prontos.</p>
					<div className="mt-4 flex gap-3">
						<a className="inline-flex h-11 px-5 items-center rounded-xl bg-brand-green text-white focus:outline-none focus:ring-2 focus:ring-brand-teal" href="#guias">Ver guias</a>
						<a className="inline-flex h-11 px-5 items-center rounded-xl bg-white text-ink focus:outline-none focus:ring-2 focus:ring-brand-teal" href="#trilha">Trilha recomendada</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;


