import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.span key={i} variants={wordVariant} className="inline-block mr-2">
      {word}
    </motion.span>
  ));

const AnimatedHeroSection = ({
  title = "TRANSFORM YOUR BRAND",
  buttonText = "Start Your Journey",
}) => {
  const navigate = useNavigate();

  const rotatingWords = ["ELEVATE", "IGNITE", "THRIVE", "DISRUPT", "SHINE"];
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        </motion.div>

        {/* Rotating Word Subtitle */}
        <motion.div
          className="text-white text-2xl md:text-4xl font-semibold flex justify-center items-center gap-3 mt-4 h-[48px]"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <span>We Help You</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={rotatingWords[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-[#66aaff] font-bold"
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.button
          onClick={handleClick}
          className="px-8 py-3 text-lg rounded-full bg-[#050170] mt-6 text-white hover:bg-blue-900 transition-transform transform hover:scale-105 font-semibold shadow-xl"
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
