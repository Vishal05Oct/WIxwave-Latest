import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoSection = () => {
  const imageUrl =
    "https://res.cloudinary.com/dobbdtftp/image/upload/q_auto,f_webp,w_1400/v1746662767/new_ood_dpwh3p.png";
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.9]);

  return (
    <div className="container mx-auto flex items-center  justify-center px-4">
      <div className="w-full">
        <motion.div
          ref={ref}
          style={{ opacity, scale }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={imageUrl}
            alt="Moodboard Template"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
