import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceBacklinksSection from "./ServiceBacklinksSection";

const PerformanceMarketingSection = () => {
  return (
    <div className="bg-white text-black px-6 py-10">
      <div className="container mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Drive Results with Targeted Performance Marketing!</h2>
          <p className="text-lg">
            At WixWave, we specialize in performance marketing strategies designed to boost conversions and drive measurable results. 
            From paid search and display ads to affiliate marketing, we help your brand achieve tangible growth.
          </p>
        </section>

        {/* Performance Marketing Strategy Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Data-Driven Performance Marketing Strategy</h2>
            <p>
              Our process starts by analyzing your brand’s goals and target audience. 
              We create tailored campaigns based on data-driven insights, ensuring every dollar spent contributes to your business objectives.
            </p>
            <p>
              By using advanced targeting strategies, we make sure your marketing budget is optimized for maximum impact, increasing ROI and reducing waste.
            </p>
            <p>
              Whether you're focusing on conversions, sales, or customer acquisition, we build a strategic framework that adapts to your goals.
            </p>

          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746890529/Data-Driven_Performance_Marketing_Strategy_hzkwkm.jpg"
              alt="Performance Marketing Strategy"
            />
          </div>
        </section>

        {/* Paid Advertising Campaigns Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746890528/Paid_Advertising_Campaigns_nxdqv4.jpg"
              alt="Paid Advertising Campaigns"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Paid Advertising Campaigns</h2>
            <p>
              We run highly targeted paid advertising campaigns across platforms like Google Ads, Facebook, Instagram, LinkedIn, and more.
            </p>
            <p>
              Our team optimizes these campaigns based on real-time data to ensure that each ad generates valuable conversions. 
              We use A/B testing, remarketing, and audience segmentation to continually improve your ad performance.
            </p>
            <p>
              Whether it's Google Search, Display Ads, or Social Media Ads, we ensure your campaigns achieve the best ROI possible.
            </p>

          </div>
        </section>

        {/* Conversion Rate Optimization Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Conversion Rate Optimization (CRO)</h2>
            <p>
              We analyze every touchpoint of your user journey to optimize the conversion process. 
              From landing page design to form submissions, our goal is to increase the conversion rate and maximize the effectiveness of your marketing efforts.
            </p>
            <p>
              Our team uses tools like heatmaps, user testing, and data analytics to identify friction points and implement solutions that turn visitors into customers.
            </p>
            <p>
              By optimizing the conversion path, we help you achieve better results with less traffic, making your campaigns more efficient and cost-effective.
            </p>

          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746890528/Conversion_Rate_Optimization_CRO_ss7wzi.jpg"
              alt="Conversion Rate Optimization"
            />
          </div>
        </section>

        {/* Analytics & Performance Tracking Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746890528/Analytics_Performance_Tracking_x0p6k1.jpg"
              alt="Performance Analytics"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Analytics & Performance Tracking</h2>
            <p>
              Our data-driven approach allows us to track key performance indicators (KPIs) to evaluate the effectiveness of your campaigns. 
              We focus on metrics that matter most to your business, including ROI, conversions, customer acquisition costs, and more.
            </p>
            <p>
              By using advanced analytics tools, we continuously monitor the success of your campaigns and optimize them in real time.
            </p>
            <p>
              We provide transparent reporting and insights to help you understand how your marketing dollars are performing, giving you full visibility into your results.
            </p>
            <Link to="/contact" className="inline-block bg-black text-white px-5 py-2 rounded-full font-medium">
              Start Your Marketing Strategy
            </Link>
          </div>
        </section>

        {/* Performance Marketing Process Image */}
        <h2 className="text-3xl sm:text-4xl font-bold">Our Performance Marketing Process</h2>
        <motion.div
          className="mt-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img
            src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746888265/Performance_Marketing_dydy3h.png"
            alt="Performance Marketing Process Illustration"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Detailed Process Explanation */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Process Breakdown</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Goal Setting & Strategy Development:</strong> Define clear, measurable marketing goals (e.g., leads, conversions, ROI) and develop a strategy that aligns with business objectives.
              </li>
              <li>
                <strong>Audience Research & Targeting:</strong> Identify target audiences using demographic, behavioral, and psychographic data to create segmented campaigns for higher relevance and engagement.
              </li>
              <li>
                <strong>Campaign Setup & Creative Development:</strong> Create compelling ad creatives (copy, images, videos) and set up campaigns across relevant platforms (Google Ads, Facebook, LinkedIn, etc.).
              </li>
              <li>
                <strong>Execution & Monitoring:</strong> Launch campaigns and continuously monitor performance metrics such as CPC, CPA, ROAS, and conversion rates to track effectiveness.
              </li>
              <li>
                <strong>Optimization & A/B Testing:</strong> Analyze data and run A/B tests to optimize ad creatives, targeting, bidding strategies, and landing pages for better performance.
              </li>
              <li>
                <strong>Reporting & Scaling:</strong> Generate reports to evaluate campaign success, adjust strategies as needed, and scale successful campaigns for greater reach and profitability.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              Our goal is to ensure that every marketing dollar is spent efficiently, driving measurable results and improving ROI for your business.
            </p>
          </div>
        </section>

        <ServiceBacklinksSection
          heading="Internal links (backlinks) for this service"
          subheading="Explore related services and resources that improve campaign performance and lead quality."
          primaryLinks={[
            { to: "/services/paid-ads", label: "Performance marketing service" },
            { to: "/services/web-dev", label: "Website development (landing pages)" },
            { to: "/services/seo", label: "SEO services (reduce long-term CAC)" },
            { to: "/contact", label: "Request a campaign plan" },
          ]}
        />
      </div>
    </div>
  );
};

export default PerformanceMarketingSection;
