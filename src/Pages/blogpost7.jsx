import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost7() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Website Design & Development (2026): How to Build Pages That Convert | Wixwave Blog";

  const description =
    "Learn how to design and develop a modern website: information architecture, performance, Core Web Vitals, content structure, internal linking, and conversion-first UX.";

  const canonicalUrl =
    "https://wixwave.co/blog/website-design-development-guide";

  const heroImage =
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-04-24";

  useSeo({
    title,
    description,
    canonical: canonicalUrl,
    keywords: [
      "website design",
      "website development",
      "business website",
      "internal linking",
      "website structure",
      "core web vitals",
      "website performance",
      "conversion focused website",
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
      q: "What makes a website “high-converting”?",
      a: "Clarity. A high-converting website makes it obvious what you do, who it’s for, and what to do next—supported by speed, trust elements, and simple forms/CTAs.",
    },
    {
      q: "What is the best website structure for a service business?",
      a: "A clear hierarchy: homepage → service pages → proof pages (portfolio/case studies) → supporting content (FAQs/blog), with consistent internal links and simple navigation.",
    },
    {
      q: "How often should a business website be updated?",
      a: "At minimum quarterly (content and proof). Monthly is better if you’re publishing new pages, case studies, or blog posts and improving offers over time.",
    },
  ];

  const relatedLinks = [
    {
      to: "/services/web-dev",
      label: "Website design & development service",
      description: "Fast, modern websites built for clarity, trust, and lead generation.",
    },
    {
      to: "/services/seo",
      label: "SEO services",
      description: "If you want long-term organic growth, pair your website with SEO campaigns.",
    },
    {
      to: "/blog/local-seo-checklist-patna-gurugram",
      label: "Local SEO checklist",
      description: "A step-by-step plan for Patna and Gurugram businesses after your site is live.",
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
          alt="Website design and development guide"
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
                Website Design &amp; Development (2026): How to Build Pages That
                Convert
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                A practical blueprint for building a fast, clear, and
                conversion-first website.
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
            A great business website is an end-to-end system: it communicates
            your offer clearly, loads fast, builds trust, and turns visitors
            into enquiries. Design and development decisions shape every part of
            that outcome.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            At Wixwave, we build websites to support growth from day one. If
            you’re planning a new website, start with{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website design &amp; development
            </Link>{" "}
            and optionally connect it with an ongoing{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              growth strategy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            1) Start with Information Architecture (IA)
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Confusing structure kills conversions. Your navigation and page
            hierarchy should make it easy for visitors to find the right service
            fast.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Homepage: brand + clear primary offers</li>
            <li>Service pages: one page per core service</li>
            <li>Supporting pages: case studies, FAQs, blog posts</li>
            <li>Location pages (if local): Patna / Gurugram</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you target local searches, location pages like{" "}
            <Link
              to="/website-development-patna"
              className="text-blue-600 hover:underline"
            >
              website development in Patna
            </Link>{" "}
            and{" "}
            <Link
              to="/website-development-gurugram"
              className="text-blue-600 hover:underline"
            >
              website development in Gurugram
            </Link>{" "}
            help visitors (and search engines) connect your services with the
            right geography.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            2) Build Clean Technical Foundations
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Good development creates stability: fewer bugs, fewer broken pages,
            and a structure that’s easier to scale as your business grows.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Clean URLs and consistent routing</li>
            <li>Unique page titles and descriptions</li>
            <li>Canonical tags, sitemap, robots.txt</li>
            <li>Schema where it helps (Organization, FAQs, services)</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            We also recommend reading{" "}
            <Link
              to="/blog/website-technology-seo"
              className="text-blue-600 hover:underline"
            >
              Website + Technology: Wins That Compound
            </Link>{" "}
            to understand why the build phase affects long-term growth.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            3) Optimize for Core Web Vitals (Performance)
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Speed and stability matter. Core Web Vitals help quantify whether
            users experience fast loading, smooth interaction, and stable layouts.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Compress images and use modern formats</li>
            <li>Reduce layout shifts (avoid late-loading banners)</li>
            <li>Lazy-load non-critical sections</li>
            <li>Keep the main page lightweight</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            4) Content Structure: Headings, Sections, and Clarity
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Great pages are easy to scan. Use one H1, then build clear H2
            sections that answer customer questions and objections.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>One clear topic per page</li>
            <li>Short intro that matches intent</li>
            <li>FAQs to capture long-tail searches</li>
            <li>Strong CTA aligned to the page goal</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            5) Internal Linking (Your “Backlinks” Inside the Website)
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Internal links pass authority and help Google discover pages faster.
            Link from blog posts → service pages, and from services → related
            services and FAQs.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Blog posts should link to the main service page</li>
            <li>Service pages should link to 2–5 related pages</li>
            <li>Use natural anchors (not keyword spam)</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you’re growing locally, pair this with our{" "}
            <Link
              to="/blog/local-seo-checklist-patna-gurugram"
              className="text-blue-600 hover:underline"
            >
              local SEO checklist
            </Link>{" "}
            and improve your Google Business Profile too.
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
            Want a Website Built to Convert?
          </h3>
          <p className="mt-2 opacity-90">
            We build fast, modern websites designed for clarity, trust, and lead
            generation.
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

