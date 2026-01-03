'use client'

import EmailForm from './EmailForm'

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
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-8 pb-22 text-center">
      <div className="inline-block bg-primary/10 border border-primary/30 text-primary-light px-4 py-2 rounded-full text-xs font-medium mb-6">
        {badge}
      </div>
      
      <p className="text-base text-[#999] italic mb-8 font-normal">
        "{quote}"
      </p>
      
      <h1 
        className="text-[2.6rem] font-semibold leading-tight mb-8 text-[#e0e0e0]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      
      <div className="flex flex-col items-center gap-6 mb-8">
        <EmailForm />
        
        <div className="bg-[#151515] border border-[#2a2a2a] px-7 py-4 rounded-lg flex flex-col items-center gap-2">
          <div className="text-2xl font-semibold text-[#e0e0e0]">{priceMonth}</div>
          <div className="text-sm text-[#666]">
            {priceYear} <span className="text-green-500 font-semibold">{discount}</span>
          </div>
        </div>
      </div>
      
      <p className="text-[1.05rem] text-[#888] max-w-[680px] mx-auto mt-8 leading-relaxed">
        {subtitle}
      </p>
    </section>
  )
}
