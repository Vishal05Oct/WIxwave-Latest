import { Link } from "react-router-dom";
import { SiNextdotjs, SiReact, SiShopify, SiWordpress } from "react-icons/si";
import useSeo from "../hooks/useSeo";
import { buildFaqJsonLd, patnaLandingFaqs } from "../data/serviceFaqs";
import {
  breadcrumbsFor,
  buildServiceJsonLd,
  buildWebPageJsonLd,
} from "../seo/siteJsonLd";

export default function WebsiteDevelopmentPatna() {
  const canonical = "https://wixwave.co/website-development-patna";
  const title = "Best Website Development Company in Patna, Bihar | Wixwave";
  const description =
    "Looking for the best website development company in Patna, Bihar? Wixwave builds fast, SEO-ready business websites and Shopify stores with performance-first UX, local Patna SEO, and ongoing support for Patna brands.";
  const relatedLinks = [
    {
      to: "/services/web-dev",
      label: "Website development services",
      text: "See the delivery model behind our Patna digital projects.",
    },
    {
      to: "/services/seo",
      label: "SEO services",
      text: "Strengthen technical SEO, content quality, and conversion performance.",
    },
    {
      to: "/services/branding",
      label: "Branding services",
      text: "Build a strong brand identity for your Patna business.",
    },
    {
      to: "/services/app-dev",
      label: "App development services",
      text: "Create mobile apps to expand your reach in Patna.",
    },
  ];

  useSeo({
    title,
    description,
    canonical,
    keywords: [
      "website development services in patna",
      "website development company in patna",
      "web design company in patna",
      "ecommerce website development patna",
      "shopify development company in patna",
      "best digital marketing agency in patna",
      "website development agency in patna",
      "top 10 website development company in patna",
      "shopify store development services",
      "custom shopify website development",
      "professional shopify developers in patna",
      "shopify e-commerce website development company",
      "shopify website development patna",
      "best website development company patna",
    ],
    robots: "index,follow",
    geo: {
      region: "IN-BR",
      placename: "Patna",
      position: "25.5941;85.1376",
      icbm: "25.5941, 85.1376",
    },
    og: {
      url: canonical,
      type: "website",
      siteName: "Wixwave",
      locale: "en_IN",
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical,
        title,
        name: "Website Development Company in Patna",
        description,
        about: { "@id": `${canonical}#service` },
      }),
      buildServiceJsonLd({
        canonical,
        name: "Website Development Company in Patna",
        description,
        serviceType: "Website Development",
        areaServed: "Patna",
      }),
      breadcrumbsFor("patna", canonical),
      buildFaqJsonLd(patnaLandingFaqs, canonical),
    ],
  });

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -bottom-24 right-[-6rem] h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
          <div className="absolute -bottom-24 left-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.07),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.06),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.05),transparent_45%)]" />
        </div>

        <div className="container mx-auto px-4 pt-24 sm:pt-28 pb-10 relative">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 px-3 py-1 text-sm font-semibold shadow-sm backdrop-blur">
              Patna • Website Development
            </span>
            <Link
              to="/contact"
              className="text-slate-900 font-semibold hover:text-blue-700 transition"
            >
              Get a free consultation
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-tight tracking-tight">
                Website Development Company in Patna, Bihar
              </h1>
              <p className="mt-5 text-lg text-slate-700 leading-relaxed max-w-2xl">
                Want a website that loads fast, looks premium, and actually converts? If you are
                searching for "website development company in Patna", Wixwave is the trusted local
                partner offering modern business websites, ecommerce website development, and
                custom Shopify store development with clean UX, performance-first engineering, and an
                SEO-ready foundation.
              </p>

              <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-2xl">
                Whether you search for "shopify development company in Patna", "best digital marketing
                agency in Patna", "website development agency in Patna", or "top 10 website
                development company in Patna", Wixwave supports Patna brands with website builds,
                Shopify development, and locally-focused digital marketing readiness.
              </p>

              <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-2xl">
                As a Patna, Bihar based digital partner, we help local stores, service businesses,
                manufacturers, and education providers win more leads with strong UX, fast pages, and
                content that matches buyer intent in Patna search results.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                {[
                  "Performance-first build (Core Web Vitals)",
                  "SEO-ready structure + content flow",
                  "Fantastic UI with modern sections",
                  "Conversion-focused CTAs and trust",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 01.006 1.414l-7.5 7.6a1 1 0 01-1.428 0l-3.5-3.55a1 1 0 011.425-1.404l2.786 2.826 6.79-6.886a1 1 0 011.421 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-sm font-semibold text-slate-800 leading-relaxed">{t}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Stacks we ship with
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    { Icon: SiNextdotjs, label: "Next.js", iconClass: "text-slate-900" },
                    { Icon: SiReact, label: "React", iconClass: "text-[#087EA4]" },
                    { Icon: SiWordpress, label: "WordPress", iconClass: "text-[#21759B]" },
                    { Icon: SiShopify, label: "Shopify", iconClass: "text-[#7AB55C]" },
                  ].map((stack) => (
                    <div
                      key={stack.label}
                      className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur"
                    >
                      <stack.Icon aria-hidden className={`h-6 w-6 shrink-0 ${stack.iconClass}`} />
                      <span className="text-sm font-semibold text-slate-800">{stack.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-base text-slate-700 leading-relaxed max-w-2xl">
                If ecommerce is your priority, we also deliver{" "}
                <span className="font-semibold text-slate-900">Shopify Store Development Services</span>{" "}
                including{" "}
                <span className="font-semibold text-slate-900">Custom Shopify Website Development</span>,
                theme customization, app integrations, and speed optimization.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/10"
                >
                  Talk to an expert
                </Link>
                <Link
                  to="/portfolio"
                  className="px-6 py-3 rounded-2xl border border-slate-300 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition"
                >
                  View portfolio
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-600 leading-relaxed max-w-2xl">
                Comparing teams in Patna? Use our{" "}
                <Link
                  to="/blog/business-website-development-company-patna"
                  className="text-slate-900 font-semibold underline underline-offset-4 hover:text-blue-700 transition"
                >
                  business website development guide
                </Link>{" "}
                and our{" "}
                <Link
                  to="/blog/shopify-expert-patna-store-development-guide"
                  className="text-slate-900 font-semibold underline underline-offset-4 hover:text-blue-700 transition"
                >
                  Shopify expert in Patna guide
                </Link>{" "}
                to evaluate partners on process, UX quality, technical depth, and support.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <p className="text-xs font-semibold text-slate-600">Preview</p>
                </div>

                <div className="p-6">
                  <h2 className="text-slate-950 font-extrabold text-xl tracking-tight">
                    Built for leads and Shopify growth
                  </h2>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    Premium UI + strong fundamentals: fast pages, clear navigation, and a conversion
                    flow that helps visitors take action.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      { k: "Launch-ready", v: "Clean pages + strong CTAs" },
                      { k: "Fast UI", v: "Optimized media + layout" },
                      { k: "SEO-ready", v: "Structure that supports ranking" },
                      { k: "Shopify-friendly", v: "Store UX and sections" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <p className="text-slate-900 font-extrabold">{row.k}</p>
                        <p className="mt-1 text-slate-600 text-sm leading-relaxed">{row.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px]">
                    <div className="rounded-2xl bg-white p-4">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        You’ll work with{" "}
                        <span className="font-semibold text-slate-900">
                          Professional Shopify Developers in Patna
                        </span>{" "}
                        for store builds, theme customization, integrations, and performance upgrades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
                  Core Web Vitals
                </span>
                <span className="rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
                  Mobile-first UX
                </span>
                <span className="rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
                  Shopify UX
                </span>
                <span className="rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
                  SEO structure
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Fantastic UI that feels premium",
              text: "Modern layout, clear hierarchy, and mobile-first sections that look great across devices.",
            },
            {
              title: "SEO-ready structure from day one",
              text: "Clean architecture, helpful content sections, and schema-friendly pages designed to rank in Patna searches.",
            },
            {
              title: "Conversion-first messaging",
              text: "We design trust, proof, and CTAs into the flow so visitors take action-enquire, call, or buy.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-extrabold text-slate-900">{item.title}</h2>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 font-extrabold transition group-hover:bg-slate-900 group-hover:text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M11 3a1 1 0 000 2h2.586l-7.293 7.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Shopify + website builds for Patna brands
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              As a{" "}
              <span className="font-semibold text-gray-800">
                Shopify E-commerce Website Development Company
              </span>
              , we help new and growing businesses launch stores that are fast, stable, and simple to
              scale. We also build content-driven business websites for services, real estate,
              education, manufacturing, and local brands that need consistent lead flow.
            </p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Shopify store setup & launch</span>{" "}
                (catalog, collections, navigation, payments, shipping, taxes)
              </li>
              <li>
                <span className="font-semibold text-gray-900">Theme customization</span> with
                brand-aligned sections, product storytelling, and checkout best practices
              </li>
              <li>
                <span className="font-semibold text-gray-900">Custom Shopify Website Development</span>{" "}
                for unique layouts, landing pages, and advanced UI needs
              </li>
              <li>
                <span className="font-semibold text-gray-900">Speed & Core Web Vitals</span>{" "}
                improvements to reduce bounce and improve paid + organic performance
              </li>
              <li>
                <span className="font-semibold text-gray-900">SEO setup</span> (technical basics,
                metadata, clean URLs, structured content blocks)
              </li>
            </ul>
            <div className="mt-5">
              <Link to="/services/web-dev" className="text-blue-700 font-semibold hover:underline">
                Explore website development -
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">
                  Why choose Wixwave as your website development company in Patna?
                </h3>
                <p className="mt-1 text-gray-600">
                  We combine strategy, design, development, and SEO in one team—so your site is
                  built to rank locally, load fast on mobile, and convert visitors into leads. You
                  also get clear timelines, transparent pricing, and post-launch support.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Do you provide Shopify development in Patna?
                </h3>
                <p className="mt-1 text-gray-600">
                  Yes. Our team includes{" "}
                  <span className="font-semibold text-gray-800">
                    Professional Shopify Developers in Patna
                  </span>{" "}
                  who handle store builds, theme customization, integrations, and performance
                  improvements.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Can you redesign our current Shopify store or website?
                </h3>
                <p className="mt-1 text-gray-600">
                  Absolutely. We can refresh UI, improve navigation, rebuild key landing pages, fix
                  speed issues, and strengthen on-page SEO-often delivering quick wins within weeks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">What timeline should we expect?</h3>
                <p className="mt-1 text-gray-600">
                  A focused business website typically takes 1-3 weeks. A Shopify store launch often
                  takes 2-4 weeks depending on catalog size, content readiness, and integrations.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  What makes your approach "SEO-friendly" for Patna?
                </h3>
                <p className="mt-1 text-gray-600">
                  We build with clean structure, fast load times, and content sections that answer
                  real buyer questions. That combination supports ranking while also improving user
                  experience and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">
              What businesses in Patna usually need from a website
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Patna markets are competitive-people compare options quickly. Great websites are not
              "just design." They're structured sales assets with clear messaging, confidence
              signals, and frictionless next steps.
            </p>
            <ul className="mt-5 space-y-4 text-gray-700">
              {[
                {
                  t: "Clear positioning",
                  d: "so visitors instantly understand what you do, who it's for, and why you're different.",
                },
                {
                  t: "Mobile-first UI",
                  d: "with readable typography, smart spacing, and scannable sections that reduce drop-offs.",
                },
                {
                  t: "Trust builders",
                  d: "such as reviews, case highlights, guarantees, and process clarity that make decisions easier.",
                },
                {
                  t: "Speed + stability",
                  d: "to support ads, SEO, and repeat visits-especially important for ecommerce catalogs.",
                },
              ].map((row) => (
                <li key={row.t} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 border border-blue-100">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 01.006 1.414l-7.5 7.6a1 1 0 01-1.428 0l-3.5-3.55a1 1 0 011.425-1.404l2.786 2.826 6.79-6.886a1 1 0 011.421 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gray-900">{row.t}</span>{" "}
                    <span className="text-gray-700">{row.d}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-extrabold text-gray-900">What you get with Wixwave</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A clean build is the baseline. We focus on the "small details" that make a big
              difference in real results-better enquiries, lower bounce rate, and smoother Shopify
              buying journeys.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  k: "Premium UI kit",
                  v: "Buttons, cards, spacing, and sections that feel modern and consistent.",
                },
                {
                  k: "SEO essentials",
                  v: "Metadata, content structure, and technical basics ready for ranking.",
                },
                {
                  k: "Shopify conversion flow",
                  v: "Product & collection UX, trust sections, and checkout-friendly layout.",
                },
                {
                  k: "Launch support",
                  v: "QA, device testing, and a clean handover so your team can manage content.",
                },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5"
                >
                  <p className="font-extrabold text-gray-900">{x.k}</p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{x.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px]">
              <div className="rounded-3xl bg-white p-5 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-extrabold text-gray-900">Need a Shopify-first plan?</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Get scope + timeline + pricing range for your store or website.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-2xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
                >
                  Get proposal
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Our process (simple, transparent, and fast)
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Discovery & goal mapping",
                text: "We align on success metrics, key pages, and launch priorities.",
              },
              {
                title: "UX + content structure",
                text: "We plan navigation and sections so the message is clear and search-friendly.",
              },
              {
                title: "Design system & UI polish",
                text: "A consistent, modern UI with strong hierarchy and brand alignment.",
              },
              {
                title: "Build, QA, and launch",
                text: "We build, test across devices, set up essentials, and launch cleanly.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 p-6"
              >
                <h3 className="font-extrabold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Related resources</h2>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-2xl">
                Helpful reads to understand our delivery approach, SEO foundations, and examples of
                finished work.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="text-blue-700 text-sm font-semibold hover:underline"
            >
              See more work -
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 py-3 transition hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-2xl" />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v.5H8a2.5 2.5 0 00-2.5 2.5v5A2.5 2.5 0 008 15.25h4A2.5 2.5 0 0014.5 12.75v-5A2.5 2.5 0 0012 5.25h-1.25v-.5z" />
                        <path d="M8 6.75h4A1 1 0 0113 7.75v5A1 1 0 0112 13.75H8a1 1 0 01-1-1v-5a1 1 0 011-1z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-extrabold text-gray-900 leading-snug text-sm truncate">
                        {item.label}
                      </h3>
                      <p className="mt-0.5 text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 transition group-hover:border-blue-200 group-hover:bg-blue-50">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 border border-white/10 p-8 flex items-center justify-between gap-4 flex-wrap shadow-lg shadow-blue-700/20">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Ready to build a better website in Patna?
            </h2>
            <p className="mt-1 text-white/80">
              Get a proposal with scope, timeline, and a clear pricing range for your website or
              Shopify store.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition"
          >
            Contact Wixwave
          </Link>
        </div>
      </section>
    </main>
  );
}
