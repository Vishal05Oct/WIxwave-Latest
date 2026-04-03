import Hero from '../Components/Services/AppDevHero'
import Body from '../Components/Services/AppDevBody'
import useSeo from '../hooks/useSeo'

function AppDev() {
  useSeo({
    title: 'App Development Services | Custom Mobile & Web Apps by Wixwave',
    description:
      'Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, and user-focused development that drives growth.',
    canonical: 'https://wixwave.co/services/app-dev',
    keywords: [
      'app development services',
      'mobile app development',
      'web app development',
      'custom software development',
      'app development company',
    ],
    og: {
      url: 'https://wixwave.co/services/app-dev',
      type: 'website',
      siteName: 'Wixwave',
      locale: 'en_IN',
      image:
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    },
  });

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />
      <Body />
    </main>
  )
}

export default AppDev
