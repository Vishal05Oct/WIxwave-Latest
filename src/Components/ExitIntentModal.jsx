import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useExitIntent } from "../hooks/useExitIntent";
import { X, ArrowUpRight } from "lucide-react";

export const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const lastShown = sessionStorage.getItem("exitIntentShown");
  const shouldShow =
    !lastShown || Date.now() - lastShown > 30 * 60 * 1000;

  useExitIntent(() => {
    if (shouldShow) {
      setShowModal(true);
      sessionStorage.setItem("exitIntentShown", Date.now());
      window?.gtag?.("event", "exit_intent_triggered");
    }
  });

  const handleCtaClick = () => {
    setShowModal(false);
    navigate("/contact");
    window?.gtag?.("event", "exit_intent_cta_clicked");
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 18, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* 🔥 Top Gradient */}
            <div className="bg-gradient-to-r from-[#2d2dfc] to-[#066adc] p-5 text-white">
              <h2 className="text-xl sm:text-2xl font-bold">
                Wait! Before You Go 🚀
              </h2>
              <p className="text-sm text-white/80 mt-1">
                Let’s help you grow your business faster
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Get a <span className="font-semibold text-gray-900">free consultation</span> 
                from our experts. We’ll guide you with the exact strategy to grow your brand online.
              </p>

              {/* CTA */}
              <motion.button
                onClick={handleCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 bg-[#2d2dfc] text-white py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:bg-[#1d1dd8] transition"
              >
                Get Free Consultation
                <span className="w-6 h-6 bg-white text-[#2d2dfc] rounded-full flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </span>
              </motion.button>

              {/* Secondary */}
              <button
                onClick={() => setShowModal(false)}
                className="mt-3 text-sm text-gray-500 hover:text-gray-700 transition"
              >
                No thanks, I’ll pass
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;