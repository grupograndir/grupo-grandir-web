import React from 'react'
import Hero from './components/Hero'
import Transformation from './components/Transformation'
import PainPoints from './components/PainPoints'
import GrandirAnalytics from './components/GrandirAnalytics'

function App() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent selection:text-white">
      <Hero />
      <Transformation />
      <PainPoints />
      <GrandirAnalytics />
    </main>
  )
}

export default App
