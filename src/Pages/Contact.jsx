import Hero from '../Components/Contact_Hero'; // Hero component
import ContactForm from '../Components/HomepageForm'; // Form component (for Contact Page)
import useRouteSeo from '../hooks/useRouteSeo'

function Contact() {
  useRouteSeo('/contact')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero /> {/* Hero section at the top */}
      <ContactForm page="contact" /> {/* Contact form with 'contact' title */}
    </main>
  );
}

export default Contact;
