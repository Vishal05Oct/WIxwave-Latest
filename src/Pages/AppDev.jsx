import React, { useEffect } from 'react'
import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'

function AppDev() {
  useEffect(() => {
    document.title = 'App Development Services | Custom Mobile & Web Apps by Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development for your business.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development for your business.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
<>
<Hero/>
<Body/> 
</>
  )
}

export default AppDev
