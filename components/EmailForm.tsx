'use client'

import { useState } from 'react'

// Origine du CTA, enregistrée dans la colonne `source` de la table waitlist
export type WaitlistSource = 'header' | 'hero' | 'next_generation_follow_project' | 'early_access_section'

interface EmailFormProps {
  source: WaitlistSource
}

const MESSAGES = {
  registered: "You're on the TradeSafe waitlist. Check your inbox for a welcome email.",
  registeredWithoutEmail: "You're on the TradeSafe waitlist.",
  alreadyRegistered: "You're already on the TradeSafe waitlist.",
  invalidEmail: 'Please enter a valid email address.',
  error: 'Something went wrong. Please try again in a moment.',
}

export default function EmailForm({ source }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source })
      })

      const data = await response.json().catch(() => ({}))

      if (data.status === 'registered') {
        setStatus('success')
        setMessage(data.emailSent ? MESSAGES.registered : MESSAGES.registeredWithoutEmail)
        setEmail('')
      } else if (data.status === 'already_registered') {
        setStatus('success')
        setMessage(MESSAGES.alreadyRegistered)
        setEmail('')
      } else if (data.status === 'invalid_email') {
        setStatus('error')
        setMessage(MESSAGES.invalidEmail)
      } else {
        setStatus('error')
        setMessage(MESSAGES.error)
      }
    } catch (error) {
      setStatus('error')
      setMessage(MESSAGES.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 bg-[#151515] border border-[#2a2a2a] rounded-lg text-[#e0e0e0] placeholder-[#666] focus:outline-none focus:border-primary transition-colors text-center sm:text-left"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>

      {message && (
        <p role="status" className={`text-sm font-medium text-center ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
