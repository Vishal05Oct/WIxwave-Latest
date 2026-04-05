import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";

export default function BlogPost1() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Website Technology & SEO in 2026: Wins That Compound | Wixwave Blog";

  const description =
    "Learn how website performance, Core Web Vitals, technical SEO, structured data, and scalable systems drive long-term SEO growth in 2026.";

  const canonicalUrl =
    "https://wixwave.co/blog/website-technology-seo/";

  const heroImage =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80";

  useSeo({ title, description, canonical: canonicalUrl });

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
          alt="Website Technology SEO 2026"
          className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-0 text-white">

            {/* ✅ INNER WRAPPER FOR PERFECT ALIGNMENT */}
            <div className="max-w-7xl">

              <Link
                to="/blog"
                className="text-xs sm:text-sm opacity-80 hover:underline"
              >
                ← Back to Blogs
              </Link>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug">
                Website Technology & SEO in 2026: Wins That Compound
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                Discover how performance, technical SEO, and scalable systems create long-term organic growth.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                Mar 19, 2026 • {readingTime} min read
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
            Website technology and SEO in 2026 are deeply interconnected. Search engines evaluate performance, user experience, and technical structure rather than just keywords or backlinks.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A fast, optimized website builds a strong foundation where every page ranks better over time, creating compounding SEO growth.
          </p>
        </section>

        {/* Core Web Vitals */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Core Web Vitals & Performance
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Core Web Vitals are essential for modern SEO, measuring real-world user experience.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>LCP improves loading speed</li>
            <li>FID ensures quick interaction</li>
            <li>CLS prevents layout shifts</li>
          </ul>
        </section>

        {/* Architecture */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Website Architecture & Crawlability
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Clean website structure ensures better crawling and indexing.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>SEO-friendly URLs</li>
            <li>Internal linking strategy</li>
            <li>Proper heading hierarchy</li>
          </ul>
        </section>

        {/* Structured Data */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Structured Data & Search Visibility
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Structured data improves search visibility and enables rich results.
          </p>
        </section>

        {/* Compounding SEO */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Why SEO Growth Compounds
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            SEO builds authority over time, unlike paid ads which stop when spending stops.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Consistent traffic growth</li>
            <li>Improved rankings</li>
            <li>Long-term authority</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">
            {[
              {
                q: "What is technical SEO?",
                a: "Technical SEO focuses on performance, structure, and optimization.",
              },
              {
                q: "Why are Core Web Vitals important?",
                a: "They measure user experience and impact rankings.",
              },
              {
                q: "What is structured data?",
                a: "It helps search engines understand content better.",
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
            Ready to Build an SEO System That Compounds?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave helps you build high-performance websites that rank and convert.
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

