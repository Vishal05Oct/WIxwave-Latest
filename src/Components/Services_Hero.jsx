import { motion } from "framer-motion";

const ServicesWixwave = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://img.freepik.com/free-photo/particle-lines-futuristic-network-background_53876-129729.jpg?t=st=1746805732~exp=1746809332~hmac=571c982d3cb4b0a434725d6e6e8573ecd5bb17a1e9e742b2e6fa71f12e968917&w=1380"
        alt="Futuristic digital network with particle connections"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Overlapping Large Lime Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 leading-[1] text-center text-[#6699ff] font-extrabold text-[12vw] sm:text-[8vw] pointer-events-none select-none"
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
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Wixwave delivers digital services designed to grow your business and strengthen your brand. From websites and apps to SEO, social media, and performance marketing, we create seamless, scalable experiences that help your audience connect and your goals succeed.
        </p>
      </div>
    </section>
  );
};

export default ServicesWixwave;
