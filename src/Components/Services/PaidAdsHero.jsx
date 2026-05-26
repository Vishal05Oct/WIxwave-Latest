import { motion } from "framer-motion";
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from "../../constants/heroStyles";

const PaidAds = () => {
  return (
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748002505/Performance_Banner_m3ohab.jpg"
        alt="Digital marketing performance analytics and advertising dashboard"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Text */}
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
          Paid
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Ads
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className={PAGE_HERO_TITLE_CLASS}>
          PAID ADS & PERFORMANCE MARKETING
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Looking for fast growth with measurable advertising results? Wixwave manages paid ads on Google, Meta, and YouTube, optimizing targeting, creatives, and bidding so campaigns perform strongly and deliver the revenue impact your business needs every month with confidence.
        </p>
      </div>
    </section>
  );
};

export default PaidAds;
