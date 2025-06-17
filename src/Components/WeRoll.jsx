import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cards = [
  {
    title: "STRATEGY",
    text: "We develop goal-driven strategies rooted in data and market insights. Align your brand with long-term success through actionable and measurable planning.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-[#e0f2ff] to-[#ffffff]",
  },
  {
    title: "DESIGN",
    text: "We craft intuitive, responsive, and visually stunning designs that engage users and elevate brand perception across digital platforms. With a focus on UX/UI principles and branding consistency, our designs build trust and enhance conversions across every touchpoint.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-[#fff0da] to-[#ffffff]",
  },
  {
    title: "TECHNOLOGY",
    text: "Utilizing modern frameworks and best practices, we build scalable, secure, and high-performance digital solutions that stand the test of time. From custom web apps to mobile-first responsive websites, our technology stack ensures optimal performance, SEO, and accessibility across all devices.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-[#eaffea] to-[#ffffff]",
  },
  {
    title: "PERFORMANCE",
    text: "Our team focuses on continuous optimization and real-time analytics to ensure your digital assets drive ROI and exceed performance benchmarks.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-[#ffeef0] to-[#ffffff]",
  },
];

const HowWeRoll = () => {
  return (
    <section className="relative py-12 bg-white font-[Futura, sans-serif] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold uppercase text-gray-900 tracking-tight leading-tight mb-10"
        >
          THAT’S HOW{" "}
          <motion.span
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block text-[#0c34e9] drop-shadow-md"
          >
            WE ROLL!
          </motion.span>{" "}
          ✨
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
        >
          {cards.map((card, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.015 }}
              className={`${card.colSpan} ${card.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-xl font-bold uppercase mb-3 text-gray-800 tracking-wide">
                {card.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {card.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-ping -z-10" />
    </section>
  );
};

export default HowWeRoll;
