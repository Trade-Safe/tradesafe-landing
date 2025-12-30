import EmailForm from './EmailForm'

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-8 pb-22 text-center">
      <div className="inline-block bg-primary/10 border border-primary/30 text-primary-light px-4 py-2 rounded-full text-xs font-medium mb-6">
        Coming Soon
      </div>
      
      <p className="text-base text-[#999] italic mb-8 font-normal">
        "Don't focus on mastering technical analysis, focus on mastering yourself!"
      </p>
      
      <h1 className="text-[2.6rem] font-semibold leading-tight mb-8 text-[#e0e0e0]">
        The First AI Discipline System<br />for Retail Traders
      </h1>
      
      <div className="flex flex-col items-center gap-6 mb-8">
        <EmailForm />
        
        <div className="bg-[#151515] border border-[#2a2a2a] px-7 py-4 rounded-lg flex flex-col items-center gap-2">
          <div className="text-2xl font-semibold text-[#e0e0e0]">€19.90/month</div>
          <div className="text-sm text-[#666]">
            or €144.90/year <span className="text-green-500 font-semibold">(save 40%)</span>
          </div>
        </div>
      </div>
      
      <p className="text-[1.05rem] text-[#888] max-w-[680px] mx-auto mt-8 leading-relaxed">
        TradeSafe detects emotional trading patterns and acts as an intelligent shield system to protect your capital in real-time.
      </p>
    </section>
  )
}
