import React from 'react';
import { motion } from "framer-motion";

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
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[10vw] sm:text-[7vw] pointer-events-none select-none"
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
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          SEO SERVICES
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed mb-6">
          Struggling to rank higher on Google? We help businesses boost online visibility, drive traffic, and increase conversions with tailored SEO strategies that work.
        </p>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          From keyword research and on-page optimization to technical SEO and link building, Wixwave ensures your site is optimized to perform and stand out in search results.
        </p>
      </div>
    </section>
  );
};

export default SEOSection;
