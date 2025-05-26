import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const rotatingWords = ['EMAIL', 'LINKEDIN', 'WHATSAPP', 'INSTAGRAM'];

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
      className="bg-[#01001c] flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative rounded-3xl text-center px-4 sm:px-6 py-12 sm:py-16 w-full max-w-7xl mx-auto shadow-2xl overflow-hidden"
        variants={itemVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dobbdtftp/image/upload/v1746786161/collaborate_fxgnr6.png')`,
          }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            BUILD WITH<br />
            <span className="inline-block">
              {"WIXWAVE".split("").map((char, i) => (
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
            <span className="text-white"> ? </span>
            <span className="text-[#0c34e9] block sm:inline">LET'S CONNECT</span>
          </h2>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12"
            variants={itemVariants}
          >
            {/* Internal link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="block bg-[#050170] text-white font-bold text-sm px-6 py-4 rounded-full flex items-center justify-center hover:bg-gray-800 transition shadow-md"
              >
                START WITH WIXWAVE <span className="ml-2">➔</span>
              </Link>
            </motion.div>

            {/* External link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <a
                href="https://wa.me/7479787717"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white font-semibold text-sm px-6 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-md"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Chat With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 mt-8 sm:mt-12 text-2xl sm:text-3xl font-extrabold text-center"
        variants={itemVariants}
      >
        <span className="text-white">CONTACT US THROUGH</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={rotatingWords[index]}
            className="text-[#0c34e9] ml-2"
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
