import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import WaitlistWelcome from '@/emails/WaitlistWelcome'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: Request) {
  try {
    // Vérifier que la clé API est bien présente
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing!')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const { email } = await request.json()

    // Validation email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 1. Sauvegarder dans Supabase
    const supabaseResponse = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/waitlist`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          email,
          created_at: new Date().toISOString()
        })
      }
    )

    if (!supabaseResponse.ok) {
      const errorText = await supabaseResponse.text()
      console.error('Supabase error:', errorText)
      throw new Error('Failed to save to database')
    }

    // 2. Envoyer email via Resend
    const { data, error } = await resend.emails.send({
      from: 'TradeSafe <hello@trade-safe.ai>',
      to: [email],
      subject: 'Welcome to TradeSafe Waitlist 🚀',
      react: WaitlistWelcome({ email })
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist!', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
