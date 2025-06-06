import React, { useEffect } from 'react'
import Hero from '../Components/Blogs_Hero'

const Blogs = () => {
  useEffect(() => {
    document.title = 'Wixwave Blog | Web, App, SEO & Digital Marketing Insights';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Stay ahead with Wixwave\'s blog. Get the latest on web design, app development, SEO, branding, and digital marketing.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/blog';
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

</>
  )
}

export default Blogs
