import type { JSX } from "react";
import Image from "next/image";

export function MaterialCard({ img, title, desc }: { img: string; title: string; desc: string }): JSX.Element {
	return (
		<div className="rounded-2xl border overflow-hidden shadow-card hover:shadow-hover transition">
			<div className="relative h-40 w-full">
				<Image src={img} alt="" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
			</div>
			<div className="p-5">
				<h3 className="font-semibold">{title}</h3>
				<p className="text-sm text-muted mt-1">{desc}</p>
				<a className="inline-flex mt-3 h-10 px-4 items-center rounded-xl bg-brand-teal text-white focus:outline-none focus:ring-2 focus:ring-brand-teal" href="#">
					Baixar
				</a>
			</div>
		</div>
	);
}

export default MaterialCard;


