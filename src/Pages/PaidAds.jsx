import React from 'react'
import Hero from '../Components/Services/PaidAdsHero'
import Body from '../Components/Services/PaidAdsBody'
import useSeo from '../hooks/useSeo'

function PaidAds() {
  useSeo({
    title: 'Paid Advertising Services | Google & Facebook Ads by Wixwave',
    description:
      "Maximize your ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
    canonical: 'https://wixwave.co/services/paid-ads',
    keywords: [
      'paid ads agency',
      'google ads management',
      'facebook ads agency',
      'digital advertising',
      'ppc marketing',
    ],
    og: {
      url: 'https://wixwave.co/services/paid-ads',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
    </main>
  )
}

export default PaidAds
