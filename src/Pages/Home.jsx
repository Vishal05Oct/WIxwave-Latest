import React from 'react'
import Hero from '../Components/HeroSection'
import HeroSlider from '../Components/HeroSlider'
import VideoSection from '../Components/VideoSection'
import HowWeRoll from '../Components/WeRoll'
import HCTA from '../Components/H-CTA'
import OurServices from '../Components/OurServices'
function Home() {
  return (
   <>
   <div>
    <Hero />
    <HeroSlider />
    <VideoSection />
    <HowWeRoll />
    <HCTA />
    <OurServices />
   </div>
   </>
  )
}

export default Home
