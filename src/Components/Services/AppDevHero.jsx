import React from 'react';
import { motion } from "framer-motion";

const AppDesignDevelopment = () => {
  return (
    <section className="relative w-full  bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src=""
        alt="App Design & Development Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Lime Text */}
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
          App
          <br className="block sm:hidden" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Development
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          APP DESIGN & DEVELOPMENT
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed mb-6">
          Looking for a mobile app that’s fast, intuitive, and beautifully designed? You've come to the right place. At Wixwave, we specialize in building user-centric mobile applications that deliver exceptional experiences.
        </p>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          From simple utility apps to complex, feature-rich mobile solutions, we craft apps that not only meet your business needs but also engage users with sleek designs and smooth functionality.
        </p>
      </div>
    </section>
  );
};

export default AppDesignDevelopment;
