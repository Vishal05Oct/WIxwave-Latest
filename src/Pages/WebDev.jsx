import React, { useEffect } from 'react'
import Hero from '../Components/Services/WebDevHero'
import Body from '../Components/Services/WebDevBody'

function WebDev() {
  useEffect(() => {
    document.title = 'Web Development Company | Fast, SEO-Optimized Websites | Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wixwave builds fast, SEO-optimized websites for businesses. Get a responsive, high-converting website designed for growth and online success.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wixwave builds fast, SEO-optimized websites for businesses. Get a responsive, high-converting website designed for growth and online success.';
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

export default WebDev
