import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSeo from "../hooks/useSeo";

export default function BlogPost2() {
  const [progress, setProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRef = useRef(null);

  const title =
    "Top UI/UX Trends in 2026: Future of Design & User Experience | Wixwave Blog";

  const description =
    "Explore UI/UX trends in 2026 including AI-driven design, immersive UX, micro-interactions, and privacy-first experiences.";

  const canonicalUrl =
    "https://wixwave.co/blog/ui-ux-trends-2026/";

  const heroImage =
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80";

  useSeo({ title, description, canonical: canonicalUrl });

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const words = contentRef.current.innerText.trim().split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
    }
  }, []);

  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <main className="bg-white">

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>

      {/* HERO */}
      <section className="relative">
        <img
          src={heroImage}
          alt="UI UX Trends 2026"
          className="w-full h-[320px] sm:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <Link to="/blog" className="text-sm opacity-80 hover:underline">
              ← Back to Blogs
            </Link>

            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-bold">
              Top UI/UX Trends in 2026
            </h1>

            <p className="mt-5 text-lg sm:text-xl max-w-3xl opacity-90">
              Discover the future of UI/UX design in 2026, including AI-driven interfaces, immersive experiences, and user-centric design strategies.
            </p>

            <p className="mt-5 text-sm opacity-70">
              Mar 15, 2026 • {readingTime} min read
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 py-16 space-y-14"
      >

        {/* Intro */}
        <section className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            UI/UX design trends in 2026 are redefining how users interact with digital products. With rapid advancements in artificial intelligence, immersive technologies, and user behavior analytics, modern design is no longer limited to visual appeal. Instead, it focuses on delivering seamless, intuitive, and highly personalized user experiences.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses that adopt modern UI/UX strategies gain a competitive edge by improving user engagement, reducing friction, and increasing conversions. The future of user experience design lies in creating systems that adapt to users rather than forcing users to adapt to interfaces.
          </p>
        </section>

        {/* AI */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            AI-Driven UI/UX Design
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Artificial intelligence is transforming UI/UX design by enabling dynamic and adaptive interfaces. AI-driven UX systems analyze user behavior, preferences, and interaction patterns to deliver personalized experiences in real time.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Adaptive user interfaces based on behavior</li>
            <li>Predictive UX and smart recommendations</li>
            <li>AI-powered chatbots and conversational UI</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            This shift towards intelligent design improves user satisfaction and significantly enhances engagement metrics.
          </p>
        </section>

        {/* AR VR */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Immersive Experiences with AR & VR
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Augmented reality (AR) and virtual reality (VR) are becoming essential components of modern UI/UX design. These technologies enable users to interact with digital environments in a more engaging and realistic way.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>AR product visualization</li>
            <li>Virtual showrooms and experiences</li>
            <li>Mixed reality user interfaces</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Immersive design enhances user engagement and creates memorable experiences that drive brand loyalty.
          </p>
        </section>

        {/* Micro */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Micro-Interactions & Motion Design
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Micro-interactions play a crucial role in modern UI/UX design by providing instant feedback and guiding user behavior. Subtle animations improve usability and create a more engaging experience.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Hover and click animations</li>
            <li>Smooth transitions and feedback states</li>
            <li>Loading indicators and interaction cues</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Well-designed motion enhances usability without overwhelming users.
          </p>
        </section>

        {/* Dark Mode */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Dark Mode & Personalization
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Dark mode and customizable UI themes are now standard in modern applications. They improve accessibility, reduce eye strain, and allow users to personalize their experience.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Auto dark mode switching</li>
            <li>High contrast accessibility options</li>
            <li>User-controlled themes</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Personalization enhances user satisfaction and retention.
          </p>
        </section>

        {/* Ethical */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            Ethical UX & Privacy-First Design
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Ethical UX design focuses on transparency, privacy, and user trust. As data concerns grow, businesses must prioritize user privacy and responsible design practices.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Transparent data usage policies</li>
            <li>Minimal data collection</li>
            <li>User-controlled privacy settings</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Trust-driven design leads to stronger brand relationships and long-term success.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="divide-y border rounded-xl overflow-hidden">

            {[
              {
                q: "What are the top UI/UX trends in 2026?",
                a: "AI-driven design, immersive UX, and ethical design are key trends.",
              },
              {
                q: "Why is UI/UX design important?",
                a: "It improves user experience, engagement, and conversions.",
              },
              {
                q: "What is ethical UX?",
                a: "Design focused on user privacy and transparency.",
              },
            ].map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <div key={i} className="px-5 py-4">
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium">{item.q}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="text-xl"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="mt-3 text-sm text-gray-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-blue-600 text-white rounded-2xl text-center">
          <h3 className="text-2xl font-bold">
            Want Modern UI/UX for Your Business?
          </h3>
          <p className="mt-2 opacity-90">
            Wixwave creates high-converting user-focused designs.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-5 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}