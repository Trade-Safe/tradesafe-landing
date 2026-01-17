import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trade-safe.ai'),
  title: {
    default: 'TradeSafe - AI-Powered Discipline System for Retail Traders',
    template: '%s | TradeSafe'
  },
  description: 'AI-powered behavioral discipline system for retail traders. Real-time intervention to prevent emotional trading, revenge trading, and overtrading. Protect your capital with intelligent risk management.',
  keywords: [
    'trading discipline',
    'AI trading assistant',
    'retail trader tools',
    'risk management',
    'trading psychology',
    'emotional trading prevention',
    'revenge trading',
    'overtrading prevention',
    'trading journal',
    'trading analytics',
    'futures trading',
    'day trading tools'
  ],
  authors: [{ name: 'TradeSafe' }],
  creator: 'TradeSafe',
  publisher: 'TradeSafe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.trade-safe.ai',
    siteName: 'TradeSafe',
    title: 'TradeSafe - AI-Powered Discipline System for Retail Traders',
    description: 'Real-time behavioral intervention to prevent emotional trading and protect your capital. Used by traders on Tradovate, BloFin, and major platforms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TradeSafe - AI Trading Discipline System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradeSafe - AI-Powered Discipline System for Retail Traders',
    description: 'Real-time behavioral intervention to prevent emotional trading and protect your capital.',
    images: ['/og-image.png'],
    creator: '@tradesafe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'tp5tn_0Y1bKd0cIbp2q18Akh2l225F8G_FV86A92d6Y',
  },
  alternates: {
    canonical: 'https://www.trade-safe.ai',
    languages: {
      'en-US': 'https://www.trade-safe.ai',
      'fr-FR': 'https://www.trade-safe.ai/fr',
    },
  },
  category: 'finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

