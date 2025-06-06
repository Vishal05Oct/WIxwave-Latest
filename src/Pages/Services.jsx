import React, { useEffect } from 'react'
import Hero from '../Components/Services_Hero'
import Body from '../Components/Services_1'
import FAQ from '../Components/Services_FAQ'
import CTA from '../Components/Services_CTA'

function Services() {
  useEffect(() => {
    document.title = 'Wixwave Services | Web, App, SEO, Branding & Digital Marketing in Gurgaon & Patna';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Discover Wixwave\'s full suite of digital services: web design, app development, SEO, branding, paid ads, and social media marketing for business growth in Gurgaon and Patna.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services';
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
      <FAQ />
      <CTA />
      </div>
      </>
  )
}

export default Services
