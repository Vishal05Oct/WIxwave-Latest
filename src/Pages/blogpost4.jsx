import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";

export default function BlogPost4() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "How to Choose a Website Development Company in Gurugram | Wixwave Blog";

  const description =
    "Learn how to choose a website development company in Gurugram by comparing SEO readiness, portfolio quality, UX thinking, pricing clarity, and support.";

  const canonicalUrl =
    "https://wixwave.co/blog/choose-website-development-company-gurugram/";

  const heroImage =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80";

  useSeo({
    title,
    description,
    canonical: canonicalUrl,
    keywords: [
      "how to choose a website development company in gurugram",
      "website development company in gurugram",
      "website development company in gurgaon",
      "web design company gurugram",
      "seo friendly website gurgaon",
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
      q: "What should I ask a website development company in Gurugram before hiring?",
      a: "Ask about portfolio quality, SEO-friendly architecture, CMS ownership, delivery timelines, communication, and what support is included after launch.",
    },
    {
      q: "Can a website development company in Gurgaon help with SEO too?",
      a: "A strong team should build for performance, mobile usability, clean structure, metadata, and conversion flow so the website supports SEO from the start.",
    },
    {
      q: "Should I choose an agency based only on design quality?",
      a: "No. Design matters, but in competitive markets like Gurugram you also need speed, clarity, trust elements, technical quality, and post-launch support.",
    },
  ];

  const relatedLinks = [
    {
      to: "/website-development-gurugram",
      label: "Gurugram service page",
      description: "See how Wixwave positions website development for Gurugram and Gurgaon searches.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "Review the service stack behind fast, conversion-focused business websites.",
    },
    {
      to: "/portfolio",
      label: "Portfolio examples",
      description: "Compare visual quality, structure, and the level of polish across live projects.",
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
          alt="How to choose a website development company in Gurugram"
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
                How to Choose a Website Development Company in Gurugram
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                A practical guide for comparing website partners in Gurugram and
                Gurgaon without getting distracted by surface-level promises.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                Apr 15, 2026 • {readingTime} min read
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
            Choosing a website development company in Gurugram is about more
            than finding a team that can produce a visually modern homepage.
            The right partner should understand positioning, performance, SEO,
            and the conversion needs of a competitive local market.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you are comparing agencies across Gurugram or Gurgaon, focus on
            whether they can help your business stand out, load fast, and turn
            traffic into qualified leads.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Prioritize Strategy Before Design Style
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            In a high-competition city, design alone is not enough. A strong
            partner should ask about your audience, sales process, offer
            positioning, and conversion goals before they talk about colors,
            animations, or layout preferences.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Check whether they ask the right business questions</li>
            <li>See if they discuss trust-building and conversion flow</li>
            <li>Look for evidence of messaging clarity, not just visuals</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Evaluate Performance and SEO Readiness
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Gurugram businesses often compete in crowded service categories. A
            website that looks good but loads slowly or lacks technical SEO will
            struggle to perform. Your shortlist should include teams that can
            explain speed, mobile UX, structure, and search readiness clearly.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If local organic visibility matters, compare them against a page
            built specifically for{" "}
            <Link
              to="/website-development-gurugram"
              className="text-blue-600 hover:underline"
            >
              website development in Gurugram
            </Link>{" "}
            and see whether their approach feels equally focused and useful.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Core Web Vitals awareness</li>
            <li>Clean heading hierarchy and URL structure</li>
            <li>Conversion-first layouts with SEO fundamentals built in</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Review Real Work, Not Just Mockups
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A polished Behance-style mockup is not the same as a working
            website. Open live examples, test them on mobile, and see how they
            handle navigation, forms, speed, and content density. If you can,
            compare those examples with an agency's{" "}
            <Link to="/portfolio" className="text-blue-600 hover:underline">
              portfolio
            </Link>{" "}
            and ask which goals each project was built to solve.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ask About Ownership, Support, and Process
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            You should know how the project moves from discovery to launch, what
            happens after handoff, and whether your team will retain access to
            content, hosting, and code. The best partners make ownership and
            support feel straightforward instead of vague.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Clear milestones and revision flow</li>
            <li>Transparent hosting and CMS ownership</li>
            <li>Post-launch support for improvements and fixes</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Final Thought: Choose a Team That Can Compete Locally
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            The best website development company in Gurgaon will combine
            thoughtful UX, technical execution, and commercial clarity. You are
            not choosing a design vendor. You are choosing a growth partner.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you want to compare your options against a focused delivery
            approach, review our{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website development services
            </Link>{" "}
            and use that benchmark while evaluating agencies.
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
            Need a Website That Can Compete in Gurugram?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave builds fast, clear, SEO-ready websites for businesses in
            Gurugram and Gurgaon.
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
