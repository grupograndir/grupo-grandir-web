import React from 'react'
import Hero from './components/Hero'
import Transformation from './components/Transformation'
import PainPoints from './components/PainPoints'
import GrandirAnalytics from './components/GrandirAnalytics'
import ServicesHero from './components/ServicesHero'
import Methodology from './components/Methodology'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent selection:text-white">
      <Hero />
      <PainPoints />
      <Transformation />
      <ServicesHero />
      <GrandirAnalytics />
      <Methodology />
      <FAQ />
      <FinalCTA />
      <Footer />
      <BottomNav />
    </main>
  )
}

export default App
