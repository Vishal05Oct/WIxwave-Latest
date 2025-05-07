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
                        That’s exactly why we are committing our imaginations to ‘a humans before boundaries’ approach.
                        We believe that if you look carefully enough, you’ll find a great idea in just about everything.
                    </motion.p>

                    {/* Animated Paragraph 2 */}
                    <motion.p
                        className="mt-6 text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        This is Tonic 2.0 – Where, like a shot of yellow in a ray of light, we see things anew.
                    </motion.p>

                    {/* Animated Heading */}
                    <motion.h2
                        className="mt-8 text-2xl font-extrabold text-black"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        People make us what we are.
                    </motion.h2>

                    {/* Animated Paragraph 3 */}
                    <motion.p
                        className="mt-4 text-lg text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        It is about delivering satisfaction, and not business results. A thought that turns technology & creatives on their head.
                        Making people experience what you set out to achieve – enhancement and elevation of the human spirit.
                    </motion.p>
                </div>

                {/* Animated Image */}
                <motion.div
                    className="mt-10 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <img
                        src="https://www.tonicworldwide.com/wp-content/uploads/2024/08/Philosophy-bottom-banner.png"
                        alt="Tonic 2.0 Banner"
                        className="w-full h-[50vh] object-cover"
                    />
                </motion.div>
            </section>
        </>
    );
}

export default About_2;
