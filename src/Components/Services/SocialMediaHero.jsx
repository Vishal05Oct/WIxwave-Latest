import React from 'react';
import { motion } from "framer-motion";

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
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[10vw] sm:text-[7vw] pointer-events-none select-none"
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
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          SOCIAL MEDIA MARKETING
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed mb-6">
          We create engaging social content that connects your brand with your audience across Instagram, Facebook, LinkedIn, and more.
        </p>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Let Wixwave help you build a loyal community, boost brand visibility, and drive real business results through creative strategies and consistent posting.
        </p>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
