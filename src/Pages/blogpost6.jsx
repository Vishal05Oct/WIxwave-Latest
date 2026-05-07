import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost6() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Local SEO Mistakes to Avoid (2026): Patna + Gurugram | Wixwave Blog";

  const description =
    "Avoid the most common local SEO mistakes that block rankings in Patna and Gurugram: GBP issues, weak service pages, inconsistent citations, review gaps, and slow websites.";

  const canonicalUrl =
    "https://wixwave.co/blog/local-seo-mistakes-patna-gurugram";

  const heroImage =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-04-24";

  useSeo({
    title,
    description,
    canonical: canonicalUrl,
    keywords: [
      "local seo mistakes",
      "local seo patna",
      "local seo gurugram",
      "google business profile mistakes",
      "citations consistency",
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
      q: "Do local SEO mistakes really matter if I run paid ads?",
      a: "Yes. Ads can generate leads short-term, but local SEO mistakes reduce your trust signals and conversion rate, and they can increase ad costs because your landing pages perform worse.",
    },
    {
      q: "Which mistake is the biggest ranking blocker?",
      a: "For most businesses it’s a weak Google Business Profile (wrong category, thin services, low activity) combined with a website that doesn’t clearly match the service + location intent.",
    },
    {
      q: "How do I fix inconsistent citations fast?",
      a: "Pick one official NAP format (name, phone, website, address) and update your top listings first. Remove duplicates and keep categories consistent with your GBP category.",
    },
  ];

  const relatedLinks = [
    {
      to: "/blog/local-seo-checklist-patna-gurugram",
      label: "Local SEO checklist (2026)",
      description: "Use the full step-by-step checklist to implement fixes systematically.",
    },
    {
      to: "/services/seo",
      label: "SEO services",
      description: "Local SEO + technical + content improvements for sustainable leads.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "A fast, SEO-ready website that improves rankings and conversions.",
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
          alt="Local SEO mistakes to avoid in Patna and Gurugram"
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
                Local SEO Mistakes to Avoid (2026): Patna + Gurugram
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                Fix the blockers that stop you from ranking in Google’s local
                results and turning searches into calls.
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
            Local SEO is not complicated—but it is easy to get wrong. In cities
            like Patna and Gurugram (Gurgaon), small mistakes stack up: your
            Google Business Profile looks incomplete, your service pages don’t
            match search intent, citations drift, and reviews slow down.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you want a full implementation plan, start with our{" "}
            <Link
              to="/blog/local-seo-checklist-patna-gurugram"
              className="text-blue-600 hover:underline"
            >
              local SEO checklist
            </Link>{" "}
            and use this post as the “what to fix first” guide.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mistake #1: Wrong GBP category and thin services
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Your primary category strongly influences which searches you can
            appear for. If it is incorrect, or your services are empty/thin,
            Google has less confidence about when to show your listing.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Use the most specific primary category</li>
            <li>Add services with short, helpful descriptions</li>
            <li>Post updates weekly (offers, FAQs, results)</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mistake #2: No strong service page (or everything on one page)
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Local rankings improve when your website clearly explains each
            service. A single generic services page is usually not enough. Build
            focused pages and connect them with internal links.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Start with your highest intent pages like{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            and ensure your site is fast (Core Web Vitals) via{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website development best practices
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mistake #3: Inconsistent citations and duplicate listings
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Citations are trust signals. When your business name/phone/address
            varies across listings, Google sees conflicting data. This can hold
            back local visibility.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Standardize NAP (one official format)</li>
            <li>Remove duplicates</li>
            <li>Fix the top listings first (quality &gt; quantity)</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mistake #4: Review velocity drops to zero
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Reviews are a conversion engine and a local ranking signal. The goal
            is not “a lot once”—it is steady, authentic reviews over time.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Ask within 24–48 hours after delivery</li>
            <li>Reply to every review</li>
            <li>Collect photos when possible</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Mistake #5: Slow pages and weak landing experiences
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Even if you rank, slow pages and unclear pages reduce leads. Speed,
            clarity, and strong CTAs matter. If you also run ads, this directly
            impacts your ROI—pair SEO with{" "}
            <Link to="/services/paid-ads" className="text-blue-600 hover:underline">
              performance marketing
            </Link>{" "}
            when needed.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Your brand presentation matters too. A consistent identity improves
            trust across GBP, website, and ads—see{" "}
            <Link to="/services/branding" className="text-blue-600 hover:underline">
              branding &amp; graphics
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
            Want a Local SEO Fix Plan for Your Business?
          </h3>
          <p className="mt-2 opacity-90">
            We’ll audit your GBP + website and share the fastest improvements to
            increase calls and leads.
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

