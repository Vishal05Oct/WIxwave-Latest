import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },  // reduced from y: 50
  visible: { opacity: 1, y: 0 }
};

const wordVariant = {
  hover: {
    scale: 1.1, // reduced scale to avoid overflow
    color: '#d1d5db',
    transition: { type: 'spring', stiffness: 300 }
  }
};

const contentVariant = {
  hidden: { opacity: 0, x: 20 }, // reduced from x: 50
  visible: { opacity: 1, x: 0 }
};

const HeroSection = () => {
  const title = useMemo(() => "We Don’t Just Make Noise. We Move Numbers.", []);
  const words = useMemo(() => title.split(" "), [title]);

  return (
    <section className="container mx-auto py-4 px-6 pt-6 overflow-x-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={containerVariant}
        className="flex flex-col md:flex-row items-center justify-center bg-[#0c34e9] rounded-3xl p-10 text-white shadow-lg max-w-6xl mx-auto overflow-x-hidden"
      >
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-10 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold flex flex-wrap justify-center md:justify-start gap-2">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariant}
                whileHover="hover"
                className="inline-block cursor-pointer will-change-transform transform-gpu"
              >
                {word}
              </motion.span>
            ))}
          </h3>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={contentVariant}
          className="md:w-1/2 w-full text-sm md:text-base text-gray-300 flex flex-col justify-center"
        >
          <p className="mb-6 text-center md:text-left">
            At WIXWAVE, we blend strategy, design, tech, and performance to build campaigns that don’t just look good — they work.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/contact" aria-label="Contact Us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#050170] hover:bg-[#0a0a3c] px-6 py-3 text-sm rounded-full shadow-lg transition-colors duration-300 font-semibold uppercase tracking-wide"
              >
                Contact us
              </motion.button>
            </Link>

            <Link to="/portfolio" aria-label="Our Portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-gray-900 px-6 py-3 text-sm rounded-full shadow-lg transition-colors duration-300 font-semibold uppercase tracking-wide"
              >
                Our Portfolio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(HeroSection);
