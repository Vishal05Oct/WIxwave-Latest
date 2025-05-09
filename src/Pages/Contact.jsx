import React from 'react';
import Hero from '../Components/Contact_Hero'; // Hero component
import ContactForm from '../Components/HomepageForm'; // Form component (for Contact Page)
import ContactInfo from '../Components/ContactInfo'; // Contact info section

function Contact() {
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
