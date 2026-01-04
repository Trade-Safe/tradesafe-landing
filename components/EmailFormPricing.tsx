'use client'

import { useState } from 'react'

export default function EmailFormPricing() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      
      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[420px] mx-auto px-4 sm:px-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="w-full sm:flex-1 px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[#e0e0e0] text-center sm:text-left placeholder:text-[#666] focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-br from-primary to-primary-dark text-white rounded-md text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/35 disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'success' && (
        <p className="text-green-500 text-sm mt-2 w-full text-center">Thanks for joining!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2 w-full text-center">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
