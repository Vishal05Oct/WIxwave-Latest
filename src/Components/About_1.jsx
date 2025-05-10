import React from "react";
import { motion } from "framer-motion";

export default function AboutWixWaveSection() {
  return (
    <section className="w-full bg-white text-gray-800 px-4 py-12 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section - About WixWave */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h2
            className="text-2xl lg:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About{" "}
            <span className="font-extrabold">
              <span className="bg-yellow-200 underline">WixWave</span>
            </span>
            : Shaping Tomorrow’s Digital Landscape
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At WixWave, we don't just build websites; we create groundbreaking digital experiences that captivate, engage, and convert. Our team specializes in tailored solutions that forge lasting connections between brands and their audiences. From stunning websites to powerful apps, we turn your vision into reality, every step of the way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We are a team of bold thinkers and creative visionaries, relentlessly pushing the limits of innovation. At WixWave, we offer a partnership where technology, creativity, and marketing converge to drive impactful results. Whether you're a startup seeking to disrupt or a seasoned brand looking to innovate, we have the right digital solutions for you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We don't just think outside the box—we build new possibilities. Innovation isn't just part of our process; it's the essence of who we are. Every line of code, every pixel, and every digital strategy is crafted with one mission: to elevate your brand, making it unforgettable in the digital world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We don't follow trends—we set them. WixWave is more than a digital agency; we’re your partner in growth. From data-driven strategies to visually stunning designs, we help take your brand to unparalleled heights. Let us help you create an unforgettable digital footprint.
          </motion.p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2">
          <motion.img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746784531/about_images_w0f97r.png"
            alt="WixWave Digital Agency Team"
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
