'use client'

interface TechnologyProps {
  label: string
  title: string
  intro: string
  developmentTitle: string
  developmentSubtitle: string
  developmentPoints: string[]
  roadmapTitle: string
  roadmapSubtitle: string
  roadmapPoints: string[]
  disclaimer: string
}

export default function Technology({ 
  label, 
  title, 
  intro, 
  developmentTitle, 
  developmentSubtitle,
  developmentPoints, 
  roadmapTitle, 
  roadmapSubtitle,
  roadmapPoints, 
  disclaimer 
}: TechnologyProps) {
  return (
    <section id="technology" className="py-20 px-8">
      <div className="max-w-[900px] mx-auto">
        <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4 text-center">{label}</div>
        <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-6 text-center">{title}</h2>
        <p className="text-lg text-[#888] mb-12 text-center leading-relaxed">{intro}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* In Active Development */}
          <div className="bg-[#0f0f0f] border-2 border-primary rounded-xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">{developmentTitle}</h3>
            </div>
            <p className="text-sm text-[#888] mb-6 italic">{developmentSubtitle}</p>
            <ul className="list-none space-y-4">
              {developmentPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888]">
                  <span className="text-primary font-bold text-lg">⟳</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Planned Roadmap */}
          <div className="bg-[#0f0f0f] border-2 border-primary/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 stroke-primary/70" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">{roadmapTitle}</h3>
            </div>
            <p className="text-sm text-[#888] mb-6 italic">{roadmapSubtitle}</p>
            <ul className="list-none space-y-4">
              {roadmapPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888]">
                  <span className="text-primary/50 font-bold text-lg">○</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="text-center text-sm text-[#666] italic">{disclaimer}</p>
      </div>
    </section>
  )
}
