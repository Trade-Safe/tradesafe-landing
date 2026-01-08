export default function WhoIsThisFor() {
  return (
    <section className="py-20 bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-[1000px] mx-auto px-8">
        <h2 className="text-3xl font-semibold text-[#e0e0e0] text-center mb-12">
          Is TradeSafe Right for You?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Who It's For */}
          <div className="bg-[#151515] border-2 border-primary/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">Who It's For</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#888] text-sm">
                <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                Traders who already have a strategy
              </li>
              <li className="flex items-start gap-3 text-[#888] text-sm">
                <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                Traders struggling with discipline and overtrading
              </li>
              <li className="flex items-start gap-3 text-[#888] text-sm">
                <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                Traders tired of blowing prop firm accounts
              </li>
              <li className="flex items-start gap-3 text-[#888] text-sm">
                <span className="text-primary font-bold text-lg flex-shrink-0">✓</span>
                Day traders seeking behavioral accountability
              </li>
            </ul>
          </div>
          
          {/* Who It's NOT For */}
          <div className="bg-[#151515] border-2 border-[#2a2a2a] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#666]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">Who It's NOT For</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#666] text-sm">
                <span className="text-[#666] font-bold text-lg flex-shrink-0">✗</span>
                Signal seekers or fully automated trading
              </li>
              <li className="flex items-start gap-3 text-[#666] text-sm">
                <span className="text-[#666] font-bold text-lg flex-shrink-0">✗</span>
                "Get rich quick" systems
              </li>
              <li className="flex items-start gap-3 text-[#666] text-sm">
                <span className="text-[#666] font-bold text-lg flex-shrink-0">✗</span>
                Traders looking for market predictions or signals
              </li>
              <li className="flex items-start gap-3 text-[#666] text-sm">
                <span className="text-[#666] font-bold text-lg flex-shrink-0">✗</span>
                Beginners without a trading strategy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
