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
import useSeo from '../hooks/useSeo'
import { buildWebPageJsonLd } from '../seo/siteJsonLd'
import Testimonial from '../Components/Testimonial'

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
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/',
        title:
          'Wixwave | Web Design, App Development, SEO & Digital Marketing in Gurgaon & Patna',
        description:
          'Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.',
      }),
    ],
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Slider />
      <VideoSection />
      <HowWeRoll />
      <OurServices />
      <Concept />
      <WeAre />
      <Insight />
      <Testimonial />
      <HCTA />
      <HomepageForm page="default" />
      <CollaborationSection />
    </main>
  )
}

export default Home
