import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, seoFaqs } from '../data/serviceFaqs'
import { getOrganizationJsonLd, getWebsiteJsonLd } from '../seo/siteJsonLd'

function Seo() {
  useSeo({
    title: 'SEO Services in Patna & Gurugram (Gurgaon) | Wixwave',
    description:
      "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram (Gurgaon): technical SEO, on-page optimization, content strategy, and performance improvements.",
    canonical: 'https://wixwave.co/services/seo',
    keywords: ['seo services patna', 'seo services gurugram', 'seo services gurgaon', 'local seo'],
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/services/seo',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [getOrganizationJsonLd(), getWebsiteJsonLd(), buildFaqJsonLd(seoFaqs)],
  });

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
