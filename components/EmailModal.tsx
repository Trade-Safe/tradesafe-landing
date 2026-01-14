'use client'

import { useState, useEffect } from 'react'
import EmailForm from './EmailForm'

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  // Fermer avec ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Bloquer scroll body quand modal ouvert
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-[#0f0f0f] border-2 border-primary/30 rounded-2xl max-w-[500px] w-full p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#666] hover:text-[#e0e0e0] transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-[#e0e0e0] mb-2">
            Join the waitlist
          </h2>
          <p className="text-sm text-[#888]">
            Get early access when we launch in Q1 2026
          </p>
        </div>

        {/* Email Form */}
        <EmailForm />

        {/* Footer note */}
        <p className="text-xs text-[#666] text-center mt-6">
          By joining, you'll receive updates about TradeSafe's launch. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
