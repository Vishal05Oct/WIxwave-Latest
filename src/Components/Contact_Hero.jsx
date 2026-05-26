import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../constants/heroStyles";

const ContactWixwave = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://img.freepik.com/premium-photo/cropped-hand-woman-holding-telephone-receiver-against-concrete-wall-banner-size-with-copy-space-individual-text_157125-14977.jpg?w=2000"
        alt="Person holding telephone receiver for contact communication"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Lime Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={PAGE_HERO_BG_TEXT_CLASS}
>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Let's
          <br className="block sm:hidden" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Connect
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          CONTACT US
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Start a conversation with Wixwave and discover how your ideas can become effective digital products. We combine creativity, strategy, and technical expertise to craft websites, apps, and brands that resonate with users and move your business forward today.
        </p>
      </div>
    </section>
  );
};

export default ContactWixwave;
