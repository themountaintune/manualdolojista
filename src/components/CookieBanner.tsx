"use client";

import { useEffect, useState } from "react";
import type { JSX } from "react";

export function CookieBanner(): JSX.Element | null {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const consent = typeof window !== "undefined" ? localStorage.getItem("cookie_consent") : null;
		if (!consent) setVisible(true);
	}, []);

	if (!visible) return null;

	function acceptAll(): void {
		localStorage.setItem("cookie_consent", "accepted");
		setVisible(false);
	}

	function rejectAll(): void {
		localStorage.setItem("cookie_consent", "rejected");
		setVisible(false);
	}

	return (
		<div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200/60 bg-white/95 backdrop-blur">
			<div className="container py-4 flex flex-col md:flex-row items-center gap-4">
				<p className="text-sm text-neutral-700">
					Usamos cookies para melhorar sua experiência. Consulte nossa {" "}
					<a href="/privacy-policy" className="underline text-teal">Política de Privacidade</a>.
				</p>
				<div className="ml-auto flex items-center gap-2">
					<button onClick={rejectAll} className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50">
						Rejeitar
					</button>
					<button onClick={acceptAll} className="rounded-md bg-teal px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90">
						Aceitar
					</button>
				</div>
			</div>
		</div>
	);
}

export default CookieBanner;
