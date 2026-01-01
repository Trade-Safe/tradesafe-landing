'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[rgba(15,15,15,0.95)] backdrop-blur-[10px] border-b border-[#1a1a1a] sticky top-0 z-[1000]">
      <nav className="w-full px-6 md:px-12 py-3 flex items-center justify-between">
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
        <ul className="hidden md:flex gap-8 list-none m-0 p-0 flex-1 justify-center ml-24">
          <li><Link href="#features" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">Features</Link></li>
          <li><Link href="#product" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">How It Works</Link></li>
          <li><Link href="#pricing" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">Pricing</Link></li>
        </ul>

        {/* Desktop CTA Buttons - Cachés sur mobile */}
        <div className="hidden md:flex gap-4 items-center">
          <Link 
            href="#pricing" 
            className="px-4 py-2 bg-transparent text-primary border border-primary/30 rounded-md text-sm font-medium transition-all hover:bg-primary/10 hover:border-primary no-underline"
          >
            Log In
          </Link>
          <Link 
            href="#pricing" 
            className="px-4 py-2 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-medium transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/35 no-underline"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile CTA Button - Visible uniquement sur mobile */}
        <div className="md:hidden">
          <Link 
            href="#pricing" 
            className="px-5 py-2.5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/35 no-underline whitespace-nowrap"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>
    </header>
  )
}
