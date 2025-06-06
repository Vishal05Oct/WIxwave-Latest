import React, { useEffect } from 'react'
import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'

function Seo() {
  useEffect(() => {
    document.title = 'SEO Services | Boost Google Rankings & Website Traffic | Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Improve your website\'s Google ranking and traffic with Wixwave\'s SEO, web design, app development, and digital marketing.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/seo';
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
<Hero/>
<Body/>
</div>

</>
  )
}

export default Seo
