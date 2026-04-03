import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

export default function WebsiteDevelopmentGurugram() {
  const canonical = "https://wixwave.co/website-development-gurugram";
  const title = "Website Development Company in Gurugram (Gurgaon) | Wixwave";
  const description =
    "Wixwave is a website development company in Gurugram (Gurgaon) building fast, SEO-ready websites, ecommerce stores, and web apps. Clear pricing, quick delivery, and ongoing support.";

  useSeo({
    title,
    description,
    canonical,
    keywords: [
      "website development company in gurugram",
      "website development company in gurgaon",
      "web design company gurugram",
      "ecommerce website development gurgaon",
      "seo friendly website gurugram",
    ],
    robots: "index,follow",
    og: {
      url: canonical,
      type: "website",
      siteName: "Wixwave",
      locale: "en_IN",
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Wixwave",
      url: "https://wixwave.co",
      description,
      areaServed: [
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Gurgaon" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecommerce Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
      ],
    },
  });

  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-semibold">
            Gurugram (Gurgaon) • Website Development
          </span>
          <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
            Get a free consultation
          </Link>
        </div>

        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Website Development Company in Gurugram (Gurgaon)
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          We build fast, modern, SEO-ready websites for Gurugram businesses—focused on performance,
          trust, and conversions.
        </p>

        <div className="mt-8 flex gap-3 flex-wrap">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
          >
            Talk to an expert
          </Link>
          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition"
          >
            View portfolio
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Enterprise-grade performance",
              text: "Core Web Vitals-first builds, optimized images, and lightweight front-end delivery.",
            },
            {
              title: "SEO foundation built-in",
              text: "Clean URL structure, schema-ready pages, and content sections that support ranking.",
            },
            {
              title: "Conversion-focused UX",
              text: "Messaging, CTAs, and trust sections designed to generate quality leads.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-extrabold text-gray-900">{item.title}</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900">What we build in Gurugram</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Corporate websites and landing pages</li>
              <li>Ecommerce websites (Shopify/WooCommerce/custom)</li>
              <li>Web apps, portals, dashboards</li>
              <li>Speed + performance optimization</li>
              <li>Technical SEO and on-page SEO setup</li>
            </ul>
            <div className="mt-5">
              <Link to="/services/web-dev" className="text-blue-700 font-semibold hover:underline">
                Explore website development →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900">FAQs</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">Do you cover “Gurgaon” searches too?</h3>
                <p className="mt-1 text-gray-600">
                  Yes—our Gurugram page intentionally includes Gurgaon terms in headings and content
                  so you can rank for both.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Can you optimize our existing site?</h3>
                <p className="mt-1 text-gray-600">
                  Absolutely—speed, UX, technical SEO, and conversion improvements can often deliver
                  quick wins.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">What timeline should we expect?</h3>
                <p className="mt-1 text-gray-600">
                  Typical business websites take 1–3 weeks; ecommerce/web apps vary by features and
                  integrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Want more leads in Gurugram (Gurgaon)?
            </h2>
            <p className="mt-1 text-gray-600">
              Get a proposal with scope, timeline, and pricing range.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
          >
            Contact Wixwave
          </Link>
        </div>
      </section>
    </main>
  );
}

