import React, { useEffect } from 'react'
import Hero from '../Components/Services/SocialMediaHero'
import Body from '../Components/Services/SocialMediaBody'

function SocialMedia() {
  useEffect(() => {
    document.title = 'Social Media Marketing | Grow Your Brand Online with Wixwave';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.';
      document.head.appendChild(meta);
    }
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
