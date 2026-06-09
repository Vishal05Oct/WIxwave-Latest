import Hero from '../Components/Services/SocialMediaHero'
import Body from '../Components/Services/SocialMediaBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useRouteSeo from '../hooks/useRouteSeo'
import { socialMediaFaqs } from '../data/serviceFaqs'

function SocialMedia() {
  useRouteSeo('/services/social-media')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={socialMediaFaqs} heading="Social Media Marketing FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default SocialMedia
