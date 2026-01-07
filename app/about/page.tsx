import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a] bg-[#0f0f0f]/95 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-8 bg-gradient-to-br from-primary to-primary-dark" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <span className="text-xl font-medium text-[#e0e0e0] relative">
              TradeSafe
              <div className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-full" />
            </span>
          </Link>
          <Link 
            href="/" 
            className="text-sm text-[#888] hover:text-[#e0e0e0] transition-colors"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-8 py-20">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-[#e0e0e0] mb-4">
            About TradeSafe
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-[#888] leading-relaxed">
          <p>
            TradeSafe was created by a team of French retail traders who struggled 
            with emotional discipline over the past 6 years.
          </p>

          <p>
            After blowing multiple prop firm accounts due to revenge trading 
            and overtrading, they decided to build this system altogether to protect their group from their 
            own worst patterns.
          </p>

          <p>
            TradeSafe is currently in private beta. We are personally testing 
            every feature on our own trading before releasing publicly.
          </p>

          <p className="font-medium text-[#e0e0e0]">
            This isn't a corporate product built by non-traders.
            <br />
            It's a tool built by traders, for traders.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]">
          <Link 
            href="/#pricing"
            className="inline-block px-8 py-3 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </Link>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-[#1a1a1a] py-8 mt-20">
        <div className="max-w-[800px] mx-auto px-8 text-center text-sm text-[#666]">
          <p>© 2025 TradeSafe. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/" className="hover:text-[#e0e0e0] transition-colors">
              Home
            </Link>
            <Link href="/legal" className="hover:text-[#e0e0e0] transition-colors">
              Legal
            </Link>
            <Link href="mailto:hello@trade-safe.ai" className="hover:text-[#e0e0e0] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
