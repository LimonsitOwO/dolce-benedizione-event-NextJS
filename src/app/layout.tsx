import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sweet Connections - Dolce Benedizione | Networking Gastronómico",
  description: "Únete a Sweet Connections, el evento de networking más dulce de Colombia. Conecta, comparte y endulza tus relaciones empresariales con Dolce Benedizione. Experiencias gastronómicas únicas, degustaciones exclusivas y alianzas estratégicas.",
  keywords: "networking, dolce benedizione, evento gastronómico, dulces artesanales, colombia, empresas, alianzas estratégicas, repostería, regalos corporativos",
  authors: [{ name: "Dolce Benedizione" }],
  creator: "Dolce Benedizione",
  publisher: "Dolce Benedizione",
  robots: "index, follow",
  openGraph: {
    title: "Sweet Connections - Dolce Benedizione",
    description: "El evento de networking gastronómico más exclusivo. Conecta con profesionales del sector mientras disfrutas de experiencias únicas.",
    url: "https://sweetconnections.dolcebenedizione.com",
    siteName: "Sweet Connections",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sweet Connections - Dolce Benedizione Networking Event",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Connections - Dolce Benedizione",
    description: "Networking gastronómico exclusivo con degustaciones artesanales y conexiones estratégicas.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#CD853F",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
