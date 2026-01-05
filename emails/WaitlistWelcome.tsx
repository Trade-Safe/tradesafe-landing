import * as React from 'react'

interface WaitlistWelcomeProps {
  email: string
}

export default function WaitlistWelcome({ email }: WaitlistWelcomeProps) {
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #0a0a0a;
            color: #e0e0e0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 40px;
          }
          .logo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
          }
          .shield {
            width: 28px;
            height: 34px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
          .logo-text {
            font-size: 24px;
            font-weight: 600;
            color: #e0e0e0;
          }
          .content {
            background: #151515;
            border: 2px solid #667eea;
            border-radius: 16px;
            padding: 40px;
          }
          h1 {
            font-size: 28px;
            font-weight: 600;
            color: #e0e0e0;
            margin: 0 0 16px 0;
          }
          p {
            font-size: 16px;
            line-height: 1.6;
            color: #888;
            margin: 0 0 20px 0;
          }
          .benefits {
            background: #0f0f0f;
            border-radius: 8px;
            padding: 24px;
            margin: 24px 0;
          }
          .benefits h2 {
            font-size: 18px;
            color: #e0e0e0;
            margin: 0 0 16px 0;
          }
          .benefit-item {
            display: flex;
            align-items: start;
            gap: 12px;
            margin-bottom: 12px;
          }
          .check {
            color: #667eea;
            font-size: 20px;
            font-weight: bold;
            flex-shrink: 0;
          }
          .timeline {
            background: #0f0f0f;
            border-radius: 8px;
            padding: 24px;
            margin: 24px 0;
          }
          .timeline h2 {
            font-size: 18px;
            color: #e0e0e0;
            margin: 0 0 16px 0;
          }
          .timeline-item {
            margin-bottom: 12px;
            padding-left: 20px;
            border-left: 2px solid #667eea;
          }
          .timeline-date {
            color: #667eea;
            font-weight: 600;
            font-size: 14px;
          }
          .cta {
            text-align: center;
            margin: 32px 0;
          }
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 14px 32px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 24px;
            border-top: 1px solid #2a2a2a;
            font-size: 14px;
            color: #666;
          }
          .footer a {
            color: #667eea;
            text-decoration: none;
          }
          .newsletter-text {
            font-size: 14px;
            color: #666;
            text-align: center;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <a href="https://www.trade-safe.ai" className="logo">
              <div className="shield"></div>
              <div className="logo-text">TradeSafe</div>
            </a>
          </div>

          <div className="content">
            <h1>Welcome to TradeSafe! 🚀</h1>
            
            <p>Hi there,</p>
            
            <p>
              Thank you for joining our waitlist! You're now part of an exclusive group 
              of traders who are serious about protecting their capital and building 
              sustainable discipline.
            </p>

            <div className="benefits">
              <h2>What You'll Get with TradeSafe:</h2>
              
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>
                  <strong>Real-time behavioral alerts</strong> that stop emotional 
                  trading before it costs you money
                </span>
              </div>
              
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>
                  <strong>AI-powered shield system</strong> with custom risk rules 
                  you can't break—even when emotions spike
                </span>
              </div>
              
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>
                  <strong>Pattern detection</strong> that identifies overtrading, 
                  revenge trading, and other costly behaviors
                </span>
              </div>
              
              <div className="benefit-item">
                <span className="check">✓</span>
                <span>
                  <strong>Daily pre-market analysis</strong> powered by Claude AI 
                  to start every day with a clear trading plan
                </span>
              </div>
            </div>

            <div className="timeline">
              <h2>What Happens Next:</h2>
              
              <div className="timeline-item">
                <div className="timeline-date">Q1 2026 (8-12 weeks)</div>
                <div>Private beta launch with core features</div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Before launch</div>
                <div>We'll email you exclusive updates and early access details</div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Priority access</div>
                <div>As a waitlist member, you'll be among the first to try TradeSafe</div>
              </div>
            </div>

            <p>
              We're building TradeSafe because we've been there—blowing accounts, 
              fighting emotional patterns, knowing what to do but struggling to actually do it.
            </p>

            <p>
              This isn't just another trading tool. It's a behavioral intervention system 
              designed to protect you from your own worst decisions.
            </p>

            <div className="cta">
              <a href="https://tradesafe.beehiiv.com/subscribe" className="button">
                Join Our Newsletter
              </a>
            </div>

            <p className="newsletter-text">
              Get trading psychology insights, discipline tips, and product updates 
              delivered monthly.
            </p>
          </div>

          <div className="footer">
            <p>
              You're receiving this because you joined the TradeSafe waitlist at{' '}
              <a href="https://www.trade-safe.ai">trade-safe.ai</a>
            </p>
            <p>
              Questions? Reply to this email or contact us at{' '}
              <a href="mailto:hello@trade-safe.ai">hello@trade-safe.ai</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
