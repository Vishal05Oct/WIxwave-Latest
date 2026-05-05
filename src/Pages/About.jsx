import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'
import About3 from '../Components/About_3'
import About4 from '../Components/About_4'
import useSeo from '../hooks/useSeo'
import { breadcrumbsFor, buildWebPageJsonLd } from '../seo/siteJsonLd'

export default function About() {
  useSeo({
    title: 'About Wixwave | Website Development Company in Patna & Gurugram',
    description:
      "Meet Wixwave — a digital team helping businesses grow with website development, app development, SEO, and branding services in Patna and Gurugram (Gurgaon).",
    canonical: 'https://wixwave.co/about',
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/about',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/about',
        title: 'About Wixwave | Website Development Company in Patna & Gurugram',
        description:
          'Meet Wixwave — a digital team helping businesses grow with website development, app development, SEO, and branding services in Patna and Gurugram (Gurgaon).',
      }),
      breadcrumbsFor('about', 'https://wixwave.co/about'),
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
      </div>
    </main>
  )
}
