"use client";

import { useState } from "react";
import type { JSX } from "react";

export function NewsletterForm(): JSX.Element {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<div className="rounded-lg border border-neutral-200/70 bg-white p-6 text-center">
				<p className="text-green font-semibold">Obrigado! Verifique seu email.</p>
			</div>
		);
	}

	return (
		<form onSubmit={onSubmit} className="rounded-lg border border-neutral-200/70 bg-white p-4 sm:p-6">
			<h3 className="text-lg font-bold text-neutral-900">Receba conteúdos por email</h3>
			<p className="mt-1 text-sm text-neutral-600">Newsletter semanal. Sem spam.</p>
			<div className="mt-4 flex flex-col sm:flex-row gap-2">
				<input
					type="email"
					placeholder="seu@email.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal/50"
				/>
				<button type="submit" className="rounded-md bg-teal px-4 py-2 font-semibold text-white hover:opacity-90">
					Inscrever-se
				</button>
			</div>
		</form>
	);
}

export default NewsletterForm;
