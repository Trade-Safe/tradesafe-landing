import Header from '@/components/Header'
import Footer from '@/components/Footer'
import messages from '@/messages/en.json'

export default function LegalPage() {
  return (
    <>
      <Header nav={messages.nav} />
      <main className="min-h-screen py-20 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4 text-center">
            {messages.legal.label}
          </div>
          <h1 className="text-5xl font-semibold text-[#e0e0e0] mb-12 text-center">
            {messages.legal.title}
          </h1>
          
          <div className="bg-[#0f0f0f] border-2 border-primary rounded-xl p-10">
            <ul className="list-none space-y-6">
              {messages.legal.paragraphs.map((paragraph, index) => (
                <li key={index} className="flex items-start gap-4 text-[#888] leading-relaxed">
                  <span className="text-primary font-bold text-lg flex-shrink-0 mt-1">•</span>
                  <span>{paragraph}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer {...messages.footer} />
    </>
  )
}
