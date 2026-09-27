import { useEffect, useSyncExternalStore } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Timeline } from './components/Timeline'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { BackgroundFX } from './components/BackgroundFX'
import { CaseStudy } from './components/CaseStudy'
import { CaseStudyNautilus } from './components/CaseStudyNautilus'
import { CaseStudyIGA } from './components/CaseStudyIGA'
import { CaseStudyFortify } from './components/CaseStudyFortify'
import { CaseStudyWinWire } from './components/CaseStudyWinWire'

function subscribe(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

// Hash routes start with "#/"; plain anchors (e.g. #work) stay on the landing page.
function getRoute() {
  const hash = window.location.hash
  return hash.startsWith('#/') ? hash.slice(1) : '/'
}

function Landing() {
  // Route changes (e.g. a case study's "Back to work" link) swap this component in
  // after the browser's native scroll-to-fragment already ran, so re-run it on mount.
  useEffect(() => {
    const hash = window.location.hash
    if (!hash || hash === '#top') return
    const target = document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' })
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="site-main">
        <Hero />
        <Work />
        <Timeline />
        <About />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const route = useSyncExternalStore(subscribe, getRoute)

  let page
  if (route.startsWith('/case/sast')) {
    page = <CaseStudy />
  } else if (route.startsWith('/case/nautilus')) {
    page = <CaseStudyNautilus />
  } else if (route.startsWith('/case/iga')) {
    page = <CaseStudyIGA />
  } else if (route.startsWith('/case/fortify')) {
    page = <CaseStudyFortify />
  } else if (route.startsWith('/case/winwire')) {
    page = <CaseStudyWinWire />
  } else {
    page = <Landing />
  }

  return (
    <>
      <BackgroundFX />
      {page}
    </>
  )
}

export default App
