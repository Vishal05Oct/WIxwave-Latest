import React, { useState } from 'react';
import { motion } from 'framer-motion';

/** 1️⃣  Add a "category" key to each project */
const projects = [
 {
    title: 'MaxtronEV',
    url: 'https://maxtronev.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751648223/MaxtronEV_eh5pic.png',
    category: 'React',
  },
  {
    title: 'Avant Divine',
    url: 'https://avantdivine.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751648319/Avant_Divine_1_kb8fqr.png',
    category: 'React',
  },
  
  {
    title: 'The Agency Way',
    url: 'https://taw.agency/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746801431/screencapture-taw-agency-2025-05-09-20_06_38_xktml0.png',
    category: 'React',
  },
  {
    title: 'Suta',
    url: 'https:/suta.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751686816/Suta_qtq4xn.png',
    category: 'Shopify',
  },
  {
    title: 'Naturadic',
    url: 'https://naturadic.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802969/Naturadic_tokhwp.png',
    category: 'Shopify',
  },
  {
    title: 'R-Casa',
    url: 'https://www.r-casa.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802970/R-casa_ale4rz.png',
    category: 'Shopify',
  },
  {
    title: 'Supreem Superfoods',
    url: 'https://supreemsuperfoods.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802509/Suprrem_Super_Foods_i1figt.png',
    category: 'Shopify',
  },
  {
    title: 'Footflex',
    url: 'https://footflex.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751649379/Footflex_2_st2xx0.png',
    category: 'Shopify',
  },
  {
    title: 'Sherwani Rental',
    url: 'https://sherwanirental.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751649186/Sherwani_Rental_2_1_wfekw6.png',
    category: 'Shopify',
  },
  {
    title: 'Boston Levin',
    url: 'https://boston-levin.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802508/Boston_levin_anoeeg.png',
    category: 'Shopify',
  },
  {
    title: 'Bani Women',
    url: 'https://baniwomen.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802968/Bani_Women_farkbl.png',
    category: 'Shopify',
  },
  {
    title: 'Dimwit Coffee',
    url: 'https://dimwit.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751686600/dimwit_ywxzwh.png',
    category: 'Shopify',
  },
  {
    title: 'Closet Circus',
    url: 'https://www.closetcircus.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1746802514/Closet-Circus_pqbznr.png',
    category: 'Shopify',
  },
  {
    title: 'Babies Bloom Store',
    url: 'https://babiesbloomstore.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751683772/babbies_gpjnsm.png',
    category: 'WordPress‑WooCommerce',
  },
  {
    title: 'Gulygo',
    url: 'https://gulygo.com/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751684264/Gulygo_jeoiw4.png',
    category: 'WordPress‑WooCommerce',
  },
  {
    title: 'Our Law Firm',
    url: 'https://ourlawfirm.in/',
    image: 'https://res.cloudinary.com/dobbdtftp/image/upload/v1751684424/screencapture-ourlawfirm-in-2025-07-05-08_29_13_h7zuy7.png',
    category: 'WordPress‑WooCommerce',
  },
];

const categories = ['All', 'React', 'WordPress‑WooCommerce', 'Shopify'];

const ShowcaseProjects = () => {
  /** 2️⃣  Track the selected category */
  const [selected, setSelected] = useState('All');

  /** 3️⃣  Filter the project list on the fly */
  const filtered = selected === 'All'
    ? projects
    : projects.filter(p => p.category === selected);

  return (
    <section className="w-full bg-gray-50 px-4 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-left mb-4" style={{ color: '#0c34e9' }}>
          Our Projects
        </h2>
        <p className="text-left text-gray-600 text-lg mb-8 sm:mb-12 lg:mb-14">
          Explore the journey of creativity, design, and innovation through our latest digital projects.
        </p>

        {/* 4️⃣  Category buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full border transition
                ${selected === cat
                  ? 'bg-blue-700 text-white border-blue-700 shadow'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 5️⃣  Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-xl bg-white hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <div className="relative h-[400px] sm:h-[360px] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} homepage`}
                  loading="lazy"
                  className="w-full absolute top-0 left-0 object-cover transition-transform duration-[12000ms] ease-in-out group-hover:translate-y-[calc(-100%+300px)]"
                  style={{ height: 'auto', minHeight: '100%' }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: filtered.length * 0.1 }}
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
