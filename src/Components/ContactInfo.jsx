import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
        >
          GET IN TOUCH WITH US!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-base sm:text-lg font-semibold mb-10 opacity-80"
        >
          We’d love to hear from you! Reach out through any of the methods below.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 sm:gap-0">
          <motion.a
            href="tel:+919470440744"
            className="bg-black text-white py-3 px-6 rounded-lg text-base sm:text-lg font-semibold inline-block transition transform hover:scale-105 hover:bg-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Phone: +91 9470440744
          </motion.a>

          <motion.a
            href="mailto:hello@wixwave.co"
            className="bg-white text-blue-800 py-3 px-6 rounded-lg text-base sm:text-lg font-semibold inline-block transition transform hover:scale-105 hover:bg-gray-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Email: hello@wixwave.co
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
