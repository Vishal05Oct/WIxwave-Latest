import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CursorSpotlight from "./Components/CursorSpotlight";
import useSeo from "./hooks/useSeo";

function App() {
  useSeo({
    title: "Wixwave | The Digital Solutions",
    description:
      "Wixwave is a leading web and mobile app development agency in India. We deliver high-performance websites, SEO, and digital experiences that drive growth.",
    canonical: "https://wixwave.co/",
    keywords:
      "Wixwave, web development, app development, SEO agency, digital agency, Patna, Gurugram",
    og: {
      siteName: "Wixwave",
      type: "website",
      image:
        "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Wixwave",
      url: "https://wixwave.co/",
      logo: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
      description:
        "Wixwave builds high-performance websites and mobile apps, optimised for speed, SEO, and growth.",
      telephone: "+91-XXXX-XXXXXX",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Patna, Bihar",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "800001",
        addressCountry: "IN",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [
        "https://www.linkedin.com/company/wixwave/",
        "https://www.facebook.com/people/WixWave-The-Digital-Solutions/61570872845668/",
        "https://www.instagram.com/wixwave.co/",
        "https://x.com/Wixwave?t=aNUW1kl498Ht4V-7vT3wuA&s=09",
      ],
    },
  });

  return (
    <Router>
      <CursorSpotlight>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:text-blue-700"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </CursorSpotlight>
    </Router>
  );
}

export default App;