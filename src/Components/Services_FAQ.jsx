import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { servicesHubFaqs } from "../data/serviceFaqs";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-10 md:py-16"
      aria-labelledby="services-faq-heading"
    >
      <h2
        id="services-faq-heading"
        className="text-center mb-10 text-4xl font-bold text-blue-600"
      >
        Frequently Asked Questions
      </h2>

      <motion.div className="space-y-4" role="list">
        {servicesHubFaqs.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `services-faq-panel-${index}`;
          const buttonId = `services-faq-button-${index}`;

          return (
            <motion.div
              key={item.question}
              role="listitem"
              className="border rounded-lg shadow-sm transition duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="text-xl" aria-hidden="true">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                initial={{ height: 0 }}
                animate={{ height: isOpen ? "auto" : 0 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 pb-4 text-base md:text-lg text-gray-700"
                hidden={!isOpen}
              >
                {isOpen && item.answer}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
