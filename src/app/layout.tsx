import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manualdolojista.vercel.app'),
  title: { default: 'Manual do Lojista', template: '%s | Manual do Lojista' },
  description: 'Guias independentes para e-commerce no Brasil.',
  icons: { icon: "/favicon.ico" },
  openGraph: { images: ['/og-default.jpg'], siteName: 'Manual do Lojista' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: "#16A34A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-ink rounded px-3 py-1 border">Pular para o conteúdo</a>
        <Navbar />
        <main id="conteudo" className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
