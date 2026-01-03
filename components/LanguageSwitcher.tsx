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
    <div className="flex items-center gap-2 border border-[#2a2a2a] rounded-md overflow-hidden">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1.5 text-xs font-medium transition-all ${
          currentLang === 'en'
            ? 'bg-primary text-white'
            : 'bg-transparent text-[#888] hover:text-[#e0e0e0]'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1.5 text-xs font-medium transition-all ${
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
