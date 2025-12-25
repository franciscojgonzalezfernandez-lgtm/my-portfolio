import type React from "react";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javi - Web Portfolio",
  description:
    "Web portfolio of a full‑stack software engineer, passionate problem solver and performance‑focused developer, crafting fast, reliable and user‑centric web applications.",
  openGraph: {
    title: "Javi - Web Portfolio",
    description:
      "Web portfolio of a full‑stack software engineer and technical manager based in Switzerland.",
    url: "https://franciscojgonzalezfernandez-lgtm.github.io/my-portfolio/",
    type: "website",
    images: [
      {
        url: "https://franciscojgonzalezfernandez-lgtm.github.io/my-portfolio/manager.webp",
        width: 1200,
        height: 630,
        alt: "Javi Web Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
