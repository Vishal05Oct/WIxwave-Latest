import React from 'react'
import Hero from '../Components/PortfolioHero'
import PortfolioBody from '../Components/Portfolio_Body'
import useSeo from '../hooks/useSeo'

function Portfolio() {
  useSeo({
    title: 'Wixwave Portfolio | Website Development Projects in Patna & Gurugram',
    description:
      "Explore Wixwave's portfolio of website development, app development, SEO, and branding projects. See real work delivered for businesses in Patna and Gurugram (Gurgaon).",
    canonical: 'https://wixwave.co/portfolio',
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/portfolio',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
  });

  return (
<>
<Hero/>
<PortfolioBody/>
</>
  )
}

export default Portfolio
