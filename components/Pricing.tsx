'use client'

import EmailFormPricing from './EmailFormPricing'

interface PricingProps {
  label: string
  title: string
  subtitle: string
  badge: string
  description: string
  priceYear: string
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

export default function Pricing({ label, title, subtitle, badge, description, priceYear, discount, features, roi }: PricingProps) {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">{label}</div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-4">{title}</h2>
          <p className="text-base text-[#888] max-w-[600px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-[450px] mx-auto bg-[#151515] border-2 border-primary rounded-2xl p-10 text-center relative">
          <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2 rounded-full text-xs font-semibold">
            {badge}
          </div>
          
          <p className="text-[#888] text-sm mt-6 mb-6">
            {description}
          </p>
          
          <div className="mt-8 mb-8 p-3 bg-[#0f0f0f] rounded-lg">
            <span className="text-[#e0e0e0] font-semibold">{priceYear}</span>{' '}
            <span className="text-green-500 font-semibold text-sm">{discount}</span>
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
            <EmailFormPricing />
          </div>
        </div>

        {/* ROI Section */}
        {roi && (
          <div className="max-w-[700px] mx-auto mt-16 p-8 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl">
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
