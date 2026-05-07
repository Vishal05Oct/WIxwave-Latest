import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost5() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Local SEO Checklist (2026): Patna + Gurugram (Gurgaon) | Wixwave Blog";

  const description =
    "A practical local SEO checklist for Patna and Gurugram businesses: Google Business Profile setup, on-page SEO, citations, reviews, and content ideas that drive leads.";

  const canonicalUrl =
    "https://wixwave.co/blog/local-seo-checklist-patna-gurugram";

  const heroImage =
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-04-24";

  useSeo({
    title,
    description,
    canonical: canonicalUrl,
    keywords: [
      "local seo checklist",
      "local seo patna",
      "local seo gurugram",
      "local seo gurgaon",
      "google business profile optimization",
      "citations and reviews",
      "local seo 2026",
    ],
    jsonLdArray: [
      buildBlogPostingJsonLd({
        headline: blogHeadlineFromSeoTitle(title),
        description,
        url: canonicalUrl,
        datePublished,
        image: heroImage,
      }),
      buildBlogBreadcrumbsJsonLd({
        articleName: blogHeadlineFromSeoTitle(title),
        canonicalUrl,
      }),
    ],
  });

  useEffect(() => {
    let cachedTotal = null;

    const handleScroll = () => {
      if (cachedTotal === null) {
        cachedTotal =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      }
      setProgress((window.scrollY / cachedTotal) * 100);
    };

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

  useEffect(() => {
    if (contentRef.current) {
      const words = contentRef.current.innerText.trim().split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
    }
  }, []);

  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "How long does local SEO take to work in Patna or Gurugram?",
      a: "Most businesses see early movement in 4–8 weeks, but consistent leads typically take 3–6 months. Results depend on competition, your Google Business Profile strength, reviews, and website quality.",
    },
    {
      q: "Do I need a website if I already have a Google Business Profile?",
      a: "Yes. A Google Business Profile can rank, but a strong website improves trust, conversion rate, service clarity, and ranking consistency—especially for competitive services.",
    },
    {
      q: "What matters more: citations or reviews?",
      a: "Both help. Citations build consistency and trust signals; reviews strongly influence conversion and local pack performance. Prioritize steady reviews while keeping citations accurate.",
    },
  ];

  const relatedLinks = [
    {
      to: "/services/seo",
      label: "SEO services",
      description: "Local SEO + technical and content improvements for long-term leads.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "Fast, SEO-ready websites that support local ranking and conversions.",
    },
    {
      to: "/contact",
      label: "Get a free consultation",
      description: "Tell us your city and goals. We’ll share a practical SEO plan.",
    },
  ];

  return (
    <main>
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>

      <section className="relative">
        <img
          src={heroImage}
          alt="Local SEO checklist for Patna and Gurugram businesses"
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
                Back to Blogs
              </Link>

              <h1 className="mt-3 text-2xl sm:text-4xl lg:text-6xl font-bold leading-snug">
                Local SEO Checklist (2026): Patna + Gurugram (Gurgaon)
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                A step-by-step checklist to improve Google visibility, calls,
                and leads—without gimmicks.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                Apr 24, 2026 • {readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={contentRef}
        className="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-14"
      >
        <section className="space-y-5">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If your business serves customers in Patna or Gurugram (Gurgaon),
            local SEO is one of the highest-ROI channels you can invest in. The
            goal is simple: show up when someone searches for your service, earn
            trust fast, and convert that visibility into calls and leads.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            This checklist is written for service businesses and local brands.
            If you want hands-on help, explore our{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            or pair it with an{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              SEO-ready website
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            1) Google Business Profile (GBP) Setup Checklist
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Choose the right primary category (most important GBP field)</li>
            <li>Add services with clear descriptions (not keyword stuffing)</li>
            <li>Write a strong business description (what, who, and where you serve)</li>
            <li>Upload real photos weekly (team, office, work, results)</li>
            <li>Enable messaging/calls and track inquiries</li>
            <li>Publish 1–2 posts per week (offers, updates, FAQs)</li>
            <li>Answer Q&amp;A (seed 5–10 common questions and answer them)</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            2) On-page Local SEO (Website Checklist)
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Local SEO gets easier when your website clearly explains what you do
            and where you do it. If your website is slow or unclear, you can
            lose rankings and leads even with a strong GBP.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>One clear H1 per page + logical H2 sections</li>
            <li>Service pages for your core offers (not everything on one page)</li>
            <li>Fast load time and mobile-first layout (Core Web Vitals)</li>
            <li>Internal linking between service pages and relevant blogs</li>
            <li>Clear CTA above the fold (call/WhatsApp/contact)</li>
            <li>NAP consistency: name, phone, address (if you have an office)</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            3) Citations (Local Listings) Checklist
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Use the same business name, phone, and website everywhere</li>
            <li>Fix duplicates (they dilute trust signals)</li>
            <li>Add 10–30 real listings on relevant platforms (quality &gt; quantity)</li>
            <li>Keep categories consistent with your GBP category</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            4) Reviews System (The Simple Playbook)
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Ask within 24–48 hours after delivery/results</li>
            <li>Send one short link + one reminder (don’t spam)</li>
            <li>Reply to every review (signals activity + improves conversion)</li>
            <li>Collect photo/video reviews where possible</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            5) Local Content Ideas (Patna + Gurugram)
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Publishing useful local content builds topical authority and earns
            natural backlinks over time.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-[#0b0b2c]">Patna ideas</h3>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                <li>“Best [service] checklist for Patna businesses”</li>
                <li>“How to improve leads for clinics in Patna”</li>
                <li>“Local SEO mistakes we see in Patna websites”</li>
                <li>“Pricing guide: website + SEO for Patna SMEs”</li>
                <li>“Case study: growth plan for a Patna brand”</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-[#0b0b2c]">Gurugram ideas</h3>
              <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                <li>“How to compete with ads + SEO in Gurugram”</li>
                <li>“Local SEO checklist for service businesses in Gurgaon”</li>
                <li>“Conversion-focused landing pages for Gurugram leads”</li>
                <li>“Content strategy for B2B services in Gurugram”</li>
                <li>“Technical SEO fixes for high-competition markets”</li>
              </ul>
            </div>
          </div>
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

        <section className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">
            {faqs.map((item, i) => {
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

        <div className="p-6 sm:p-8 bg-blue-600 text-white rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold">
            Want This Checklist Implemented for Your Business?
          </h3>
          <p className="mt-2 opacity-90">
            Share your city and niche. We’ll audit your GBP + website and map the
            fastest local SEO wins.
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

