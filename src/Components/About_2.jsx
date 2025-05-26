import React from 'react';
import { motion } from 'framer-motion';

function About_2() {
  return (
    <section
      className="px-6 py-12 lg:px-24"
      aria-label="About WixWave digital agency services and expertise"
    >
      <div className="container mx-auto">
        <article>
          {/* Animated Paragraph 1 */}
          <motion.p
            className="text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            At WixWave, we transform ideas into exceptional digital experiences with world-class web design,
            cutting-edge app development, and creative digital marketing strategies. We go beyond meeting your
            expectations—we exceed them, making sure your online presence is as dynamic as your business.
          </motion.p>

          {/* Animated Paragraph 2 */}
          <motion.p
            className="mt-6 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We don’t just build websites; we create immersive digital experiences that elevate your brand.
            From sleek e-commerce platforms to comprehensive digital strategies, WixWave is dedicated to making
            your brand shine in today’s fast-paced digital world.
          </motion.p>

          {/* Animated Heading */}
          <motion.header
            className="mt-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h2 className="text-2xl font-extrabold text-black">Why WixWave?</h2>
          </motion.header>

          {/* Animated Paragraph 3 */}
          <motion.p
            className="mt-4 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            What sets us apart? WixWave is where innovation meets strategy. Our expert team fuses
            cutting-edge technology with visionary design to deliver scalable digital solutions.
            We don’t just design—we craft memorable digital experiences that drive measurable results.
          </motion.p>

          {/* Animated Paragraph 4 */}
          <motion.p
            className="mt-4 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Your brand is at the core of everything we do. Our customer-first approach helps us deeply
            understand your unique needs, audience, and goals. We then craft tailored digital strategies,
            including SEO and custom web development, to empower your brand’s growth and success online.
          </motion.p>
        </article>

        {/* Animated Image */}
        <motion.figure
          className="mt-10 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="https://taw.agency/static/media/taw-about-banner3.535024bf6be11dad4776.png"
            alt="WixWave digital agency team collaborating on projects"
            className="w-full h-auto object-cover"
          />
          <figcaption className="sr-only">
            WixWave team in action collaborating on web design and app development projects.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

export default About_2;
