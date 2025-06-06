import React, { useEffect } from 'react'
import Hero from '../Components/Blogs_Hero'

const Blogs = () => {
  useEffect(() => {
    document.title = 'Wixwave Blog | Web, App, SEO & Digital Marketing Insights';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Stay ahead with Wixwave’s blog. Get the latest on web design, app development, SEO, branding, and digital marketing.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Stay ahead with Wixwave’s blog. Get the latest on web design, app development, SEO, branding, and digital marketing.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
<>
<Hero/>

</>
  )
}

export default Blogs
