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

const themes = {
  modern: {
    heading: "BUILD A BRAND THAT WINS HEARTS",
    subtitle: "We Help You",
    rotatingWords: ["STAND OUT", "CONNECT", "INSPIRE", "LEAD", "GROW"],
    paragraph:
      "We design brands with emotion, impact, and clarity—making your business unforgettable in a crowded world.",
    button: "Let’s Build Together",
  },
  luxury: {
    heading: "CRAFT AN ICONIC BRAND EXPERIENCE",
    subtitle: "We Curate Brands That",
    rotatingWords: ["ELEVATE", "EMPOWER", "ENCHANT", "INFLUENCE", "THRIVE"],
    paragraph:
      "We blend strategy with sophistication to craft timeless brand identities—designed to captivate, inspire, and command admiration in every market.",
    button: "Let’s Create Excellence",
  },
};

const AnimatedHeroSection = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = React.useState("luxury");
  const { heading, subtitle, rotatingWords, paragraph, button } = themes[theme];

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

  const toggleTheme = () =>
    setTheme((prev) => (prev === "modern"));

  return (
    <div className="relative w-full h-screen overflow-hidden text-black flex items-center justify-center px-4 sm:px-10 md:px-20 lg:px-32">
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

      {/* Toggle Theme Button */}


      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {splitText(heading)}
        </motion.div>

        <motion.div
          className="text-white text-xl sm:text-3xl md:text-4xl font-semibold flex justify-center items-center gap-3 mt-4 min-h-[50px]"
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
          className="text-sm sm:text-lg md:text-xl text-white mb-10 mt-6 leading-relaxed font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {paragraph}
        </motion.p>

        <motion.button
          onClick={handleClick}
          className="px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full bg-[#050170] text-white hover:bg-blue-900 transition-transform transform hover:scale-105 font-semibold shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {button}
        </motion.button>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedHeroSection;
