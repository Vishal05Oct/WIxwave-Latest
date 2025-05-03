import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
];

const AfterHeroClientLogos = () => {
  return (
    <section className="w-full bg-transparent py-12 overflow-hidden">
      <div className="relative w-full overflow-hidden flex">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap px-4"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          style={{ display: 'flex', minWidth: 'max-content' }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ minWidth: "48px", minHeight: "48px", margin: '0 1rem' }}
            >
              <img
                src={logo}
                alt={`Client Logo ${index}`}
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AfterHeroClientLogos;
