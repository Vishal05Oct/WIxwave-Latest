import React, { useEffect } from 'react'
import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'

function Branding() {
  useEffect(() => {
    document.title = 'Branding & Logo Design | Creative Identity Solutions by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Stand out with Wixwave\'s branding, logo design, website, app development, SEO, and digital marketing services.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/branding';
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

export default Branding
