'use client'

interface Feature {
  icon: JSX.Element
  title: string
  description: string
}

interface FeaturesProps {
  label: string
  title: string
  subtitle: string
  features: Feature[]
}

export default function Features({ label, title, subtitle, features }: FeaturesProps) {
  return (
    <section id="features" className="py-20 bg-[#0f0f0f] border-t border-b border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">{label}</div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-4">{title}</h2>
          <p className="text-base text-[#888] max-w-[600px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-8 text-center transition-all hover:border-primary hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary-light">
                {feature.icon}
              </div>
              <h3 className="text-lg text-[#e0e0e0] mb-3 font-semibold">{feature.title}</h3>
              <p className="text-[#888] leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
