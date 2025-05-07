import React from 'react';
import { motion } from "framer-motion";

const ServicesWixwave = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://img.freepik.com/free-photo/business-people-meeting-office-writing-memos-sticky-notes_1150-42511.jpg?t=st=1715064377~exp=1715067977~hmac=6221e6fa86db66dcf60e60eb1dc22f6dbf4ed5eb30a7334df32537b51e0d14c8&w=2000"
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Lime Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-lime-400 font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          What
          <br className="block sm:hidden" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          We Offer
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          OUR SERVICES
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed mb-6">
          Wixwave crafts tailored digital solutions that drive real business impact. We offer a full suite of services—from responsive website development
          and custom mobile apps to high-performance UI/UX design and strategic branding.
        </p>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Our team merges creativity with technology to build engaging, scalable digital experiences. Whether you're looking to launch, grow, or
          rebrand, we’re here to deliver results that matter. Discover how our expertise can take your business to the next level.
        </p>
      </div>
    </section>
  );
};

export default ServicesWixwave;
