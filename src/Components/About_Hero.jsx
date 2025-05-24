import React from 'react';
import { motion } from 'framer-motion';

const AboutWixwave = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
        
        {/* Background Banner Image */}
        <img
          src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748001205/About_Us_-_Image_vz0rso.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        {/* Animated Lime Text – Now for All Screens */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hello!
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            We are creative
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Spaces
          </motion.span>
        </motion.div>

        {/* Foreground Content */}
        <div className="relative z-20 max-w-3xl text-center">
          <h2 className="font-bold tracking-[0.2em] text-black mb-4">
            ABOUT WIXWAVE
          </h2>
          <p className="text-xl sm:text-xl text-black leading-relaxed">
            We are a digital studio specialized in web design and mobile apps. Our team
            consists of experienced professionals who, over the years of working together,
            have built a deep knowledge of designing and implementing innovative digital projects.
            Our work is more than just work—it's our passion. That's why we create unique and
            engaging solutions that have been recognized and rewarded by various authorities.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutWixwave;
