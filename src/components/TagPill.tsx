"use client";

import type { JSX } from "react";
import { useState } from "react";

export function TagPill(): JSX.Element {
	const [active, setActive] = useState("Todos");
	const tags = ["Todos", "Marketing", "Ferramentas", "Logística", "Gestão", "Vendas"];

	return (
		<div className="flex gap-2 overflow-x-auto pb-2">
			{tags.map((tag) => (
				<button
					key={tag}
					onClick={() => setActive(tag)}
					className={`whitespace-nowrap px-4 py-2 text-sm rounded-full border transition-colors ${
						active === tag
							? "border-brand-teal border-b-2 text-brand-teal"
							: "border-line text-sub hover:text-ink"
					}`}
				>
					{tag}
				</button>
			))}
		</div>
	);
}

export default TagPill;
