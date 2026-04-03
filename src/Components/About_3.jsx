import React from "react";

const values = [
  {
    title: "Clarity before execution",
    description:
      "We simplify complex ideas into focused digital roadmaps so every design and development decision supports a real business goal.",
  },
  {
    title: "Built with accountability",
    description:
      "From discovery to launch, we prioritise communication, timelines, and measurable outcomes instead of vague creative promises.",
  },
  {
    title: "Designed to scale",
    description:
      "Our solutions are created for growth, helping brands evolve their websites, campaigns, and digital systems without constant rebuilding.",
  },
];

const process = [
  "Discover the brand, audience, and business goals",
  "Plan the structure, user journey, and content direction",
  "Design polished, conversion-focused digital experiences",
  "Develop fast, maintainable, SEO-aware interfaces",
  "Launch, monitor, and refine for long-term growth",
];

export default function About_3() {
  return (
    <section className="bg-[#f4f7ff] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white text-blue-700 px-4 py-1 text-sm font-semibold border border-blue-100">
            Our values & process
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0b2c] leading-tight">
            A practical creative process built for trust, speed, and growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#55607d] leading-relaxed">
            The best digital work happens when strategy and execution stay
            connected. We keep our workflow collaborative and transparent so
            clients know what is being built, why it matters, and how it moves
            the business forward.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">
          <div className="grid gap-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#0b0b2c]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[#5d6785] leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-3xl bg-[#0b0b2c] text-white p-7 sm:p-8 md:p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
              How we work
            </p>
            <ol className="mt-6 space-y-4">
              {process.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-blue-50/95 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
