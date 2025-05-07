import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const rotatingWords = ['EMAIL', 'LINKEDIN', 'INSTAGRAM', 'WHATSAPP'];

const CollaborationSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
    className="bg-[#01001c] flex flex-col items-center justify-center px-4 py-12"
    initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-[#0c34e9] rounded-3xl text-center px-6 py-16 w-full container mx-auto shadow-2xl"
        variants={itemVariants}
      >
       <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
  READY TO<br />
  <span className="inline-block">
    {"COLLABORATE".split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.06, type: "spring", stiffness: 100 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </span>
  <span className="text-black">?</span>
</h1>


        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12"
          variants={itemVariants}
        >
          <motion.a
            href="#start-project"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#050170] text-white font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-md"
          >
            START PROJECT <span className="ml-2">➔</span>
          </motion.a>

          <motion.a
            href="mailto:hello@wixwave.co"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black font-bold text-sm px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-md"
          >
            Hello@wixwave.co <span className="ml-2">➔</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Rotating text section */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-12 text-3xl font-extrabold"
        variants={itemVariants}
      >
        <span className="text-white">CONTACT US THROUGH</span>

        <AnimatePresence mode="wait">
          <motion.span
            key={rotatingWords[index]}
            className="text-[#0c34e9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {rotatingWords[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationSection;
