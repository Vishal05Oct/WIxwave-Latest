import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WebDevEdgeSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        <section className="text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome To The Digital Frontier!</h1>
          <p className="text-lg">
            We thrive on transforming ideas into exceptional digital experiences. Our
            team explores innovative techniques in web design and development to build
            interactive, responsive, and accessible web solutions. Join us as we push
            the envelope of the digital world.
          </p>
        </section>

       <section className="grid md:grid-cols-2 gap-10 items-center">
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Cutting-Edge Web Design</h2>
    <p>
      Great design isn't just about aesthetics—it's about creating seamless user
      experiences. Our design team combines creativity with strategy to craft
      websites that are both visually engaging and functionally effective.
    </p>
    <p>
      We use a user-centered approach to design responsive layouts, define
      intuitive navigation, and bring brands to life online. Whether you're
      building from scratch or refreshing your digital presence, we tailor each
      design to your goals.
    </p>
    <p>
      Our team collaborates closely with you throughout the process, leveraging modern
      frameworks like Tailwind CSS, Figma, and Webflow to ensure your vision is executed with precision.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Mobile-first, responsive design</li>
      <li>Conversion-optimized user flows</li>
      <li>Seamless handoff to development</li>
      <li>Consistent brand identity and visual storytelling</li>
    </ul>
    <Link to="/portfolio" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
      Explore Our Development Work
    </Link>
  </div>
  <div className="flex justify-center">
    <div>
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748030245/budka-damdinsuren-xPjsMamUBK4-unsplash_smpxeh.jpg"
        alt="Web Design Illustration"
      />
    </div>
  </div>
</section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="">
              <img src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746872964/React_bdjjcr.png" alt="Web Development Illustration" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Powerful Web Development</h2>
            <p>
              Our development team brings your designs to life using the latest web
              technologies. We build scalable, performant, and secure websites tailored
              to your business needs.
            </p>
            <p>
              From front-end interactions to back-end systems, we ensure every part of
              your site works harmoniously. We follow modern development best practices
              and focus on accessibility, SEO, and responsive design.
            </p>
            <p>
              Whether it's a custom CMS, an e-commerce platform, or a dynamic web app,
              we deliver solutions that drive results.
            </p>
            <Link to="/Contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
            Start Your Branding Journey
            </Link>
          </div>
        </section>
        <h1 className="text-4xl font-bold ">Our Website Development Process</h1>
        <motion.div
                       className="mt-6 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <img
                            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746877508/Development_Process_ljgxa6.png"
                            alt="WixWave Team in Action"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                    <section class="bg-white ">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Explanation</h2>
    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li><strong>Planning:</strong> Define project goals, scope, resources, and timelines to establish a solid foundation.</li>
      <li><strong>UX/UI Design:</strong> Create user-friendly interfaces and experiences through wireframes, prototypes, and design systems.</li>
      <li><strong>Development:</strong> Build the application’s frontend and backend functionalities, integrating necessary technologies and services.</li>
      <li><strong>Testing:</strong> Perform quality assurance through various testing methods to ensure the product works as intended.</li>
      <li><strong>Launch:</strong> Deploy the software to a live environment, making it accessible to users while monitoring for issues.</li>
      <li><strong>Maintenance:</strong> Provide ongoing updates, bug fixes, and improvements based on user feedback and system monitoring.</li>
    </ul>
    <p class="text-gray-700 mt-4 text-center md:text-left">
      The process is typically iterative, allowing for feedback and improvements even after deployment.
    </p>
  </div>
</section>

      </div>
    </div>
  );
};

export default WebDevEdgeSection;
