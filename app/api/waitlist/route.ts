import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import WaitlistWelcome from '@/emails/WaitlistWelcome'

// Origines de CTA acceptées dans la colonne `source` (toute autre valeur → DEFAULT_SOURCE)
const SOURCES = ['header', 'hero', 'next_generation_follow_project', 'early_access_section']
const DEFAULT_SOURCE = 'landing_page'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type WaitlistStatus = 'registered' | 'already_registered' | 'invalid_email' | 'error'

function reply(status: WaitlistStatus, httpStatus: number, extra: Record<string, unknown> = {}) {
  return NextResponse.json({ status, ...extra }, { status: httpStatus })
}

export async function POST(request: Request) {
  let payload: { email?: unknown; source?: unknown }
  try {
    payload = await request.json()
  } catch {
    return reply('invalid_email', 400)
  }

  // 1. Normalisation + validation côté serveur
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return reply('invalid_email', 400)
  }
  const source =
    typeof payload.source === 'string' && SOURCES.includes(payload.source) ? payload.source : DEFAULT_SOURCE

  // Identifiants serveur uniquement (jamais de NEXT_PUBLIC_*) : sans eux, l'inscription est refusée
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SECRET_KEY
  if (!supabaseUrl || !supabaseKey) {
    console.error('[waitlist] SUPABASE_URL or SUPABASE_SECRET_KEY is missing')
    return reply('error', 503)
  }

  // 2. Enregistrement Supabase (opération principale).
  // Les doublons sont détectés par la contrainte d'unicité sur `email` : PostgREST renvoie 409 (23505).
  let insert: Response
  try {
    insert = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, source }),
      cache: 'no-store',
    })
  } catch (error) {
    console.error('[waitlist] Supabase unreachable:', error)
    return reply('error', 503)
  }

  if (insert.status === 409) {
    return reply('already_registered', 200)
  }
  if (!insert.ok) {
    console.error('[waitlist] Supabase insert failed:', insert.status, await insert.text())
    return reply('error', 500)
  }

  // 3. E-mail de bienvenue, uniquement pour une nouvelle inscription.
  // Un échec d'envoi n'annule pas l'inscription déjà enregistrée.
  const emailSent = await sendWelcomeEmail(email)
  return reply('registered', 200, { emailSent })
}

async function sendWelcomeEmail(email: string): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.error('[waitlist] RESEND_API_KEY is missing, welcome email not sent')
    return false
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'TradeSafe <hello@trade-safe.ai>',
      to: [email],
      subject: 'Welcome to TradeSafe',
      react: WaitlistWelcome(),
    })
    if (error) {
      console.error('[waitlist] Resend error:', error)
      return false
    }
    return true
  } catch (error) {
    console.error('[waitlist] Resend request failed:', error)
    return false
  }
}
