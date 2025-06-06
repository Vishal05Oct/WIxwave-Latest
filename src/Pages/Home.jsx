import Hero from '../Components/HeroSection'
import Slider from '../Components/HeroSlider'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import WeAre from '../Components/WeAre'
import Concept from '../Components/Concept'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
import CollaborationSection from '../Components/Collaboration'
import HomepageForm from '../Components/HomepageForm';
import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title = 'Wixwave | Web Design, App Development, SEO & Digital Marketing in Gurgaon & Patna';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.';
      document.head.appendChild(meta);
    }
    // Set canonical tag
    const canonicalUrl = 'https://wixwave.co/';
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
    <Hero />
    <Slider />
    <VideoSection />
    <HowWeRoll />
    <WeAre />
    <OurServices />
    <Concept />
    <HCTA />
    <HomepageForm page="default" /> 
    <CollaborationSection />

   </div>
   </>
  )
}

export default Home
