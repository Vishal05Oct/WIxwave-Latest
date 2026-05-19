import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost8() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Shopify Store Development Services: Custom Shopify Website Development Guide | Wixwave Blog";

  const description =
    "Explore Shopify Store Development Services, Custom Shopify Website Development, Shopify SEO, theme customization, and ecommerce website development for growing brands.";

  const canonicalUrl =
    "https://wixwave.co/blog/shopify-store-development-services";

  const heroImage =
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-05-07";

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
      "Shopify Store Development Services",
      "Custom Shopify Website Development",
      "Shopify website development",
      "Shopify ecommerce development",
      "Shopify ecommerce website development",
      "ecommerce website development services",
      "custom Shopify store design",
      "Shopify theme customization",
      "Shopify SEO services",
      "Shopify speed optimization",
      "Shopify product page optimization",
      "conversion focused Shopify store",
      "Shopify developers",
      "Shopify development company",
      "Shopify website developers in Patna",
      "Shopify website developers in Gurugram",
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
      q: "What are Shopify Store Development Services?",
      a: "Shopify Store Development Services include planning, designing, building, configuring, optimizing, and launching a Shopify ecommerce store for products, payments, shipping, SEO, and conversions.",
    },
    {
      q: "Why choose Custom Shopify Website Development instead of a basic theme?",
      a: "Custom Shopify Website Development gives your brand a tailored storefront, cleaner product journeys, better performance, flexible sections, and stronger conversion-focused design than a generic theme setup.",
    },
    {
      q: "Can Wixwave build Shopify stores for Patna and Gurugram businesses?",
      a: "Yes. Wixwave builds Shopify stores and ecommerce websites for businesses in Patna, Gurugram, Gurgaon, and other locations that need scalable online selling systems.",
    },
  ];

  const relatedLinks = [
    {
      to: "/blog/shopify-vs-woocommerce-2026",
      label: "Shopify vs WooCommerce (2026)",
      description: "Compare platforms on cost, SEO, speed, and scalability before you build.",
    },
    {
      to: "/blog/shopify-seo-checklist-2026",
      label: "Shopify SEO checklist (2026)",
      description: "Step-by-step Shopify SEO for collections, products, speed, and organic growth.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "Build a fast, SEO-ready ecommerce website with a clear conversion path.",
    },
    {
      to: "/website-development-patna",
      label: "Website development in Patna",
      description: "Shopify and business website development for Patna brands.",
    },
    {
      to: "/website-development-gurugram",
      label: "Website development in Gurugram",
      description: "Custom ecommerce and Shopify website development for Gurugram businesses.",
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
          alt="Shopify store development services"
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
                Shopify Store Development Services: Custom Shopify Website
                Development Guide
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                A practical guide for ecommerce brands that want a faster,
                cleaner, and more conversion-focused Shopify store.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                May 7, 2026 - {readingTime} min read
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
            Shopify is one of the strongest platforms for ecommerce brands that
            want to launch, manage, and scale online sales without building an
            entire commerce backend from scratch. But the quality of the store
            still depends on strategy, design, development, product structure,
            and technical SEO.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            That is where professional{" "}
            <strong>Shopify Store Development Services</strong> and{" "}
            <strong>Custom Shopify Website Development</strong> become
            valuable. A strong Shopify store should look credible, load fast,
            make products easy to understand, and guide shoppers smoothly toward
            checkout. For most growing brands, that also means ecommerce
            website development, Shopify SEO, product page optimization, and
            conversion-focused store design working together.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            What Shopify Store Development Services Include
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Shopify Store Development Services cover the full build process,
            from planning the storefront to configuring the core ecommerce
            experience. The goal is not only to publish a store, but to create a
            selling system that is simple for your team to manage.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Store strategy, navigation, and product category planning</li>
            <li>Custom homepage, collection, and product page layouts</li>
            <li>Theme customization or custom Shopify theme development</li>
            <li>Payment, shipping, tax, and checkout configuration</li>
            <li>App integrations for reviews, analytics, marketing, and CRM</li>
            <li>Speed, mobile, SEO, and conversion optimization</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Related Shopify Development Keywords That Matter
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Customers do not always search with the same phrase. Some search
            for Shopify website development, some search for ecommerce website
            development services, and others look for a Shopify development
            company that can handle design, setup, SEO, and long-term
            improvements.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A useful Shopify content strategy should naturally cover related
            SEO ranking keywords like Shopify theme customization, Shopify SEO
            services, Shopify speed optimization, Shopify product page
            optimization, custom Shopify store design, and conversion-focused
            Shopify store development.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Why Custom Shopify Website Development Matters
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A basic Shopify theme can help you start, but many growing brands
            need a more tailored experience.{" "}
            <strong>Custom Shopify Website Development</strong> lets your store
            match your brand, product complexity, customer journey, and
            marketing goals.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Custom development is especially useful when you need unique product
            sections, better filtering, stronger landing pages, custom bundles,
            local trust signals, or a storefront that supports paid ads and SEO
            campaigns without feeling generic.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shopify Theme Customization vs Custom Shopify Store Design
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Shopify theme customization is best when you already have a strong
            theme and need layout, color, typography, section, or app
            adjustments. Custom Shopify store design is better when the brand
            needs a more distinctive ecommerce experience, custom sections, or
            a product journey that a standard theme cannot support well.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Both approaches can rank and convert when the technical foundation
            is clean. The right choice depends on your budget, catalog size,
            product complexity, brand positioning, and growth plan.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shopify SEO Starts During Development
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Shopify SEO is not something to add after launch. Your URLs, product
            titles, collection structure, image optimization, schema, metadata,
            and internal links should be planned while the store is being built.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Clear collection pages for important product categories</li>
            <li>Unique product descriptions instead of copied supplier text</li>
            <li>Optimized image names, alt text, and compression</li>
            <li>Clean metadata and canonical tags</li>
            <li>Internal links from blogs to collections and products</li>
            <li>Structured data for products, reviews, and breadcrumbs</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If organic traffic matters, connect the build with ongoing{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            so your ecommerce store can keep improving after launch.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            What a High-Converting Shopify Store Needs
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Good ecommerce design reduces hesitation. Visitors should understand
            your products, trust your brand, find answers quickly, and feel safe
            completing checkout.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Clear product photography and benefit-led product copy</li>
            <li>Visible shipping, return, and support information</li>
            <li>Reviews, testimonials, and trust badges where appropriate</li>
            <li>Fast mobile layout with simple filtering and search</li>
            <li>Strong calls to action on product and collection pages</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shopify Speed Optimization and Mobile Performance
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Shopify speed optimization matters because ecommerce visitors make
            decisions quickly, especially on mobile. Heavy apps, oversized
            images, unoptimized videos, and layout shifts can slow the store and
            weaken both user experience and SEO performance.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Compress product and collection images before upload</li>
            <li>Audit third-party apps that add unused scripts</li>
            <li>Keep above-the-fold sections lightweight</li>
            <li>Test important pages on mobile, not only desktop</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Shopify Development for Local and Growing Brands
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Wixwave helps businesses plan and build ecommerce stores with the
            same care we bring to service websites. Whether you are a Patna
            business launching your first online catalog or a Gurugram brand
            improving an existing store, the foundation should support growth.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you are searching for Shopify website developers in Patna,
            Shopify website developers in Gurugram, or a Shopify development
            company that understands SEO-ready ecommerce website development,
            choose a team that can connect design, performance, content, and
            conversion strategy.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Explore our{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website development services
            </Link>
            , or review dedicated pages for{" "}
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

                    <span
                      className="text-lg"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <div>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        <div className="p-6 sm:p-8 bg-blue-600 text-white rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold">
            Need a Custom Shopify Store?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave builds Shopify stores designed for performance, trust, SEO,
            and conversion.
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
