import React, { memo } from "react";
import { motion } from "framer-motion";

const OurBlogs = () => {
  const animatedTexts = ["Our", "Insightful", "Blogs"];

  return (
    <>
      <section
        aria-label="Introduction to Our Blogs"
        className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Background Banner Image */}
        <img
          src="https://img.freepik.com/free-photo/blogging-writing-blog-concepts-ideas-white-worktable_53876-127643.jpg?t=st=1746809000~exp=1746812600~hmac=52fcd87a5e01c7c3c5c28c20dca2ec2cc2ee0d6cc626845712362cfb2023a32f&w=1380"
          alt="Blog writing workspace with laptop and notebook"
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Animated Lime Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
        >
          {animatedTexts.map((text, i) => (
            <motion.span
              key={text}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * (i + 1) }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center px-2">
          <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            OUR BLOGS
          </h2>
          <p className="text-lg sm:text-xl text-black leading-relaxed">
            Dive into our collection of blogs where we share insights, trends, and stories
            from the digital world. From design inspiration to development tips, our articles
            offer valuable knowledge and a glimpse into our creative process and industry expertise.
          </p>
        </div>
      </section>
    </>
  );
};

export default memo(OurBlogs);
