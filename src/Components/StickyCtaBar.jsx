import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const StickyCtaBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const touchStartYRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !isScrolled) return null;

  const handleCtaClick = () => {
    navigate("/contact");
    window?.gtag?.("event", "sticky_cta_clicked");
  };

  const handleDismiss = () => {
    setDismissed(true);
    window?.gtag?.("event", "sticky_cta_dismissed");
  };

  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0]?.clientY || null;
  };

  const handleTouchMove = (e) => {
    if (touchStartYRef.current === null) return;
    const currentY = e.touches[0]?.clientY;
    if (currentY && currentY - touchStartYRef.current > 80) {
      handleDismiss();
      touchStartYRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartYRef.current = null;
  };

  return (
    <motion.div
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 120, opacity: 0 }}
      transition={{ type: "spring", damping: 18, stiffness: 250 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] max-w-5xl z-50"
    >
      {/* Gradient Bar */}
      <div className="bg-gradient-to-r from-[#2d2dfc] to-[#066adc] rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl">

        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">

          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white text-sm sm:text-base leading-tight">
              Ready to scale your brand digitally?
            </p>
            <p className="text-xs sm:text-sm text-white/80">
              Websites, apps, SEO & branding — all in one place
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">

            {/* CTA */}
            <motion.button
              onClick={handleCtaClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-[#2d2dfc] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-md whitespace-nowrap"
            >
              Start Project
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2d2dfc] text-white rounded-full flex items-center justify-center">
                <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" />
              </span>
            </motion.button>

            {/* Close */}
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition p-1"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCtaBar;