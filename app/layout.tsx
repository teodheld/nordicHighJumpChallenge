import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nordic High Jump Challenge",
  description: "World Athletics Level D competition - MAIF-hopppet & Fana-hoppet 2026",

  keywords: ["nordic high jump", "nordichighjump", "challenge", "sports", 
    "athlete", "bergen", "mariestad", "fanahoppet", "maifhoppet", "high jump", "nordic high jump challenge",
    "MAIFhoppet", "Fanahoppet", "MAIF-hoppet", "Fana-hoppet"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
