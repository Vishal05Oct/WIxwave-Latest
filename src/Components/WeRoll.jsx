import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useCallback } from "react";

export default function HowWeWork() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rectRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    // Cancel previous animation frame to prevent excessive updates
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      // Cache rect to avoid multiple getBoundingClientRect calls
      if (!rectRef.current) {
        rectRef.current = e.currentTarget.getBoundingClientRect();
      }
      const rect = rectRef.current;
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rectRef.current = null;
  }, []);

  const steps = [
    {
      number: "01",
      title: "Understanding Your Vision",
      desc: "We begin with discussions to understand your goals, audience, and business challenges."
    },
    {
      number: "02",
      title: "Strategy & Creative Planning",
      desc: "Our team builds a roadmap covering design, development, and marketing strategy."
    },
    {
      number: "03",
      title: "Design & Development",
      desc: "We transform ideas into powerful digital products using modern technologies."
    },
    {
      number: "04",
      title: "Launch & Growth",
      desc: "After launch we continuously optimize performance and scale your business."
    }
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-12 md:py-16"
    >
      {/* SAME WIDTH */}
      <div className="px-4 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 mb-10 md:mb-14">

          {/* LEFT */}
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#3b82f6] font-semibold mb-2 md:mb-3">
              Our Process
            </p>

            <h2 className="text-[24px] sm:text-[28px] md:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] leading-tight">
              How We Turn Ideas
              <br />
              Into Digital Success
            </h2>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-auto flex md:block justify-between items-center md:text-right">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-[#3b82f6]">100%</p>

              <p className="text-[10px] md:text-xs text-[#555] mt-1 leading-relaxed">
                Client Satisfaction
                <br />
                Our Top Priority
              </p>
            </div>

            <div className="hidden md:flex justify-end mt-1">
              <svg width="150" height="12" viewBox="0 0 150 12">
                <path
                  d="M0 0 L0 12 L150 12 L150 0"
                  stroke="#1a1a1a"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
          </div>

        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <span className="bg-[#2563eb] text-white text-[9px] md:text-[10px] uppercase px-2 py-1 rounded-l-full">
                  Step
                </span>

                <span className="bg-[#1e3a8a] text-white text-[10px] md:text-xs px-2 py-1 rounded-r-full font-semibold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1a1a1a] mb-1 md:mb-2 group-hover:text-[#2563eb] transition">
                {step.title}
              </h3>

              <p className="text-[12px] md:text-[13px] text-[#555] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12 bg-white/70 backdrop-blur rounded-2xl md:rounded-full px-4 md:px-6 py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between max-w-full sm:max-w-xl mx-auto shadow-sm">

          <p className="text-[11px] md:text-xs text-[#555] text-center sm:text-left">
            Ready to start your project with us?
          </p>

          <button className="flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a] hover:text-[#2563eb] transition">
            Start Project
            <ArrowUpRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}