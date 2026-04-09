import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useExitIntent } from "../hooks/useExitIntent";
import { X, ArrowUpRight } from "lucide-react";

const ExitIntentModal = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalRef = useRef(showModal);
  const navigate = useNavigate();

  const lastShown = Number(sessionStorage.getItem("exitIntentShown"));
  const shouldShow =
    !lastShown || Date.now() - lastShown > 30 * 60 * 1000;

  useEffect(() => {
    showModalRef.current = showModal;
  }, [showModal]);

  useEffect(() => {
    if (!shouldShow) return;

    const timer = window.setTimeout(() => {
      if (!showModalRef.current) {
        setShowModal(true);
        sessionStorage.setItem("exitIntentShown", Date.now());
        window?.gtag?.("event", "exit_intent_timer_shown");
      }
    }, 30000);

    return () => window.clearTimeout(timer);
  }, [shouldShow]);

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
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 py-8"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 18, stiffness: 190 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[min(95vw,46rem)] overflow-hidden rounded-[32px] bg-white shadow-[0_35px_120px_rgba(15,23,42,0.25)]"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-600 to-sky-500 p-5 sm:p-8 text-white">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                    Free Offer
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-semibold leading-tight">
                    Ready to Boost Leads Fast?
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base text-white/85 leading-6">
                    Claim a free strategy review from Wixwave and discover how to turn more visitors into customers with a proven digital growth plan.
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20 sm:relative sm:right-auto sm:top-auto"
                  aria-label="Close exit intent modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-8">
              <div className="space-y-5">
                <p className="text-sm sm:text-base leading-6 text-slate-700">
                  Claim a <span className="font-semibold text-slate-900">free growth review</span> from Wixwave and get a simple action plan to improve website performance, leads, and conversions.
                </p>

                <div className="hidden sm:grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Fast lead wins</p>
                    <p className="mt-1 text-sm text-slate-500">Discover easy improvements that boost conversions quickly.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">Revenue focus</p>
                    <p className="mt-1 text-sm text-slate-500">Receive recommendations designed to grow traffic and sales.</p>
                  </div>
                </div>

                <motion.button
                  onClick={handleCtaClick}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 px-5 py-3 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
                >
                  Claim Your Free Review
                  <ArrowUpRight size={16} />
                </motion.button>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 sm:py-4 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
                >
                  No thanks, maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;