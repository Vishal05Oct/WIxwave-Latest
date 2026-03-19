import React from 'react'
import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'
import useSeo from '../hooks/useSeo'

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
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <About1 />
      <About2 />
    </main>
  )
}
