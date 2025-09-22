import type { JSX } from "react";

export function Hero(): JSX.Element {
	return (
		<section className="rounded-2xl overflow-hidden border border-line shadow-card">
			<div className="relative">
				<div className="h-80 w-full bg-[radial-gradient(1200px_400px_at_20%_-10%,#06B6D4,transparent),radial-gradient(1000px_400px_at_90%_120%,#16A34A,transparent)]" />
				<div className="absolute inset-0 flex items-center">
					<div className="p-8 md:p-10 max-w-3xl">
						<h1 className="text-white text-4xl font-extrabold tracking-tight">Abra sua loja online — em dark</h1>
						<p className="mt-2 text-sub">Guias independentes, checklists e planilhas para MEIs/PMEs.</p>
						<div className="mt-4 flex gap-3">
							<a className="inline-flex h-10 px-5 items-center rounded-xl bg-white text-black hover:bg-zinc-200 focus:ring-2 focus:ring-brand-teal" href="#guias">Ver guias</a>
							<a className="inline-flex h-10 px-5 items-center rounded-xl bg-panel border border-line text-ink hover:bg-white/5 focus:ring-2 focus:ring-brand-teal" href="#trilha">Trilha</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
