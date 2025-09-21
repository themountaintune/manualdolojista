export type ArticleCardProps = {
	img: string;
	cat: string;
	title: string;
	excerpt: string;
	meta: string;
	href?: string;
	className?: string;
};

import type { JSX } from "react";

export function ArticleCard({ img, cat, title, excerpt, meta, href = "#", className }: ArticleCardProps): JSX.Element {
	return (
		<a className={`group block rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-hover transition-shadow bg-paper text-ink focus:outline-none focus:ring-2 focus:ring-brand-teal ${className ?? ""}`} href={href}>
			<div className="aspect-card w-full overflow-hidden bg-zinc-50">
				<img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
			</div>
			<div className="p-5">
				<span className="inline-flex text-xs px-2 py-0.5 rounded-full bg-brand-yellow text-ink font-medium">{cat}</span>
				<h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
				<p className="mt-1 text-sm text-muted">{excerpt}</p>
				<div className="mt-3 text-xs text-muted">{meta}</div>
			</div>
		</a>
	);
}

export default ArticleCard;


