import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site-data";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "NYX Pool Villa | Premium Indoor Private Pool Villa",
    template: "%s | NYX Pool Villa",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "NYX Pool Villa",
    "private pool villa",
    "indoor pool villa",
    "luxury private stay",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "NYX Pool Villa | Where Luxury Meets Privacy",
    description: siteConfig.description,
    images: [
      {
        url: "/images/nyx-bedroom-teal-night.jpeg",
        width: 1600,
        height: 1200,
        alt: "A blue-lit bedroom at NYX Pool Villa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYX Pool Villa | Where Luxury Meets Privacy",
    description: siteConfig.description,
    images: ["/images/nyx-bedroom-teal-night.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#071921" },
    { media: "(prefers-color-scheme: light)", color: "#f6efe4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
