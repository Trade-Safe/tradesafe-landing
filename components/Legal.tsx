'use client'

interface LegalProps {
  label: string
  title: string
  paragraphs: string[]
}

export default function Legal({ label, title, paragraphs }: LegalProps) {
  return (
    <section id="legal" className="py-20 px-8 bg-[#0f0f0f] border-t border-b border-[#1a1a1a]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4 text-center">{label}</div>
        <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-8 text-center">{title}</h2>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[#888] leading-relaxed text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
