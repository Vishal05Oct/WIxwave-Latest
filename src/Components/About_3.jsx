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
    <section className="bg-[#f4f7ff] py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold border border-blue-100">
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

        {/* Content */}
        <div className="mt-12 grid lg:grid-cols-[1fr_0.95fr] gap-8 lg:gap-12 items-start">

          {/* VALUES */}
          <div className="grid gap-4">
            {values.map((value, i) => (
              <article
                key={value.title}
                className="relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                {/* Gradient Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#2d2dfc] to-[#066adc] rounded-l-3xl"></div>

                <h3 className="text-xl font-semibold text-[#0b0b2c]">
                  {value.title}
                </h3>

                <p className="mt-3 text-[#5d6785] leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>

          {/* PROCESS */}
          <div className="relative rounded-3xl p-7 sm:p-8 md:p-10 shadow-xl overflow-hidden">
            
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d2dfc] to-[#066adc]"></div>

            <div className="relative text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-200">
                How we work
              </p>

              <ol className="mt-6 space-y-5">
                {process.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-4"
                  >
                    {/* Number */}
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#2d2dfc] text-sm font-semibold shadow-md">
                      {index + 1}
                    </span>

                    {/* Text */}
                    <span className="text-white/95 leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}