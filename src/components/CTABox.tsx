export type CTABoxProps = {
	title: string;
	description?: string;
	ctaHref: string;
	ctaLabel?: string;
	kind?: "download" | "checklist";
	className?: string;
};

import type { JSX } from "react";

export function CTABox({ title, description, ctaHref, ctaLabel, kind, className }: CTABoxProps): JSX.Element {
	return (
		<div className={`p-5 rounded-2xl border bg-paper ${className ?? ""}`}>
			<div className="text-sm font-semibold text-ink">{title}</div>
			{description ? <p className="text-sm text-ink/80 mt-1">{description}</p> : null}
			<a
				href={ctaHref}
				className={`inline-flex mt-3 h-10 px-4 items-center rounded-xl ${
					kind === "download"
						? "bg-brand-teal text-white"
						: kind === "checklist"
						? "bg-brand-yellow text-ink"
						: "bg-brand-teal text-white"
				}`}
			>
				{ctaLabel ?? (kind === "checklist" ? "Ver checklist" : "Baixar")}
			</a>
		</div>
	);
}

export default CTABox;
