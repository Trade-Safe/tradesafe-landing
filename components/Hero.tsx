'use client'

import { useState } from 'react'
import EmailModal from './EmailModal'

interface HeroProps {
  badge: string
  quote: string
  title: string
  subtitle: string
  priceMonth: string
  priceYear: string
  discount: string
}

export default function Hero({ badge, quote, title, subtitle, priceMonth, priceYear, discount }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="max-w-[1200px] mx-auto px-8 pt-8 pb-24 text-center">
        {/* Badge */}
        <div className="inline-block bg-primary/10 border border-primary/30 text-primary-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8">
          {badge}
        </div>

        {/* Quote tagline */}
        <p className="text-[#888] text-base font-medium mb-6 tracking-wide">
          {quote}
        </p>

        {/* Title */}
        <h1 
          className="text-5xl font-semibold text-[#e0e0e0] mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Subtitle */}
        <p className="text-lg text-[#888] max-w-[650px] mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Container */}
        <div className="flex flex-col items-center gap-6">
          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-base shadow-lg shadow-primary/30 cursor-pointer"
          >
            Start Free Trial
          </button>

          {/* Price Box */}
          <div className="bg-[#151515] border border-[#2a2a2a] px-8 py-4 rounded-lg">
            <div className="text-2xl font-bold text-[#e0e0e0] mb-1">
              {priceMonth}
            </div>
            <div className="text-sm text-[#666]">
              {priceYear} <span className="text-green-500 font-semibold">{discount}</span>
            </div>
          </div>

          {/* Trust Badges - 3 badges horizontaux */}
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#888] mt-4">
  {/* Badge 1: Social Proof */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/30">
      <svg className="w-6 h-6 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    </div>
    <span>
      <strong className="text-[#e0e0e0]">155+ traders</strong> on waitlist
    </span>
  </div>

  {/* Separator */}
  <div className="hidden md:block w-px h-8 bg-[#2a2a2a]"></div>

  {/* Badge 2: No Credit Card */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/30">
      <svg className="w-6 h-6 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    </div>
    <span className="text-[#888]">
      No credit card required
    </span>
  </div>

  {/* Separator */}
  <div className="hidden md:block w-px h-8 bg-[#2a2a2a]"></div>

  {/* Badge 3: Cancel Anytime */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg border border-primary/30">
      <svg className="w-6 h-6 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    </div>
    <span className="text-[#888]">
      Cancel anytime
    </span>
  </div>
</div>
        </div>
      </section>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
