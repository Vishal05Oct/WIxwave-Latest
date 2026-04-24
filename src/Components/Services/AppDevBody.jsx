import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ServiceBacklinksSection from "./ServiceBacklinksSection";

const AppDevEdgeSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        <section className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Welcome To The Mobile Future!</h2>
          <p className="text-lg">
            We specialize in crafting intuitive and engaging mobile experiences. Our team is
            dedicated to designing and developing high-performance mobile apps that are not only
            visually stunning but also provide seamless functionality. Join us as we create mobile
            apps that drive success and innovation.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Innovative App Design</h2>
    <p>
      Our design process focuses on creating beautiful, user-centric mobile applications
      that engage users and solve real-world problems. From wireframing to high-fidelity
      prototypes, we focus on every detail to ensure your app delivers the best experience.
    </p>
    <p>
      We incorporate the latest design trends and best practices to craft intuitive user
      interfaces and ensure smooth navigation, tailored to your app’s purpose and user
      needs.
    </p>
    <p>
      Collaboration is at the heart of our workflow. We work closely with stakeholders
      to gather feedback early and often, allowing us to iterate quickly and effectively.
      This ensures that the final product aligns with your vision and user expectations.
    </p>
    <p>
      Our team leverages powerful design tools like Figma, Adobe XD, and Sketch to
      streamline the process and maintain pixel-perfect accuracy across all platforms.
      We prioritize accessibility, responsiveness, and performance in every design decision.
    </p>
    <p>
      Whether you're launching a new product or revamping an existing one, our goal is to
      help you stand out in a competitive market with an app that's not just functional,
      but delightful to use.
    </p>
  </div>
  <div className="flex justify-center">
    <div>
      <img
        src="https://res.cloudinary.com/dobbdtftp/image/upload/v1748027929/App_Design_unlsqr.jpg"
        alt="App Design Illustration"
      />
    </div>
  </div>
</section>


        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="">
              <img src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746872964/React_bdjjcr.png" alt="App Development Illustration" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Seamless App Development</h2>
            <p>
              Our development team specializes in building mobile applications that are fast,
              reliable, and scalable. We utilize the latest frameworks and technologies to ensure
              high-performance apps that run smoothly on both iOS and Android devices.
            </p>
            <p>
              From building cross-platform apps with React Native to native app development, we
              tailor each solution to meet your business goals. Our focus is on functionality,
              performance, and user experience.
            </p>
            <p>
              Whether it's an e-commerce app, a social network, or a custom mobile solution, we
              deliver applications that cater to your unique needs.
            </p>
            <Link to="/contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
      Start Your App Development Journey
    </Link>
          </div>
        </section>

        <h2 className="text-3xl sm:text-4xl font-bold">Our App Development Process</h2>
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

        <section className="bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Explanation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Planning:</strong> Define project goals, target audience, features, and timeline to set the foundation.</li>
              <li><strong>UI/UX Design:</strong> Design intuitive, user-friendly interfaces with wireframes, prototypes, and high-fidelity visuals.</li>
              <li><strong>Development:</strong> Develop the mobile app with cutting-edge technologies, ensuring a seamless experience across platforms.</li>
              <li><strong>Testing:</strong> Conduct comprehensive testing, including unit, integration, and user testing, to ensure quality and reliability.</li>
              <li><strong>Launch:</strong> Deploy the app to the App Store and Google Play, ensuring it’s fully optimized for users.</li>
              <li><strong>Maintenance:</strong> Offer ongoing updates, bug fixes, and new features based on user feedback and market trends.</li>
            </ul>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              Our iterative approach ensures that your app evolves with your business, allowing us to make improvements even after launch.
            </p>
          </div>
        </section>

        <ServiceBacklinksSection
          heading=" Related links "
          subheading="Explore related services and resources to strengthen navigation and internal linking."
          primaryLinks={[
            { to: "/services/app-dev", label: "App design & development service" },
            { to: "/services/web-dev", label: "Website development" },
            { to: "/services/branding", label: "Branding & graphics" },
          ]}
        />
      </div>
    </div>
  );
};

export default AppDevEdgeSection;
