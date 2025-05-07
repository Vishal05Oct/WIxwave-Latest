import { motion } from 'framer-motion';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0c34e9] to-[#0c34e9] text-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
        >
          Let’s Build Something Extraordinary Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-base sm:text-lg font-medium mb-6 opacity-90 max-w-2xl mx-auto"
        >
          From bold ideas to polished execution, our team delivers innovative digital solutions that elevate your brand and drive real results.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="text-base sm:text-lg font-medium mb-10 opacity-90 max-w-2xl mx-auto"
        >
          Let's chat about how we can bring your vision to life — no pressure, just possibilities.
        </motion.p>

        <motion.a
          href="/contact"
          className="bg-white text-[#0c34e9] py-3 px-8 rounded-lg text-base sm:text-lg font-semibold inline-block transition transform hover:scale-105 hover:bg-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Book a Free Consultation
        </motion.a>
      </div>
    </section>
  );
};

export default ServicesCTA;
