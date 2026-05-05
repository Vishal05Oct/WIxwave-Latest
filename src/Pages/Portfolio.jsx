import Hero from '../Components/PortfolioHero'
import PortfolioBody from '../Components/Portfolio_Body'
import useSeo from '../hooks/useSeo'
import { breadcrumbsFor, buildWebPageJsonLd } from '../seo/siteJsonLd'

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
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/portfolio',
        title: 'Wixwave Portfolio | Website Development Projects in Patna & Gurugram',
        description:
          "Explore Wixwave's portfolio of website development, app development, SEO, and branding projects. See real work delivered for businesses in Patna and Gurugram (Gurgaon).",
      }),
      breadcrumbsFor('portfolio', 'https://wixwave.co/portfolio'),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <PortfolioBody />
    </main>
  )
}

export default Portfolio
