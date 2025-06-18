import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#01001c] to-[#0c34e9] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Animated Illustration */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Outer Circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Inner Circle */}
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  {/* Center Element */}
                  <motion.path
                    d="M100 40 L120 100 L180 100 L130 140 L150 200 L100 160 L50 200 L70 140 L20 100 L80 100 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Error Code */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-8xl font-bold text-white mb-4"
            >
              404
            </motion.h1>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-blue-300">
                Page Not Found
              </h2>
              <p className="text-blue-100 max-w-md mx-auto">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-4"
          >
            <Link
              to="/"
              className="group inline-block px-8 py-3 bg-white text-[#01001c] rounded-full
                hover:bg-blue-100 transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-blue-500/50 font-medium relative overflow-hidden"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Return to Homepage
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <div className="text-blue-200 text-sm">
              Need assistance?{' '}
              <Link
                to="/contact"
                className="text-white hover:text-blue-100 transition-colors relative group"
              >
                Contact Support
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(255,255,255,0.1)"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default NotFound; 