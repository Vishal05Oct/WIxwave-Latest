import React, { useEffect } from 'react'
import Hero from '../Components/PortfolioHero'
import PortfolioBody from '../Components/Portfolio_Body'

function Portfolio() {
  useEffect(() => {
    document.title = 'Wixwave Portfolio | Inspiring Web, App & Branding Projects';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Wixwave’s portfolio of web design, app development, SEO, and branding projects. See how we help businesses achieve digital success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore Wixwave’s portfolio of web design, app development, SEO, and branding projects. See how we help businesses achieve digital success.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
<>
<Hero/>
<PortfolioBody/>
</>
  )
}

export default Portfolio
