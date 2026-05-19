import Hero from '../Components/Services_Hero'
import Body from '../Components/Services_1'
import FAQ from '../Components/Services_FAQ'
import CTA from '../Components/Services_CTA'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, servicesHubFaqs } from '../data/serviceFaqs'
import {
  breadcrumbsFor,
  buildServicesItemListJsonLd,
  buildWebPageJsonLd,
} from '../seo/siteJsonLd'

const SERVICES_CANONICAL = 'https://wixwave.co/services'
const SERVICES_TITLE =
  'Digital Agency Patna & Gurugram | Web, App, SEO & Marketing'
const SERVICES_DESCRIPTION =
  'Wixwave is a Patna and Gurugram digital agency for website development, app development, SEO, branding, social media, and paid ads. Strategy-led projects with free consultation.'

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
      'digital marketing agency patna',
      'digital marketing agency gurugram',
      'best it company in patna',
    ],
    robots: 'index,follow',
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
      }),
      breadcrumbsFor('services', SERVICES_CANONICAL),
      buildServicesItemListJsonLd(),
      buildFaqJsonLd(servicesHubFaqs, SERVICES_CANONICAL),
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
