import React, { useEffect } from 'react'
import Hero from '../Components/Services/PaidAdsHero'
import Body from '../Components/Services/PaidAdsBody'

function PaidAds() {
  useEffect(() => {
    document.title = 'Paid Advertising Services | Google & Facebook Ads by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Maximize your ROI with Wixwave’s paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Maximize your ROI with Wixwave’s paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
    <div>
      <Hero />
      <Body />
    </div>
    </>
  )
}

export default PaidAds
