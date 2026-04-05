import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const splitText = (text) =>
  text.split(" ").map((word, i) => (
    <motion.span key={i} variants={wordVariant} className="inline-block mr-2">
      {word}
    </motion.span>
  ));

const theme = {
  heading: "INNOVATE. EXECUTE. SUCCEED.",
  paragraph:
    "Innovation fuels growth. Execution ensures success. Together, we build brands that stand out and dominate the digital world.",
  button: "Start Your Journey",
};

const AnimatedHeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [videoError, setVideoError] = useState(false);
  const [renderAnimations, setRenderAnimations] = useState(false);

  const { heading, paragraph, button } = theme;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Trigger animations after first paint to not block LCP
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setRenderAnimations(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleClick = () => navigate("/services");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-28 text-white overflow-hidden">
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={() => setVideoError(true)}
          onLoadStart={() => {
            // Video loading doesn't block LCP with preload="none"
          }}
        >
          <source
            src={
              isMobile
                ? "https://videos.pexels.com/video-files/5495890/5495890-hd_720_1280_30fps.mp4"
                : "https://cdn.pixabay.com/video/2015/08/08/117-135736418_large.mp4"
            }
            type="video/mp4"
          />
        </video>
      )}

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight will-change-transform"
          variants={containerVariant}
          initial="hidden"
          animate={renderAnimations ? "visible" : "hidden"}
        >
          {splitText(heading)}
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 1, y: 0 }}
          animate={renderAnimations ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {paragraph}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 1, scale: 1 }}
          animate={renderAnimations ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={handleClick}
            className="px-8 py-3 rounded-full bg-[#050170] text-lg font-semibold hover:bg-blue-900 transition-transform hover:scale-105 shadow-xl focus:outline-none focus:ring-4 focus:ring-[#66aaff]"
          >
            {button}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;