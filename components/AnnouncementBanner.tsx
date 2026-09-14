interface AnnouncementBannerProps {
  badge: string
  title: string
  text: string
  cta: string
}

export default function AnnouncementBanner({ badge, title, text, cta }: AnnouncementBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#0a0a0a] via-primary/25 to-[#0a0a0a] border-b border-primary/30">
      <a
        href="#next-generation"
        className="group max-w-[1200px] mx-auto px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center no-underline"
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-primary/40 bg-primary/20 text-primary-light text-[10px] font-semibold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" aria-hidden="true" />
          {badge}
        </span>

        {/* Message (phrase complète à partir de sm) */}
        <span className="text-xs sm:text-sm text-[#e0e0e0]">
          <strong className="font-semibold">{title}</strong>
          <span className="hidden sm:inline text-[#b5b5b5]"> {text}</span>
        </span>

        {/* Lien vers la section Next Generation */}
        <span className="text-xs sm:text-sm font-medium text-primary-light group-hover:text-[#e0e0e0] transition-colors whitespace-nowrap">
          {cta} <span aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  )
}
