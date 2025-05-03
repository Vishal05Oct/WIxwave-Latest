import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const title = "We Don’t Just Make Noise. We Move Numbers.";
  const words = title.split(" ");

  return (
    <section className="container mx-auto py-12 px-6 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-purple-900 rounded-3xl p-10 text-white shadow-lg max-w-6xl mx-auto"
      >
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-10 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold flex flex-wrap justify-center md:justify-start gap-2">
            {words.map((word, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.2, color: '#d1d5db' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block cursor-pointer"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 w-full text-sm md:text-base text-gray-300 flex flex-col justify-center"
        >
          <p className="mb-6 text-center md:text-left">
            At WIXWAVE, we blend strategy, design, tech, and performance to build campaigns that don’t just look good — they work.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 hover:bg-purple-700 px-6 py-3 text-sm rounded-full shadow-lg transition-colors duration-300 font-semibold uppercase tracking-wide"
            >
              Contact us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-gray-900 px-6 py-3 text-sm rounded-full shadow-lg transition-colors duration-300 font-semibold uppercase tracking-wide"
            >
              View work
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
