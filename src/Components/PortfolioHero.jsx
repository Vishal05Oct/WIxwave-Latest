import React from 'react';
import { motion } from 'framer-motion';

const OurPortfolio = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">

        {/* Background Banner Image */}
        <img
          src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748202730/computer-1846056_1920_irp1x9.jpg"
          alt="Portfolio Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Animated Lime Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Creative
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h2 className="font-bold tracking-[0.2em] text-black mb-4">
            OUR PORTFOLIO
          </h2>
          <p className="text-xl sm:text-xl text-black leading-relaxed">
            Explore our diverse range of digital projects crafted with creativity and precision.
            From visually stunning websites to intuitive mobile applications, our portfolio showcases
            the innovation and excellence we bring to every project. Each design reflects our passion
            for delivering impactful digital experiences that resonate with users and elevate brands.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
