import React from 'react'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Transformation from './components/Transformation'
import ServicesHero from './components/ServicesHero'
import GrandirAnalytics from './components/GrandirAnalytics'
import Methodology from './components/Methodology'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'

function AppDesktop() {
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

export default AppDesktop
