'use client'

import { useState } from 'react'

interface PricingToggleProps {
  monthlyPrice: string
  yearlyPrice: string
  discount: string
  onToggle: (isYearly: boolean) => void
}

export default function PricingToggle({ monthlyPrice, yearlyPrice, discount, onToggle }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(true)

  const handleToggle = () => {
    const newValue = !isYearly
    setIsYearly(newValue)
    onToggle(newValue)
  }

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      {/* Monthly */}
      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
          !isYearly 
            ? 'bg-gradient-to-br from-primary to-primary-dark text-white' 
            : 'bg-[#1a1a1a] text-[#888] hover:text-[#e0e0e0]'
        }`}
      >
        Monthly
        <div className="text-sm mt-1">{monthlyPrice}</div>
      </button>

      {/* Yearly */}
      <button
        onClick={handleToggle}
        className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
          isYearly 
            ? 'bg-gradient-to-br from-primary to-primary-dark text-white' 
            : 'bg-[#1a1a1a] text-[#888] hover:text-[#e0e0e0]'
        }`}
      >
        {isYearly && (
          <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}
          </div>
        )}
        Yearly
        <div className="text-sm mt-1">{yearlyPrice}</div>
      </button>
    </div>
  )
}
