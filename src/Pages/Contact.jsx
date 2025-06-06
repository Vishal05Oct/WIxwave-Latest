import React, { useEffect } from 'react';
import Hero from '../Components/Contact_Hero'; // Hero component
import ContactForm from '../Components/HomepageForm'; // Form component (for Contact Page)
import ContactInfo from '../Components/ContactInfo'; // Contact info section

function Contact() {
  useEffect(() => {
    document.title = 'Contact Wixwave | Start Your Web, App, or Marketing Project';
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Ready to grow your business? Contact Wixwave for web design, app development, SEO, branding, and digital marketing. Get a free consultation today.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/contact';
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
        <Hero /> {/* Hero section at the top */}
        <ContactForm page="contact" /> {/* Contact form with 'contact' title */}
        <ContactInfo /> {/* Contact information */}
      </div>
    </>
  );
}

export default Contact;
