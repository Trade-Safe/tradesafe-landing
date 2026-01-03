'use client'

interface WhatWeAreNotProps {
  title: string
  point1: string
  point2: string
  point3: string
  closing: string
}

export default function WhatWeAreNot({ title, point1, point2, point3, closing }: WhatWeAreNotProps) {
  return (
    <section className="py-20 px-8 bg-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#e0e0e0]">
          {title}
        </h2>
        
        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4 p-6 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg">
            <span className="text-2xl flex-shrink-0">❌</span>
            <p className="text-[#888] text-lg leading-relaxed">{point1}</p>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg">
            <span className="text-2xl flex-shrink-0">❌</span>
            <p className="text-[#888] text-lg leading-relaxed">{point2}</p>
          </div>
          
          <div className="flex items-start gap-4 p-6 bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg">
            <span className="text-2xl flex-shrink-0">❌</span>
            <p className="text-[#888] text-lg leading-relaxed">{point3}</p>
          </div>
        </div>
        
        <p className="text-center text-xl font-medium text-primary italic">
          {closing}
        </p>
      </div>
    </section>
  )
}
