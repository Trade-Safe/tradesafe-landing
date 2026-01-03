'use client'

interface Step {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {
  label: string
  title: string
  steps: Step[]
}

export default function HowItWorks({ label, title, steps }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 bg-[#0f0f0f] border-t border-b border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">{label}</div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0]">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-[50px] h-[50px] bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white">
                {step.number}
              </div>
              <h3 className="text-xl text-[#e0e0e0] mb-4 font-semibold">{step.title}</h3>
              <p className="text-[#888] leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
