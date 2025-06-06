import React, { useEffect } from 'react'
import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'

export default function About() {
  useEffect(() => {
    document.title = 'About Wixwave | Creative Digital Agency & Expert Team';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Wixwave’s story, values, and talented team. We help businesses thrive with web, app, SEO, and branding excellence.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover Wixwave’s story, values, and talented team. We help businesses thrive with web, app, SEO, and branding excellence.';
      document.head.appendChild(meta);
    }
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
