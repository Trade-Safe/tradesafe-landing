export default function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "AI-Powered Shield System",
      description: "Set rules you can't break—even when emotions spike. Configure daily loss limits, max trades, and time restrictions with Strict Mode enforcement."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Real-Time AI Assistant",
      description: "Chrome extension monitors every trade live. Instant intervention when you approach risk thresholds or exhibit dangerous patterns."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Risky Behavior Detection",
      description: "TradeSafe predicts emotional mistakes before they happen. AI identifies revenge trading, FOMO, and over-leveraging patterns instantly."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Track your Discipline Score, not just P&L. Your Discipline Score always tells the truth—understand behavioral patterns with AI insights."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: "AI-Guided Review",
      description: "Daily pre-market analysis by Claude AI and guided end-session reviews. Build better habits with structured journaling templates."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Optimize Your Mindset",
      description: "Start your trading day with guided meditation or silent focus sessions. Prepare your mind before the market opens with neurological prep tools."
    }
  ]

  return (
    <section id="features" className="py-20 bg-[#0f0f0f] border-t border-b border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">Features</div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0] mb-4">Built to Protect Your Capital</h2>
          <p className="text-base text-[#888] max-w-[600px] mx-auto leading-relaxed">
            A complete AI-system designed specifically for retail traders who struggle with discipline.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-8 text-center transition-all hover:border-primary hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary-light">
                {feature.icon}
              </div>
              <h3 className="text-lg text-[#e0e0e0] mb-3 font-semibold">{feature.title}</h3>
              <p className="text-[#888] leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
