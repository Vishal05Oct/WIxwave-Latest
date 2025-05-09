import React from 'react';
import { motion } from 'framer-motion';

const OurBlogs = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">

        {/* Background Banner Image */}
        <img
          src="https://img.freepik.com/free-photo/blogging-writing-blog-concepts-ideas-white-worktable_53876-127643.jpg?t=st=1746809000~exp=1746812600~hmac=52fcd87a5e01c7c3c5c28c20dca2ec2cc2ee0d6cc626845712362cfb2023a32f&w=1380"
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Animated Lime Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Insightful
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Blogs
          </motion.span>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h2 className="font-bold tracking-[0.2em] text-black mb-4">
            OUR BLOGS
          </h2>
          <p className="text-xl sm:text-xl text-black leading-relaxed">
            Dive into our collection of blogs where we share insights, trends, and stories
            from the digital world. From design inspiration to development tips, our articles
            offer valuable knowledge and a glimpse into our creative process and industry expertise.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full py-24 bg-gray-100 flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
            Stay Tuned for Our Blogs! <br />
            Our blogs will be published soon...
          </h3>
          <p className="text-lg text-gray-600">
            Stay tuned for updates! We're working on something insightful and inspiring for you.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurBlogs;
