import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import useSeo from '../hooks/useSeo'
import { brandingFaqs, buildFaqJsonLd } from '../data/serviceFaqs'

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
    jsonLd: buildFaqJsonLd(brandingFaqs),
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={brandingFaqs} heading="Branding FAQs" />
    </main>
  )
}

export default Branding
