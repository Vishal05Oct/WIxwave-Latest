import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const splitText = (text) =>
  text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      variants={wordVariant}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));

const generateShootingStars = (count = 30) => {
  return [...Array(count)].map((_, i) => {
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const delay = Math.random() * 5;
    const duration = 1 + Math.random() * 1.5;

    return (
      <motion.div
        key={i}
        className="absolute w-0.5 h-1 bg-white z-0 shadow-sm rounded-sm"
        style={{ top, left, rotate: 45, pointerEvents: "none" }}
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], x: [0, 250], y: [0, 120] }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 4 + Math.random() * 4,
          delay,
        }}
      />
    );
  });
};

const AnimatedHeroSection = ({
  title = "TRANSFORM YOUR BRAND",
  subtitle = "STAND OUT. CONNECT DEEPER.",
  description = "We craft bold narratives that break through the noise. From strategy to story, we give your brand a powerful voice that resonates.",
  buttonText = "Start Your Journey",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-black flex items-center justify-center px-6 md:px-20 lg:px-32">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-white z-0" />

      {/* Stars & Shooting Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[1, 2, 3].map((layer) =>
          [...Array(20)].map((_, i) => (
            <motion.div
              key={`layer-${layer}-${i}`}
              className="absolute bg-black rounded-full"
              style={{
                width: `${layer}px`,
                height: `${layer}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 * (4 - layer),
              }}
              animate={{ y: [0, -10 * layer, 0] }}
              transition={{
                duration: 6 + layer,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))
        )}
        {generateShootingStars(35)}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="text-black">{splitText(title)}</div>
          <div className="text-[#6699ff] mt-2">{splitText(subtitle)}</div>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.button
          onClick={handleClick}
          className="px-8 py-3 text-lg rounded-full bg-[#050170] text-white hover:bg-blue-900 transition-transform transform hover:scale-105 font-semibold shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default AnimatedHeroSection;
