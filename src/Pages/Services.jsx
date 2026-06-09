import Hero from '../Components/Services_Hero'
import Body from '../Components/Services_1'
import FAQ from '../Components/Services_FAQ'
import CTA from '../Components/Services_CTA'
import useRouteSeo from '../hooks/useRouteSeo'

function Services() {
  useRouteSeo('/services')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <FAQ />
      <CTA />
    </main>
  )
}

export default Services
