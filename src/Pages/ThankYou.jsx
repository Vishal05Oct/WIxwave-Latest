import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useRouteSeo from "../hooks/useRouteSeo";

const ThankYouPage = () => {
  useRouteSeo("/thank-you");

  const navigate = useNavigate();

  return (
    <main id="main" className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6" aria-label="Main content">
      {/* Floating subtle bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-200/30"
          initial={{
            y: Math.random() * 300 + 100,
            x: Math.random() * 400 - 200,
            opacity: 0.4,
            scale: Math.random() * 0.6 + 0.4
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0.4, 0.8, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-md w-full text-center border border-blue-200/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animated checkmark */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ scale: 0.9, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <svg
            className="w-20 h-20 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </motion.div>

        {/* Headline with fade-in */}
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank You!
        </motion.h1>

        {/* Message with staggered animation */}
        <motion.p
          className="text-blue-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We've received your submission and truly appreciate your time.
          <br />
          Our team will review it shortly.
        </motion.p>

        {/* Interactive button */}
        <motion.button
          onClick={() => navigate("/")}
          className="relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Return to Home</span>
          <motion.span
            className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>

        {/* Decorative corner accent */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
      </motion.div>

      {/* Footer note with fade-in */}
      <motion.p
        className="mt-8 text-sm text-blue-400/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Need help?{" "}
        <a 
          href="https://wa.me/+917479787717" // Replace with your actual WhatsApp number
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Contact us on WhatsApp
        </a>
      </motion.p>
    </main>
  );
};

export default ThankYouPage;