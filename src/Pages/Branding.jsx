import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { brandingFaqs, buildFaqJsonLd } from '../data/serviceFaqs'
import { breadcrumbsFor, buildWebPageJsonLd } from '../seo/siteJsonLd'

function Branding() {
  useSeo({
    title: 'Branding & Logo Design | Creative Identity Solutions by Wixwave',
    description:
      "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
    canonical: 'https://wixwave.co/services/branding',
    keywords: [
      'branding agency',
      'logo design services',
      'brand identity design',
      'digital agency branding',
    ],
    og: {
      url: 'https://wixwave.co/services/branding',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/services/branding',
        title: 'Branding & Logo Design | Creative Identity Solutions by Wixwave',
        description:
          "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
      }),
      breadcrumbsFor('branding', 'https://wixwave.co/services/branding'),
      buildFaqJsonLd(brandingFaqs, 'https://wixwave.co/services/branding'),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={brandingFaqs} heading="Branding FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default Branding
