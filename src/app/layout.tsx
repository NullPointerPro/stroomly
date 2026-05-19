import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stroomly — Workflow automatisering voor het Nederlandse MKB",
  description:
    "Stroomly automatiseert de repetitieve processen in jouw bedrijf — zodat jij je richt op wat écht telt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${nunito.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
