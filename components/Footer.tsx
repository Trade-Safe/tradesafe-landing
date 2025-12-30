import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 no-underline relative mb-4">
              <div className="w-[26px] h-[32px] bg-gradient-to-br from-primary to-primary-dark flex-shrink-0" 
                   style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
              <div className="text-xl font-normal tracking-[-0.5px] text-[#e0e0e0] relative">
                TradeSafe
                <div className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-primary-dark rounded-[1px]" />
              </div>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed">
              AI-powered behavioral intervention technology helping retail traders protect their capital and develop sustainable discipline.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#e0e0e0] text-sm font-semibold mb-4">Product</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#features" className="text-[#888] text-sm no-underline hover:text-[#e0e0e0] transition-colors">Features</Link></li>
              <li><Link href="#product" className="text-[#888] text-sm no-underline hover:text-[#e0e0e0] transition-colors">How It Works</Link></li>
              <li><Link href="#pricing" className="text-[#888] text-sm no-underline hover:text-[#e0e0e0] transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[#e0e0e0] text-sm font-semibold mb-4">Company</h4>
            <ul className="list-none space-y-3">
              <li><Link href="#pricing" className="text-[#888] text-sm no-underline hover:text-[#e0e0e0] transition-colors">About</Link></li>
              <li><Link href="#pricing" className="text-[#888] text-sm no-underline hover:text-[#e0e0e0] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4 text-[#666] text-xs">
          <p>&copy; 2025 TradeSafe. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="text-[#666] text-xs no-underline hover:text-[#e0e0e0]">Privacy Policy</Link>
            <Link href="#" className="text-[#666] text-xs no-underline hover:text-[#e0e0e0]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
