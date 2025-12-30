'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[rgba(15,15,15,0.95)] backdrop-blur-[10px] border-b border-[#1a1a1a] sticky top-0 z-[1000]">
      <nav className="w-full px-6 md:px-12 py-3 flex items-center">
        <Link href="/" className="flex items-center gap-3 no-underline relative z-[1001]">
          <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
          <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
            TradeSafe
            <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 list-none m-0 p-0 flex-1 justify-center ml-24">
          <li><Link href="#features" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">Features</Link></li>
          <li><Link href="#product" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">How It Works</Link></li>
          <li><Link href="#pricing" className="text-[#888] no-underline text-sm transition-colors hover:text-primary">Pricing</Link></li>
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="#pricing" className="px-4 py-2 bg-transparent text-primary border border-primary/30 rounded-md text-sm font-medium transition-all hover:bg-primary/10 hover:border-primary no-underline">
            Log In
          </Link>
          <Link href="#pricing" className="px-4 py-2 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-medium transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/35 no-underline">
            Start Free Trial
          </Link>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-[1001] p-2 text-[#e0e0e0] hover:text-primary transition-colors" aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {isMenuOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden" onClick={() => setIsMenuOpen(false)} />}

        <div className={`fixed top-0 right-0 h-full w-[280px] transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ backgroundColor: '#000000', zIndex: 1000 }}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col gap-6 mb-8">
              <Link href="#features" onClick={() => setIsMenuOpen(false)} className="text-[#e0e0e0] no-underline text-base font-medium transition-colors hover:text-primary">Features</Link>
              <Link href="#product" onClick={() => setIsMenuOpen(false)} className="text-[#e0e0e0] no-underline text-base font-medium transition-colors hover:text-primary">How It Works</Link>
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-[#e0e0e0] no-underline text-base font-medium transition-colors hover:text-primary">Pricing</Link>
            </nav>
            <div className="h-[1px] bg-[#2a2a2a] mb-6" />
            <div className="flex flex-col gap-3">
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="w-full px-4 py-3 bg-transparent text-primary border border-primary/30 rounded-md text-sm font-medium text-center transition-all hover:bg-primary/10 hover:border-primary no-underline">Log In</Link>
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="w-full px-4 py-3 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-medium text-center transition-all hover:shadow-lg hover:shadow-primary/35 no-underline">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
