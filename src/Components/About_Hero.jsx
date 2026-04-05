import React, { memo } from "react";
import { motion } from "framer-motion";

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
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
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
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          ABOUT WIXWAVE
        </h2>
        <p className="text-lg sm:text-xl text-black leading-relaxed">
          We are a digital studio specialized in web design and mobile apps. Our team
          consists of experienced professionals who, over the years of working together,
          have built a deep knowledge of designing and implementing innovative digital projects.
          Our work is more than just work—it&apos;s our passion. That&apos;s why we create unique and
          engaging solutions that have been recognized and rewarded by various authorities.
        </p>
      </div>
    </section>
  );
};

export default memo(AboutWixwave);
