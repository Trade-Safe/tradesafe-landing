'use client'

import { useState } from 'react'
import EmailForm from './EmailForm'
import PricingToggle from './PricingToggle'

interface PricingProps {
  label: string
  title: string
  subtitle: string
  badge: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  discount: string
  features: string[]
  roi?: {
    title: string
    intro: string
    subtitle: string
    points: string[]
    why: string
    impact: string
    conclusion: string
  }
}

export default function Pricing({ label, title, subtitle, badge, description, monthlyPrice, yearlyPrice, discount, features, roi }: PricingProps) {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-8">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">{label}</div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-4">{title}</h2>
          <p className="text-base text-[#888] max-w-[600px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="-mt-4">
          <PricingToggle 
            monthlyPrice={monthlyPrice}
            yearlyPrice={yearlyPrice}
            discount={discount}
            onToggle={setIsYearly}
          />
        </div>
        
        <div className="max-w-[450px] mx-auto bg-[#151515] border-2 border-primary rounded-2xl p-10 text-center relative overflow-visible">
  {/* Badge Early Access */}
  <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2 rounded-full text-xs font-semibold z-10">
    {badge}
  </div>

  {/* Badge MOST POPULAR - Ribbon à droite */}
  {isYearly && (
    <div className="absolute top-8 -right-3 flex items-center gap-1.5 bg-gradient-to-br from-primary to-primary-dark text-white px-4 py-2 rounded-l-lg shadow-lg z-20">
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <span className="text-xs font-semibold whitespace-nowrap">MOST POPULAR</span>
    </div>
  )}
  
  <p className="text-[#888] text-sm mt-6 mb-6">
    {description}
  </p>
  
  {/* Price Display */}
  <div className="mt-8 mb-8 p-4 bg-[#0f0f0f] rounded-lg">
    <div className="text-3xl font-bold text-[#e0e0e0]">
      {isYearly ? yearlyPrice : monthlyPrice}
    </div>
    {isYearly && (
      <div className="text-green-500 font-semibold text-sm mt-2">
        {discount}
      </div>
    )}
  </div>
  
  <ul className="list-none my-8 text-left space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center gap-3 text-[#888] text-sm">
        <span className="text-primary font-bold text-lg">✓</span>
        {feature}
      </li>
    ))}
  </ul>
  
  <div className="mt-8">
    <EmailForm />
  </div>
</div>

        {/* ROI Section */}
        {roi && (
          <div className="max-w-[700px] mx-auto mt-16 p-8 bg-[#0f0f0f] border-2 border-primary rounded-xl">
            <h3 className="text-2xl font-semibold text-[#e0e0e0] mb-4 text-center">{roi.title}</h3>
            <p className="text-[#888] text-center mb-6">{roi.intro}</p>
            
            <p className="text-[#e0e0e0] font-medium mb-3">{roi.subtitle}</p>
            <ul className="list-none space-y-2 mb-6">
              {roi.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888] text-sm">
                  <span className="text-primary">•</span>
                  {point}
                </li>
              ))}
            </ul>
            
            <p className="text-[#e0e0e0] font-medium mb-2">{roi.why}</p>
            <p className="text-[#888] mb-4">{roi.impact}</p>
            <p className="text-[#888] italic">{roi.conclusion}</p>
          </div>
        )}
      </div>
    </section>
  )
}
