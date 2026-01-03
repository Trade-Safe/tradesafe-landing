'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Détermine la langue actuelle basée sur l'URL
  const currentLang = pathname.startsWith('/fr') ? 'fr' : 'en'
  
  const switchLanguage = (lang: 'en' | 'fr') => {
    if (lang === 'en') {
      // Retour à la racine pour EN
      router.push('/')
    } else {
      // Navigation vers /fr
      router.push('/fr')
    }
  }
  
  return (
    <div className="flex items-center gap-0 border border-[#2a2a2a] rounded-sm overflow-hidden">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-0.5 text-[10px] font-medium transition-all ${
          currentLang === 'en'
            ? 'bg-primary text-white'
            : 'bg-transparent text-[#888] hover:text-[#e0e0e0]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-2 py-0.5 text-[10px] font-medium transition-all ${
          currentLang === 'fr'
            ? 'bg-primary text-white'
            : 'bg-transparent text-[#888] hover:text-[#e0e0e0]'
        }`}
      >
        FR
      </button>
    </div>
  )
}
