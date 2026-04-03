import { Link } from "react-router-dom";

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
    <section className="bg-[#f4f7ff] py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto rounded-[32px] overflow-hidden bg-[#0b0b2c] text-white">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 md:p-14 lg:p-16">
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-1 text-sm font-medium text-blue-100">
              Our approach
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Built for brands that need more than just a website.
            </h2>

            <p className="mt-5 text-blue-50/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              We help businesses create a stronger digital presence with
              thoughtful strategy, modern design, and dependable execution.
              Whether you are launching something new or improving an existing
              platform, we focus on solutions that are fast, clear, and
              conversion-ready.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4 text-sm sm:text-base text-blue-50"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#0b0b2c] px-6 py-3 font-semibold hover:bg-blue-50 transition-colors"
              >
                Talk to our team
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
              alt="Wixwave team planning digital growth strategy"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b2c] via-[#0b0b2c]/35 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#0b0b2c]/15 lg:to-[#0b0b2c]/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
