import React from "react";
import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

export default function WebsiteDevelopmentPatna() {
  const canonical = "https://wixwave.co/website-development-patna";
  const title = "Website Development Company in Patna | Wixwave";
  const description =
    "Wixwave is a website development company in Patna building fast, SEO-ready business websites, ecommerce stores, and web apps. Get pricing, timelines, and a free consultation.";

  useSeo({
    title,
    description,
    canonical,
    keywords: [
      "website development company in patna",
      "web design company in patna",
      "ecommerce website development patna",
      "seo friendly website patna",
      "best website developer patna",
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
      areaServed: [{ "@type": "City", name: "Patna" }],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Patna",
        addressRegion: "Bihar",
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
            Patna • Website Development
          </span>
          <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
            Get a free consultation
          </Link>
        </div>

        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Website Development Company in Patna
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          We build fast, modern, SEO-friendly websites that help Patna businesses generate leads,
          build trust, and convert visitors into customers.
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
              title: "SEO-ready build",
              text: "Clean structure, fast load, Core Web Vitals-first, and technical SEO best practices.",
            },
            {
              title: "High-converting design",
              text: "Clear CTA, strong trust sections, and content layout built for leads and sales.",
            },
            {
              title: "Support that scales",
              text: "We can maintain, optimize, and evolve your website as your business grows.",
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
            <h2 className="text-2xl font-extrabold text-gray-900">Services for Patna businesses</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Business websites (landing pages, corporate, portfolio)</li>
              <li>Ecommerce websites (product catalog, payments, shipping)</li>
              <li>Web apps & dashboards</li>
              <li>Speed optimization + Core Web Vitals</li>
              <li>Technical SEO + on-page SEO setup</li>
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
                <h3 className="font-bold text-gray-900">How much does a website cost in Patna?</h3>
                <p className="mt-1 text-gray-600">
                  Cost depends on pages, features, and content. Share your goals and we’ll suggest a
                  package with timeline and deliverables.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Will the website be SEO friendly?</h3>
                <p className="mt-1 text-gray-600">
                  Yes—our builds include technical SEO fundamentals, performance best practices, and
                  a clean structure that supports ranking.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">How long does it take?</h3>
                <p className="mt-1 text-gray-600">
                  Most business sites take 1–3 weeks; larger ecommerce/web apps take longer depending
                  on scope.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-gray-50 border border-gray-200 p-8 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Ready to grow your business in Patna?
            </h2>
            <p className="mt-1 text-gray-600">
              Get a clear proposal with timeline, pricing range, and next steps.
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
