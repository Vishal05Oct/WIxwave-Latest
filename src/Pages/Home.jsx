import React from 'react'
import Hero from '../Components/HeroSection'
import Slider from '../Components/HeroSlider'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import WeAre from '../Components/WeAre'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
import CollaborationSection from '../Components/Collaboration'
import HomepageForm from '../Components/HomepageForm';

function Home() {
  return (
   <>
   <div>
    <Hero />
    <Slider />
    <VideoSection />
    <HowWeRoll />
    <WeAre />
    <OurServices />
    <HCTA />
    <HomepageForm page="default" /> 
    <CollaborationSection />

   </div>
   </>
  )
}

export default Home
