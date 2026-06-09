import Hero from '../Components/Services/PaidAdsHero'
import Body from '../Components/Services/PaidAdsBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { paidAdsFaqs } from '../data/serviceFaqs'

function PaidAds() {
  useRouteSeo('/services/paid-ads')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={paidAdsFaqs} heading="Paid Advertising FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default PaidAds
