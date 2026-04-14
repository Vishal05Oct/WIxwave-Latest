import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: 1,
    title: "What digital marketing and website development services do you offer?",
    content:
      "We offer website design and development, mobile app development, branding and graphic design, SEO services, social media management, and performance marketing for business growth.",
  },
  {
    id: 2,
    title: "How can I contact Wixwave for website development or SEO services?",
    content:
      "You can contact Wixwave through our contact page to discuss website development, SEO services, app development, branding, or digital marketing requirements.",
  },
  {
    id: 3,
    title: "Do you offer custom website development services?",
    content:
      "Yes, we provide custom website development services tailored to your business goals, whether you need an ecommerce website, business website, landing page, or portfolio website.",
  },
  {
    id: 4,
    title: "What is SEO and why is it important for website growth?",
    content:
      "SEO, or search engine optimization, is the process of improving your website structure, content, and authority so it ranks higher on Google and drives more organic traffic and leads.",
  },
  {
    id: 5,
    title: "Do you offer mobile app development services?",
    content:
      "Yes, we offer mobile app development services for iOS and Android, with a focus on user experience, performance, and scalable business apps.",
  },
  {
    id: 6,
    title: "What is branding and graphic design for business growth?",
    content:
      "Branding and graphic design help shape your business identity through logos, visual systems, marketing creatives, and brand assets that improve recognition and trust.",
  },
  {
    id: 7,
    title: "How long does custom website development take?",
    content:
      "Custom website development timelines depend on page count, features, content, and revisions, but most business websites take around 4 to 8 weeks to complete.",
  },
  {
    id: 8,
    title: "Do you offer website maintenance and support after development?",
    content:
      "Yes, we offer website maintenance and support after development so your website or app stays updated, secure, fast, and optimized for growth.",
  },
  {
    id: 9,
    title: "How do you handle SEO for a business website?",
    content:
      "We handle SEO for a business website through keyword research, on-page optimization, technical SEO, content improvements, internal linking, and performance enhancements that support higher rankings.",
  },
  {
    id: 10,
    title: "What is performance marketing and how does it generate leads?",
    content:
      "Performance marketing is a results-driven advertising strategy where you pay for actions like clicks, leads, or sales, making it an effective way to generate measurable ROI and business growth.",
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
