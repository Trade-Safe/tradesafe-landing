import Link from 'next/link'

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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            Everything you need to know about TradeSafe. Can't find an answer? <Link href="/contact" className="text-primary-light hover:text-primary underline">Contact us</Link>.
          </p>
        </div>

        {/* FAQ Sections */}
        
        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Getting Started
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Which brokers are supported?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Currently we support <strong className="text-[#e0e0e0]">Tradovate</strong> for US futures trading via CSV import.
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                <strong className="text-[#e0e0e0]">Coming in 2026:</strong>
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li>Interactive Brokers (API integration)</li>
                <li>BloFin (Crypto futures)</li>
                <li>TopStep & other prop firms</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                Check our roadmap for the latest updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Do I need coding skills to use TradeSafe?
              </h3>
              <p className="text-[#888] leading-relaxed">
                No. TradeSafe is designed for traders, not developers. Simply upload your trading data via CSV or connect your broker API (when available). Our dashboard is intuitive and requires zero technical knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Security & Privacy
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Can TradeSafe access my funds or execute trades?
              </h3>
              <p className="text-[#888] leading-relaxed">
                <strong className="text-[#e0e0e0]">Absolutely not.</strong> We use <strong className="text-[#e0e0e0]">read-only API connections</strong> when available. TradeSafe can only monitor your trading activity — we cannot move money, place orders, or modify positions. Your capital stays 100% under your control.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Is my trading data secure?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Yes. All data is encrypted using <strong className="text-[#e0e0e0]">AES-256</strong> (military-grade encryption) and stored on <strong className="text-[#e0e0e0]">Supabase</strong>, which is SOC 2 Type II compliant.
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                <strong className="text-[#e0e0e0]">We never:</strong>
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li>Share your data with third parties</li>
                <li>Sell your information to brokers or advertisers</li>
                <li>Use your trading strategies for our own benefit</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                Your privacy is our priority.
              </p>
            </div>
          </div>
        </section>

        {/* Results & Effectiveness */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Results & Effectiveness
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                How long before I see results?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Most traders notice <strong className="text-[#e0e0e0]">reduced overtrading within the first week</strong> as our alert system kicks in.
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                <strong className="text-[#e0e0e0]">Typical timeline:</strong>
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li><strong className="text-[#e0e0e0]">Week 1:</strong> Awareness of behavioral patterns increases</li>
                <li><strong className="text-[#e0e0e0]">Week 2-4:</strong> Discipline score improves 15-25%</li>
                <li><strong className="text-[#e0e0e0]">30+ days:</strong> Long-term habit formation, sustainable results</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                Remember: TradeSafe is a tool, not magic. Consistency is key.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Will TradeSafe make me a profitable trader?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                No. TradeSafe <strong className="text-[#e0e0e0]">does not predict markets, generate signals, or guarantee profits</strong>.
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                <strong className="text-[#e0e0e0]">What we do:</strong>
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li>Help you follow YOUR existing strategy</li>
                <li>Prevent emotional trading decisions</li>
                <li>Build better discipline through accountability</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                You need a profitable edge to begin with. TradeSafe helps you execute it consistently.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing & Billing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Pricing & Billing
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Yes, but terms depend on your plan:
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li><strong className="text-[#e0e0e0]">Monthly:</strong> Cancel anytime, no penalty. Subscription ends at period close.</li>
                <li><strong className="text-[#e0e0e0]">Annual:</strong> Non-refundable, but you can disable auto-renewal to prevent next year's charge.</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                Manage your subscription in Settings → Billing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-[#888] leading-relaxed">
                We offer a <strong className="text-[#e0e0e0]">7-day money-back guarantee</strong> on monthly plans if you're not satisfied (no questions asked). Annual plans are non-refundable due to the discounted pricing, but you can cancel renewal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Is there a free trial?
              </h3>
              <p className="text-[#888] leading-relaxed">
                Not yet. We're launching in <strong className="text-[#e0e0e0]">beta (Q1 2026)</strong> with special early-access pricing. Waitlist members get priority access when we open trials. <Link href="/#pricing" className="text-primary-light hover:text-primary underline">Join the waitlist</Link> to be notified.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Functionality */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Features & Functionality
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Does TradeSafe work on mobile?
              </h3>
              <p className="text-[#888] leading-relaxed">
                Our <strong className="text-[#e0e0e0]">dashboard is mobile-responsive</strong> and works on all devices. The <strong className="text-[#e0e0e0]">Chrome extension</strong> (for real-time monitoring) is desktop-only for now. Mobile extension support is planned for late 2026.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Can I use TradeSafe for stocks, crypto, or forex?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Currently, TradeSafe is optimized for <strong className="text-[#e0e0e0]">futures trading</strong> (ES, NQ, etc.).
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                <strong className="text-[#e0e0e0]">Crypto futures</strong> support (BloFin) is coming Q2 2026. <strong className="text-[#e0e0e0]">Stocks and forex</strong> are on the roadmap for 2027.
              </p>
              <p className="text-[#888] leading-relaxed">
                You can still manually log any trades via CSV regardless of asset class.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                What's "Strict Mode"?
              </h3>
              <p className="text-[#888] leading-relaxed">
                Strict Mode <strong className="text-[#e0e0e0]">blocks trading</strong> when you breach your daily loss limit or max trade count — no exceptions. Think of it as a <strong className="text-[#e0e0e0]">circuit breaker</strong> for your account. You can enable/disable it in Risk Settings.
              </p>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-8 pb-3 border-b border-[#2a2a2a]">
            Support
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                How do I get help if I have issues?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                We offer:
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li><strong className="text-[#e0e0e0]">Email support:</strong> hello@trade-safe.ai (24-48h response)</li>
                <li><strong className="text-[#e0e0e0]">Live chat:</strong> Coming Q1 2026</li>
                <li><strong className="text-[#e0e0e0]">Documentation:</strong> Comprehensive guides in our Help Center</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                Priority support is available for annual subscribers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#e0e0e0] mb-3">
                Can I request new features?
              </h3>
              <p className="text-[#888] leading-relaxed mb-2">
                Absolutely! We're building TradeSafe <strong className="text-[#e0e0e0]">with our community</strong>.
              </p>
              <p className="text-[#888] leading-relaxed mb-2">
                Submit feature requests via:
              </p>
              <ul className="list-disc list-inside text-[#888] leading-relaxed ml-4 space-y-1">
                <li>Email: hello@trade-safe.ai</li>
                <li>Feedback form in your dashboard (coming soon)</li>
              </ul>
              <p className="text-[#888] leading-relaxed mt-2">
                We review every suggestion and prioritize based on user demand.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-[#e0e0e0] mb-3">
            Still have questions?
          </h3>
          <p className="text-[#888] mb-6">
            We're here to help. Get in touch with our support team.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Support
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
