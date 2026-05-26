import Hero from '../Components/Services_Hero'
import Body from '../Components/Services_1'
import FAQ from '../Components/Services_FAQ'
import CTA from '../Components/Services_CTA'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, servicesHubFaqs } from '../data/serviceFaqs'
import {
  breadcrumbsFor,
  buildServiceJsonLd,
  buildServicesItemListJsonLd,
  buildWebPageJsonLd,
  SERVICE_CATALOG,
  SITE,
} from '../seo/siteJsonLd'

const SERVICES_CANONICAL = 'https://wixwave.co/services'
const SERVICES_TITLE =
  'Digital Agency Patna & Gurugram | Web, App, SEO, AEO & Marketing'
const SERVICES_DESCRIPTION =
  'Wixwave is a Patna and Gurugram digital agency for website development, app development, SEO, branding, social media, and paid ads. Strategy-led execution with free consultation and measurable growth.'

function Services() {
  useSeo({
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    canonical: SERVICES_CANONICAL,
    keywords: [
      'website development company patna',
      'website development company gurugram',
      'website development company gurgaon',
      'seo services patna',
      'seo services gurugram',
      'answer engine optimization services india',
      'geo seo services gurgaon',
      'digital marketing agency patna',
      'digital marketing agency gurugram',
      'best it company in patna',
    ],
    robots: 'index,follow',
    aeo: {
      googlebot: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
      bingbot: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
    },
    geo: {
      region: 'IN-HR',
      placename: 'Patna, Gurugram, Gurgaon',
      position: '28.4595;77.0266',
      icbm: '28.4595, 77.0266',
    },
    og: {
      url: SERVICES_CANONICAL,
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: SERVICES_CANONICAL,
        title: SERVICES_TITLE,
        description: SERVICES_DESCRIPTION,
        about: SERVICE_CATALOG.map((service) => ({
          '@type': 'Thing',
          name: service.name,
          url: `${SITE.url}${service.path}`,
        })),
      }),
      breadcrumbsFor('services', SERVICES_CANONICAL),
      buildServicesItemListJsonLd(),
      buildFaqJsonLd(servicesHubFaqs, SERVICES_CANONICAL),
      ...SERVICE_CATALOG.map((service) =>
        buildServiceJsonLd({
          canonical: `${SITE.url}${service.path}`,
          name: service.name,
          description: service.description,
          serviceType: service.name,
        })
      ),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <FAQ />
      <CTA />
    </main>
  )
}

export default Services
