import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { brandingFaqs, buildFaqJsonLd } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function Branding() {
  const canonical = 'https://wixwave.co/services/branding'
  useSeo({
    title: 'Branding & Logo Design | Creative Identity Solutions by Wixwave',
    description:
      "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
    canonical,
    keywords: [
      'branding agency',
      'logo design services',
      'brand identity design',
      'digital agency branding',
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
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical,
        title: 'Branding & Logo Design | Creative Identity Solutions by Wixwave',
        description:
          "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
        about: [
          { '@type': 'Thing', name: 'Branding', url: canonical },
          { '@type': 'Thing', name: 'Logo Design' },
          { '@type': 'Thing', name: 'Brand Identity' },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'Branding',
        description:
          "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
        serviceType: 'Branding',
      }),
      breadcrumbsFor('branding', canonical),
      buildFaqJsonLd(brandingFaqs, canonical),
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
