import Hero from '../Components/About_Hero'
import About1 from '../Components/About_1'
import About2 from '../Components/About_2'
import About3 from '../Components/About_3'
import About4 from '../Components/About_4'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import { aboutFaqs } from '../data/serviceFaqs'
import useRouteSeo from '../hooks/useRouteSeo'

export default function About() {
  useRouteSeo('/about')

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <div className="space-y-0">
        <Hero />
        <div className="-mt-6 sm:-mt-4 md:-mt-2">
          <About1 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4">
          <About2 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4">
          <About3 />
        </div>
        <div className="-mt-8 sm:-mt-6 md:-mt-4">
          <About4 />
        </div>
        <ServiceFaqSection items={aboutFaqs} heading="About Wixwave FAQs" />
      </div>
    </main>
  )
}
