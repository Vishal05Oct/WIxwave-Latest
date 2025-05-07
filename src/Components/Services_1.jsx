import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  { title: 'Website Design & Development', image: 'https://img.freepik.com/free-vector/concept-landing-page-website-setup_52683-25031.jpg', link: '/services/web-dev', delay: 0 },
  { title: 'Mobile App Design & Development', image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/app_dev_ewptnp.jpg', link: '/services/app-dev', delay: 0 },
  { title: 'Branding & Graphics', image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/Branding_ewbyss.avif', link: '/services/branding-graphics', delay: 0.1 },
  { title: 'Search Engine Optimisation', image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/seo_ph2x6b.avif', link: '/services/seo', delay: 0.4 },
  { title: 'Social Media Management', image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/social_media_gseote.avif', link: '/services/social-media-management', delay: 0.2 },
  { title: 'Performance Marketing', image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/performance_bkyvvp.avif', link: '/services/performance-marketing', delay: 0.3 },
];

const rotatingWords = [
  "Websites",
  "Apps",
  "Brands",
  "SEO",
  "Marketing",
  "Design",
  "Graphics",
  "Strategy",
  "Growth",
  "Optimization",
  "Social Media",
];

export default function ServicesSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 md:px-8">
      <div className="container mx-auto px-4">
        {/* Left-Aligned Animated Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-left text-gray-900 flex flex-wrap items-center gap-2 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-800">We deliver</span>

          <span className="relative inline-flex items-center justify-start text-blue-600 min-w-[100px] h-[1.2em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[currentWordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="whitespace-nowrap"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>

          <span className="text-gray-800">that inspire</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image and Overlay */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x300")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="relative z-10 p-6 flex flex-col h-full justify-end text-white">
                <h3 className="text-xl font-semibold mb-2 text-shadow">{service.title}</h3>
                <p className="text-sm mb-4 opacity-80">
                  Explore how we help with modern digital solutions tailored for you.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={service.link}
                    className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition group"
                  >
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </a>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/20 text-sm rounded-full">Tag1</span>
                    <span className="px-3 py-1 bg-white/20 text-sm rounded-full">Tag2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
