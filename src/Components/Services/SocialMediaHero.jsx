import React from 'react';
import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../../constants/heroStyles";

const SocialMediaMarketing = () => {
  return (
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748002151/Social_Media_Banner_w9ac9z.jpg"
        alt="Social media marketing dashboard with engagement analytics"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Text */}
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
          Social Media
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Marketing & Management
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          SOCIAL MEDIA MARKETING
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Ready to make your brand more visible on social platforms like Instagram, Facebook, and LinkedIn? Wixwave crafts engaging social media content and strategic campaigns that build loyalty, increase awareness, and grow your audience with consistency and creativity everywhere.
        </p>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
