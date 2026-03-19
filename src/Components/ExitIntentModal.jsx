import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useExitIntent } from '../hooks/useExitIntent';

export const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const lastShown = sessionStorage.getItem('exitIntentShown');
  const shouldShow = !lastShown || Date.now() - lastShown > 30 * 60 * 1000;

  useExitIntent(() => {
    if (shouldShow) {
      setShowModal(true);
      // Track event if GA is set up
      if (window.gtag) {
        window.gtag('event', 'exit_intent_triggered');
      }
    }
  });

  // Focus trap
  useEffect(() => {
    if (!showModal || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleEscape);
    firstElement.focus();

    return () => {
      modal.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModal]);

  const handleCtaClick = () => {
    setShowModal(false);
    navigate('/contact');
    if (window.gtag) {
      window.gtag('event', 'exit_intent_cta_clicked');
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
          aria-describedby="exit-intent-description"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="exit-intent-title" className="text-2xl font-bold mb-2 text-gray-900">Wait! Before You Go...</h2>
            <p id="exit-intent-description" className="text-gray-600 mb-4">
              Get a free consultation from our digital experts. We'll show you exactly how to grow your business online.
            </p>
            <button
              onClick={handleCtaClick}
              className="w-full bg-[#2d2dfc] text-white py-3 rounded-lg font-semibold hover:bg-[#1a1ab0] transition mb-2"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full text-gray-600 py-2 hover:text-gray-800 transition"
            >
              No thanks
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;