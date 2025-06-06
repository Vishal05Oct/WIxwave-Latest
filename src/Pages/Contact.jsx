import React, { useEffect } from 'react';
import Hero from '../Components/Contact_Hero'; // Hero component
import ContactForm from '../Components/HomepageForm'; // Form component (for Contact Page)
import ContactInfo from '../Components/ContactInfo'; // Contact info section

function Contact() {
  useEffect(() => {
    document.title = 'Contact Wixwave | Start Your Web, App, or Marketing Project';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ready to grow your business? Contact Wixwave for web design, app development, SEO, branding, and digital marketing. Get a free consultation today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ready to grow your business? Contact Wixwave for web design, app development, SEO, branding, and digital marketing. Get a free consultation today.';
      document.head.appendChild(meta);
    }
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
