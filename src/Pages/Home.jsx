import Hero from '../Components/HeroSection'
import Slider from '../Components/HeroSlider'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import WeAre from '../Components/WeAre'
import Concept from '../Components/Concept'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
import Insight from '../Components/Insight'
import CollaborationSection from '../Components/Collaboration'
import HomepageForm from '../Components/HomepageForm';
import React from 'react'
import useSeo from '../hooks/useSeo'

function Home() {
  useSeo({
    title: 'Wixwave | Web Design, App Development, SEO & Digital Marketing in Gurgaon & Patna',
    description:
      'Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.',
    canonical: 'https://wixwave.co/',
    keywords: [
      'best it company in patna',
      'website development company patna',
      'website development company gurugram',
      'digital marketing agency patna',
      'seo agency gurugram',
    ],
    og: {
      url: 'https://wixwave.co/',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
      type: 'website',
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Wixwave',
      url: 'https://wixwave.co',
      logo: 'https://wixwave.co/logo.png',
      description:
        'Wixwave is a full-service digital agency offering web design, app development, SEO, and digital marketing services in Patna and Gurugram.',
      telephone: '+91-XXXXXXXXXX',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '',
        addressLocality: 'Patna',
        addressRegion: 'Bihar',
        postalCode: '800001',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Patna' },
        { '@type': 'City', name: 'Gurugram' },
      ],
    },
  });

  return (


   <>
   <div>
      <Hero />
      <Slider />
      <VideoSection />
      <HowWeRoll />
      <OurServices />
      <Concept />
      <WeAre />
      <Insight />
      <HCTA />
      <HomepageForm page="default" />
      <CollaborationSection />
    </div>
   </>
  )
}

export default Home
