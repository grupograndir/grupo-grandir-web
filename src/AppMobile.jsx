import React from 'react'
import Hero from './movil/Hero'
import PainPoints from './movil/PainPoints'
import Transformation from './movil/Transformation'
import ServicesHero from './movil/ServicesHero'
import GrandirAnalytics from './movil/GrandirAnalytics'
import Methodology from './movil/Methodology'
import FAQ from './movil/FAQ'
import FinalCTA from './movil/FinalCTA'
import Footer from './movil/Footer'
import BottomNav from './movil/BottomNav'

function AppMobile() {
    return (
        <main className="bg-background min-h-screen text-white selection:bg-accent selection:text-white">
            {/* Añadiremos padding inferior extra para que el BottomNav móvil no tape el contenido */}
            <div className="pb-24">
                <Hero />
                <PainPoints />
                <Transformation />
                <ServicesHero />
                <GrandirAnalytics />
                <Methodology />
                <FAQ />
                <FinalCTA />
                <Footer />
            </div>
            <BottomNav />
        </main>
    )
}

export default AppMobile
