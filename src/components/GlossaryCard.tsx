export type GlossaryCardProps = {
	term: string;
	description: string;
	href: string;
	className?: string;
};

export function GlossaryCard({ term, description, href, className }: GlossaryCardProps): JSX.Element {
	return (
		<a href={href} className={`block rounded-lg border border-neutral-200/70 bg-white p-4 hover:shadow ${className ?? ""}`}>
			<h3 className="text-base font-bold text-neutral-900">{term}</h3>
			<p className="mt-1 line-clamp-2 text-sm text-neutral-700">{description}</p>
		</a>
	);
}

export default GlossaryCard;
