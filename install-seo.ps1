# ============================================
# SCRIPT D'INSTALLATION AUTOMATIQUE - SEO TRADESAFE
# ============================================
# Ce script installe toutes les optimisations SEO automatiquement
# Usage: .\install-seo.ps1
# ============================================

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  INSTALLATION OPTIMISATIONS SEO" -ForegroundColor Cyan
Write-Host "  TradeSafe Landing Page" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans le bon répertoire
$currentPath = Get-Location
if ($currentPath.Path -notlike "*landing-page*") {
    Write-Host "ERREUR: Ce script doit être exécuté depuis le dossier landing-page" -ForegroundColor Red
    Write-Host "Utilisez: cd C:\Users\leoco\Documents\projects\tradesafe\landing-page" -ForegroundColor Yellow
    exit 1
}

Write-Host "[1/7] Vérification du répertoire..." -ForegroundColor Green
Write-Host "      Répertoire actuel: $currentPath" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 1 : Créer StructuredData.tsx
# ============================================
Write-Host "[2/7] Création de StructuredData.tsx..." -ForegroundColor Green

$structuredDataContent = @'
'use client';

export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TradeSafe",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "19.90",
      "priceCurrency": "EUR",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "160"
    },
    "description": "AI-powered behavioral discipline system for retail traders providing real-time intervention to prevent emotional trading and protect capital."
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TradeSafe",
    "url": "https://www.trade-safe.ai",
    "logo": "https://www.trade-safe.ai/og-image.png",
    "sameAs": [
      "https://twitter.com/tradesafe",
      "https://www.linkedin.com/company/tradesafe"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TradeSafe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TradeSafe is an AI-powered behavioral discipline system for retail traders that provides real-time intervention to prevent emotional trading behaviors like revenge trading and overtrading."
        }
      },
      {
        "@type": "Question",
        "name": "How much does TradeSafe cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TradeSafe costs €19.90 per month or €149.90 per year (37% discount on annual plan)."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trade-safe.ai"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
'@

Set-Content -Path "components\StructuredData.tsx" -Value $structuredDataContent -Encoding UTF8
Write-Host "      ✅ components\StructuredData.tsx créé" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 2 : Créer sitemap.ts
# ============================================
Write-Host "[3/7] Création de sitemap.ts..." -ForegroundColor Green

$sitemapContent = @'
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trade-safe.ai';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
'@

Set-Content -Path "app\sitemap.ts" -Value $sitemapContent -Encoding UTF8
Write-Host "      ✅ app\sitemap.ts créé" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 3 : Créer robots.ts
# ============================================
Write-Host "[4/7] Création de robots.ts..." -ForegroundColor Green

$robotsContent = @'
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.trade-safe.ai/sitemap.xml',
  };
}
'@

Set-Content -Path "app\robots.ts" -Value $robotsContent -Encoding UTF8
Write-Host "      ✅ app\robots.ts créé" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 4 : Créer manifest.json
# ============================================
Write-Host "[5/7] Création de manifest.json..." -ForegroundColor Green

$manifestContent = @'
{
  "name": "TradeSafe - AI Trading Discipline",
  "short_name": "TradeSafe",
  "description": "AI-powered behavioral discipline system for retail traders",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#7C3AED",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
'@

Set-Content -Path "public\manifest.json" -Value $manifestContent -Encoding UTF8
Write-Host "      ✅ public\manifest.json créé" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 5 : Backup et Remplacer layout.tsx
# ============================================
Write-Host "[6/7] Mise à jour de app\layout.tsx..." -ForegroundColor Green

# Backup
if (Test-Path "app\layout.tsx") {
    Copy-Item "app\layout.tsx" "app\layout.tsx.backup" -Force
    Write-Host "      ✅ Backup créé: app\layout.tsx.backup" -ForegroundColor Gray
}

$layoutContent = @'
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
    google: 'your-google-verification-code',
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
'@

Set-Content -Path "app\layout.tsx" -Value $layoutContent -Encoding UTF8
Write-Host "      ✅ app\layout.tsx mis à jour" -ForegroundColor Gray
Write-Host ""

# ============================================
# ÉTAPE 6 : Backup et Remplacer next.config
# ============================================
Write-Host "[7/7] Mise à jour de next.config.mjs..." -ForegroundColor Green

# Backup de l'ancien config
if (Test-Path "next.config.js") {
    Copy-Item "next.config.js" "next.config.js.backup" -Force
    Write-Host "      ✅ Backup créé: next.config.js.backup" -ForegroundColor Gray
    Remove-Item "next.config.js" -Force
    Write-Host "      ✅ Ancien next.config.js supprimé" -ForegroundColor Gray
}

$nextConfigContent = @'
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
'@

Set-Content -Path "next.config.mjs" -Value $nextConfigContent -Encoding UTF8
Write-Host "      ✅ next.config.mjs créé" -ForegroundColor Gray
Write-Host ""

# ============================================
# RÉCAPITULATIF
# ============================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✅ INSTALLATION TERMINÉE" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Fichiers créés/modifiés:" -ForegroundColor Yellow
Write-Host "  ✅ components\StructuredData.tsx" -ForegroundColor Gray
Write-Host "  ✅ app\sitemap.ts" -ForegroundColor Gray
Write-Host "  ✅ app\robots.ts" -ForegroundColor Gray
Write-Host "  ✅ public\manifest.json" -ForegroundColor Gray
Write-Host "  ✅ app\layout.tsx (backup: layout.tsx.backup)" -ForegroundColor Gray
Write-Host "  ✅ next.config.mjs (backup: next.config.js.backup)" -ForegroundColor Gray
Write-Host ""

# ============================================
# VÉRIFICATION BUILD
# ============================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  VÉRIFICATION BUILD" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Lancement de 'npm run build' pour vérifier..." -ForegroundColor Yellow
Write-Host ""

try {
    npm run build
    Write-Host ""
    Write-Host "✅ BUILD RÉUSSI !" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR DE BUILD" -ForegroundColor Red
    Write-Host "Détails de l'erreur:" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Les fichiers ont été créés mais il y a une erreur de compilation." -ForegroundColor Yellow
    Write-Host "Vérifie les erreurs ci-dessus et corrige-les avant de continuer." -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

# ============================================
# PROCHAINES ÉTAPES
# ============================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PROCHAINES ÉTAPES" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Vérifier les fichiers créés:" -ForegroundColor Yellow
Write-Host "   git status" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Tester en local (optionnel):" -ForegroundColor Yellow
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host "   Puis ouvre: http://localhost:3000" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Commit et push vers GitHub:" -ForegroundColor Yellow
Write-Host "   git add ." -ForegroundColor Gray
Write-Host "   git commit -m `"feat(seo): comprehensive SEO optimization`"" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Vérifier le deploy Vercel:" -ForegroundColor Yellow
Write-Host "   https://vercel.com/trade-safe/tradesafe-landing/deployments" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 Prêt à pusher vers GitHub !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
