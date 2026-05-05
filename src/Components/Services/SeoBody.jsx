import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceBacklinksSection from "./ServiceBacklinksSection";

const SeoEdgeSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Boost Your Visibility with Strategic SEO!</h2>
          <p className="text-lg">
            At WixWave, we offer result-driven SEO services designed to increase your website's visibility,
            traffic, and conversions. From technical audits to powerful content strategies, our SEO experts
            help your brand stand out in search engines.
          </p>
        </section>

        {/* SEO Audit & Research Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Comprehensive SEO Analysis</h2>
            <p>
              Our process begins with a deep dive into your website’s performance, competitor analysis, and
              keyword opportunities. We uncover areas for improvement and build a strategic plan to maximize your online impact.
            </p>
            <p>
              Our data-backed research helps us shape a roadmap for on-page, off-page, and technical improvements
              tailored to your business goals.
            </p>

          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891126/Comprehensive_SEO_Analysis_nu7rai.jpg" 
              alt="SEO Audit Illustration"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        {/* Content & Optimization Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891126/Strategic_Content_Optimization_rzugmk.jpg"
              alt="SEO Strategy"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Strategic Content & Optimization</h2>
            <p>
              We implement high-impact on-page SEO by optimizing titles, meta descriptions, URLs,
              images, and internal linking structure. Our goal is to enhance user experience while meeting Google's ranking criteria.
            </p>
            <p>
              Content is king — and we treat it that way. Our content creation and marketing strategy
              focuses on valuable, keyword-rich articles and link-building to establish your site’s authority.
            </p>
            <Link to="/contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              Get Your Free SEO Audit
            </Link>
          </div>
        </section>

        {/* SEO Process Image */}
        <h2 className="text-3xl sm:text-4xl font-bold">Our SEO Process</h2>
        <motion.div
          className="mt-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746888264/SEO_zkdhol.png"
            alt="SEO Process Illustration"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Detailed Process Explanation */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Breakdown</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>SEO Audit & Research:</strong> Conduct a thorough website audit, analyze competitors,
                and perform keyword research to identify optimization opportunities.
              </li>
              <li>
                <strong>On-Page Optimization:</strong> Optimize content, meta tags, URLs, images, and internal
                links to improve search engine visibility and user experience.
              </li>
              <li>
                <strong>Technical SEO:</strong> Ensure mobile-friendliness, fast page loading, proper sitemap
                and robots.txt setup, and resolve crawl errors.
              </li>
              <li>
                <strong>Content Creation & Marketing:</strong> Create and promote high-quality, keyword-rich
                content while building backlinks and leveraging content marketing strategies.
              </li>
              <li>
                <strong>Off-Page Optimization:</strong> Focus on link-building, local SEO, and social media
                presence to boost domain authority and online visibility.
              </li>
              <li>
                <strong>Monitoring & Continuous Optimization:</strong> Track rankings and traffic, adjust
                strategies based on performance, and refine content and techniques to stay competitive.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              With a proactive approach, we ensure your website consistently ranks higher and stays ahead of competitors.
            </p>
          </div>
        </section>

        <ServiceBacklinksSection
          heading=" Related links "
          subheading="Explore related services, resources, and location pages to support a complete growth strategy."
          primaryLinks={[
            { to: "/services/seo", label: "SEO service" },
            { to: "/services/web-dev", label: "Website development (technical foundation)" },
            { to: "/services/paid-ads", label: "Performance marketing (quick demand)" },
            { to: "/blog/local-seo-checklist-patna-gurugram", label: "Local SEO checklist" },
            { to: "/blog/local-seo-mistakes-patna-gurugram", label: "Local SEO mistakes to avoid" },
          ]}
        />
      </div>
    </div>
  );
};

export default SeoEdgeSection;
