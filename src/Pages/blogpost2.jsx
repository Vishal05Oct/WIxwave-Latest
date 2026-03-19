import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";

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
    "https://wixwave.co/blog/ui-ux-trends-2026/";

  const heroImage =
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80";

  useSeo({ title, description, canonical: canonicalUrl });

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <main>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>

      {/* HERO (MATCHED) */}
      <section className="relative">
        <img
          src={heroImage}
          alt="UI UX Trends 2026"
          className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-0 text-white">

            <Link to="/blog" className="text-xs sm:text-sm opacity-80 hover:underline">
              ← Back to Blogs
            </Link>

            <h1 className="mt-3 text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug max-w-[95%] sm:max-w-3xl">
              Top UI/UX Trends in 2026
            </h1>

            <p className="mt-3 text-sm sm:text-lg max-w-[95%] sm:max-w-2xl opacity-90">
              Explore how AI-driven interfaces, immersive experiences, and user-centric design are shaping the future of digital products.
            </p>

            <p className="mt-3 text-xs sm:text-sm opacity-70">
              Mar 15, 2026 • {readingTime} min read
            </p>

          </div>
        </div>
      </section>

      {/* CONTENT (MATCHED WIDTH + SPACING) */}
      <div
        ref={contentRef}
        className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-14"
      >

        {/* Intro */}
        <section className="space-y-5">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            UI/UX design trends in 2026 are transforming how users interact with digital products. Modern interfaces are no longer static — they are intelligent, adaptive, and deeply personalized based on user behavior and preferences.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Businesses that invest in modern user experience design benefit from higher engagement, better retention, and increased conversions. The future of UX lies in creating seamless digital journeys that feel intuitive and natural.
          </p>
        </section>

        {/* AI */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            AI-Driven UI/UX Design
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Artificial intelligence is revolutionizing UI/UX by enabling dynamic and personalized user experiences. Interfaces can now adapt in real time based on user behavior.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Adaptive user interfaces</li>
            <li>Predictive recommendations</li>
            <li>AI-powered chat systems</li>
          </ul>
        </section>

        {/* AR VR */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Immersive AR & VR Experiences
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Augmented and virtual reality are creating immersive user experiences that go beyond traditional screens.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>AR product previews</li>
            <li>Virtual environments</li>
            <li>Interactive experiences</li>
          </ul>
        </section>

        {/* Micro */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Micro-Interactions & Motion
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Micro-interactions enhance usability by providing instant feedback and guiding users through interfaces.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Hover animations</li>
            <li>Feedback transitions</li>
            <li>Loading states</li>
          </ul>
        </section>

        {/* Dark Mode */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Dark Mode & Personalization
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Personalization and dark mode improve accessibility and user comfort while enhancing engagement.
          </p>
        </section>

        {/* Ethical UX */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ethical UX & Privacy
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Ethical design focuses on transparency, privacy, and building user trust in digital experiences.
          </p>
        </section>

        {/* FAQ (MATCHED) */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">
            {[
              {
                q: "What are UI/UX trends in 2026?",
                a: "AI, immersive design, and ethical UX are key trends.",
              },
              {
                q: "Why is UI/UX important?",
                a: "It improves engagement, usability, and conversions.",
              },
              {
                q: "What is ethical UX?",
                a: "Design that focuses on transparency and user privacy.",
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
                      transition={{ type: "spring", stiffness: 120 }}
                      className="text-lg"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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

