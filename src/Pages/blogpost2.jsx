import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useRouteSeo from "../hooks/useRouteSeo";

export default function BlogPost2() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Top UI/UX Trends in 2026: Future of Design & User Experience | Wixwave Blog";

  const description =
    "Explore UI/UX trends in 2026 including AI-driven design, immersive UX, micro-interactions, and privacy-first experiences.";

  const canonicalUrl =
    "https://wixwave.co/blog/ui-ux-trends-2026";

  const heroImage =
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-03-15";


  useRouteSeo("/blog/ui-ux-trends-2026");

  // Scroll Progress - Cache total height to avoid forced reflow on every scroll
  useEffect(() => {
    let cachedTotal = null;
    
    const handleScroll = () => {
      // Only calculate total height once (it won't change during scroll)
      if (cachedTotal === null) {
        cachedTotal =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      }
      setProgress((window.scrollY / cachedTotal) * 100);
    };
    
    // Recalculate on window resize
    const handleResize = () => {
      cachedTotal = null;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reading Time
  useEffect(() => {
    if (contentRef.current) {
      const words = contentRef.current.innerText.trim().split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
    }
  }, []);

  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const relatedLinks = [
    {
      to: "/services/branding",
      label: "Branding and design services",
      description: "Shape a visual system that supports a stronger user experience across touchpoints.",
    },
    {
      to: "/services/app-dev",
      label: "App development services",
      description: "Turn UX strategy into digital products that feel fast, useful, and intuitive.",
    },
    {
      to: "/blog/website-technology-seo",
      label: "Website technology and SEO guide",
      description: "See how performance and technical quality amplify great design work.",
    },
  ];

  return (
    <main>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>

      {/* HERO */}
      <section className="relative">
        <img
          src={heroImage}
          alt="UI UX Trends 2026"
          className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-0 text-white">
            <div className="max-w-7xl">

              <Link
                to="/blog"
                className="text-xs sm:text-sm opacity-80 hover:underline"
              >
                ← Back to Blogs
              </Link>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug">
                Top UI/UX Trends in 2026: Future of Design & User Experience
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                Explore UI/UX trends in 2026 including AI-driven design, immersive UX, micro-interactions, and privacy-first experiences.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                Mar 15, 2026 • {readingTime} min read
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-14"
      >

        {/* Intro */}
        <section className="space-y-5">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            It starts with a simple moment — a user opens your website. Within seconds, they decide whether to stay or leave. In 2026, this decision is driven not just by design, but by the entire user experience. UI/UX design has become a critical factor in SEO, engagement, and business growth.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Today’s users expect fast, intuitive, and personalized experiences. Businesses that embrace modern UI/UX trends are not just improving design — they are building digital ecosystems that convert visitors into customers.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Teams that want stronger organic growth and clearer market positioning should pair UX improvements with{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO strategy
            </Link>{" "}
            and{" "}
            <Link to="/services/branding" className="text-blue-600 hover:underline">
              branding decisions
            </Link>
            .
          </p>
        </section>

        {/* AI */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            AI-Driven UI/UX Design: Intelligent Experiences
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Artificial intelligence is redefining user experience in 2026. Interfaces are becoming smarter, adapting in real-time based on user behavior, preferences, and intent.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            AI-driven UI/UX improves engagement, reduces friction, and enhances personalization — making it one of the most important design trends for businesses aiming to scale.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            This has the biggest impact when those intelligent experiences are part of a broader{" "}
            <Link to="/services/app-dev" className="text-blue-600 hover:underline">
              app development roadmap
            </Link>
            , not just isolated UI experiments.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Adaptive layouts based on user interaction</li>
            <li>Predictive UX for faster navigation</li>
            <li>AI-powered chat systems for better support</li>
          </ul>
        </section>

        {/* AR VR */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Immersive AR & VR Experiences
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Augmented Reality and Virtual Reality are transforming digital experiences. Users can now interact with products and environments in a more engaging and realistic way.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            These immersive experiences increase user retention and significantly improve conversion rates in industries like e-commerce, real estate, and education.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>AR product previews</li>
            <li>Virtual showrooms</li>
            <li>Interactive 3D environments</li>
          </ul>
        </section>

        {/* Micro */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Micro-Interactions & Motion Design
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Micro-interactions bring interfaces to life. Small animations and transitions guide users, provide feedback, and enhance usability.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Smooth hover effects</li>
            <li>Interactive button feedback</li>
            <li>Loading animations</li>
          </ul>
        </section>

        {/* Dark Mode */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Dark Mode & Personalization
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Dark mode and personalization enhance user comfort and accessibility. Custom experiences keep users engaged longer and improve overall satisfaction.
          </p>
        </section>

        {/* Ethical UX */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ethical UX & Privacy-First Design
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Users today value transparency and privacy. Ethical UX focuses on trust, data protection, and honest design practices.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Businesses that adopt privacy-first design build stronger relationships and long-term customer loyalty.
          </p>
        </section>

        {/* Conclusion */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            The Future of UI/UX: Experience Drives Growth
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            UI/UX design in 2026 is no longer optional — it is a competitive advantage. From AI-driven personalization to immersive experiences, modern design directly impacts SEO rankings, engagement, and conversions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Businesses that invest in user experience today will dominate tomorrow’s digital landscape.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            The strongest results happen when modern interfaces are supported by solid{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website development
            </Link>{" "}
            and the technical foundations covered in our{" "}
            <Link to="/blog/website-technology-seo" className="text-blue-600 hover:underline">
              website technology and SEO guide
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Explore Related Resources
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-2xl border border-gray-200 p-5 transition hover:border-blue-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#0b0b2c]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">
            {[
              {
                q: "What are the top UI/UX design trends in 2026?",
                a: "Top UI/UX design trends in 2026 include AI-driven personalization, immersive product experiences, micro-interactions, accessibility, and privacy-first design.",
              },
              {
                q: "Why is UI/UX design important for SEO and conversions?",
                a: "Strong UI/UX design improves engagement, reduces bounce rate, and helps websites convert more visitors, which supports SEO performance and business growth.",
              },
              {
                q: "What is ethical UX design in modern websites?",
                a: "Ethical UX design focuses on transparent interfaces, user privacy, accessible experiences, and trust-building patterns that improve long-term customer relationships.",
              },
            ].map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <div key={i} className="px-4 sm:px-5 py-4">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-sm sm:text-base">
                      {item.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-lg"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div>
                        <p className="mt-3 text-sm text-gray-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 sm:p-8 bg-blue-600 text-white rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold">
            Want Modern UI/UX for Your Business?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave creates high-converting user-focused designs.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-white text-blue-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}
