'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  nav: {
    features: string
    howItWorks: string
    pricing: string
    login: string
    startTrial: string
  }
}

export default function Header({ nav }: HeaderProps) {
  return (
    <header className="bg-[rgba(15,15,15,0.95)] backdrop-blur-[10px] border-b border-[#1a1a1a] sticky top-0 z-[1000]">
      <nav className="w-full px-6 md:px-12 py-2 flex items-center justify-between">
        {/* Logo - Visible sur desktop ET mobile */}
        <Link href="/" className="flex items-center gap-3 no-underline relative">
          <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
            TradeSafe
            <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
          </div>
        </Link>

        {/* Desktop Navigation - Caché sur mobile */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 flex-1 justify-center ml-36">
          <li><Link href="#features" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.features}</Link></li>
          <li><Link href="#how-it-works" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.howItWorks}</Link></li>
          <li><Link href="#pricing" className="text-[#888] no-underline text-xs transition-colors hover:text-primary">{nav.pricing}</Link></li>
        </ul>

        {/* Desktop CTA Buttons + Language Switcher - Cachés sur mobile */}
        <div className="hidden md:flex gap-4 items-center">
          <LanguageSwitcher />
          <Link 
            href="#pricing" 
            className="px-3 py-1.5 bg-transparent text-primary border border-primary/30 rounded-md text-xs font-medium transition-all hover:bg-primary/10 hover:border-primary no-underline"
          >
            {nav.login}
          </Link>
          <Link 
            href="#pricing" 
            className="px-3 py-1.5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-xs font-medium transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/35 no-underline"
          >
            {nav.startTrial}
          </Link>
        </div>

        {/* Mobile CTA Button + Language Switcher - Visible uniquement sur mobile */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex-1 flex justify-center -ml-20">
            <LanguageSwitcher />
          </div>
          <Link 
            href="#pricing" 
            className="px-5 py-2 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/35 no-underline whitespace-nowrap"
          >
            {nav.startTrial}
          </Link>
        </div>
      </nav>
    </header>
  )
}
