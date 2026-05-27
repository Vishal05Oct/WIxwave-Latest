import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost12() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Business Website Development in Patna (2026): Cost, Features & Company Guide | Wixwave Blog";

  const description =
    "Plan your business website in Patna: must-have features, realistic costs, SEO-ready structure, and how to choose the best website development company in Patna for long-term growth.";

  const canonicalUrl =
    "https://wixwave.co/blog/business-website-development-company-patna";

  const heroImage =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-05-27";

  useSeo({
    title,
    description,
    canonical: canonicalUrl,
    article: {
      publishedTime: `${datePublished}T00:00:00+05:30`,
    },
    og: {
      url: canonicalUrl,
      type: "article",
      image: heroImage,
    },
    keywords: [
      "business website development Patna",
      "business website Patna",
      "website development company in Patna",
      "professional business website Patna",
      "corporate website development Patna",
      "small business website Patna",
      "best website development company in Patna",
      "affordable business website Patna",
      "company website design Patna",
      "SEO friendly business website Patna",
      "web design company in Patna",
      "custom business website Patna",
      "website development services in Patna",
      "business website cost Patna",
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
      q: "What should a business website in Patna include?",
      a: "A strong business website in Patna should include clear service pages, trust signals (reviews, case studies), fast mobile performance, contact and WhatsApp CTAs, local SEO structure, and analytics—built so you can add content and rank over time.",
    },
    {
      q: "How much does business website development cost in Patna?",
      a: "Costs depend on page count, custom design, copywriting, integrations, and SEO scope. A simple small business website in Patna costs less than a multi-service corporate site with custom features, CRM hooks, or ecommerce.",
    },
    {
      q: "How do I pick the best website development company in Patna?",
      a: "Compare live portfolios, SEO readiness, delivery process, ownership of domain and code, and post-launch support. The best website development company in Patna explains business goals before discussing colors or templates.",
    },
  ];

  const relatedLinks = [
    {
      to: "/blog/choose-website-development-company-patna",
      label: "Choose a web dev company in Patna",
      description: "Evaluation checklist for agencies and freelancers.",
    },
    {
      to: "/blog/website-design-development-guide",
      label: "Website design & development guide",
      description: "Architecture, performance, and conversion-first UX.",
    },
    {
      to: "/blog/local-seo-checklist-patna-gurugram",
      label: "Local SEO checklist",
      description: "Rank for Patna searches with GBP, citations, and content.",
    },
    {
      to: "/website-development-patna",
      label: "Website development in Patna",
      description: "Wixwave Patna landing page for business and Shopify builds.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "End-to-end delivery from strategy to launch.",
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
          alt="Business website development company in Patna"
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
                Business Website Development in Patna (2026): Cost, Features
                &amp; Company Guide
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                Plan a professional business website in Patna with the right
                features, budget, and website development partner.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                May 27, 2026 · {readingTime} min read
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
            For clinics, coaching institutes, manufacturers, agencies, and
            local service brands in Bihar, a{" "}
            <strong>business website in Patna</strong> is often the first place
            customers validate credibility. If your site is slow, outdated, or
            missing clear service pages, you lose leads—even when your offline
            reputation is strong.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            This guide covers{" "}
            <strong>business website development in Patna</strong>: what to
            build, what it costs, how SEO fits in, and how to choose a{" "}
            <strong>website development company in Patna</strong> that supports
            growth—not only a one-time launch.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Business Website vs Brochure Site
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A brochure site lists contact details and a few pages. A growth-ready{" "}
            <strong>professional business website in Patna</strong> is structured
            to rank, convert, and scale: service pages, FAQs, case studies,
            clear CTAs, and analytics.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Service-specific landing pages for high-intent searches</li>
            <li>Trust: testimonials, portfolio, certifications, team bios</li>
            <li>Lead capture: forms, WhatsApp, click-to-call</li>
            <li>Technical SEO: speed, mobile UX, schema, clean URLs</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Must-Have Features for Patna Business Websites
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Whether you need a <strong>small business website in Patna</strong>{" "}
            or <strong>corporate website development in Patna</strong>, these
            elements improve leads and local visibility:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Homepage with clear value proposition and primary CTA</li>
            <li>Dedicated pages per service (not one generic “Services” block)</li>
            <li>About page with local presence and service areas</li>
            <li>Contact page with map, hours, and multiple contact options</li>
            <li>Blog or resources section for SEO and education</li>
            <li>Privacy policy and basic compliance pages where needed</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Keyword Strategy: How Patna Customers Search
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Align pages and content with real search intent. Group keywords by
            page type instead of repeating the same phrase everywhere:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Commercial:</strong> website development company in Patna,
              best website development company in Patna, web design company in
              Patna
            </li>
            <li>
              <strong>Service:</strong> business website development Patna,
              company website design Patna, custom business website Patna
            </li>
            <li>
              <strong>Local:</strong> website development services in Patna,
              SEO friendly business website Patna
            </li>
            <li>
              <strong>Price:</strong> business website cost Patna, affordable
              business website Patna
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Your homepage targets brand and core services; blog posts answer
            specific questions; location pages like{" "}
            <Link
              to="/website-development-patna"
              className="text-blue-600 hover:underline"
            >
              website development in Patna
            </Link>{" "}
            reinforce local relevance.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            SEO-Ready Business Website Development
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            An <strong>SEO friendly business website in Patna</strong> is built
            correctly from day one: fast hosting, compressed images, semantic
            headings, metadata, internal links, and schema where appropriate.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Pair the build with{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            and our{" "}
            <Link
              to="/blog/local-seo-checklist-patna-gurugram"
              className="text-blue-600 hover:underline"
            >
              local SEO checklist
            </Link>{" "}
            if you target “near me” and city-based searches.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Business Website Cost in Patna: What Drives Price
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            <strong>Business website cost in Patna</strong> varies by scope.
            Cheap packages often mean templates, thin content, and weak SEO—costing
            more to fix later.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Number of pages and custom design depth</li>
            <li>Copywriting, photography, and brand assets</li>
            <li>Integrations: CRM, booking, chat, payments</li>
            <li>Ecommerce or Shopify add-ons for product sales</li>
            <li>Ongoing maintenance, SEO, and content updates</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            An <strong>affordable business website in Patna</strong> can still be
            professional if scope is clear and the agency focuses on essentials
            first, then phases advanced features.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Choosing a Website Development Company in Patna
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Use a structured comparison—not only price. Our dedicated guide on{" "}
            <Link
              to="/blog/choose-website-development-company-patna"
              className="text-blue-600 hover:underline"
            >
              how to choose a website development company in Patna
            </Link>{" "}
            walks through portfolio review, SEO readiness, ownership, and support.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Live sites that load fast on mobile</li>
            <li>Clear project timeline and revision process</li>
            <li>CMS access so your team can update content</li>
            <li>Post-launch support and performance monitoring</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            When to Add Shopify or Advanced Features
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Service businesses often start with a lead-generation site. Retail
            and D2C brands may need ecommerce. If you sell products online, see
            our{" "}
            <Link
              to="/blog/shopify-expert-patna-store-development-guide"
              className="text-blue-600 hover:underline"
            >
              Shopify expert in Patna guide
            </Link>{" "}
            or explore{" "}
            <Link
              to="/blog/shopify-store-development-services"
              className="text-blue-600 hover:underline"
            >
              Shopify store development services
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Work With Wixwave in Patna
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Wixwave delivers <strong>website development services in Patna</strong>{" "}
            for businesses that need speed, clarity, and SEO-ready structure.
            Review our{" "}
            <Link to="/portfolio" className="text-blue-600 hover:underline">
              portfolio
            </Link>
            , compare{" "}
            <Link
              to="/services/web-dev"
              className="text-blue-600 hover:underline"
            >
              website development services
            </Link>
            , and{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              get a free consultation
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
            Ready for a Business Website in Patna?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave builds fast, SEO-ready business websites that help Patna
            brands earn trust and generate leads.
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
