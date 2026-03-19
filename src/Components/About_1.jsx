import React from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

export default function AboutWixWaveSection() {
  return (
    <section
      className="w-full bg-white text-gray-800 px-4 py-12 lg:px-24"
      aria-label="About WixWave digital agency and its innovative services"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section - About WixWave */}
        <article className="w-full lg:w-1/2 space-y-6">
          <header>
            <motion.h2
              className="text-2xl lg:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About{" "}
              <span className="font-extrabold">
                <span className="bg-SKY-200 underline">WixWave</span>
              </span>
              : Shaping Tomorrow’s Digital Landscape with Expert Website & App Development
            </motion.h2>
          </header>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At WixWave, we don’t just build websites; we create groundbreaking digital experiences
            that captivate, engage, and convert. Our expert team specializes in custom website
            design, app development, and digital marketing solutions that forge lasting connections
            between brands and their audiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            As innovative digital strategists and creative visionaries, we combine technology,
            creativity, and marketing to deliver impactful results. Whether you're a startup
            looking to disrupt or an established brand aiming to innovate, WixWave has the
            tailored digital solutions you need to succeed.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Innovation drives everything we do. Every line of code, pixel, and strategy is crafted
            to elevate your brand’s online presence and make it unforgettable in the competitive
            digital world.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            WixWave isn’t just a digital agency — we’re your growth partner. From data-driven
            strategies to visually stunning designs, we help you create an impactful digital
            footprint that drives business success.
          </motion.p>
        </article>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <OptimizedImage
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746784531/about_images_w0f97r.png"
              alt="WixWave digital agency team collaborating on website and app development projects"
              className="w-full h-full object-cover"
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
