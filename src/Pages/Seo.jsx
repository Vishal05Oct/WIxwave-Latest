import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { seoFaqs } from '../data/serviceFaqs'

function Seo() {
  useRouteSeo('/services/seo')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={seoFaqs} heading="SEO Services FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default Seo
