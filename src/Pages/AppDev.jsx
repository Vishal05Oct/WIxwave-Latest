import React, { useEffect } from 'react'
import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'

function AppDev() {
  useEffect(() => {
    document.title = 'App Development Services | Custom Mobile & Web Apps by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development for your business.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/app-dev';
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
<Hero/>
<Body/> 
</>
  )
}

export default AppDev
