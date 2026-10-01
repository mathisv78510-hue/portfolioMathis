import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathis Valentin | Developpeur Web",
  description:
    "Portfolio de Mathis Valentin, developpeur web junior: projets, competences et contact.",
  keywords: ["portfolio", "developpeur web", "next.js", "react", "typescript"],
  openGraph: {
    title: "Mathis Valentin | Developpeur Web",
    description: "Decouvrez mes projets, mes competences et mon parcours.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
