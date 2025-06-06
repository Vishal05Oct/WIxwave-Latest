import React, { useEffect } from 'react'
import Hero from '../Components/Services/BrandingHero'
import Body from '../Components/Services/BrandingBody'

function Branding() {
  useEffect(() => {
    document.title = 'Branding & Logo Design | Creative Identity Solutions by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stand out with Wixwave’s branding, logo design, website, app development, SEO, and digital marketing services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Stand out with Wixwave’s branding, logo design, website, app development, SEO, and digital marketing services.';
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

export default Branding
