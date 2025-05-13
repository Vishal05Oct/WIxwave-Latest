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
    <div className="relative w-full h-screen overflow-hidden text-black flex items-center justify-center px-6 md:px-20 lg:px-32">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://cdn.pixabay.com/video/2015/08/08/117-135736418_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="text-white">{splitText(title)}</div>
          <div className="text-[#6699ff] mt-2">{splitText(subtitle)}</div>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white mb-10 leading-relaxed font-medium"
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
