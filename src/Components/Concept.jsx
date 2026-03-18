import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ClientsSection() {
  const trackRef = useRef(null);

  const logos = [
    "https://www.hashtagorange.in/assets/images/logosweb-33.webp",
    "https://www.hashtagorange.in/assets/images/logosweb-35.webp",
    "https://www.hashtagorange.in/assets/images/cel.jpg",
    "https://www.hashtagorange.in/assets/images/innovist.png",
    "https://www.hashtagorange.in/assets/images/mansha_hotels.png",
    "https://www.hashtagorange.in/assets/images/tracky.png",
    "https://www.hashtagorange.in/assets/images/varroc_connect.png",
    "https://www.hashtagorange.in/assets/images/simats.png",
    "https://www.hashtagorange.in/assets/images/raxa.png",
    "https://www.hashtagorange.in/assets/images/smart_node.png",
  ];

  useEffect(() => {
    const el = trackRef.current;

    const ctx = gsap.context(() => {
      const totalWidth = el.scrollWidth;

      gsap.set(el, { x: 0 });

      gsap.to(el, {
        x: -totalWidth / 2,
        duration: window.innerWidth < 768 ? 35 : 25, // ✅ slower on mobile
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 md:px-16 overflow-hidden">
      
      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16 items-center">
        
        <div>
          <p className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Trusted by Brands
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-[64px] font-semibold leading-[1.1] md:leading-[1.05] text-[#0b0b2c]">
            Our Premium <br /> Clientele
          </h2>
        </div>

        <div className="flex flex-col md:items-end">
          <p className="text-[#5a5a6a] max-w-full md:max-w-md mb-5 md:mb-6 text-[14px] md:text-[15px] leading-relaxed">
            We collaborate with growing brands and institutions to deliver impactful digital solutions that drive real business growth.
          </p>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative">
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-24 bg-gradient-to-r from-[#f5f6fa] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-12 md:w-24 bg-gradient-to-l from-[#f5f6fa] to-transparent z-10"></div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-8 md:gap-16 w-max min-w-[200%] items-center whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="client"
                onError={(e) => (e.target.style.display = "none")}
                className="
                  h-10 sm:h-11 md:h-14
                  w-auto
                  object-contain
                  opacity-80 md:opacity-70
                  grayscale
                  hover:opacity-100 hover:grayscale-0
                  hover:scale-110
                  transition duration-300
                "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}