import React, { useEffect } from 'react'
import Hero from '../Components/Services/SeoHero'
import Body from '../Components/Services/SeoBody'

function Seo() {
  useEffect(() => {
    document.title = 'SEO Services | Boost Google Rankings & Website Traffic | Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Improve your website’s Google ranking and traffic with Wixwave’s SEO, web design, app development, and digital marketing.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Improve your website’s Google ranking and traffic with Wixwave’s SEO, web design, app development, and digital marketing.';
      document.head.appendChild(meta);
    }
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

export default Seo
