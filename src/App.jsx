import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Transformation from './components/Transformation'
import PainPoints from './components/PainPoints'

function App() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent selection:text-white">
      <Header />
      <Hero />
      <Transformation />
      <PainPoints />
    </main>
  )
}

export default App
