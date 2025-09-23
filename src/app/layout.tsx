import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Manual do Lojista", template: "%s | Manual do Lojista" },
  description:
    "Seu guia completo para o comércio eletrônico. Descubra as melhores práticas, tendências e estratégias para o seu negócio online.",
  keywords: [
    "ecommerce",
    "loja online",
    "vendas online",
    "marketing digital",
    "negócios",
    "empreendedorismo",
    "comércio eletrônico",
  ],
  authors: [{ name: "Manual do Lojista" }],
  creator: "Manual do Lojista",
  publisher: "Manual do Lojista",
  metadataBase: new URL("https://manualdolojista.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://manualdolojista.com",
    siteName: "Manual do Lojista",
    title: "Manual do Lojista",
    description:
      "Seu guia completo para o comércio eletrônico. Descubra as melhores práticas, tendências e estratégias para o seu negócio online.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Manual do Lojista - Seu Guia Completo para E-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manual do Lojista",
    description:
      "Seu guia completo para o comércio eletrônico. Descubra as melhores práticas, tendências e estratégias para o seu negócio online.",
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

export const viewport: Viewport = { themeColor: "#F81539" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
