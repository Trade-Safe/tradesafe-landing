import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradeSafe - The First AI Discipline System for Retail Traders",
  description: "TradeSafe detects emotional trading patterns and acts as an intelligent shield system to protect your capital in real-time.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  keywords: ["trading", "discipline", "AI", "risk management", "retail traders", "trading psychology"],
  authors: [{ name: "TradeSafe" }],
  openGraph: {
    title: "TradeSafe - AI-Powered Discipline System",
    description: "Protect your capital with real-time behavioral intervention powered by AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
