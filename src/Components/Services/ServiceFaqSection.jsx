import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceFaqSection({ items, heading = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-8 md:mb-10">
          <p className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            FAQs
          </p>
          <h2 className="text-[28px] sm:text-[34px] md:text-[48px] font-semibold text-[#0b0b2c]">
            {heading}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-[#0b0b2c]">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-blue-600 text-xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-[#4a4a5a]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
