import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StickyCtaBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed || !isScrolled) return null;

  const handleCtaClick = () => {
    navigate('/contact');
    if (window.gtag) {
      window.gtag('event', 'sticky_cta_clicked');
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    if (window.gtag) {
      window.gtag('event', 'sticky_cta_dismissed');
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#2d2dfc] to-[#066adc] text-white p-4 z-50"
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold">Ready to transform your digital presence?</p>
          <p className="text-sm opacity-90">Get exclusive insights from our experts</p>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="/contact"
            onClick={handleCtaClick}
            className="bg-white text-[#2d2dfc] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition whitespace-nowrap"
          >
            Start Now
          </a>
          <button
            onClick={handleDismiss}
            className="text-white opacity-70 hover:opacity-100"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCtaBar;