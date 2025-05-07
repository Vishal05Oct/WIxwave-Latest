import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: 1,
    title: "What services do you offer?",
    content:
      "We offer a wide range of digital services including website design and development, mobile app development, branding and graphics, SEO, social media management, and performance marketing.",
  },
  {
    id: 2,
    title: "How can I contact you for services?",
    content:
      "You can reach us via our contact page, or directly email us at info@wixwave.com. You can also connect through our social media channels.",
  },
  {
    id: 3,
    title: "Do you offer custom website development?",
    content:
      "Yes, we provide custom website development tailored to your specific business needs, whether it’s an e-commerce platform, a business website, or a portfolio website.",
  },
  {
    id: 4,
    title: "What is SEO, and why is it important?",
    content:
      "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. It’s essential for driving organic traffic to your site and improving visibility.",
  },
  {
    id: 5,
    title: "Do you offer mobile app development?",
    content:
      "Yes, we specialize in mobile app design and development for both iOS and Android platforms.",
  },
  {
    id: 6,
    title: "What is branding and graphic design?",
    content:
      "Branding and graphic design involve creating visual elements that represent your brand identity, such as logos, color schemes, and promotional materials.",
  },
  {
    id: 7,
    title: "How long does it take to build a website?",
    content:
      "The time it takes to build a website varies depending on the complexity and features. On average, it can take 4–8 weeks to complete a project.",
  },
  {
    id: 8,
    title: "Do you offer ongoing support after development?",
    content:
      "Yes, we offer ongoing maintenance and support to ensure your website or app stays up-to-date and runs smoothly.",
  },
  {
    id: 9,
    title: "How do you handle SEO for my website?",
    content:
      "We optimize your website’s content, structure, and technical aspects to improve search engine rankings. We also focus on keyword research, content optimization, and link building.",
  },
  {
    id: 10,
    title: "What is performance marketing?",
    content:
      "Performance marketing is an online advertising strategy where you pay only for the results achieved, such as clicks, leads, or sales. It’s a highly effective way to drive measurable ROI.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <h2 className="text-center mb-10 text-4xl font-bold text-blue-600">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={item.id}
              className="border rounded-lg shadow-sm transition duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-xl font-semibold text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <span>{item.title}</span>
                <span className="text-xl">
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isOpen ? "auto" : 0 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 pb-4 text-base md:text-lg text-gray-700"
              >
                {isOpen && item.content}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
