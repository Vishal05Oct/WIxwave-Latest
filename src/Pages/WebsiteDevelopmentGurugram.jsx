import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";

export default function WebsiteDevelopmentGurugram() {
  const canonical = "https://wixwave.co/website-development-gurugram";
  const title = "Complete Digital Services Company in Gurugram (Gurgaon) | Wixwave";
  const description =
    "Wixwave is a complete digital services company in Gurugram (Gurgaon) offering website development, SEO, branding, app development, social media marketing, and paid ads. Comprehensive digital solutions for your business.";
  const relatedLinks = [
    {
      to: "/services/web-dev",
      label: "Website development services",
      text: "See the delivery model behind our Gurugram and Gurgaon digital projects.",
    },
    {
      to: "/services/seo",
      label: "SEO services",
      text: "Strengthen technical SEO, content quality, and conversion performance.",
    },
    {
      to: "/services/branding",
      label: "Branding services",
      text: "Build a strong brand identity for your Gurugram business.",
    },
    {
      to: "/services/app-dev",
      label: "App development services",
      text: "Create mobile apps to expand your reach in Gurugram.",
    },
    {
      to: "/portfolio",
      label: "Portfolio examples",
      text: "Review execution quality, structure, and visual polish across live projects.",
    },
  ];

  useSeo({
    title,
    description,
    canonical,
    keywords: [
      "digital services company in gurugram",
      "digital services company in gurgaon",
      "website development company in gurugram",
      "website development company in gurgaon",
      "web design company gurugram",
      "seo services gurgaon",
      "branding company gurugram",
      "app development gurgaon",
      "social media marketing gurugram",
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
      "@type": "Service",
      name: "Complete Digital Services in Gurugram",
      url: canonical,
      description,
      areaServed: [
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Gurgaon" },
      ],
      serviceType: "Digital Services",
      provider: {
        "@type": "Organization",
        name: "Wixwave",
        url: "https://wixwave.co",
        telephone: "+919470440744",
      },
    },
  });

  return (
    <main className="bg-white">
      <section className="container mx-auto px-4 pt-12 pb-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-semibold">
            Gurugram (Gurgaon) • All Services
          </span>
          <Link to="/contact" className="text-blue-700 font-semibold hover:underline">
            Get a free consultation
          </Link>
        </div>

        <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Complete Digital Services Company in Gurugram (Gurgaon)
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
          We provide comprehensive digital solutions for Gurugram and Gurgaon businesses, including website development, SEO, branding, app development, social media marketing, and paid ads to drive growth and success.
        </p>

        <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-3xl">
          If you are comparing teams in Gurugram or Gurgaon, use our{" "}
          <Link to="/blog/choose-website-development-company-gurugram" className="text-blue-700 font-semibold hover:underline">
            local digital partner guide
          </Link>{" "}
          to evaluate each option on comprehensive service offerings, expertise, UX quality, and long-term support.
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

      <section className="container mx-auto px-4 pb-14">
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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900">
              What Gurugram businesses usually need from a website
            </h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Sharper positioning for competitive local and national search terms.</li>
              <li>Faster performance that supports both paid and organic traffic.</li>
              <li>Clean UX that moves visitors from research to enquiry quickly.</li>
              <li>Technical foundations strong enough to scale with growth campaigns.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900">Related resources</h2>
            <div className="mt-4 grid gap-4">
              {relatedLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <h3 className="font-bold text-gray-900">{item.label}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </Link>
              ))}
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

