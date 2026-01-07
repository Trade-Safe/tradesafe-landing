'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  label: string
  title: string
  items: FAQItem[]
}

export default function FAQ({ label, title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-[900px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0]">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#151515] border border-[#2a2a2a] rounded-xl overflow-hidden transition-all hover:border-primary/50"
            >
              {/* Question - Clickable */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#1a1a1a]"
              >
                <span className="text-base font-semibold text-[#e0e0e0] pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-light flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[#888] leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#888] mb-4">
            Still have questions?
          </p>
          
            href="mailto:hello@trade-safe.ai"
            className="inline-block text-primary-light hover:text-primary transition-colors font-medium"
          >
            Contact us at hello@trade-safe.ai
          </a>
        </div>
      </div>
    </section>
  )
}
