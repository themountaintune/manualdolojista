import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "AI Blog", template: "%s | AI Blog" },
  description: "Dark UI blog template",
};

export const viewport: Viewport = { themeColor: "#06b6d4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}


