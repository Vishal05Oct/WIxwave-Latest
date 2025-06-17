import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const services = [
  {
    title: "Website Design & Development",
    text: "Custom websites tailored to your brand, optimized for SEO and performance.",
    image: "https://img.freepik.com/free-vector/concept-landing-page-website-setup_52683-25031.jpg",
    link: "/services/web-dev",
    bg: "bg-[#f0f7ff]",
  },
  {
    title: "App Design & Development",
    text: "Scalable mobile applications built with top UI/UX practices for iOS and Android.",
    image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/app_dev_ewptnp.jpg",
    link: "/services/app-dev",
    bg: "bg-[#f0f7ff]",
  },
  {
    title: "Branding & Graphics",
    text: "Crafting impactful identities, from logos to full brand experiences.",
    image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746641973/designing_nainbu.jpg",
    link: "/services/branding",
    bg: "bg-[#f0f7ff]",
  },
  {
    title: "Search Engine Optimisation",
    text: "Drive traffic with ethical SEO techniques and data-backed strategies.",
    image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/seo_ph2x6b.avif",
    link: "/services/seo",
    bg: "bg-[#f0f7ff]",
  },
  {
    title: "Social Media Management",
    text: "Grow your brand through strategic content and engagement.",
    image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/social_media_gseote.avif",
    link: "/services/social-media",
    bg: "bg-[#f0f7ff]",
  },
  {
    title: "Performance Marketing",
    text: "Data-driven paid ad strategies focused on ROI and growth.",
    image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/performance_bkyvvp.avif",
    link: "/services/paid-ads",
    bg: "bg-[#f0f7ff]",
  },
];

const HowWeRoll = () => {
  return (
    <section
      className="relative lg:py-10 bg-white overflow-hidden"
      aria-labelledby="our-services-heading"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          id="our-services-heading"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold uppercase text-gray-900 mb-4"
        >
          OUR{" "}
          <motion.span
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-[#0c34e9] drop-shadow-sm"
          >
            SERVICES
          </motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {services.map((card, i) => (
            <motion.article
              key={`service-${i}`}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group ${card.bg} p-4 md:p-5 lg:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              <Link
                to={card.link}
                className="block w-full h-full"
                aria-label={card.title}
                title={card.title}
                rel="prefetch"
              >
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-44 md:h-48 lg:h-52 object-cover rounded-lg group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold uppercase text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3 leading-snug">
                  {card.text}
                </p>
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
                  <span>Explore More</span>
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Decorative Blobs - Accessibility hidden */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-56 h-56 md:w-64 md:h-64 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-64 h-64 md:w-72 md:h-72 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-ping -z-10"
      />
    </section>
  );
};

export default HowWeRoll;
