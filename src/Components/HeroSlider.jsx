import React from "react";
import { motion } from "framer-motion";

// Array of logos
const sliderItems = [
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", alt: "Express.js" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg", alt: "Flutter" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", alt: "Figma" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/250px-Tailwind_CSS_Logo.svg.png", alt: "Tailwind CSS" },
  { logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg", alt: "Angular" },
  { logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png", alt: "WordPress" },
  { logo: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png", alt: "Shopify Partner" }
];

const LogoSlider = () => {
  // Duplicate items for seamless infinite scroll
  const logos = [...sliderItems, ...sliderItems];

  return (
    <div className="overflow-hidden py-4 sm:py-6">
      <motion.div
        className="flex gap-2 sm:gap-6 md:gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {logos.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={item.logo}
              alt={item.alt}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
