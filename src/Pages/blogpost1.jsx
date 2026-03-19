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
    "Learn how website technology, Core Web Vitals, technical SEO, structured data, and scalable systems drive compounding SEO growth in 2026.";

  const canonicalUrl =
    "https://wixwave.co/blog/website-technology-seo/";

  const heroImage =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80";

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
    <main className="bg-white">

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>

      {/* HERO */}
      <section className="relative">
        <img
          src={heroImage}
          alt="Website Technology SEO 2026"
          className="w-full h-[320px] sm:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <Link to="/blog" className="text-sm opacity-80 hover:underline">
              ← Back to Blogs
            </Link>

            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-bold">
              Website Technology & SEO in 2026: Wins That Compound
            </h1>

            <p className="mt-5 text-lg sm:text-xl max-w-3xl opacity-90">
              Discover how website performance, technical SEO, and scalable systems create long-term organic growth.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Mar 19, 2026 • {readingTime} min read
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 py-16 space-y-14"
      >

        {/* Intro */}
        <section className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Website technology and SEO in 2026 are deeply interconnected. Modern search engines no longer evaluate websites based only on keywords or backlinks — they analyze how your website performs, how fast it loads, and how users interact with it. This shift has made technical SEO, performance optimization, and user experience critical ranking factors.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses that invest in strong website foundations — including fast loading speeds, clean architecture, and scalable content systems — gain a long-term competitive advantage. These improvements compound over time, meaning every new page benefits from the system you build today.
          </p>
        </section>

        {/* Core Web Vitals */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Core Web Vitals & Website Performance
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Core Web Vitals are a crucial part of technical SEO and directly impact search rankings. These metrics measure real user experience, focusing on loading speed, interactivity, and visual stability.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>LCP (Largest Contentful Paint):</strong> Measures how quickly main content loads.</li>
            <li><strong>FID (First Input Delay):</strong> Tracks how fast users can interact.</li>
            <li><strong>CLS (Cumulative Layout Shift):</strong> Ensures visual stability.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Optimizing Core Web Vitals improves both SEO rankings and user experience, leading to better engagement and higher conversions.
          </p>
        </section>

        {/* Architecture */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Website Architecture & Crawlability
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A well-structured website helps search engines crawl and index your content efficiently. Clean architecture ensures that your most important pages receive proper visibility and ranking potential.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>SEO-friendly URL structure</li>
            <li>Strong internal linking strategy</li>
            <li>Proper heading hierarchy (H1–H3)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            When architecture is optimized, authority flows across your website, making it easier for all pages to rank.
          </p>
        </section>

        {/* Structured Data */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Structured Data & Search Visibility
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Structured data, also known as schema markup, helps search engines understand your content more clearly. It provides context that improves indexing and enables rich search results.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Rich snippets increase CTR</li>
            <li>Better indexing and understanding</li>
            <li>Enhanced search visibility</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Implementing structured data is one of the most effective ways to improve search performance without changing content.
          </p>
        </section>

        {/* Content Systems */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Scalable Content Systems for SEO
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Modern SEO success depends on structured content strategies rather than random blog posts. High-performing websites use pillar pages supported by topic clusters to build authority.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Pillar pages targeting broad topics</li>
            <li>Cluster content covering subtopics</li>
            <li>Internal linking between pages</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            This approach strengthens topical authority and improves rankings across your entire website.
          </p>
        </section>

        {/* Compounding SEO */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Why SEO Growth Compounds Over Time
          </h2>

          <p className="text-gray-700 leading-relaxed">
            SEO is a long-term strategy that builds momentum. Unlike paid advertising, where traffic stops when spending stops, SEO continues to generate results over time.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Authority increases with content</li>
            <li>Organic traffic grows consistently</li>
            <li>Rankings improve over time</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            This compounding effect makes SEO one of the most powerful growth channels for modern businesses.
          </p>
        </section>

        {/* FAQ ANIMATED */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">
            {[
              {
                q: "What is technical SEO in 2026?",
                a: "Technical SEO includes performance, structure, and optimization factors that impact rankings.",
              },
              {
                q: "Why are Core Web Vitals important?",
                a: "They measure user experience and directly influence search rankings.",
              },
              {
                q: "What is structured data?",
                a: "It helps search engines understand content and show rich results.",
              },
              {
                q: "Why does SEO compound?",
                a: "Because improvements build authority and rankings over time.",
              },
            ].map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <div key={i} className="px-5 py-4">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium">{item.q}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 120 }}
                      className="text-xl"
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
        <div className="p-8 bg-blue-600 text-white rounded-2xl text-center">
          <h3 className="text-2xl font-bold">
            Ready to Build an SEO System That Compounds?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave helps you build high-performance websites that rank and convert.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-5 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}

