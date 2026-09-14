import type { Metadata } from 'next'

// Identité SEO du site : hôte canonique, marque et message principal
export const SITE_URL = 'https://www.trade-safe.ai'
export const SITE_NAME = 'TradeSafe'
export const DEFAULT_TITLE = 'TradeSafe | Your AI Trading Copilot'
export const DEFAULT_DESCRIPTION =
  'Turn backtested strategies into consistent, profitable trading with TradeSafe, an AI Trading Copilot built on market context, risk governance and safe execution.'

// Description factuelle (données structurées) : ce qu'est TradeSafe et son statut réel
export const PROJECT_DESCRIPTION =
  'TradeSafe is an AI Trading Copilot project focused on backtested strategies, market context, strategy routing, risk governance and safe execution. A deterministic, event-driven trading engine is under development. The project is currently in research and development and no live automated trading service is offered.'

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'TradeSafe, your AI Trading Copilot',
}

// Métadonnées d'une page publique : titre, description, URL canonique et aperçus sociaux cohérents
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE

  return {
    title: title ?? { absolute: DEFAULT_TITLE },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
