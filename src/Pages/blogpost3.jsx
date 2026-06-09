import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useRouteSeo from "../hooks/useRouteSeo";

export default function BlogPost3() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "How to Choose a Website Development Company in Patna | Wixwave Blog";

  const description =
    "Learn how to choose a website development company in Patna by comparing portfolio quality, SEO readiness, pricing clarity, timelines, support, and local business understanding.";

  const canonicalUrl =
    "https://wixwave.co/blog/choose-website-development-company-patna";

  const heroImage =
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80";

  const datePublished = "2026-04-14";


  useRouteSeo("/blog/choose-website-development-company-patna");

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
      q: "What should I ask a website development company in Patna before hiring?",
      a: "Ask about similar projects, SEO-friendly website setup, CMS access, delivery timelines, post-launch support, and who will manage your website development project in Patna.",
    },
    {
      q: "How do I know if a website development company in Patna is good for SEO?",
      a: "A good website development company in Patna should talk about site speed, mobile responsiveness, clean code, metadata, schema, Core Web Vitals, and local SEO instead of only design.",
    },
    {
      q: "Should I choose the cheapest web design company in Patna?",
      a: "Usually no. The cheapest web design company in Patna may rely on templates, weak support, or poor technical quality that can hurt SEO performance and cost more to fix later.",
    },
  ];

  const relatedLinks = [
    {
      to: "/portfolio",
      label: "Portfolio examples",
      description: "Review live project work to compare quality, structure, and visual execution.",
    },
    {
      to: "/services/web-dev",
      label: "Website development services",
      description: "Understand what an SEO-ready, conversion-focused development process should include.",
    },
    {
      to: "/blog/website-technology-seo",
      label: "Website technology and SEO guide",
      description: "Learn how technical choices influence long-term rankings and growth.",
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
          alt="How to choose a website development company in Patna"
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
                How to Choose a Website Development Company in Patna
              </h1>

              <p className="mt-3 text-sm sm:text-lg opacity-90">
                A practical checklist for finding the right website partner for
                speed, SEO, design quality, and long-term business growth.
              </p>

              <p className="mt-3 text-xs sm:text-sm opacity-70">
                Apr 14, 2026 • {readingTime} min read
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
            Choosing a website development company in Patna is not only about
            finding someone who can build pages that look good. The right team
            should understand your business goals, create a fast and trustworthy
            website, and make sure the final product can support SEO, lead
            generation, and future growth.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you are comparing agencies or freelancers in Patna, use the
            checklist below to separate strong long-term partners from vendors
            who only deliver a basic design.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Start With Business Fit, Not Just Price
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A good website partner should ask about your audience, sales
            process, services, and growth targets before talking about colors or
            layouts. If the conversation starts and ends with cost, you may end
            up with a site that looks acceptable but does not generate results.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Ask how they understand your business model</li>
            <li>See whether they discuss leads, trust, and conversion goals</li>
            <li>Check if they recommend the right type of website for your stage</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Review Their Portfolio Carefully
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            A portfolio should show variety, polish, and usability. Look beyond
            screenshots and open the live websites if possible. Test them on
            mobile, check load speed, and see whether the structure feels clean
            and professional. You can also compare against a curated{" "}
            <Link to="/portfolio" className="text-blue-600 hover:underline">
              portfolio
            </Link>{" "}
            to judge how consistently a team delivers.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Responsive design across phone and desktop</li>
            <li>Clear navigation and readable content layout</li>
            <li>Industry relevance and proof of real client work</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Check for SEO-Ready Development
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Many businesses in Patna want a website that can rank locally on
            Google. That means your development company should understand more
            than design. They should build with technical SEO best practices
            from day one.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Fast loading pages and mobile-friendly layouts</li>
            <li>Clean URL structure, heading hierarchy, and metadata setup</li>
            <li>Schema, sitemap, and Core Web Vitals awareness</li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you are targeting local search, your website should be prepared
            to support keywords like{" "}
            <Link
              to="/website-development-patna"
              className="text-blue-600 hover:underline"
            >
              website development company in Patna
            </Link>{" "}
            and related service searches from the beginning.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ask About Technology, CMS, and Ownership
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            You should know what platform your website will use and how easy it
            will be to update later. A reliable company explains the technology
            stack clearly and makes sure you keep ownership of your domain,
            hosting, and website assets.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Confirm whether the site is custom-built or template-based</li>
            <li>Ask if your team can edit content after launch</li>
            <li>Make sure domain, hosting, and code access stay transparent</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Compare Timelines, Process, and Communication
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Good delivery is usually a sign of a good process. Ask how the
            project will move from discovery to design, development, revision,
            testing, and launch. Clear communication matters as much as coding
            skill.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Defined milestones and realistic deadlines</li>
            <li>Regular updates and a clear point of contact</li>
            <li>Testing before launch, not after problems appear</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Look at Support After Launch
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Your website will need updates, bug fixes, content changes, and
            performance improvements over time. Before hiring anyone, confirm
            what kind of post-launch support is included and how quickly they
            respond when issues come up.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            The best partners treat a website like a growth asset, not a one-time
            file delivery. That is especially important if you plan to invest in{" "}
            <Link to="/services/seo" className="text-blue-600 hover:underline">
              SEO services
            </Link>{" "}
            or ongoing campaigns after launch.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Watch for These Red Flags
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Very low pricing with no clear scope</li>
            <li>No real portfolio or only mockups</li>
            <li>No mention of speed, SEO, or mobile usability</li>
            <li>Unclear ownership of domain, hosting, or code</li>
            <li>Promises of instant Google rankings</li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Final Thought: Choose a Growth Partner
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            The best website development company in Patna will combine design,
            development, performance, and SEO thinking into one process. Your
            goal should be to hire a team that builds a website you can grow
            with, not just launch once.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            If you want a benchmark for what that should include, explore our{" "}
            <Link to="/services/web-dev" className="text-blue-600 hover:underline">
              website development services
            </Link>{" "}
            and compare the checklist against any company you are considering.
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
            Need a Website That Is Built to Rank and Convert?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave builds fast, SEO-ready websites for businesses in Patna and
            beyond.
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
