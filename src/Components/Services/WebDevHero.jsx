import { motion } from "framer-motion";

const WebsiteDesignDevelopment = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://cdn.pixabay.com/photo/2017/08/05/12/58/computer-2583383_1280.jpg"
        alt="Modern computer workstation for web development"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Lime Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[10vw] sm:text-[7vw] pointer-events-none select-none"
      >
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Website
          <br className="block sm:hidden" />
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Development
        </motion.span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-3xl text-center px-4 sm:px-6">
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          WEBSITE DESIGN & DEVELOPMENT
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Looking for a modern website that feels fast, polished, and easy to use? Wixwave builds responsive web experiences that reflect your brand, engage visitors, and support your business with professional design, clean code, and reliable performance every time.
        </p>
      </div>
    </section>
  );
};

export default WebsiteDesignDevelopment;
