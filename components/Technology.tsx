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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🚧</span>
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
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📋</span>
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
