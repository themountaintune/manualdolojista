export type CardProps = {
	imageSrc?: string;
	title: string;
	description?: string;
	ctaHref?: string;
	ctaLabel?: string;
	meta?: string;
	className?: string;
};

export function Card({ imageSrc, title, description, ctaHref, ctaLabel = "Ler mais", meta, className }: CardProps): JSX.Element {
	return (
		<article className={`group overflow-hidden rounded-lg border border-neutral-200/70 bg-white transition-shadow hover:shadow-md ${className ?? ""}`}>
			{imageSrc ? (
				<div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
					<img src={imageSrc} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
				</div>
			) : null}
			<div className="p-5">
				{meta ? <div className="mb-2 text-xs uppercase tracking-wide text-neutral-500">{meta}</div> : null}
				<h3 className="text-lg font-bold text-neutral-900">{title}</h3>
				{description ? <p className="mt-2 text-neutral-700">{description}</p> : null}
				{ctaHref ? (
					<a href={ctaHref} className="mt-4 inline-flex items-center text-teal hover:underline">
						{ctaLabel}
					</a>
				) : null}
			</div>
		</article>
	);
}

export default Card;
