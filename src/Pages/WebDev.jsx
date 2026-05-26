import Hero from '../Components/Services/WebDevHero'
import Body from '../Components/Services/WebDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, webDevFaqs } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function WebDev() {
  const canonical = 'https://wixwave.co/services/web-dev'
  useSeo({
    title:
      'Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave',
    description:
      'Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram (Gurgaon). Get a responsive, high-converting website designed for growth and online success.',
    canonical,
    keywords: [
      'website development company patna',
      'website development company gurugram',
      'website development company gurgaon',
      'web design patna',
      'web design gurugram',
      'seo ready website development',
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
        title:
          'Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave',
        description:
          'Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram (Gurgaon). Get a responsive, high-converting website designed for growth and online success.',
        about: [
          { '@type': 'Thing', name: 'Website Development', url: canonical },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'Website Development',
        description:
          'Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram (Gurgaon). Get a responsive, high-converting website designed for growth and online success.',
        serviceType: 'Website Development',
      }),
      breadcrumbsFor('web-dev', canonical),
      buildFaqJsonLd(webDevFaqs, canonical),
    ],
  });

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
