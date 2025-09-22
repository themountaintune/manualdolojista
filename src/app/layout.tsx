import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Daily Beauty", template: "%s | Daily Beauty" },
  description:
    "Your ultimate beauty destination. Discover the latest skincare trends, makeup tutorials, and expert beauty advice.",
  keywords: [
    "beauty",
    "skincare",
    "makeup",
    "haircare",
    "cosmetics",
    "beauty tips",
    "beauty trends",
  ],
  authors: [{ name: "Daily Beauty" }],
  creator: "Daily Beauty",
  publisher: "Daily Beauty",
  metadataBase: new URL("https://dailybeauty.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dailybeauty.vercel.app",
    siteName: "Daily Beauty",
    title: "Daily Beauty",
    description:
      "Your ultimate beauty destination. Discover the latest skincare trends, makeup tutorials, and expert beauty advice.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Daily Beauty - Your Ultimate Beauty Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Beauty",
    description:
      "Your ultimate beauty destination. Discover the latest skincare trends, makeup tutorials, and expert beauty advice.",
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

export const viewport: Viewport = { themeColor: "#B76E79" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
