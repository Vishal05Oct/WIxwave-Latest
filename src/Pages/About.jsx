import React, { useEffect } from 'react'
import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'

export default function About() {
  useEffect(() => {
    document.title = 'About Wixwave | Creative Digital Agency & Expert Team';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Discover Wixwave\'s story, values, and talented team. We help businesses thrive with web, app, SEO, and branding excellence.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/about';
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
    <About1/>
    <About2/>
    </div>
    </>
  )
}
