import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import messages from '@/messages/en.json'

interface PolicySection {
  title: string
  body: ReactNode
}

interface PolicyPageProps {
  label: string
  title: string
  lastUpdated: string
  sections: PolicySection[]
}

// Mise en page commune des pages Privacy / Terms, dans le style de la page Legal
export default function PolicyPage({ label, title, lastUpdated, sections }: PolicyPageProps) {
  return (
    <>
      <Header nav={messages.nav} />
      <main className="min-h-screen py-20 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            {label}
          </div>
          <h1 className="text-5xl font-semibold text-[#e0e0e0] mb-4 text-center">
            {title}
          </h1>
          <p className="text-sm text-[#888] mb-12 text-center">Last updated: {lastUpdated}</p>

          <div className="bg-[#0f0f0f] border-2 border-primary rounded-xl p-8 md:p-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-[#e0e0e0] mb-3">{section.title}</h2>
                <div className="text-[#a8a8a8] leading-relaxed space-y-3">{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer {...messages.footer} />
    </>
  )
}
