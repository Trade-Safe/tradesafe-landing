'use client'

import { useState } from 'react'
import Link from 'next/link'
// import LanguageSwitcher from './LanguageSwitcher'  // ← Garde l'import pour plus tard
import EmailModal from './EmailModal'

interface HeaderProps {
  nav: {
    features: string
    howItWorks: string
    productPreview: string
    whosItFor: string
    pricing: string
    technology: string
    login: string
    startTrial: string
  }
}

export default function Header({ nav }: HeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="bg-[rgba(15,15,15,0.95)] backdrop-blur-[10px] border-b border-[#1a1a1a] sticky top-0 z-[1000]">
        <nav className="w-full px-6 md:px-12 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline relative">
            <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
              TradeSafe
              <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none m-0 p-0 flex-1 justify-center ml-32">
            <li><Link href="#features" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.features}</Link></li>
            <li><Link href="#how-it-works" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.howItWorks}</Link></li>
            <li><Link href="#product-preview" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.productPreview}</Link></li>
            <li><Link href="#whos-it-for" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.whosItFor}</Link></li>
            <li><Link href="#pricing" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.pricing}</Link></li>
            <li><Link href="#technology" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.technology}</Link></li>
          </ul>

          {/* Desktop CTA Buttons - Language Switcher hidden */}
          <div className="hidden md:flex gap-4 items-center">
            {/* <LanguageSwitcher /> */}
            <Link 
              href="#pricing" 
              className="px-3 py-1.5 bg-transparent text-primary border border-primary/30 rounded-md text-xs font-medium transition-all hover:bg-primary/10 hover:border-primary no-underline"
            >
              {nav.login}
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-xs font-medium transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/35 cursor-pointer"
            >
              {nav.startTrial}
            </button>
          </div>

          {/* Mobile CTA Button - Language Switcher hidden */}
          <div className="md:hidden flex items-center gap-4">
            {/* <div className="flex-1 flex justify-center -ml-20">
              <LanguageSwitcher />
            </div> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/35 cursor-pointer whitespace-nowrap"
            >
              {nav.startTrial}
            </button>
          </div>
        </nav>
      </header>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
