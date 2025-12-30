'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong')
        return
      }

      // Succès - Afficher le pop-up
      setShowPopup(true)
      setEmail('')

      // Fermer automatiquement après 3 secondes
      setTimeout(() => {
        setShowPopup(false)
      }, 3000)
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            className="flex-1 px-4 py-3 bg-[#151515] border border-[#2a2a2a] rounded-lg text-[#e0e0e0] placeholder-[#666] focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-gradient-to-br from-primary to-primary-dark text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </form>

      {/* Pop-up de confirmation */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#151515] border-2 border-primary rounded-xl p-6 max-w-sm w-full shadow-2xl shadow-primary/20 animate-in zoom-in duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">You're on the list!</h3>
            </div>
            <p className="text-[#888] mb-4">
              Thanks for joining the waitlist. We'll notify you as soon as TradeSafe launches.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
