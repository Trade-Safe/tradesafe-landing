import * as React from 'react'

interface WaitlistWelcomeProps {
  email: string
}

export default function WaitlistWelcome({ email }: WaitlistWelcomeProps) {
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
                    
                    {/* Titre principal - OPTIMISÉ */}
                    <h2 style={{ 
                      fontSize: '20px',
                      fontWeight: '600', 
                      color: '#1a1a1a', 
                      margin: '0 0 24px 0',
                      lineHeight: '1.4'
                    }}>
                      You're in. Welcome to TradeSafe.
                    </h2>

                    {/* Intro - OPTIMISÉE */}
                    <p style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: '#4a4a4a', 
                      margin: '0 0 24px 0' 
                    }}>
                      Thank you for joining our waitlist. You're now part of an exclusive group of traders who are serious about protecting their capital and building sustainable discipline.
                    </p>

                    {/* Section: What You'll Get */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
                      backgroundColor: '#f9fafb', 
                      borderRadius: '8px', 
                      padding: '24px',
                      marginBottom: '32px'
                    }}>
                      <tr>
                        <td>
                          <h3 style={{ 
                            fontSize: '18px', 
                            fontWeight: '600', 
                            color: '#1a1a1a', 
                            margin: '0 0 16px 0' 
                          }}>
                            What You'll Get with TradeSafe:
                          </h3>
                          
                          {/* Benefit 1 */}
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '12px' }}>
                            <tr>
                              <td width="24" valign="top">
                                <span style={{ color: '#667eea', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                              </td>
                              <td style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4a4a' }}>
                                <strong>Real-time behavioral alerts</strong> that stop emotional trading before it costs you money
                              </td>
                            </tr>
                          </table>

                          {/* Benefit 2 */}
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '12px' }}>
                            <tr>
                              <td width="24" valign="top">
                                <span style={{ color: '#667eea', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                              </td>
                              <td style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4a4a' }}>
                                <strong>AI-powered shield system</strong> with custom risk rules you can't break—even when emotions spike
                              </td>
                            </tr>
                          </table>

                          {/* Benefit 3 */}
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '12px' }}>
                            <tr>
                              <td width="24" valign="top">
                                <span style={{ color: '#667eea', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                              </td>
                              <td style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4a4a' }}>
                                <strong>Pattern detection</strong> that identifies overtrading, revenge trading, and other costly behaviors
                              </td>
                            </tr>
                          </table>

                          {/* Benefit 4 */}
                          <table width="100%" cellPadding="0" cellSpacing="0">
                            <tr>
                              <td width="24" valign="top">
                                <span style={{ color: '#667eea', fontSize: '20px', fontWeight: 'bold' }}>✓</span>
                              </td>
                              <td style={{ fontSize: '15px', lineHeight: '1.5', color: '#4a4a4a' }}>
                                <strong>Daily pre-market analysis</strong> powered by Claude AI to start every day with a clear trading plan
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    {/* Section: What Happens Next */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
                      backgroundColor: '#f9fafb', 
                      borderRadius: '8px', 
                      padding: '24px',
                      marginBottom: '32px'
                    }}>
                      <tr>
                        <td>
                          <h3 style={{ 
                            fontSize: '18px', 
                            fontWeight: '600', 
                            color: '#1a1a1a', 
                            margin: '0 0 16px 0' 
                          }}>
                            What Happens Next:
                          </h3>

                          {/* Timeline item 1 */}
                          <div style={{ 
                            borderLeft: '2px solid #667eea', 
                            paddingLeft: '16px', 
                            marginBottom: '12px' 
                          }}>
                            <div style={{ 
                              color: '#667eea', 
                              fontSize: '14px', 
                              fontWeight: '600', 
                              marginBottom: '4px' 
                            }}>
                              Q1 2026 (8-12 weeks)
                            </div>
                            <div style={{ fontSize: '15px', color: '#4a4a4a' }}>
                              Private beta launch with core features
                            </div>
                          </div>

                          {/* Timeline item 2 */}
                          <div style={{ 
                            borderLeft: '2px solid #667eea', 
                            paddingLeft: '16px', 
                            marginBottom: '12px' 
                          }}>
                            <div style={{ 
                              color: '#667eea', 
                              fontSize: '14px', 
                              fontWeight: '600', 
                              marginBottom: '4px' 
                            }}>
                              Before launch
                            </div>
                            <div style={{ fontSize: '15px', color: '#4a4a4a' }}>
                              We'll email you exclusive updates and early access details
                            </div>
                          </div>

                          {/* Timeline item 3 */}
                          <div style={{ 
                            borderLeft: '2px solid #667eea', 
                            paddingLeft: '16px' 
                          }}>
                            <div style={{ 
                              color: '#667eea', 
                              fontSize: '14px', 
                              fontWeight: '600', 
                              marginBottom: '4px' 
                            }}>
                              Priority access
                            </div>
                            <div style={{ fontSize: '15px', color: '#4a4a4a' }}>
                              As a waitlist member, you'll be among the first to try TradeSafe
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* Texte final */}
                    <p style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: '#4a4a4a', 
                      margin: '0 0 16px 0' 
                    }}>
                      We're building TradeSafe because we've been there—blowing accounts, fighting emotional patterns, knowing what to do but struggling to actually do it.
                    </p>

                    <p style={{ 
                      fontSize: '16px', 
                      lineHeight: '1.6', 
                      color: '#4a4a4a', 
                      margin: '0 0 32px 0' 
                    }}>
                      This isn't just another trading tool. It's a behavioral intervention system designed to protect you from your own worst decisions.
                    </p>

                    {/* CTA Button */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td align="center" style={{ paddingBottom: '24px' }}>
                          <a href="https://trade-safe-ai.beehiiv.com/" style={{
                            display: 'inline-block',
                            padding: '14px 32px',
                            backgroundColor: '#667eea',
                            color: '#ffffff',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                          }}>
                            Join Our Newsletter
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p style={{ 
                      fontSize: '14px', 
                      textAlign: 'center', 
                      color: '#888888', 
                      margin: '0' 
                    }}>
                      Get trading psychology insights, discipline tips, and product updates delivered monthly.
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
                      You're receiving this because you joined the TradeSafe waitlist at{' '}
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
