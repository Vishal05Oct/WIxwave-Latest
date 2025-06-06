import React, { useEffect } from 'react'
import Hero from '../Components/PortfolioHero'
import PortfolioBody from '../Components/Portfolio_Body'

function Portfolio() {
  useEffect(() => {
    document.title = 'Wixwave Portfolio | Inspiring Web, App & Branding Projects';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Explore Wixwave\'s portfolio of web design, app development, SEO, and branding projects. See how we help businesses achieve digital success.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/portfolio';
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
<PortfolioBody/>
</>
  )
}

export default Portfolio
