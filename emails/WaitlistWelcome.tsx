import * as React from 'react'

const SITE_URL = 'https://www.trade-safe.ai'
const PREHEADER = 'You’re in. Follow the evolution of our AI Trading Copilot.'
const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

// Palette de la carte « Next Generation » de la landing
const COLORS = {
  page: '#0a0a0a',
  card: '#0f0f0f',
  cardBorder: '#3b2a66',
  panel: '#151515',
  panelBorder: '#2a2a2a',
  tile: '#1c1631',
  heading: '#f0f0f0',
  text: '#b8b8b8',
  subtle: '#9a9a9a',
  muted: '#8a8a8a',
  accent: '#9f7aea',
  primary: '#6b46c1',
}

const PILLARS = [
  { icon: '📈', title: 'Market regime awareness', text: 'Understand the current market context before acting.' },
  { icon: '🧭', title: 'Strategy routing', text: 'Match the right strategy to the right environment.' },
  { icon: '🛡️', title: 'Risk governance', text: 'Add structure, discipline and protective guardrails.' },
  { icon: '⚙️', title: 'Safe execution', text: 'Build on a controlled and systematic execution framework.' },
]

// Ajustements mobiles (clients qui supportent les media queries)
const RESPONSIVE_CSS = `
  @media only screen and (max-width: 520px) {
    .ts-outer { padding: 24px 12px !important; }
    .ts-card { padding: 32px 22px !important; }
    .ts-title { font-size: 24px !important; line-height: 30px !important; }
  }
`

const paragraph: React.CSSProperties = {
  margin: '0 0 16px',
  fontSize: '16px',
  lineHeight: '26px',
  color: COLORS.text,
}

export default function WaitlistWelcome() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <title>Welcome to TradeSafe</title>
        <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: COLORS.page, fontFamily: FONT }}>
        {/* Texte d'aperçu (preheader), masqué dans le corps */}
        <div style={{ display: 'none', maxHeight: 0, overflow: 'hidden', opacity: 0, fontSize: '1px', lineHeight: '1px', color: COLORS.page }}>
          {PREHEADER}
          {' ‌'.repeat(80)}
        </div>

        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: COLORS.page }}>
          <tr>
            <td align="center" className="ts-outer" style={{ padding: '40px 16px' }}>
              <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ maxWidth: '600px' }}>

                {/* Marque : pictogramme + wordmark en texte */}
                <tr>
                  <td align="center" style={{ paddingBottom: '24px' }}>
                    <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                      <tr>
                        <td style={{ verticalAlign: 'middle', paddingRight: '10px' }}>
                          <img
                            src={`${SITE_URL}/email/tradesafe-mark.png`}
                            width="26"
                            height="32"
                            alt=""
                            style={{ display: 'block', border: 0, outline: 'none' }}
                          />
                        </td>
                        <td style={{ verticalAlign: 'middle', fontFamily: FONT, fontSize: '22px', lineHeight: '32px', fontWeight: 600, letterSpacing: '-0.4px', color: COLORS.heading }}>
                          TradeSafe
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Carte principale, inspirée de la carte Next Generation */}
                <tr>
                  <td
                    className="ts-card"
                    style={{
                      backgroundColor: COLORS.card,
                      backgroundImage: 'linear-gradient(180deg, rgba(107, 70, 193, 0.22) 0%, rgba(15, 15, 15, 0) 220px)',
                      border: `1px solid ${COLORS.cardBorder}`,
                      borderRadius: '16px',
                      padding: '44px 40px',
                      fontFamily: FONT,
                    }}
                  >
                    <p style={{ margin: '0 0 12px', textAlign: 'center', fontSize: '12px', lineHeight: '16px', fontWeight: 700, letterSpacing: '2px', color: COLORS.accent }}>
                      NEXT GENERATION
                    </p>
                    <h1 className="ts-title" style={{ margin: '0 0 28px', textAlign: 'center', fontSize: '28px', lineHeight: '34px', fontWeight: 600, color: COLORS.heading }}>
                      You’re in. Welcome aboard.
                    </h1>

                    <p style={paragraph}>
                      Thanks for joining the waitlist. We’re building an AI Trading Copilot designed to help traders turn backtested strategies into more consistent, profitable execution.
                    </p>
                    <p style={{ ...paragraph, margin: '0 0 24px' }}>
                      Our next-generation product is being built around a deterministic trading engine and a clear product direction:
                    </p>

                    {/* Piliers */}
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: COLORS.panel, border: `1px solid ${COLORS.panelBorder}`, borderRadius: '12px' }}>
                      <tr>
                        <td style={{ padding: '8px 20px' }}>
                          {PILLARS.map((pillar, index) => (
                            <table key={pillar.title} role="presentation" width="100%" cellPadding={0} cellSpacing={0} border={0} style={{ borderTop: index === 0 ? 'none' : `1px solid ${COLORS.panelBorder}` }}>
                              <tr>
                                <td width="44" style={{ padding: '16px 14px 16px 0', verticalAlign: 'top' }}>
                                  <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
                                    <tr>
                                      <td align="center" width="40" height="40" style={{ width: '40px', height: '40px', backgroundColor: COLORS.tile, border: `1px solid ${COLORS.cardBorder}`, borderRadius: '10px', fontSize: '18px', lineHeight: '40px', textAlign: 'center' }}>
                                        {pillar.icon}
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td style={{ padding: '16px 0', verticalAlign: 'top', fontFamily: FONT }}>
                                  <p style={{ margin: '0 0 4px', fontSize: '15px', lineHeight: '22px', fontWeight: 600, color: COLORS.heading }}>
                                    {pillar.title}
                                  </p>
                                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '21px', color: COLORS.subtle }}>
                                    {pillar.text}
                                  </p>
                                </td>
                              </tr>
                            </table>
                          ))}
                        </td>
                      </tr>
                    </table>

                    <p style={{ ...paragraph, margin: '28px 0 32px' }}>
                      You’ll receive updates as the project evolves, including major product milestones and early access opportunities.
                    </p>

                    {/* Bouton CTA (compatible e-mail) */}
                    <table role="presentation" cellPadding={0} cellSpacing={0} border={0} align="center" style={{ margin: '0 auto' }}>
                      <tr>
                        <td align="center" style={{ backgroundColor: COLORS.primary, backgroundImage: 'linear-gradient(135deg, #6b46c1 0%, #5b4b8a 100%)', borderRadius: '8px' }}>
                          <a
                            href={`${SITE_URL}/#next-generation`}
                            style={{ display: 'inline-block', padding: '14px 30px', fontFamily: FONT, fontSize: '15px', lineHeight: '20px', fontWeight: 600, color: '#ffffff', textDecoration: 'none', borderRadius: '8px' }}
                          >
                            Follow the project
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Pied de page */}
                <tr>
                  <td align="center" style={{ padding: '24px 16px 0', fontFamily: FONT, fontSize: '12px', lineHeight: '18px', color: COLORS.muted }}>
                    You’re receiving this email because you joined the waitlist at{' '}
                    <a href={SITE_URL} style={{ color: COLORS.accent, textDecoration: 'none' }}>
                      trade-safe.ai
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}
