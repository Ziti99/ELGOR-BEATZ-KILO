import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBg from "@/components/ParticlesBg";
import AmbientLayers from "@/components/AmbientLayers";
import ClientEffects from "@/components/ClientEffects";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
    process.env.NEXT_PUBLIC_SITE_URL.length > 0
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000"
  ),
  title: "Elgor Beatz - Créateur de sons, architecte d'émotions",
  description:
    "Studio au Gabon — production, mix & mastering entre tradition et modernité. Compositeur et directeur artistique.",
  keywords:
    "Elgor Beatz, production musicale, Gabon, tradition, modernité, masques, compositeur, directeur artistique, beats, mixage, mastering",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Elgor Beatz — Studio & production musicale",
    description:
      "Studio au Gabon — son contemporain et ancrage culturel. Production, mix et mastering.",
    images: [
      {
        url: "/branding/wordmark-stack-black.png",
        width: 1200,
        height: 630,
        alt: "Elgor Beatz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/branding/wordmark-stack-black.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${displaySerif.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-cream text-ink`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[300] -translate-y-24 rounded-md bg-ink px-4 py-3 text-sm text-cream opacity-0 transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent-copper focus:ring-offset-2 focus:ring-offset-cream pointer-events-none"
        >
          Aller au contenu principal
        </a>
        <ParticlesBg />
        <AmbientLayers />
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
