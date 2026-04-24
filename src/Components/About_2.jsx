import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  "Custom website design and development",
  "Mobile app planning and product execution",
  "Technical SEO and performance optimisation",
  "Brand identity systems and creative assets",
  "Conversion-focused landing pages and funnels",
  "Growth support for scaling local and national brands",
];

export default function About_2() {
  return (
    <section
      aria-labelledby="about-approach-heading"
      className="bg-[#f4f7ff] py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="container mx-auto rounded-[32px] overflow-hidden relative shadow-xl">
        
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#2d2dfc] to-[#066adc]"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] text-white">
          
          {/* LEFT */}
          <div className="p-8 sm:p-10 md:p-14 lg:p-16">
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1 text-sm font-medium text-blue-100">
              Our approach
            </span>

            <h2
              id="about-approach-heading"
              className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Built for brands that need more than just a website.
            </h2>

            <p className="mt-5 text-blue-50/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              We help businesses create a stronger digital presence with
              thoughtful strategy, modern design, and dependable execution.
              Whether you are launching something new or improving an existing
              platform, we focus on solutions that are fast, clear, and
              conversion-ready.
            </p>

            {/* Capabilities */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/20 px-4 py-4 text-sm sm:text-base backdrop-blur-sm hover:bg-white/15 transition"
                >
                  <span
                    className="w-2 h-2 mt-2 bg-white rounded-full"
                    aria-hidden="true"
                  ></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              
              {/* Primary */}
              <Link
                to="/contact"
                aria-label="Talk to our team to start your digital project"
                className="inline-flex items-center gap-2 justify-center rounded-full bg-white text-[#2d2dfc] px-6 py-3 font-semibold hover:scale-105 transition"
              >
                Talk to our team

                <span
                  className="w-6 h-6 bg-[#2d2dfc] text-white rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              {/* Secondary */}
              <Link
                to="/services"
                aria-label="Explore Wixwave digital services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Wixwave digital agency team planning website growth strategy"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0b0b2c]/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#0b0b2c]/20 lg:to-[#0b0b2c]/70"
              aria-hidden="true"
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}