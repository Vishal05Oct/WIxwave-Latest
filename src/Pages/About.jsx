import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'
import About3 from '../Components/About_3'
import About4 from '../Components/About_4'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import useSeo from '../hooks/useSeo'
import { aboutFaqs, buildFaqJsonLd } from '../data/serviceFaqs'
import { breadcrumbsFor, buildWebPageJsonLd } from '../seo/siteJsonLd'

const ABOUT_CANONICAL = 'https://wixwave.co/about'
const ABOUT_TITLE = 'About Wixwave | Web & SEO Agency Patna & Gurugram'
const ABOUT_DESCRIPTION =
  'Meet Wixwave—a Patna & Gurugram digital agency for website development, app development, SEO & branding. Strategy-led, performance-first projects since 2020.'

export default function About() {
  useSeo({
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    canonical: ABOUT_CANONICAL,
    keywords: [
      'about wixwave',
      'website development company patna',
      'digital agency gurugram',
      'seo agency patna',
      'best it company in patna',
    ],
    robots: 'index,follow',
    og: {
      url: ABOUT_CANONICAL,
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: ABOUT_CANONICAL,
        title: ABOUT_TITLE,
        description: ABOUT_DESCRIPTION,
      }),
      breadcrumbsFor('about', ABOUT_CANONICAL),
      buildFaqJsonLd(aboutFaqs, ABOUT_CANONICAL),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <div className="space-y-0">
        <Hero />
        <div className="-mt-6 sm:-mt-4 md:-mt-2">
          <About1 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4">
          <About2 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4">
          <About3 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4 pb-4 sm:pb-6">
          <About4 />
        </div>
        <ServiceFaqSection
          items={aboutFaqs}
          heading="About Wixwave — Common Questions"
        />
      </div>
    </main>
  )
}
