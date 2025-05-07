import React from "react";
import { motion } from "framer-motion"; // Import framer motion

export default function HumanTouchSection() {
  return (
    <section className="w-full bg-white text-gray-800 px-4 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section with animations */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h2
            className="text-2xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            In this age of automated conversations, we noticed that the{' '}
            <span className="font-extrabold">
              '<span className="bg-yellow-200 underline">human touch</span>'
            </span>{' '}
            had sneaked out while no one was looking.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Everyone has the Siris, Bots, and the AI. What they don’t have is a
            naturally intuitive and personal connection with their customers; a
            coupling that could turn technology & creatives on their head.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We’ve taken the leap of faith and distances to build a highly
            personalized & nuanced approach to the brands we work with, renewed
            with a global perspective.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Opening global offices isn’t just about crossing geographical
            boundaries for us. It brings with it a cross-pollination of cultures,
            ideas, and perspectives. Our endeavor is to bring a mix of trend
            spotting and cultural insights unique to your brand and audience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            That’s exactly why we are committing our imaginations to ‘a humans
            before boundaries’ approach. We believe that if you look carefully
            enough, you’ll find a great idea in just about everything.
          </motion.p>
        </div>

        {/* Right Section (Image) with animation */}
        <div className="w-full lg:w-1/2">
          <motion.img
            src="https://www.tonicworldwide.com/wp-content/uploads/2024/08/party-scene.webp"
            alt="Human Touch Collaboration"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </div>
    </section>
  );
}
