'use client'

interface LegalProps {
  label: string
  title: string
  paragraphs: string[]
}

export default function Legal({ label, title, paragraphs }: LegalProps) {
  return (
    <section id="legal" className="py-20 px-8">
      <div className="max-w-[800px] mx-auto">
        <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4 text-center">{label}</div>
        <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-12 text-center">{title}</h2>
        
        <div className="bg-[#0f0f0f] border-2 border-primary rounded-xl p-10">
          <ul className="list-none space-y-6">
            {paragraphs.map((paragraph, index) => (
              <li key={index} className="flex items-start gap-4 text-[#888] leading-relaxed">
                <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
