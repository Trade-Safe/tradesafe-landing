'use client'

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-0 border border-[#2a2a2a] rounded-sm overflow-hidden">
      <button
        className="px-2 py-0.5 text-[10px] font-medium bg-primary text-white transition-all"
      >
        EN
      </button>
      {/* FR temporairement désactivé
      <button
        onClick={() => window.location.href = '/fr'}
        className="px-2 py-0.5 text-[10px] font-medium bg-transparent text-[#888] hover:text-[#e0e0e0] transition-all"
      >
        FR
      </button>
      */}
    </div>
  )
}
