'use client'

import { useState } from 'react'
import EmailModal from './EmailModal'

interface NextGenerationProps {
  label: string
  title: string
  lead: string
  description: string
  pillars: string[]
  approach: string
  status: string
  cta: string
  note: string
}

// Icônes des piliers, dans l'ordre de `pillars` : régime, routage, risque, exécution
const pillarIcons = [
  <path key="regime" d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  <g key="routing">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </g>,
  <g key="risk">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </g>,
  <g key="execution">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </g>,
]

export default function NextGeneration({ label, title, lead, description, pillars, approach, status, cta, note }: NextGenerationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="next-generation" className="scroll-mt-20 px-8 pb-24">
        <div className="relative max-w-[1000px] mx-auto overflow-hidden bg-[#0f0f0f] border-2 border-primary/40 rounded-2xl px-6 py-12 md:px-12 text-center">
          {/* Halo discret */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative">
            <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">{label}</div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e0e0e0] mb-4 leading-tight">{title}</h2>
            <p className="text-lg text-[#e0e0e0] mb-4">{lead}</p>
            <p className="text-base text-[#888] max-w-[680px] mx-auto leading-relaxed mb-10">{description}</p>

            {/* Piliers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px] mx-auto mb-10">
              {pillars.map((pillar, index) => (
                <div key={pillar} className="bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 py-5 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary-light">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {pillarIcons[index]}
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#e0e0e0] leading-tight">{pillar}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#888] italic max-w-[640px] mx-auto leading-relaxed mb-10">{approach}</p>

            {/* Statut + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary-light px-4 py-2 rounded-full text-xs font-semibold">
                <span className="relative flex w-2 h-2" aria-hidden="true">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-primary-light opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-primary-light" />
                </span>
                {status}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-transparent text-primary-light border border-primary/40 rounded-lg text-sm font-semibold transition-all hover:bg-primary/10 hover:border-primary cursor-pointer"
              >
                {cta}
              </button>
            </div>

            <p className="text-xs text-[#666] mt-8">{note}</p>
          </div>
        </div>
      </section>

      {/* Email Modal */}
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
