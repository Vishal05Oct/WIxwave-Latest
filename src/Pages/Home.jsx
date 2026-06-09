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
import useRouteSeo from '../hooks/useRouteSeo'
import Testimonial from '../Components/Testimonial'

function Home() {
  useRouteSeo('/')

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
