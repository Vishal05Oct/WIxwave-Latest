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
    <motion.span key={i} variants={wordVariant} className="inline-block mr-2">
      {word}
    </motion.span>
  ));

const theme = {
  heading: "INNOVATE. EXECUTE. SUCCEED.",
  subtitle: "Build Launch Scale",
  rotatingWords: ["PLANS", "PROJECTS", "BRANDS", "REACH", "GROWTH"],
  paragraph:
    "Innovation fuels growth. Execution ensures success. Together, we build brands that stand out and thrive in a competitive digital world.",
  button: "Start Your Journey",
};

const AnimatedHeroSection = () => {
  const navigate = useNavigate();

  const { heading, subtitle, rotatingWords, paragraph, button } = theme;

  const [wordIndex, setWordIndex] = React.useState(0);
  const [typedWord, setTypedWord] = React.useState("");

  React.useEffect(() => {
    const word = rotatingWords[wordIndex];
    let i = 0;
    const typing = setInterval(() => {
      setTypedWord(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(typing);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
          setTypedWord("");
        }, 1600);
      }
    }, 80);
    return () => clearInterval(typing);
  }, [wordIndex, rotatingWords]);

  const handleClick = () => navigate("/services");

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-28 text-white bg-[#01001c]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2015/08/08/117-135736418_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {splitText(heading)}
        </motion.h1>

        <motion.div
          className="text-lg sm:text-2xl md:text-3xl font-semibold flex justify-center items-center gap-3  min-h-[40px]"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <span>{subtitle}</span>
          <span className="text-[#66aaff] font-bold relative">
            {typedWord}
            <span className="absolute left-full top-0 ml-1 w-[2px] h-full bg-[#66aaff] animate-blink" />
          </span>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {paragraph}
        </motion.p>

        <div className="flex justify-center">
          <motion.button
            onClick={handleClick}
            className="px-6 py-3 rounded-full bg-[#050170] text-white text-lg font-semibold hover:bg-blue-900 transition-transform transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-[#66aaff]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            aria-label="Navigate to services"
          >
            {button}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
