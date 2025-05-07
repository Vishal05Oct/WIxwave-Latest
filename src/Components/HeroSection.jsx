import React from "react";
import { motion } from "framer-motion";

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="inline-block"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

const AnimatedHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-black flex items-center justify-center px-4">
      {/* Star Animation Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-black rounded-full shadow-sm"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block">{splitText("FRAMING PEOPLE")}</span>
          <span className="block">{splitText("CENTRIC EXPERIENCES")}</span>
        </h1>
        <motion.p
          className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our marketing strategies go beyond driving campaigns for brands. With a deep understanding of human behavior, we forge connections that allow brands to speak to their audience individually. We breathe life into your brand with meaningful, immersive, and emotive conversations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="text-sm md:text-base px-8 py-3 rounded-full bg-[#050170] text-white hover:bg-purple-800 transition-transform transform hover:scale-105 shadow-lg font-semibold">
            Explore now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedHeroSection;
