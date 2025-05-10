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
            href="https://wa.me/7479787717"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-green-500 text-white font-semibold text-sm px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-md"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            Chat With Us
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
