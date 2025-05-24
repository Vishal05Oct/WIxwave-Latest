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
    <Concept />
    <HCTA />
    <HomepageForm page="default" /> 
    <CollaborationSection />

   </div>
   </>
  )
}

export default Home
