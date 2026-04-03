import { motion } from "framer-motion";

const ContactWixwave = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-16 overflow-hidden">
      
      {/* Background Banner Image */}
      <img
        src="https://img.freepik.com/premium-photo/cropped-hand-woman-holding-telephone-receiver-against-concrete-wall-banner-size-with-copy-space-individual-text_157125-14977.jpg?w=2000"
        alt="Background"
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
        <h2 className="font-bold tracking-[0.2em] text-black mb-4 text-xl sm:text-2xl">
          CONTACT US
        </h2>
        <p className="text-xl sm:text-xl text-black leading-relaxed mb-6">
          Have a brilliant idea or just want to say hello? We’re all ears! At Wixwave,
          we turn your vision into digital reality—let's chat, collaborate, and make waves together.
        </p>
        <p className="text-xl sm:text-xl text-black leading-relaxed">
          Whether you're looking to build a stunning website, launch a mobile app, or reimagine your brand identity,
          our team of passionate designers and developers is here to bring your ideas to life. We believe in meaningful
          collaborations and groundbreaking digital experiences. Ready to start your journey? Drop us a message and let's shape the future together.
        </p>
      </div>
    </section>
  );
};

export default ContactWixwave;
