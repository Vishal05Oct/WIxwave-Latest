import React, { useEffect } from 'react'
import Hero from '../Components/Services/WebDevHero'
import Body from '../Components/Services/WebDevBody'

function WebDev() {
  useEffect(() => {
    document.title = 'Web Development Company | Fast, SEO-Optimized Websites | Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Wixwave builds fast, SEO-optimized websites for businesses. Get a responsive, high-converting website designed for growth and online success.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/web-dev';
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

export default WebDev
