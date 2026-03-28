import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-headline" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "BrickReel – Real Estate Video Analysis",
  description:
    "AI-powered platform that analyzes real estate video content and provides actionable insights to improve engagement and lead generation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-surface font-body text-on-surface antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
