import Hero from '../Components/Services/WebDevHero'
import Body from '../Components/Services/WebDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, webDevFaqs } from '../data/serviceFaqs'
import { breadcrumbsFor, buildWebPageJsonLd } from '../seo/siteJsonLd'

function WebDev() {
  useSeo({
    title:
      'Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave',
    description:
      'Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram (Gurgaon). Get a responsive, high-converting website designed for growth and online success.',
    canonical: 'https://wixwave.co/services/web-dev',
    keywords: [
      'website development company patna',
      'website development company gurugram',
      'website development company gurgaon',
      'web design patna',
      'web design gurugram',
    ],
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/services/web-dev',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/services/web-dev',
        title:
          'Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave',
        description:
          'Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram (Gurgaon). Get a responsive, high-converting website designed for growth and online success.',
      }),
      breadcrumbsFor('web-dev', 'https://wixwave.co/services/web-dev'),
      buildFaqJsonLd(webDevFaqs, 'https://wixwave.co/services/web-dev'),
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
