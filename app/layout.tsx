import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daebak Kpop Café · Tu rincón K-pop en Puerto Ordaz",
  description: "Comida coreana, cultura K-pop y momentos para compartir. Conoce Daebak Kpop Café en Alta Vista, Puerto Ordaz. Propuesta visual de demostración.",
  robots: { index: false, follow: false },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
