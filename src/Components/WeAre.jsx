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
        stagger: 0.06,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.to(itemsRef.current, {
      y: -20,
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
      stagger: 0.04,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const RowItem = ({ icons, text, color }) => (
    <div
      ref={(el) => el && itemsRef.current.push(el)}
      className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 cursor-pointer"
    >
      {/* ICONS */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-500 shrink-0">
        {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="text-[20px] sm:text-[22px] md:text-[26px] transition-all duration-300 
              group-hover:text-black 
              group-hover:scale-110 
              group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]"
          />
        ))}
      </div>

      {/* TEXT */}
      <span className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-black transition leading-relaxed max-w-full sm:max-w-[60%]">
        {text}
      </span>

      {/* LINE */}
      <div className="hidden sm:block flex-1 h-[1px] bg-gray-200 relative overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full w-0 group-hover:w-full transition-all duration-500 ${color}`}
        />
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 px-4 md:px-16 text-black overflow-hidden"
    >
      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16 items-center">
        
        {/* LEFT */}
        <div>
          <p className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Our Stack
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-[64px] font-semibold leading-[1.1] md:leading-[1.05] text-[#0b0b2c]">
            {"Technology that powers your growth.".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-2">
                <span className="reveal-word inline-block translate-y-full opacity-0">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center md:items-end h-full">
          <p className="text-[#5a5a6a] max-w-full md:max-w-md text-[14px] md:text-[15px] leading-relaxed">
            {"We use modern technologies and design tools to craft fast scalable and visually stunning digital experiences."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-1">
                  <span className="reveal-word inline-block translate-y-full opacity-0">
                    {word}
                  </span>
                </span>
              ))}
          </p>
        </div>
      </div>

      {/* STACK LIST */}
      <div className="space-y-8 md:space-y-12">

        {/* DEVELOPMENT */}
        <div>
          <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-4 uppercase">
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
          <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-4 uppercase">
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
    </section>
  );
}