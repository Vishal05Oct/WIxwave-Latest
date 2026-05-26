import { motion } from 'framer-motion';
import { PAGE_HERO_BG_TEXT_CLASS, PAGE_HERO_TITLE_CLASS } from '../constants/heroStyles';

const OurPortfolio = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">

        {/* Background Banner Image */}
        <img
          src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748202730/computer-1846056_1920_irp1x9.jpg"
          alt="Modern computer workstation with creative design elements"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Animated Lime Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={PAGE_HERO_BG_TEXT_CLASS}
>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Creative
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Portfolio
          </motion.span>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h2 className={PAGE_HERO_TITLE_CLASS}>
            OUR PORTFOLIO
          </h2>
          <p className="text-xl sm:text-xl text-black leading-relaxed">
            Explore Wixwave’s portfolio of digital work across websites and apps. We create visually engaging projects with attention to detail, user experience, and performance so your brand is showcased confidently and your visitors enjoy every interaction across every device.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
