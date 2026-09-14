import type { ReactNode } from 'react'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers about TradeSafe, your AI Trading Copilot: what it is, what is being built, backtested strategies, product status and early access.',
  path: '/faq',
})

const strong = (text: string) => <strong className="text-[#e0e0e0]">{text}</strong>

// Questions publiques, alignées sur le statut réel du projet (recherche & développement)
const SECTIONS: { title: string; items: { question: string; answer: ReactNode }[] }[] = [
  {
    title: 'About TradeSafe',
    items: [
      {
        question: 'What is TradeSafe?',
        answer: (
          <p>
            TradeSafe is an {strong('AI Trading Copilot')} project for traders who want to turn backtested strategies
            into consistent, disciplined execution. It is currently in {strong('research and development')}.
          </p>
        ),
      },
      {
        question: 'What is an AI Trading Copilot?',
        answer: (
          <p>
            A copilot assists the trader rather than replacing them. TradeSafe is designed to help you understand the
            current market context, apply the strategy that fits it, respect your risk rules and execute in a
            controlled way. You remain in charge of your trading decisions.
          </p>
        ),
      },
      {
        question: 'What is TradeSafe building?',
        answer: (
          <>
            <p>The next generation of TradeSafe is built around four pillars:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>{strong('Market regime awareness')}: understanding current market conditions before acting;</li>
              <li>{strong('Strategy routing')}: matching the right strategy to the right environment;</li>
              <li>{strong('Risk governance')}: rules and guardrails designed to protect capital;</li>
              <li>{strong('Safe execution')}: a controlled and systematic execution framework.</li>
            </ul>
            <p>A deterministic, event-driven trading engine is under development to support them.</p>
          </>
        ),
      },
    ],
  },
  {
    title: 'Product and status',
    items: [
      {
        question: 'Is TradeSafe an automated trading bot?',
        answer: (
          <p>
            No. TradeSafe is not a signal service or a “set and forget” bot. Safe, deterministic automation is part of
            the long-term direction, but nothing automated is offered at this stage.
          </p>
        ),
      },
      {
        question: 'What are backtested strategies?',
        answer: (
          <p>
            A backtest applies a strategy’s rules to historical market data to see how it would have behaved. It helps
            evaluate an idea before risking capital, but {strong('past or simulated results never guarantee future performance')}.
            TradeSafe focuses on helping traders execute strategies they have already defined and tested.
          </p>
        ),
      },
      {
        question: 'What does “deterministic event-driven trading engine” mean?',
        answer: (
          <p>
            {strong('Event-driven')} means the engine reacts to market events, such as new price data, as they happen
            rather than on a fixed schedule. {strong('Deterministic')} means that, given the same inputs, it always
            makes the same decisions, which makes its behavior predictable, testable and auditable. This engine is
            under development.
          </p>
        ),
      },
      {
        question: 'Is automated live trading available today?',
        answer: (
          <p>
            No. TradeSafe is in research and development and does not currently offer automated live trading or trade
            execution.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Early access',
    items: [
      {
        question: 'How can I get early access?',
        answer: (
          <p>
            <Link href="/#pricing" className="text-primary-light hover:text-primary underline">Join the waitlist</Link>.
            You’ll receive a welcome email, then updates on development milestones and early-access opportunities.
            You can unsubscribe at any time; see our{' '}
            <Link href="/privacy" className="text-primary-light hover:text-primary underline">Privacy Policy</Link> for
            how your email is used.
          </p>
        ),
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0]">
      {/* Header Sticky */}
      <header className="bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-[#1a1a1a] sticky top-0 z-50">
        <nav className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0 transition-transform group-hover:scale-110"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
              TradeSafe
              <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
            </div>
          </Link>
          <Link
            href="/"
            className="text-[#888] text-sm hover:text-[#e0e0e0] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-[40px] h-[48px] bg-gradient-to-br from-primary to-primary-dark"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          </div>
          <h1 className="text-5xl font-semibold mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#888] leading-relaxed max-w-[600px] mx-auto">
            Everything you need to know about TradeSafe. Can’t find an answer? <Link href="/contact" className="text-primary-light hover:text-primary underline">Contact us</Link>.
          </p>
        </div>

        {/* FAQ Sections */}
        {SECTIONS.map((section) => (
          <section key={section.title} className="mb-16">
            <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
              {section.title}
            </h2>
            <div className="space-y-8">
              {section.items.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-normal italic text-primary-light mb-3">
                    {item.question}
                  </h3>
                  <div className="text-[#888] leading-relaxed space-y-2">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Bottom */}
        <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-[#e0e0e0] mb-3">
            Still have questions?
          </h3>
          <p className="text-[#888] mb-6">
            We’re here to help. Get in touch with the team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact us
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#666]">
            <p>&copy; 2025 TradeSafe. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#e0e0e0] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#e0e0e0] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
