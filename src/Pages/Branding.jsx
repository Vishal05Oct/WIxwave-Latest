import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { brandingFaqs } from '../data/serviceFaqs'

function Branding() {
  useRouteSeo('/services/branding')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={brandingFaqs} heading="Branding FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default Branding
