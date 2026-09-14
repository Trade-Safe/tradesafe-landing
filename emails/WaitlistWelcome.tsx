import * as React from 'react'

const PILLARS = ['Market regime', 'Strategy routing', 'Risk governance', 'Safe execution']

export default function WaitlistWelcome() {
  return (
    <html>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ margin: '0', padding: '0', backgroundColor: '#f5f5f5', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>

        {/* Container principal */}
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f5f5f5', padding: '40px 0' }}>
          <tr>
            <td align="center">

              {/* Email card */}
              <table width="600" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>

                {/* Header avec logo */}
                <tr>
                  <td style={{ padding: '40px 40px 24px', textAlign: 'center', borderBottom: '1px solid #e5e5e5' }}>
                    <img
                      src="https://www.trade-safe.ai/logo-tradesafe-transparent.png"
                      alt="TradeSafe"
                      width="180"
                      height="auto"
                      style={{ display: 'block', margin: '0 auto', maxWidth: '180px' }}
                    />
                  </td>
                </tr>

                {/* Body content */}
                <tr>
                  <td style={{ padding: '40px' }}>

                    <h2 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      margin: '0 0 24px 0',
                      lineHeight: '1.4'
                    }}>
                      You&apos;re in. Welcome to TradeSafe.
                    </h2>

                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 16px 0' }}>
                      Thanks for joining the TradeSafe waitlist.
                    </p>

                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 24px 0' }}>
                      We&apos;re building the next generation of TradeSafe around an AI Trading Copilot, systematic strategy development and a deterministic event-driven trading engine.
                    </p>

                    {/* Section: current product direction */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{
                      backgroundColor: '#f9fafb',
                      borderRadius: '8px',
                      padding: '24px',
                      marginBottom: '24px'
                    }}>
                      <tr>
                        <td>
                          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 12px 0' }}>
                            Current product direction
                          </h3>
                          {PILLARS.map((pillar) => (
                            <table key={pillar} width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '8px' }}>
                              <tr>
                                <td width="24" valign="top">
                                  <span style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold' }}>✓</span>
                                </td>
                                <td style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4a4a' }}>
                                  {pillar}
                                </td>
                              </tr>
                            </table>
                          ))}
                        </td>
                      </tr>
                    </table>

                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 24px 0' }}>
                      We&apos;ll keep you updated on meaningful development milestones and early-access opportunities.
                    </p>

                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4a4a4a', margin: '0' }}>
                      The TradeSafe team
                    </p>

                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{
                    padding: '24px 40px',
                    backgroundColor: '#f9fafb',
                    borderTop: '1px solid #e5e5e5',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      fontSize: '13px',
                      color: '#888888',
                      margin: '0 0 8px 0',
                      lineHeight: '1.5'
                    }}>
                      You&apos;re receiving this because you joined the TradeSafe waitlist at{' '}
                      <a href="https://www.trade-safe.ai" style={{ color: '#667eea', textDecoration: 'none' }}>
                        trade-safe.ai
                      </a>
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#888888',
                      margin: '0',
                      lineHeight: '1.5'
                    }}>
                      Questions? Reply to this email or contact us at{' '}
                      <a href="mailto:hello@trade-safe.ai" style={{ color: '#667eea', textDecoration: 'none' }}>
                        hello@trade-safe.ai
                      </a>
                    </p>
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
