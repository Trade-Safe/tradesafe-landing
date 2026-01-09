import Link from 'next/link'

export default function ContactPage() {
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
      <main className="max-w-[800px] mx-auto px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-[32px] h-[38px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div className="text-2xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
              TradeSafe
              <div className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
            </div>
          </div>
          <h1 className="text-4xl font-semibold mb-4 leading-tight">
            Get in Touch with our Support Team
          </h1>
          <p className="text-lg text-[#888] leading-relaxed">
            Have questions about TradeSafe? We're here to help.
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-6 mb-16">
          {/* Email */}
          <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-6 hover:border-primary/50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#e0e0e0] mb-2">Email Support</h3>
                <p className="text-sm text-[#888] mb-3">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <a 
                  href="mailto:hello@trade-safe.ai"
                  className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors font-medium text-sm"
                >
                  hello@trade-safe.ai
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Live Chat - Coming Soon */}
          <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-6 relative overflow-hidden">
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-primary/10 border border-primary/30 text-primary-light px-3 py-1 rounded-full text-xs font-semibold">
              Q1 2026
            </div>
            
            <div className="flex items-start gap-4 opacity-60">
              <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#e0e0e0] mb-2">Live Chat Support</h3>
                <p className="text-sm text-[#888] mb-3">
                  Real-time chat support for urgent questions and technical issues.
                </p>
                <span className="text-sm text-[#666] font-medium">
                  Coming Soon - Q1 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-6 text-center">
          <p className="text-sm text-[#888] leading-relaxed">
            <strong className="text-[#e0e0e0]">Response Time:</strong> We typically respond within 24 hours during business days (Monday-Friday, 9am-6pm CET).
          </p>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/#pricing"
            className="inline-block px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            Join the Waitlist
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
