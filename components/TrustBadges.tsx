'use client'

export default function TrustBadges() {
  return (
    <div className="flex items-center justify-center gap-8 mt-6">
      {/* No Credit Card Required */}
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 stroke-primary/70" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
        <span className="text-sm text-[#888]">No Credit Card Required</span>
      </div>

      {/* Cancel Anytime */}
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 stroke-primary/70" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
        <span className="text-sm text-[#888]">Cancel Anytime</span>
      </div>
    </div>
  )
}
