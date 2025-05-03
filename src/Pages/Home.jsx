import React from 'react'
import Hero from '../Components/HeroSection'
import HeroSlider from '../Components/HeroSlider'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
import Form from '../Components/HomepageForm'
import CollaborationSection from '../Components/Collaboration'

function Home() {
  return (
   <>
   <div>
    <Hero />
    <HeroSlider />
    <VideoSection />
    <HowWeRoll />
    <OurServices />
    <HCTA />
    <Form />
    <CollaborationSection />

   </div>
   </>
  )
}

export default Home
