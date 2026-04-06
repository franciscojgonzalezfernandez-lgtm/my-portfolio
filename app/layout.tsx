import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsWrapper } from "@/components/high-order-components/Analytics-wrapper";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getMessages } from "@/lib/intl";
import { IntlProviderClient } from "@/components/IntlProviderClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://javier-gonzalez-portfolio.com"),
  title: "Javi - Web Portfolio",
  description:
    "Web portfolio of a full‑stack software engineer, passionate problem solver and performance‑focused developer, crafting fast, reliable and user‑centric web applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Javi - Web Portfolio",
    description:
      "Web portfolio of a full‑stack software engineer and technical manager based in Switzerland.",
    url: "https://javier-gonzalez-portfolio.com/",
    type: "website",
    images: [
      {
        url: "https://javier-gonzalez-portfolio.com/manager.webp",
        width: 1200,
        height: 630,
        alt: "Javi Web Portfolio",
      },
    ],
  },
  keywords: [
    "Javier González",
    "Full-Stack Engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Frontend engineer",
    "Web performance",
    "DevOps",
    "Software engineer portfolio",
    "Switzerland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en"; // with static export we'll default to English; language switching can be added client-side
  const messages = getMessages(locale);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <IntlProviderClient locale={locale} messages={messages}>
          <Header />
          {children}
          {gaId ? <AnalyticsWrapper /> : null}
          <Footer />
        </IntlProviderClient>
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
