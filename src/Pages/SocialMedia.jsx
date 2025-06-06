import React, { useEffect } from 'react'
import Hero from '../Components/Services/SocialMediaHero'
import Body from '../Components/Services/SocialMediaBody'

function SocialMedia() {
  useEffect(() => {
    document.title = 'Social Media Marketing | Grow Your Brand Online with Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/services/social-media';
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
      <div>
        <Hero />
        <Body />
      </div>
    </>
  )
}

export default SocialMedia
