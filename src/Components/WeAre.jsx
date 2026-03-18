import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiShopify,
  SiWebflow,
  SiWordpress,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiCanva,
  SiFramer,
  SiSketch,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = [];

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.to(itemsRef.current, {
      y: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    const words = sectionRef.current.querySelectorAll(".reveal-word");

    gsap.to(words, {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  // ✅ FIXED MOBILE SPACING ROW
  const RowItem = ({ icons, text, color }) => (
    <div
      ref={(el) => el && itemsRef.current.push(el)}
      className="group flex flex-col gap-4 sm:gap-5 cursor-pointer"
    >
      {/* ICONS */}
      <div className="flex flex-wrap gap-3 text-gray-500">
        {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="text-[20px] sm:text-[22px] md:text-[26px] transition-all duration-300 
              group-hover:text-black 
              group-hover:scale-110"
          />
        ))}
      </div>

      {/* TEXT */}
      <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
        {text}
      </p>

      {/* LINE (hidden mobile) */}
      <div className="hidden sm:block h-[1px] bg-gray-200 relative overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 ${color}`}
        />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{
        paddingTop: "clamp(60px, 10vh, 120px)",
        paddingBottom: "clamp(60px, 10vh, 120px)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* TOP */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: "clamp(28px, 6vw, 80px)", // ✅ more breathing
            marginBottom: "clamp(48px, 9vh, 100px)",
          }}
        >
          {/* LEFT */}
          <div>
            <p className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Our Stack
            </p>

            <h2
              className="font-semibold text-[#0b0b2c]"
              style={{
                fontSize: "clamp(26px, 7vw, 64px)", // ✅ better mobile
                lineHeight: "1.1",
              }}
            >
              {"Technology that powers your growth."
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-2 mb-1">
                    <span className="reveal-word inline-block translate-y-full opacity-0">
                      {word}
                    </span>
                  </span>
                ))}
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <p className="text-[#5a5a6a] text-[13px] sm:text-[15px] leading-relaxed max-w-md">
              {"We use modern technologies and design tools to craft fast scalable and visually stunning digital experiences."
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-1 mb-[2px]">
                    <span className="reveal-word inline-block translate-y-full opacity-0">
                      {word}
                    </span>
                  </span>
                ))}
            </p>
          </div>
        </div>

        {/* STACK */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">

          {/* DEV */}
          <div>
            <h3 className="text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 mb-4 uppercase">
              Development
            </h3>

            <RowItem
              icons={[
                SiReact,
                SiNextdotjs,
                SiTailwindcss,
                SiNodedotjs,
                SiMongodb,
                SiFirebase,
                SiGraphql,
                SiShopify,
                SiWebflow,
                SiWordpress,
              ]}
              text="React.js, Next.js, Tailwind, Node.js, MongoDB, Firebase, GraphQL, Shopify, Webflow, WordPress"
              color="bg-blue-500"
            />
          </div>

          {/* DESIGN */}
          <div>
            <h3 className="text-[10px] sm:text-xs tracking-[0.25em] text-gray-400 mb-4 uppercase">
              Branding & Designing
            </h3>

            <RowItem
              icons={[
                SiFigma,
                SiAdobexd,
                SiAdobephotoshop,
                SiAdobeillustrator,
                SiCanva,
                SiFramer,
                SiSketch,
              ]}
              text="Figma, Adobe XD, Photoshop, Illustrator, Canva, Framer, Sketch, UI/UX, Wireframing, Prototyping, Design Systems, Brand Identity"
              color="bg-pink-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}