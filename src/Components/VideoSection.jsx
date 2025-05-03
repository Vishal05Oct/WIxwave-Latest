import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoSection = () => {
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  const ref = useRef(null);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade out when 90–100% scrolled
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  // Optional: scale slightly for visual effect (no translateY to prevent overlap)
  const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);

  return (
    <div className="container mx-auto flex items-center justify-center px-4 ">
      {/* Wrapper keeps space reserved */}
      <div className="w-full max-w-6xl">
        <motion.div
          ref={ref}
          style={{ opacity, scale }}
          className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            controls
            muted
            playsInline
            preload="auto"
            loop
          />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
