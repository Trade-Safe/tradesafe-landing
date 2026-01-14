import Link from 'next/link'

export default function LegalDisclaimer() {
  return (
    <section className="py-12 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg p-6 text-center">
          <h4 className="text-sm font-semibold text-[#e0e0e0] mb-3 uppercase tracking-wider">
            Important Disclaimer
          </h4>
          <p className="text-xs text-[#666] leading-relaxed mb-4">
            TradeSafe does not guarantee profits. Trading involves substantial risk of loss. TradeSafe is a behavioral discipline tool designed to help you follow your own rules — not eliminate losses or predict markets. Past performance does not indicate future results.
          </p>
          <Link 
            href="/legal" 
            className="inline-block text-xs text-primary-light hover:text-primary transition-colors font-medium"
          >
            Read full disclaimer →
          </Link>
        </div>
      </div>
    </section>
  )
}
