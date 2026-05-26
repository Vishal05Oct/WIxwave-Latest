import Hero from '../Components/Services/SocialMediaHero'
import Body from '../Components/Services/SocialMediaBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, socialMediaFaqs } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function SocialMedia() {
  const canonical = 'https://wixwave.co/services/social-media'
  useSeo({
    title: 'Social Media Marketing | Grow Your Brand Online with Wixwave',
    description:
      'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.',
    canonical,
    keywords: [
      'social media marketing',
      'social media agency',
      'content marketing',
      'social media management',
      'social media strategy',
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
        title: 'Social Media Marketing | Grow Your Brand Online with Wixwave',
        description:
          'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.',
        about: [
          { '@type': 'Thing', name: 'Social Media Marketing', url: canonical },
          { '@type': 'Thing', name: 'Content Strategy' },
          { '@type': 'Thing', name: 'Content Creation' },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'Social Media Marketing',
        description:
          'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.',
        serviceType: 'Social Media Marketing',
      }),
      breadcrumbsFor('social-media', canonical),
      buildFaqJsonLd(socialMediaFaqs, canonical),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={socialMediaFaqs} heading="Social Media Marketing FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default SocialMedia
