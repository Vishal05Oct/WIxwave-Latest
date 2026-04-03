import { Link } from "react-router-dom";

const milestones = [
  { value: "Fast", label: "delivery cycles for focused business goals" },
  { value: "Clear", label: "communication from planning to launch" },
  { value: "Scalable", label: "solutions built to grow with the brand" },
];

export default function About_4() {
  return (
    <section className="bg-[#f4f7ff] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff] p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold">
              Partnership mindset
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0b2c] leading-tight">
              We work like a long-term digital partner, not a one-time vendor.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#55607d] leading-relaxed max-w-2xl">
              Brands need consistency across strategy, design, development, and
              growth. Our team helps connect those moving parts so every launch,
              campaign, and update strengthens the larger brand story.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {milestones.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#0b0b2c]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[#5d6785] leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#0b0b2c] text-white p-6 sm:p-8 md:p-9 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Ready to build something stronger online?
            </h3>
            <p className="mt-4 text-blue-50/90 leading-relaxed">
              Whether you need a high-performance website, a sharper brand
              presence, or a more conversion-focused digital experience, Wixwave
              can help you move from ideas to outcomes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-[#0b0b2c] px-6 py-3 font-semibold hover:bg-blue-50 transition-colors"
              >
                Start a project
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
