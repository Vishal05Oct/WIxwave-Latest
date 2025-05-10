import React from "react";
import { motion } from "framer-motion";

const SocialMediaManagementSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-left">
          <h1 className="text-4xl font-bold mb-4">Elevate Your Brand with Expert Social Media Management!</h1>
          <p className="text-lg">
            At WixWave, we offer comprehensive social media management services to build your online presence and connect with your audience.
            From content creation to strategic advertising, we make your brand’s voice heard across social platforms.
          </p>
        </section>

        {/* Social Media Strategy Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Social Media Strategy Development</h2>
            <p>
              Our process begins with a strategic approach to understanding your target audience, goals, and brand personality. 
              We work closely with you to define clear objectives and a strategy that will help your brand succeed across platforms like Instagram, Facebook, Twitter, and LinkedIn.
            </p>
            <p>
              We identify the most effective channels for your brand, craft tailored strategies, and set measurable goals to boost engagement, brand visibility, and conversions.
            </p>
            <p>
              Whether you're looking to grow followers, increase customer engagement, or drive traffic to your website, our data-driven strategy ensures that your brand stands out.
            </p>
            <a href="#" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              Create Your Social Strategy
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891803/Social_Media_Strategy_Development_ozrvwm.jpg"
              alt="Social Media Strategy"
            />
          </div>
        </section>

        {/* Content Creation & Management Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891801/Content_Creation_Management_peh781.jpg"
              alt="Content Creation"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Content Creation & Management</h2>
            <p>
              We develop high-quality, engaging content tailored to your brand’s voice and your audience's preferences. From graphics and videos to blog posts and infographics, we create content that captivates and converts.
            </p>
            <p>
              Our team handles all aspects of content management: crafting compelling captions, scheduling posts, and ensuring your content is optimized for maximum reach.
            </p>
            <p>
              We also manage your social media calendar, ensuring that content is published consistently and at the best times to engage your audience.
            </p>
            <a href="#" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              See Our Content Examples
            </a>
          </div>
        </section>

        {/* Social Media Advertising Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Paid Social Media Advertising</h2>
            <p>
              Paid advertising on social media can significantly boost your brand’s visibility. We create targeted ads on platforms like Facebook, Instagram, LinkedIn, and Twitter to help you reach the right audience.
            </p>
            <p>
              We carefully design ad campaigns that align with your goals—whether that’s driving traffic, generating leads, or increasing brand awareness.
            </p>
            <p>
              Our team also monitors the performance of your ads, optimizing them for better results and ensuring your advertising budget is spent wisely.
            </p>
            <a href="#" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              Learn More About Social Ads
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891801/Paid_Social_Media_Advertising_lujt2c.jpg"
              alt="Social Media Ads"
            />
          </div>
        </section>

        {/* Social Media Analytics Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746891800/Social_Media_Analytics_Reporting_oi8cbc.jpg"
              alt="Analytics"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Social Media Analytics & Reporting</h2>
            <p>
              We provide detailed analytics and reports on your social media performance, helping you track the success of campaigns and content strategies.
            </p>
            <p>
              Our data-driven insights allow us to adjust strategies in real-time and ensure we’re hitting your goals. With transparent reporting, you’ll always know how your brand is performing on social media.
            </p>
            <p>
              From engagement rates to conversions, we provide comprehensive reports that allow you to assess the effectiveness of your social media efforts.
            </p>
            <a href="#" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              Track Your Social Impact
            </a>
          </div>
        </section>

        {/* Social Media Process Image */}
        <h1 className="text-4xl font-bold">Our Social Media Management Process</h1>
        <motion.div
          className="mt-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746888265/social_media_and_Mang..._gtka55.png"
            alt="Social Media Process Illustration"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Detailed Process Explanation */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Breakdown</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Goal Setting:</strong> Define clear, measurable objectives that align with your brand’s marketing goals (e.g., brand awareness, lead generation).
              </li>
              <li>
                <strong>Audience Research:</strong> Identify and understand your target audience’s demographics, interests, and behaviors to tailor content effectively.
              </li>
              <li>
                <strong>Content Planning and Creation:</strong> Develop a content strategy, create a content calendar, and produce engaging, high-quality content for various platforms.
              </li>
              <li>
                <strong>Scheduling and Posting:</strong> Schedule posts at optimal times using social media management tools to ensure consistency and reach.
              </li>
              <li>
                <strong>Community Management:</strong> Actively engage with your audience by responding to comments, messages, and mentions to foster relationships.
              </li>
              <li>
                <strong>Performance Tracking and Optimization:</strong> Monitor key metrics, analyze results, adjust strategies based on insights, and report performance to stakeholders.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              With our expert social media management, your brand will grow its online presence, connect with the audience, and achieve real results.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SocialMediaManagementSection;
