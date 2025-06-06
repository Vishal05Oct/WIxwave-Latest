import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  { 
    title: 'Website Design & Development', 
    image: 'https://img.freepik.com/free-vector/concept-landing-page-website-setup_52683-25031.jpg', 
    link: '/services/web-dev', 
    delay: 0 
  },
  { 
    title: 'Mobile App Design & Development', 
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/app_dev_ewptnp.jpg', 
    link: '/services/app-dev', 
    delay: 0 
  },
  { 
    title: 'Branding & Graphics', 
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746641973/designing_nainbu.jpg', 
    link: '/services/branding', 
    delay: 0 
  },
  { 
    title: 'Search Engine Optimisation', 
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/seo_ph2x6b.avif', 
    link: '/services/seo', 
    delay: 0 
  },
  { 
    title: 'Social Media Management', 
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/social_media_gseote.avif', 
    link: '/services/social-media', 
    delay: 0 
  },
  { 
    title: 'Performance Marketing', 
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/performance_bkyvvp.avif', 
    link: '/services/paid-ads', 
    delay: 0 
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' },
  }),
};

// Custom mobile arrows with different style/icons
const MobileNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    className="absolute right-1 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600  text-white p-2 rounded-full shadow-md cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    <FaChevronRight size={20} />
  </button>
);

const MobilePrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    className="absolute left-1 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600  text-white p-2 rounded-full shadow-md cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    <FaChevronLeft size={20} />
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
  nextArrow: <MobileNextArrow />,
  prevArrow: <MobilePrevArrow />,
};

const ServicesSection = () => {
  return (
    <div className="py-4 md:pb-12 px-5 container mx-auto">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="text-4xl md:text-5xl font-bold lg:mb-8 text-gray-900 relative inline-block"
      >
        <span className="relative z-10">Our Services</span>
      </motion.h2>

      {/* Grid layout for md and up */}
      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={service.delay}
            className="relative group overflow-hidden rounded-2xl shadow-lg block"
          >
            <Link
              to={service.link}
              aria-label={`Learn more about ${service.title}`}
              className="block relative"
            >
              <img
                src={service.image}
                alt={`${service.title} service image`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-8 py-6 text-white">
                <p className="text-2xl mb-2 font-medium">{service.title}</p>
                <div className="flex items-center">
                  <p>Explore More</p>
                  <div className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center text-xl ml-3 transition-all transform hover:bg-purple-500 hover:scale-110 hover:shadow-lg cursor-pointer">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Slider for mobile view only */}
      <div className="md:hidden relative mt-6">
        <Slider {...sliderSettings}>
          {services.map((service) => (
            <Link
              to={service.link}
              key={service.title}
              className="block relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-56 object-cover rounded-lg shadow-md mb-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 text-white">
                <p className="text-xl font-semibold">{service.title}</p>
                <div className="flex items-center mt-2">
                  <span>Explore More</span>
                  <div className="bg-white text-black rounded-full w-8 h-8 flex justify-center items-center text-base ml-2">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSection;
