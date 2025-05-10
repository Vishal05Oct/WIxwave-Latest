import React from 'react'
import Hero from '../Components/HeroSection'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
import CollaborationSection from '../Components/Collaboration'
import HomepageForm from '../Components/HomepageForm';

function Home() {
  return (
   <>
   <div>
    <Hero />
    <VideoSection />
    <HowWeRoll />
    <OurServices />
    <HCTA />
    <HomepageForm page="default" /> 
    <CollaborationSection />

   </div>
   </>
  )
}

export default Home
