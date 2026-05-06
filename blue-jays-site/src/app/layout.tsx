import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevNet — North American builder network",
    template: "%s | DevNet",
  },
  description:
    "DevNet helps students and builders ship real projects, connect with other builders, and build public proof of work — with AI and modern tools.",
  openGraph: {
    title: "DevNet",
    description:
      "A builder network across North America — projects, chapters, and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${instrument.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
