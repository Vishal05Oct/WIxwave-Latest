import React from 'react'
import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'
import useSeo from '../hooks/useSeo'

function Seo() {
  useSeo({
    title: 'SEO Services in Patna & Gurugram (Gurgaon) | Wixwave',
    description:
      "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram (Gurgaon): technical SEO, on-page optimization, content strategy, and performance improvements.",
    canonical: 'https://wixwave.co/services/seo',
    keywords: ['seo services patna', 'seo services gurugram', 'seo services gurgaon', 'local seo'],
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/services/seo',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
  });

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
