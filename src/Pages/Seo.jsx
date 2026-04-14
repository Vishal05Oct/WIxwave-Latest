import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, seoFaqs } from '../data/serviceFaqs'

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
    jsonLd: buildFaqJsonLd(seoFaqs),
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={seoFaqs} heading="SEO Services FAQs" />
    </main>
  )
}

export default Seo
