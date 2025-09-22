import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: { default: "Manual do Lojista", template: "%s | Manual do Lojista" },
	description: "Guias independentes, checklists e planilhas para MEIs/PMEs. Aprenda a abrir e gerenciar sua loja online com especialistas.",
	keywords: ["e-commerce", "loja online", "MEI", "PME", "marketing digital", "vendas online"],
	authors: [{ name: "Manual do Lojista" }],
	creator: "Manual do Lojista",
	publisher: "Manual do Lojista",
	metadataBase: new URL("https://manualdolojista.vercel.app"),
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://manualdolojista.vercel.app",
		siteName: "Manual do Lojista",
		title: "Manual do Lojista",
		description: "Guias independentes, checklists e planilhas para MEIs/PMEs.",
		images: [
			{
				url: "/og-default.jpg",
				width: 1200,
				height: 630,
				alt: "Manual do Lojista - Guias para e-commerce",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Manual do Lojista",
		description: "Guias independentes, checklists e planilhas para MEIs/PMEs.",
		images: ["/og-default.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = { themeColor: "#06B6D4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
