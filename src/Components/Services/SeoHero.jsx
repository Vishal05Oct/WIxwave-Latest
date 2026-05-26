import React from 'react';
import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../../constants/heroStyles";

const SEOSection = () => {
  return (
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748001903/SEO_Banner_kzxiiu.jpg"
        alt="Search engine optimization analytics and ranking dashboard"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Blue Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={PAGE_HERO_BG_TEXT_CLASS}
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          SEO
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Services
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          SEO SERVICES
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Want higher search visibility and more quality traffic from Google? Wixwave delivers focused SEO strategies, from keyword research and content optimization to technical fixes, so your website ranks better, attracts visitors, and grows your brand online every day.
        </p>
      </div>
    </section>
  );
};

export default SEOSection;
