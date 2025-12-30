import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Vérifier si l'email existe déjà
    const { data: existing, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'This email is already registered' },
        { status: 409 }
      )
    }

    // Insérer le nouvel email
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase(),
          created_at: new Date().toISOString(),
          source: 'landing_page'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to register email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully registered!' },
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
