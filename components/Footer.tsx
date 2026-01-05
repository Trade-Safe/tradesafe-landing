'use client'

import Link from 'next/link'

interface FooterProps {
  description: string
  product: string
  company: string
  features: string
  howItWorks: string
  pricing: string
  about: string
  contact: string
  legal: string
  rights: string
  privacy: string
  terms: string
}

export default function Footer({ description, product, company, features, howItWorks, pricing, about, contact, legal, rights, privacy, terms }: FooterProps) {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Grid principal - 2 colonnes mobile, 4 colonnes desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          
          {/* Brand - centré sur mobile */}
          <div className="col-span-2 text-center md:text-left">
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
          
          {/* Product - centré sur mobile */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="text-[#e0e0e0] text-xs font-semibold mb-3">{product}</h4>
            <ul className="list-none space-y-2">
              <li><Link href="#features" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{features}</Link></li>
              <li><Link href="#how-it-works" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{howItWorks}</Link></li>
              <li><Link href="#pricing" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{pricing}</Link></li>
            </ul>
          </div>
          
          {/* Company - centré sur mobile */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="text-[#e0e0e0] text-xs font-semibold mb-3">{company}</h4>
            <ul className="list-none space-y-2">
              <li><Link href="/about" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{about}</Link></li>
              <li><Link href="/contact" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{contact}</Link></li>
              <li><Link href="/legal" className="text-[#888] text-xs no-underline hover:text-[#e0e0e0] transition-colors">{legal}</Link></li>
            </ul>
          </div>
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
  )
}
