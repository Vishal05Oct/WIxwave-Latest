import React from 'react';
import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../../constants/heroStyles";

const BrandingGraphics = () => {
  return (
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://img.freepik.com/free-photo/design-creative-inspiration-art-style-concept_53876-120035.jpg?t=st=1748001639~exp=1748005239~hmac=2609688957d003d3854390badd47052a929177ead74f98f072d4ab5971f1eab8&w=1380"
        alt="Creative design workspace with artistic elements and inspiration"
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
          Branding
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          & Graphics
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          BRANDING & GRAPHIC DESIGN
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Wixwave creates distinctive branding and graphic design that brings your story to life. From logos and visual systems to marketing visuals, we build memorable identities that connect with customers and help your business stand out confidently in every market.
        </p>
      </div>
    </section>
  );
};

export default BrandingGraphics;
