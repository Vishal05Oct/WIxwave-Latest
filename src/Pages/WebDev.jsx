import Hero from '../Components/Services/WebDevHero'
import Body from '../Components/Services/WebDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { webDevFaqs } from '../data/serviceFaqs'

function WebDev() {
  useRouteSeo('/services/web-dev')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={webDevFaqs} heading="Website Development FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default WebDev
