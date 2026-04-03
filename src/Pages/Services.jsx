import Hero from '../Components/Services_Hero'
import Body from '../Components/Services_1'
import FAQ from '../Components/Services_FAQ'
import CTA from '../Components/Services_CTA'
import useSeo from '../hooks/useSeo'

function Services() {
  useSeo({
    title:
      'Wixwave Services | Web, App, SEO, Branding & Digital Marketing in Patna & Gurugram',
    description:
      "Discover Wixwave's full suite of digital services: website development, app development, SEO, branding, paid ads, and social media marketing for business growth in Patna and Gurugram (Gurgaon).",
    canonical: 'https://wixwave.co/services',
    keywords: [
      'website development company patna',
      'website development company gurugram',
      'website development company gurgaon',
      'seo services patna',
      'seo services gurugram',
      'digital marketing agency patna',
    ],
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/services',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
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
