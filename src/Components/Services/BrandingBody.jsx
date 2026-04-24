import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceBacklinksSection from "./ServiceBacklinksSection";

const BrandingGraphicsSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Create a Powerful Identity with Impactful Branding!</h2>
          <p className="text-lg">
            At WixWave, we craft unforgettable brand identities and stunning graphic designs that speak your brand's language.
            From logos to full-scale visual communication strategies, we help your business leave a lasting impression.
          </p>
        </section>

        {/* Branding Strategy Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Brand Discovery & Strategy</h2>
            <p>
              Our process starts with deep discovery sessions to understand your mission, vision, and target audience.
              We build a clear branding strategy that sets the tone and direction for all visual and verbal communication.
            </p>
            <p>
              From competitive analysis to brand positioning, we help you define what makes your brand truly unique and memorable.
              We conduct market research, analyze customer preferences, and create a roadmap that resonates with your target audience.
            </p>
            <p>
              Our goal is to position your brand as a leader in the market, ensuring it stands out with an authentic voice and clear messaging.
              Whether you’re launching a new business or repositioning an existing one, we will create a roadmap that aligns with your business goals.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/branding-identity-marketing-concept_53876-124071.jpg"
              alt="Brand Strategy Illustration"
              className="w-full h-auto max-w-md"
            />
          </div>
        </section>

        {/* Visual Design Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/graphic-designer-working-modern-office_53876-137902.jpg"
              alt="Graphics Design"
              className="w-full h-auto max-w-md"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Creative Graphic Design & Identity</h2>
            <p>
              We develop stunning visuals that reflect your brand identity—logos, business cards, social media kits,
              and more. Every design choice is intentional and aligned with your brand story.
            </p>
            <p>
              Our design team works closely with you to craft every aspect of your brand identity, ensuring a visual representation that resonates
              with your audience. Whether you need a clean and modern logo or vibrant and bold marketing materials, we deliver designs that
              elevate your brand.
            </p>
            <p>
              From typography to color schemes, we carefully consider every detail to maintain a cohesive and visually appealing identity across
              all marketing platforms. Our design process is iterative, ensuring that the final product is one that truly encapsulates your brand’s essence.
            </p>
            <p>
              We also focus on creating designs that are scalable and adaptable across different mediums, whether online or offline. The goal is to
              ensure that your brand consistently communicates the same message, regardless of the platform.
            </p>
            <Link to="/contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
            Start Your Branding Journey
            </Link>

          </div>
        </section>

        {/* Branding Process Image */}
        <h2 className="text-3xl sm:text-4xl font-bold">Our Branding Process</h2>
        <motion.div
          className="mt-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746888264/Branding_And_Designing_u69l9n.png"
            alt="Branding Process Illustration"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Detailed Process Explanation */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Breakdown</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Brand Research & Strategy:</strong> Understand the target audience, market trends, and competitors to define brand values, voice, and positioning.
              </li>
              <li>
                <strong>Logo & Visual Identity Design:</strong> Create a distinctive logo and visual identity, including color schemes, typography, and imagery that reflect the brand's personality.
              </li>
              <li>
                <strong>Brand Guidelines Development:</strong> Develop clear brand guidelines to ensure consistent application of visual elements across all media, from marketing materials to digital platforms.
              </li>
              <li>
                <strong>Graphic Design for Marketing Collateral:</strong> Design promotional materials like brochures, posters, social media graphics, website elements, and email templates aligned with the brand identity.
              </li>
              <li>
                <strong>Brand Consistency Across Touchpoints:</strong> Implement the brand design across all customer touchpoints, including packaging, websites, advertising, and social media, ensuring a unified experience.
              </li>
              <li>
                <strong>Review & Refinement:</strong> Continuously monitor brand perception, gather feedback, and update designs or strategies to keep the brand fresh and relevant.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              With our expert design team, your brand will stand out, stay consistent, and make a memorable impact.
            </p>
          </div>
        </section>

        <ServiceBacklinksSection
          heading=" Related links "
          subheading="Explore related services and resources to strengthen your brand and drive growth."
          primaryLinks={[
            { to: "/services/branding", label: "Branding & graphics service" },
            { to: "/services/web-dev", label: "Website development (brand implementation)" },
            { to: "/services/social-media", label: "Social media management (brand consistency)" },
          ]}
        />
      </div>
    </div>
  );
};

export default BrandingGraphicsSection;
