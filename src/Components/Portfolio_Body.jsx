import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'The Agency Way',
    url: 'https://taw.agency/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746801431/screencapture-taw-agency-2025-05-09-20_06_38_xktml0.png',
  },
  {
    title: 'Naturadic',
    url: 'https://naturadic.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802969/Naturadic_tokhwp.png',
  },
  {
    title: 'R-Casa',
    url: 'https://www.r-casa.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802970/R-casa_ale4rz.png',
  },
  {
    title: 'Supreem Superfoods',
    url: 'https://supreemsuperfoods.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802509/Suprrem_Super_Foods_i1figt.png',
  },
  {
    title: 'Avvi Gupta',
    url: 'https://www.avvigupta.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802506/Avvi_Gupta_zsan49.png',
  },
  {
    title: 'Boston Levin',
    url: 'https://boston-levin.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802508/Boston_levin_anoeeg.png',
  },
  {
    title: 'Bani Women',
    url: 'https://baniwomen.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802968/Bani_Women_farkbl.png',
  },
  {
    title: 'Closet Circus',
    url: 'https://www.closetcircus.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802514/Closet-Circus_pqbznr.png',
  },
];

const ShowcaseProjects = () => {
  return (
    <section className="w-full bg-gray-50 px-4 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-left mb-4" style={{ color: '#0c34e9' }}>
          Our Projects
        </h2>
        <p className="text-left text-gray-600 text-lg mb-10 sm:mb-14 lg:mb-16">
          Explore the journey of creativity, design, and innovation through our latest digital projects.
        </p>

        {/* Responsive grid: 1 column mobile, 2 columns from sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-xl bg-white"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full absolute top-0 left-0 object-cover transition-transform duration-[12000ms] ease-in-out group-hover:translate-y-[calc(-100%+300px)]"
                  style={{ height: 'auto', minHeight: '100%' }}
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Right-aligned animated text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: projects.length * 0.1 }}
          viewport={{ once: true }}
          className="mt-12 text-right pr-1"
        >
          <span className="text-xl sm:text-2xl font-medium text-blue-700 italic">
            ...and this is just the beginning.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseProjects;
