import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { appDevFaqs, buildFaqJsonLd } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function AppDev() {
  const canonical = 'https://wixwave.co/services/app-dev'
  useSeo({
    title: 'App Development Services | Custom Mobile & Web Apps by Wixwave',
    description:
      'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development that drives growth.',
    canonical,
    keywords: [
      'app development services',
      'mobile app development',
      'web app development',
      'custom software development',
      'app development company',
      'mvp app development',
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
        title: 'App Development Services | Custom Mobile & Web Apps by Wixwave',
        description:
          'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development that drives growth.',
        about: [
          { '@type': 'Thing', name: 'App Development', url: canonical },
          { '@type': 'Thing', name: 'Mobile App Development' },
          { '@type': 'Thing', name: 'Web App Development' },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'App Development',
        description:
          'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development that drives growth.',
        serviceType: 'App Development',
      }),
      breadcrumbsFor('app-dev', canonical),
      buildFaqJsonLd(appDevFaqs, canonical),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={appDevFaqs} heading="App Development FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default AppDev
