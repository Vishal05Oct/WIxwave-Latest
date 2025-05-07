import React from "react";
import { motion } from "framer-motion";

const HowWeRoll = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="text-black py-12 font-[Futura, sans-serif]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-left leading-tight tracking-normal uppercase text-gray-900"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          THAT’S HOW{" "}
          <motion.span
            className="text-[#0c34e9] inline-block drop-shadow-sm"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            WE ROLL!
          </motion.span>{" "}
          ✨
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "STRATEGY",
              text: "We develop actionable strategies rooted in research and foresight, giving your brand a clear, confident path forward. Our planning ensures resilience and relevance in a fast-changing market.",
              colSpan: "col-span-1 md:col-span-1",
            },
            {
              title: "DESIGN",
              text: "Our creative approach fuses beauty with usability, creating designs that resonate deeply with your audience. Every detail is intentional, building trust and recognition across platforms.",
              colSpan: "col-span-2 md:col-span-2",
            },
            {
              title: "TECHNOLOGY",
              text: "We engineer future-ready solutions, leveraging the latest frameworks and tools to build reliable, fast, and scalable products that meet evolving digital demands.",
              colSpan: "col-span-2 md:col-span-2",
            },
            {
              title: "PERFORMANCE",
              text: "We focus on results, using data-driven insights and constant refinement to push your growth forward and ensure your brand consistently outperforms expectations.",
              colSpan: "col-span-1 md:col-span-1",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`${item.colSpan} border rounded-xl p-5 shadow-md flex flex-col justify-start transition-transform hover:scale-102 hover:shadow-md duration-300 bg-white`}
              variants={cardVariants}
              whileHover={{ rotate: 0.5 }}
            >
              <motion.h3
                className="text-xl font-bold mb-3 tracking-normal uppercase text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * (idx + 1) }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-sm mb-3 leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 * (idx + 1) }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeRoll;

// This component uses Framer Motion for animations and is styled with Tailwind CSS. It creates a responsive grid layout with animated cards that describe the company's approach to strategy, design, technology, and performance. The text is styled to be clear and engaging, with a focus on readability and visual hierarchy.