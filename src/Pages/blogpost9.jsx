import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
} from "../seo/siteJsonLd";

export default function BlogPost9() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Shopify SEO Checklist (2026): Rank Your Store & Grow Organic Sales | Wixwave Blog";

  const description =
    "A practical Shopify SEO checklist for 2026: technical setup, collection pages, product optimization, site speed, structured data, and content that drives organic ecommerce traffic.";

  const canonicalUrl = "https://wixwave.co/blog/shopify-seo-checklist-2026";

  const heroImage =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-05-19";

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
      "Shopify SEO",
      "Shopify SEO checklist",
      "Shopify SEO services",
      "Shopify store SEO",
      "ecommerce SEO",
      "Shopify product page optimization",
      "Shopify collection SEO",
      "Shopify technical SEO",
      "Shopify speed optimization",
      "Shopify SEO 2026",
      "Shopify SEO Patna",
      "Shopify SEO Gurugram",
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
      q: "Does Shopify have good SEO out of the box?",
      a: "Shopify provides a solid technical base—clean URLs, mobile themes, sitemaps, and canonical handling—but rankings still depend on your content, site structure, speed, backlinks, and how well product and collection pages are optimized.",
    },
    {
      q: "What is the fastest Shopify SEO win?",
      a: "Fix duplicate or thin product descriptions, optimize collection pages for real search intent, compress images, and improve internal links from blogs and homepage sections to high-value collections.",
    },
    {
      q: "Can Wixwave help with Shopify SEO in Patna and Gurugram?",
      a: "Yes. Wixwave provides Shopify SEO audits, on-page optimization, technical fixes, and ongoing SEO support for ecommerce brands in Patna, Gurugram, Gurgaon, and across India.",
    },
  ];

  const relatedLinks = [
    {
      to: "/blog/shopify-vs-woocommerce-2026",
      label: "Shopify vs WooCommerce (2026)",
      description: "Compare cost, SEO, speed, and scalability before you choose a platform.",
    },
    {
      to: "/blog/shopify-store-development-services",
      label: "Shopify store development guide",
      description: "How to plan and build a conversion-focused Shopify store from scratch.",
    },
    {
      to: "/services/seo",
      label: "SEO services",
      description: "Technical SEO, content, and local SEO for ecommerce and service businesses.",
    },
    {
      to: "/contact",
      label: "Get a free consultation",
      description: "Share your Shopify URL and goals—we'll suggest practical SEO priorities.",
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
          alt="Shopify SEO checklist for ecommerce stores"
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
                Shopify SEO Checklist (2026): Rank Your Store & Grow Organic
                Sales
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                Step-by-step Shopify SEO for collections, products, speed, and
                content—built for brands that want sustainable traffic.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                May 19, 2026 • {readingTime} min read
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
            Paid ads can drive sales quickly, but{" "}
            <strong>Shopify SEO</strong> builds a channel you own. When your
            collections and products rank for the right keywords, you earn
            traffic without paying for every click—and that compounds over time.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            This <strong>Shopify SEO checklist</strong> is written for store
            owners, marketers, and founders who want a practical 2026 plan. It
            covers technical basics, collection strategy, product page
            optimization, speed, structured data, and content that supports
            ecommerce growth. If you are still planning the build, pair this
            with our{" "}
            <Link
              to="/blog/shopify-store-development-services"
              className="text-blue-600 hover:underline"
            >
              Shopify store development guide
            </Link>
            .
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            1. Technical Shopify SEO foundations
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Before you publish dozens of products, confirm the technical base is
            clean. Shopify handles many defaults well, but stores still break SEO
            with duplicate content, bloated apps, or weak indexing control.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Submit your sitemap in Google Search Console</li>
            <li>Confirm only one preferred domain (with or without www)</li>
            <li>Audit indexed pages—block thin or duplicate URLs where needed</li>
            <li>Fix broken links on collections, menus, and footer</li>
            <li>Keep checkout and cart pages out of organic focus (normal on Shopify)</li>
            <li>Use canonical tags correctly when duplicating landing pages</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            2. Collection page SEO (your biggest lever)
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Collection pages often rank better than individual products for
            broader keywords. Treat each important collection like a landing
            page—not just a product grid.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Target one clear keyword theme per collection</li>
            <li>Write 150–400 words of unique intro copy above the product grid</li>
            <li>Use descriptive H1 titles (not only “All products”)</li>
            <li>Add FAQ blocks or buying guides for high-intent categories</li>
            <li>Link related collections and bestsellers internally</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            3. Product page optimization
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            <strong>Shopify product page optimization</strong> should answer what
            the product is, who it is for, why it is better, and what happens
            after purchase—without copying manufacturer descriptions used on
            hundreds of other sites.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Unique titles with product + category + brand where natural</li>
            <li>Benefit-led descriptions with specs in scannable bullets</li>
            <li>Compressed images with descriptive file names and alt text</li>
            <li>Reviews, UGC, or trust signals near the add-to-cart area</li>
            <li>Clear shipping, returns, and support details</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            4. Site structure and internal linking
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Google needs to understand which pages matter most. A flat store with
            hundreds of unlinked products will struggle. Build paths from
            homepage → collections → products, and support them with blog
            content.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Limit main navigation to high-value categories</li>
            <li>Link seasonal collections from the homepage hero or featured sections</li>
            <li>Add “related products” and “you may also like” where relevant</li>
            <li>Publish blogs that link to collections (buying guides, comparisons, how-tos)</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            5. Shopify speed optimization
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Speed affects both SEO and conversion. On mobile, every extra second
            can cost sales. <strong>Shopify speed optimization</strong> is often
            about images, apps, and theme bloat—not exotic engineering.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Compress hero and product images (WebP where possible)</li>
            <li>Remove unused apps and scripts from the theme</li>
            <li>Lazy-load below-the-fold media</li>
            <li>Test Core Web Vitals on top collection and product URLs</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            6. Structured data and rich results
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Product schema can help search engines understand price,
            availability, and reviews. Many Shopify themes output basic product
            markup; validate it and fix gaps for key templates.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Validate product, breadcrumb, and organization markup</li>
            <li>Keep price and availability accurate in Search Console</li>
            <li>Use FAQ schema on collection or blog pages when FAQs are visible</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            7. Content marketing for Shopify stores
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Blogs are not optional for competitive niches. Use content to target
            problem-aware searches, then link to collections and flagship
            products.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Buying guides (“best X for Y”)</li>
            <li>Comparison posts (materials, sizes, use cases)</li>
            <li>Care, setup, and maintenance tutorials</li>
            <li>Local or regional guides if you serve specific cities</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            8. Local Shopify SEO (Patna, Gurugram, India)
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you ship nationally but brand locally—or run hybrid online +
            offline sales—add location signals without spamming keywords. Mention
            service areas naturally on About, Contact, and shipping pages, and
            keep NAP consistent across Google Business Profile and directories.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Wixwave supports{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            for ecommerce brands in Patna and Gurugram, including Shopify audits,
            on-page fixes, and ongoing optimization.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Quick Shopify SEO checklist (printable)
          </h2>

          <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Search Console + sitemap submitted</li>
            <li>Collection pages have unique copy and clear keywords</li>
            <li>Product descriptions are original and conversion-focused</li>
            <li>Images compressed with alt text</li>
            <li>Internal links from homepage, blog, and collections</li>
            <li>Apps audited for speed impact</li>
            <li>Schema validated on key templates</li>
            <li>Monthly review of rankings, pages, and revenue by landing page</li>
          </ol>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">Related resources</h2>

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
                    type="button"
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-sm sm:text-base">
                      {item.q}
                    </span>
                    <span className="text-lg" aria-hidden="true">
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
            Want a Shopify SEO audit?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave helps Shopify stores improve rankings, speed, and
            conversion-ready product pages.
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
