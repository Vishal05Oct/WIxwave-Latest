import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { appDevFaqs, buildFaqJsonLd } from '../data/serviceFaqs'
import { getOrganizationJsonLd, getWebsiteJsonLd } from '../seo/siteJsonLd'

function AppDev() {
  useSeo({
    title: 'App Development Services | Custom Mobile & Web Apps by Wixwave',
    description:
      'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development that drives growth.',
    canonical: 'https://wixwave.co/services/app-dev',
    keywords: [
      'app development services',
      'mobile app development',
      'web app development',
      'custom software development',
      'app development company',
    ],
    og: {
      url: 'https://wixwave.co/services/app-dev',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
    jsonLdArray: [getOrganizationJsonLd(), getWebsiteJsonLd(), buildFaqJsonLd(appDevFaqs)],
  });

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
