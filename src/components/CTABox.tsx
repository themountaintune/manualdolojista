export type CTABoxProps = {
	title: string;
	description?: string;
	ctaHref: string;
	ctaLabel: string;
	className?: string;
};

import type { JSX } from "react";

export function CTABox({ title, description, ctaHref, ctaLabel, className }: CTABoxProps): JSX.Element {
	return (
		<div className={`rounded-xl border border-neutral-200/70 bg-gradient-to-br from-yellow/10 to-green/10 p-6 ${className ?? ""}`}>
			<h3 className="text-lg font-bold text-neutral-900">{title}</h3>
			{description ? <p className="mt-2 text-neutral-700">{description}</p> : null}
			<a href={ctaHref} className="mt-4 inline-flex items-center rounded-md bg-teal px-4 py-2 font-semibold text-white hover:opacity-90">
				{ctaLabel}
			</a>
		</div>
	);
}

export default CTABox;
