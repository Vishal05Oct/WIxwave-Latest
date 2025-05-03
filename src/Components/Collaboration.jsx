import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CollaborationSection = () => {
  return (
    <motion.div
      className="bg-black flex flex-col items-center justify-center px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-violet-600 rounded-3xl text-center px-6 py-16 w-full container mx-auto shadow-2xl"
        variants={itemVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
          READY TO<br />
          COLLABORATE<span className="text-black">?</span>
        </h1>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="#start-project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-md"
          >
            START PROJECT <span className="ml-2">➔</span>
          </motion.a>

          <motion.a
            href="mailto:talk@taw.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-md"
          >
            TALK@WIXWAVE.COM <span className="ml-2">➔</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-12 text-3xl font-extrabold"
        variants={itemVariants}
      >
        <span className="text-violet-600">REACH US</span>
        <span className="text-white">AS YOU CAN</span>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationSection;
