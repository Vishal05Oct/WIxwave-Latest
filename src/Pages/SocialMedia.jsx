import Hero from '../Components/Services/SocialMediaHero'
import Body from '../Components/Services/SocialMediaBody'
import ServiceFaqSection from '../Components/Services/ServiceFaqSection'
import useSeo from '../hooks/useSeo'
import { buildFaqJsonLd, socialMediaFaqs } from '../data/serviceFaqs'

function SocialMedia() {
  useSeo({
    title: 'Social Media Marketing | Grow Your Brand Online with Wixwave',
    description:
      'Wixwave’s social media marketing grows your audience and engagement. Content creation, strategy, and management for all platforms.',
    canonical: 'https://wixwave.co/services/social-media',
    keywords: [
      'social media marketing',
      'social media agency',
      'content marketing',
      'social media management',
      'social media strategy',
    ],
    og: {
      url: 'https://wixwave.co/services/social-media',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
    jsonLd: buildFaqJsonLd(socialMediaFaqs),
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
      <ServiceFaqSection items={socialMediaFaqs} heading="Social Media Marketing FAQs" />
    </main>
  )
}

export default SocialMedia
