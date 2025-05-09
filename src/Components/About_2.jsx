import React from 'react';
import { motion } from 'framer-motion';

function About_2() {
    return (
        <>
            <section className="px-6 py-12 lg:px-24">
                <div className="container mx-auto">
                    {/* Animated Paragraph 1 */}
                    <motion.p
                        className="text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        At WixWave, we transform ideas into exceptional digital experiences with world-class web design, cutting-edge app development, and creative digital marketing strategies. We go beyond meeting your expectations—we exceed them, making sure your online presence is as dynamic as your business.
                    </motion.p>

                    {/* Animated Paragraph 2 */}
                    <motion.p
                        className="mt-6 text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        We don’t just build websites; we build immersive digital experiences that elevate your brand. From sleek e-commerce platforms to all-encompassing digital strategies, WixWave is dedicated to making your brand shine in today’s fast-paced digital world.
                    </motion.p>

                    {/* Animated Heading */}
                    <motion.h2
                        className="mt-8 text-2xl font-extrabold text-black"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Why WixWave?
                    </motion.h2>

                    {/* Animated Paragraph 3 */}
                    <motion.p
                        className="mt-4 text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        What sets us apart? WixWave is where innovation meets strategy. Our expert team fuses cutting-edge technology with visionary design to deliver solutions that not only lead the market but are built to scale. We don’t just design—we craft memorable digital experiences that drive tangible results.
                    </motion.p>

                    {/* Animated Paragraph 4 */}
                    <motion.p
                        className="mt-4 text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                    >
                        Your brand is at the core of everything we do. Our customer-first approach allows us to deeply understand your unique needs, audience, and goals. We then craft tailored digital strategies that ensure your business stays ahead of the curve. From SEO to custom web development, we empower your brand to grow and succeed online.
                    </motion.p>

                    {/* Animated Image */}
                    <motion.div
                        className="mt-10 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <img
                            src="https://taw.agency/static/media/taw-about-banner3.535024bf6be11dad4776.png"
                            alt="WixWave Team in Action"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default About_2;
