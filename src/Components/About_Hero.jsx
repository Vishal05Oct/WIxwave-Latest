import React, { memo } from "react";
import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../constants/heroStyles";

const AboutWixwave = () => {
  return (
    <section
      aria-label="About WixWave digital studio specializing in web design and mobile apps"
      className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Banner Image */}
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748001205/About_Us_-_Image_vz0rso.jpg"
        alt="Creative digital studio workspace with modern design elements"
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Animated Lime Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ willChange: "transform, opacity" }}
        className={PAGE_HERO_BG_TEXT_CLASS}
      >
        {["Hello!", "We are creative", "Spaces"].map((text, index) => (
          <motion.span
            key={text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * (index + 1) }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-2">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          ABOUT WIXWAVE
        </h2>
        <p className="text-lg sm:text-xl text-black leading-relaxed">
          Wixwave is a digital studio focused on web design and mobile app development. Our experienced team combines creativity and technical skill to build unique digital projects that engage users and help your brand grow with modern online experiences.
        </p>
      </div>
    </section>
  );
};

export default memo(AboutWixwave);
