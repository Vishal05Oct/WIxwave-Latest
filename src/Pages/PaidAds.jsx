import React, { useEffect } from 'react'
import Hero from '../Components/Services/PaidAdsHero'
import Body from '../Components/Services/PaidAdsBody'

function PaidAds() {
  useEffect(() => {
    document.title = 'Paid Advertising Services | Google & Facebook Ads by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Maximize your ROI with Wixwave\'s paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/paid-ads';
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
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
