import {
  FaRocket,
  FaMoneyBillWave,
  FaCogs,
  FaBullhorn,
  FaCode,
  FaMobileAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const FeatureCard = ({ icon, title, desc, variantColor = 'bg-blue-600', i }) => (
  <motion.li
    custom={i}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
    className="flex items-start gap-4 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
  >
    <div
      className={`${variantColor} text-white p-4 rounded-full shadow-md shrink-0`}
      aria-hidden="true"
    >
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-700 text-sm">{desc}</p>
    </div>
  </motion.li>
);

const BenefitsSection = () => {
  const whyChooseUs = [
    {
      icon: <FaRocket size={20} />,
      title: 'Fast & Scalable',
      desc: 'We build performance-driven solutions tailored for growth.',
    },
    {
      icon: <FaMoneyBillWave size={20} />,
      title: 'Cost-Effective',
      desc: 'Premium quality without breaking the budget.',
    },
    {
      icon: <FaCogs size={20} />,
      title: 'All-in-One',
      desc: 'From design to deployment—everything under one roof.',
    },
  ];

  const ourAdvantages = [
    {
      icon: <FaBullhorn size={20} />,
      title: 'Marketing-Driven',
      desc: 'We focus on ROI with strategic digital campaigns.',
    },
    {
      icon: <FaCode size={20} />,
      title: 'Tech Expertise',
      desc: 'Built using the latest frameworks and best practices.',
    },
    {
      icon: <FaMobileAlt size={20} />,
      title: 'Mobile-First',
      desc: 'Optimized experiences across devices for maximum engagement.',
    },
  ];

  return (
    <section
      className="relative py-12 px-6 md:px-20 overflow-hidden bg-gray-50"
      aria-labelledby="benefits-heading"
    >
      {/* Decorative Backgrounds (hidden from screen readers) */}
      <div
        className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-ping"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto grid md:grid-cols-3 gap-16">
        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <span className="inline-block mb-4 bg-white text-black font-semibold py-1 px-4 rounded-full shadow animate-pulse">
            WixWave Advantage
          </span>
          <h2
            id="benefits-heading"
            className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900"
          >
            Your Digital <span className="text-blue-600">Growth</span> Partner
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg font-medium leading-relaxed">
            Empowering businesses with cutting-edge design, development, and marketing solutions.
          </p>
        </motion.div>

        {/* Why Choose Us Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4"
          >
            Why Choose Us
          </motion.h3>
          <ul className="space-y-6" role="list">
            {whyChooseUs.map((item, i) => (
              <FeatureCard key={i} i={i} {...item} variantColor="bg-blue-600" />
            ))}
          </ul>
        </div>

        {/* Our Advantages Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-black pl-4"
          >
            Our Advantages
          </motion.h3>
          <ul className="space-y-6" role="list">
            {ourAdvantages.map((item, i) => (
              <FeatureCard key={i} i={i} {...item} variantColor="bg-black" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
