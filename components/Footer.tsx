'use client'

import { useState } from 'react'
import Link from 'next/link'
import EmailModal from './EmailModal'

interface FooterProps {
  description: string
  product: string
  resources: string
  company: string
  features: string
  howItWorks: string
  pricing: string
  technology: string
  newsletter: string
  about: string
  contact: string
  legal: string
  rights: string
  privacy: string
  terms: string
}

export default function Footer({ 
  description, 
  product, 
  resources,
  company, 
  features, 
  howItWorks, 
  pricing, 
  technology,
  newsletter,
  about, 
  contact, 
  legal, 
  rights, 
  privacy, 
  terms 
}: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Grid principal - 4 colonnes sur desktop, Brand full + 3 cols sur mobile */}
          <div className="grid grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 mb-8">
            
            {/* Brand - Full width mobile, 2 cols desktop */}
            <div className="col-span-3 md:col-span-1 md:col-start-1 md:col-end-2 text-center md:text-left md:pr-12 mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-3 no-underline relative mb-4 justify-center md:justify-start">
                <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
                  TradeSafe
                  <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
                </div>
              </Link>
              <p className="text-[#666] text-xs leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Product - 1 colonne mobile et desktop */}
            <div className="text-left">
              <h4 className="text-[#e0e0e0] text-xs font-semibold mb-3">{product}</h4>
              <ul className="list-none space-y-2">
                <li><Link href="#features" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{features}</Link></li>
                <li><Link href="#how-it-works" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{howItWorks}</Link></li>
                <li><Link href="#pricing" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{pricing}</Link></li>
                <li><Link href="#technology" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{technology}</Link></li>
              </ul>
            </div>
            
            {/* Resources - 1 colonne mobile et desktop */}
<div className="text-left">
  <h4 className="text-[#e0e0e0] text-xs font-semibold mb-3">{resources}</h4>
  <ul className="list-none space-y-2">
    <li>
      <a 
        href="https://trade-safe-ai.beehiiv.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors"
      >
        {newsletter}
      </a>
    </li>
    <li>
      <Link href="/faq" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">
        FAQ
      </Link>
    </li>
  </ul>
</div>
            
            {/* Company - 1 colonne mobile et desktop */}
            <div className="text-left">
              <h4 className="text-[#e0e0e0] text-xs font-semibold mb-3">{company}</h4>
              <ul className="list-none space-y-2">
                <li><Link href="/about" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{about}</Link></li>
                <li><Link href="/contact" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{contact}</Link></li>
                <li><Link href="/legal" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{legal}</Link></li>
              </ul>
            </div>
          </div>

          {/* Pre-footer CTA */}
          <div className="py-16 text-center border-t border-[#1a1a1a]">
            <h3 className="text-3xl font-semibold text-[#e0e0e0] mb-4">
              Ready to Build Better Discipline?
            </h3>
            <p className="text-[#888] mb-8 max-w-[500px] mx-auto leading-relaxed">
              Join 155+ traders on the waitlist for early access to TradeSafe.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-8 py-4 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 cursor-pointer"
            >
              Protect My Capital
            </button>
          </div>
          
          {/* Footer bottom */}
          <div className="pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-[#666] text-xs">
            <p>&copy; 2025 TradeSafe. {rights}</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-[#666] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{privacy}</Link>
              <Link href="/terms" className="text-[#666] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{terms}</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
