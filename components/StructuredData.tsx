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
          "text": "TradeSafe costs â‚¬19.90 per month or â‚¬149.90 per year (37% discount on annual plan)."
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
