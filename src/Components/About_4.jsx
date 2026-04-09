import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  { value: "Fast", label: "delivery cycles for focused business goals" },
  { value: "Clear", label: "communication from planning to launch" },
  { value: "Scalable", label: "solutions built to grow with the brand" },
];

export default function About_4() {
  return (
    <section className="bg-[#f4f7ff] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      
      <div className="container mx-auto rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef4ff] p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm">
        
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-10 items-center">
          
          {/* LEFT */}
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

            {/* Milestones */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {milestones.map((item) => (
                <div
                  key={item.value}
                  className="relative rounded-2xl bg-white border border-blue-100 p-5 shadow-sm hover:shadow-md transition"
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl"></div>

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

          {/* RIGHT CTA */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2dfc] to-[#066adc]"></div>

            <div className="relative text-white p-6 sm:p-8 md:p-9">
              
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Ready to build something stronger online?
              </h3>

              <p className="mt-4 text-white/90 leading-relaxed">
                Whether you need a high-performance website, a sharper brand
                presence, or a more conversion-focused digital experience,
                Wixwave can help you move from ideas to outcomes.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                
                {/* Primary */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 justify-center rounded-full bg-white text-[#2d2dfc] px-6 py-3 font-semibold hover:scale-105 transition"
                >
                  Start a project
                  <span className="w-6 h-6 bg-[#2d2dfc] text-white rounded-full flex items-center justify-center">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  View portfolio
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}