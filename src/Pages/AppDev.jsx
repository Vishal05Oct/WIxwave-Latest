import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { appDevFaqs } from '../data/serviceFaqs'

function AppDev() {
  useRouteSeo('/services/app-dev')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={appDevFaqs} heading="App Development FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default AppDev
