import Hero from '../Components/Contact_Hero'; // Hero component
import ContactForm from '../Components/HomepageForm'; // Form component (for Contact Page)
import useSeo from '../hooks/useSeo'
import {
  breadcrumbsFor,
  buildContactPageJsonLd,
  buildWebPageJsonLd,
} from '../seo/siteJsonLd'

function Contact() {
  useSeo({
    title: 'Contact Wixwave | Website Development Company in Patna & Gurugram',
    description:
      'Ready to grow your business? Contact Wixwave for website development, app development, SEO, branding, and digital marketing in Patna and Gurugram (Gurgaon). Get a free consultation today.',
    canonical: 'https://wixwave.co/contact',
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/contact',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/contact',
        title: 'Contact Wixwave | Website Development Company in Patna & Gurugram',
        description:
          'Ready to grow your business? Contact Wixwave for website development, app development, SEO, branding, and digital marketing in Patna and Gurugram (Gurgaon). Get a free consultation today.',
      }),
      breadcrumbsFor('contact', 'https://wixwave.co/contact'),
      buildContactPageJsonLd({
        canonical: 'https://wixwave.co/contact',
        title: 'Contact Wixwave | Website Development Company in Patna & Gurugram',
        description:
          'Ready to grow your business? Contact Wixwave for website development, app development, SEO, branding, and digital marketing in Patna and Gurugram (Gurgaon). Get a free consultation today.',
      }),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero /> {/* Hero section at the top */}
      <ContactForm page="contact" /> {/* Contact form with 'contact' title */}
    </main>
  );
}

export default Contact;
