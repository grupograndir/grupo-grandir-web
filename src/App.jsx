import React from 'react'
import AppDesktop from './AppDesktop'
import AppMobile from './AppMobile'
import useIsMobile from './hooks/useIsMobile'

function App() {
  const isMobile = useIsMobile();

  // Show nothing while evaluating on first render to avoid flash of wrong content
  if (isMobile === undefined) return null;

  return isMobile ? <AppMobile /> : <AppDesktop />;
}

export default App
