import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const statsRef = useRef([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = headingRef.current;
      if (!el) return;
      const text = el.textContent;
      const words = text.split(" ");

      el.innerHTML = "";

      // 🔥 PERFECT WORD SPLIT (WITH SPACING FIX)
      words.forEach((word, index) => {
        const wrapper = document.createElement("span");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";

        const inner = document.createElement("span");
        inner.className = "word";
        inner.textContent = word;
        inner.style.display = "inline-block";
        inner.style.transform = "translateY(100%)";
        inner.style.opacity = "0.2";

        wrapper.appendChild(inner);
        el.appendChild(wrapper);

        // ✅ FIX: add proper spacing
        if (index !== words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });

      const wordElements = el.querySelectorAll(".word");

      // ✨ PREMIUM ANIMATION
      if (wordElements.length > 0) {
        gsap.to(wordElements, {
          y: 0,
          opacity: 1,
          color: "#0b0b2c",
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }

      // 📊 STATS ANIMATION
      statsRef.current.filter(Boolean).forEach((el) => {
        const endValue = parseInt(el.getAttribute("data-value"));
        let obj = { val: 0 };

        gsap.to(obj, {
          val: endValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.innerText =
              Math.floor(obj.val) + (el.dataset.suffix || "");
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-y-10 gap-x-8">

          {/* LEFT */}
          <div className="md:col-span-1 flex md:items-start items-center">
            <p className="text-[11px] sm:text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
              About Wixwave
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-4 flex flex-col">

            {/* HEADING */}
            <h2
              ref={headingRef}
              className={`font-medium tracking-tight text-[#0b0b2c] break-words transition-all duration-500 ${
                expanded ? "" : "line-clamp-4 md:line-clamp-none"
              }`}
              style={{
                fontSize: "clamp(17px, 4.8vw, 44px)",
                lineHeight: "clamp(1.6, 1.3vw, 1.2)",
              }}
            >
              Wixwave crafts powerful digital solutions that help businesses grow, scale, and stand out in a competitive market. From innovative website development to data-driven marketing strategies, we combine creativity with technology to deliver impactful results that drive real growth.
            </h2>

            {/* 📱 READ MORE */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-sm text-blue-600 font-medium md:hidden"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>

            {/* STATS */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              style={{
                marginTop: "clamp(28px, 7vh, 70px)",
                gap: "clamp(18px, 4vw, 36px)",
              }}
            >
              {[
                { label: "Happy Clients", value: 600, suffix: "+" },
                { label: "Projects Delivered", value: 200, suffix: "+" },
                { label: "Client Satisfaction", value: 95, suffix: "%" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-[11px] sm:text-sm text-gray-700 flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></span>
                    {item.label}
                  </p>

                  <div className="w-full h-[1px] bg-gray-300 mb-2 sm:mb-3"></div>

                  <h2
                    ref={(el) => (statsRef.current[i] = el)}
                    data-value={item.value}
                    data-suffix={item.suffix}
                    className="font-semibold text-blue-700 leading-none"
                    style={{
                      fontSize: "clamp(24px, 8vw, 64px)",
                    }}
                  >
                    0
                  </h2>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
