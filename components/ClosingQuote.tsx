'use client'

interface ClosingQuoteProps {
  text: string
}

export default function ClosingQuote({ text }: ClosingQuoteProps) {
  return (
    <section className="py-16 px-8">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="text-3xl font-semibold text-[#e0e0e0] italic">
          "{text}"
        </p>
      </div>
    </section>
  )
}
