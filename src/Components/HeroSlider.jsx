import React from "react";
import { motion } from "framer-motion";

const sliderItems = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
  },
  {
    logo: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
    alt: "Node.js",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    alt: "Express.js",
  },
  {
    logo: "https://webimages.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    alt: "MongoDB",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
    alt: "Flutter",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    alt: "Tailwind CSS",
  },
  {
    logo: "https://angular.io/assets/images/logos/angular/angular.svg",
    alt: "Angular",
  },
  {
    logo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
    alt: "WordPress",
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    alt: "Shopify",
  },
  {
    logo: "https://img.icons8.com/?size=512&id=fpGM2cINbbu4&format=png",
    alt: "Google Cloud",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    alt: "Meta",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    alt: "Adobe Photoshop",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
    alt: "Adobe Illustrator",
  },
  {
    logo: "https://img.icons8.com/?size=512&id=iWw83PVcBpLw&format=png",
    alt: "Canva",
  },
  {
    logo: "https://img.icons8.com/color/96/000000/amazon-web-services.png",
    alt: "AWS",
  },
];

export default function SimpleLogoSlider() {
  const duplicatedItems = [...sliderItems, ...sliderItems]; // for infinite loop

  return (
    <div className="bg-white py-10">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl font-extrabold text-center mb-8 text-black relative"
      >
        Technologies We Work With
        <motion.span
          layoutId="underline"
          className="block h-1 w-48 mx-auto mt-2 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.h2>

      {/* Logo Slider */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex min-w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {duplicatedItems.map(({ logo, alt }, index) => (
            <img
              key={index}
              src={logo}
              alt={alt}
              className="w-20 h-20 object-contain flex-shrink-0"
              draggable={false}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://via.placeholder.com/80?text=No+Image";
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
