const highlights = [
  {
    title: "Strategy-led execution",
    description:
      "Every engagement starts with clarity around goals, audience, and measurable outcomes so design and development move in the same direction.",
  },
  {
    title: "Performance-first builds",
    description:
      "We create fast, responsive websites and digital experiences that support SEO, improve user trust, and convert traffic into qualified leads.",
  },
  {
    title: "Long-term growth mindset",
    description:
      "From launch to optimisation, we focus on systems that are maintainable, scalable, and aligned with how your business grows online.",
  },
];

export default function About_1() {
  return (
    <section className="bg-[#f8fbff] py-8 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-1 text-sm font-semibold">
            Why brands choose Wixwave
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0b2c] leading-tight">
            We blend design, technology, and marketing into one growth-focused
            digital workflow.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#4f5873] leading-relaxed max-w-2xl">
            Wixwave partners with startups, local businesses, and ambitious
            brands to build digital experiences that look premium and perform in
            the real world. Our process connects strategy, user experience,
            engineering, and visibility so every project is built to deliver
            impact—not just aesthetics.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm">
              <p className="text-3xl font-bold text-[#0b0b2c]">50+</p>
              <p className="mt-2 text-sm text-[#5d6785]">Projects shaped with a practical business-first approach.</p>
            </div>
            <div className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm">
              <p className="text-3xl font-bold text-[#0b0b2c]">360°</p>
              <p className="mt-2 text-sm text-[#5d6785]">Support across web, apps, SEO, branding, and campaigns.</p>
            </div>
            <div className="rounded-2xl bg-white border border-blue-100 p-5 shadow-sm">
              <p className="text-3xl font-bold text-[#0b0b2c]">100%</p>
              <p className="mt-2 text-sm text-[#5d6785]">Custom solutions tailored to audience, goals, and budget.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#050170] text-white flex items-center justify-center font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0b0b2c]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#5d6785] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
