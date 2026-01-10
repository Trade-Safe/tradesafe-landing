'use client'

import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    image: '/wireframes/dashboard.png'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    image: '/wireframes/analytics.png'
  },
  {
    id: 'journal',
    label: 'AI Pre-market',
    image: '/wireframes/journal.png'
  },
  {
    id: 'strict-mode',
    label: 'Strict Mode',
    image: '/wireframes/risk-settings-1.png'
  },
  {
    id: 'settings',
    label: 'Risk Settings',
    image: '/wireframes/risk-settings-2.png'
  }
]

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const active = tabs.find(t => t.id === activeTab)

  return (
    <section id="product-preview" className="py-20 bg-[#0f0f0f] border-y border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary-light text-xs font-semibold uppercase tracking-widest mb-4">
            Product Preview
          </div>
          <h2 className="text-4xl font-semibold text-[#e0e0e0]">
            What TradeSafe Looks Like?
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg'
                  : 'bg-[#151515] text-[#888] hover:text-[#e0e0e0] border border-[#2a2a2a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Wireframe Display */}
        <div className="bg-[#151515] border-2 border-primary/30 rounded-xl p-4 shadow-2xl">
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#0a0a0a]">
            <Image
              src={active!.image}
              alt={`${active!.label} preview`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
