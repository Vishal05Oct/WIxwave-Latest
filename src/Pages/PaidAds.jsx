import Hero from '../Components/Services/PaidAdsHero'
import Body from '../Components/Services/PaidAdsBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { ServiceLinks } from '../Components/ServiceLinks'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, paidAdsFaqs } from '../data/serviceFaqs'
import { breadcrumbsFor, buildServiceJsonLd, buildWebPageJsonLd, SITE } from '../seo/siteJsonLd'

function PaidAds() {
  const canonical = 'https://wixwave.co/services/paid-ads'
  useSeo({
    title: 'Paid Advertising Services | Google & Facebook Ads by Wixwave',
    description:
      "Maximize your ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
    canonical,
    keywords: [
      'paid ads agency',
      'google ads management',
      'facebook ads agency',
      'digital advertising',
      'ppc marketing',
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
        title: 'Paid Advertising Services | Google & Facebook Ads by Wixwave',
        description:
          "Maximize your ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
        about: [
          { '@type': 'Thing', name: 'Paid Advertising', url: canonical },
          { '@type': 'Thing', name: 'Google Ads' },
          { '@type': 'Thing', name: 'Meta Ads' },
          { '@type': 'Place', name: 'Patna, Bihar, India', url: SITE.sameAs?.[4] },
          { '@type': 'Place', name: 'Gurugram, Haryana, India' },
        ],
      }),
      buildServiceJsonLd({
        canonical,
        name: 'Paid Advertising',
        description:
          "Maximize your ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
        serviceType: 'Paid Advertising',
      }),
      breadcrumbsFor('paid-ads', canonical),
      buildFaqJsonLd(paidAdsFaqs, canonical),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={paidAdsFaqs} heading="Paid Advertising FAQs" />
      <ServiceLinks heading="Related services" />
    </main>
  )
}

export default PaidAds
