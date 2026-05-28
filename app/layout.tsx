import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Cursor from "./components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Akshat Patel — AI Engineer & Security Specialist",
  description:
    "Portfolio of Akshat Patel — building secure AI systems at the intersection of agentic AI and cybersecurity.",
  metadataBase: new URL("https://portfolio-v2-mu-sooty.vercel.app"),
  openGraph: {
    title: "Akshat Patel — AI Engineer & Security Specialist",
    description:
      "Building secure AI systems at the intersection of agentic AI and cybersecurity.",
    url: "https://portfolio-v2-mu-sooty.vercel.app",
    siteName: "Akshat Patel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Patel — AI Engineer & Security Specialist",
    description:
      "Building secure AI systems at the intersection of agentic AI and cybersecurity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-[var(--font-inter)]">
        <Cursor />
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
