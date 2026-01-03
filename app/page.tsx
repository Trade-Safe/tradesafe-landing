import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import WhatWeAreNot from '@/components/WhatWeAreNot'
import messages from '@/messages/en.json'

export default function Home() {
  return (
    <>
      <Header nav={messages.nav} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
