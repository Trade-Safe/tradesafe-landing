import { ImageResponse } from 'next/og'

// Image d'aperçu social (Open Graph / X) avec le langage visuel de la landing,
// générée à la demande en runtime Edge puis mise en cache (en-têtes immuables d'ImageResponse)
export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 88px',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(107, 70, 193, 0.45), rgba(10, 10, 10, 0) 65%)',
          color: '#e0e0e0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="52" height="64" viewBox="0 0 26 32">
            <defs>
              <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6B46C1" />
                <stop offset="1" stopColor="#5B4B8A" />
              </linearGradient>
            </defs>
            <polygon points="13,0 26,8 26,24 13,32 0,24 0,8" fill="url(#mark)" />
          </svg>
          <div style={{ display: 'flex', marginLeft: 20, fontSize: 44, letterSpacing: -1, color: '#f0f0f0' }}>TradeSafe</div>
        </div>

        <div style={{ display: 'flex', marginTop: 60, fontSize: 80, fontWeight: 700, letterSpacing: -2, color: '#f0f0f0' }}>
          Your AI Trading Copilot
        </div>
        <div style={{ display: 'flex', marginTop: 20, fontSize: 36, lineHeight: 1.35, color: '#b5b5b5', maxWidth: 960 }}>
          Turn backtested strategies into consistent, profitable trading.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: 56, fontSize: 24, color: '#9f7aea' }}>
          Market regime · Strategy routing · Risk governance · Safe execution
        </div>
        <div style={{ display: 'flex', marginTop: 14, fontSize: 22, color: '#8a8a8a' }}>
          Research & development in progress · trade-safe.ai
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
