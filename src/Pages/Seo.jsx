import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, seoFaqs } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function Seo() {
  const canonical = 'https://wixwave.co/services/seo'
  useSeo({
    title: 'SEO Services in Patna & Gurugram (Gurgaon) | Wixwave',
    description:
      "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram (Gurgaon): technical SEO, on-page optimization, content strategy, and performance improvements.",
    canonical,
    keywords: [
      'seo services patna',
      'seo services gurugram',
      'seo services gurgaon',
      'local seo',
      'technical seo services',
      'on page seo services',
      'answer engine optimization',
      'geo seo',
    ],
    robots: 'index,follow',
    aeo: {
      googlebot: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
      bingbot: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
    },
    geo: {
      region: 'IN-BR',
      placename: 'Patna, Gurugram, Gurgaon',
      position: '25.5941;85.1376',
      icbm: '25.5941, 85.1376',
    },
    og: {
      url: canonical,
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical,
        title: 'SEO Services in Patna & Gurugram (Gurgaon) | Wixwave',
        description:
          "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram (Gurgaon): technical SEO, on-page optimization, content strategy, and performance improvements.",
        about: [
          { '@type': 'Thing', name: 'SEO Services', url: canonical },
          { '@type': 'Thing', name: 'Technical SEO' },
          { '@type': 'Thing', name: 'Local SEO' },
          { '@type': 'Thing', name: 'Answer Engine Optimization' },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'SEO Services',
        description:
          "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram (Gurgaon): technical SEO, on-page optimization, content strategy, and performance improvements.",
        serviceType: 'SEO Services',
      }),
      breadcrumbsFor('seo', canonical),
      buildFaqJsonLd(seoFaqs, canonical),
    ],
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
