/**
 * TestimonialSection.jsx
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const testimonials = [
  {
    id: "01",
    quote:
      "Wixwave developed our React-based website with exceptional performance and smooth animations. The platform feels incredibly fast, modern, and perfectly aligned with our EV brand. It has significantly improved how users interact with our product online.",
    name: "Team MaxtronEV",
    title: "Electric Mobility Brand",
  },
  {
    id: "02",
    quote:
      "Our website now truly reflects the premium positioning of our brand. Wixwave handled everything with great attention to detail, from layout to micro-interactions. The overall experience feels refined and high-end.",
    name: "Avant Divine",
    title: "Luxury Lifestyle Brand",
  },
  {
    id: "03",
    quote:
      "Wixwave created a visually beautiful website for us that perfectly matches our brand identity and audience. The design feels elegant, and the performance is smooth across all devices.",
    name: "Suta",
    title: "Fashion & Lifestyle Brand",
  },
  {
    id: "04",
    quote:
      "The improvements in our website and SEO strategy helped us gain better visibility and consistent organic traffic. We’ve started seeing higher-quality leads and better engagement.",
    name: "Naturadic",
    title: "Wellness Brand",
  },
  {
    id: "05",
    quote:
      "Wixwave delivered a clean and modern digital experience that elevated our entire online presence. The structure, speed, and visuals all work together perfectly.",
    name: "R-Casa",
    title: "Interior & Living Brand",
  },
  {
    id: "06",
    quote:
      "We’ve seen strong growth in traffic and engagement after the website revamp. Everything feels more premium, and our customers trust the brand more now.",
    name: "Supreem Superfoods",
    title: "Health & Nutrition Brand",
  },
  {
    id: "07",
    quote:
      "The product-focused design and smooth navigation significantly improved our customer experience. Users can now browse and shop much more easily.",
    name: "Footflex",
    title: "Footwear Brand",
  },
  {
    id: "08",
    quote:
      "The website perfectly matches our niche audience and feels both stylish and easy to use. Wixwave understood our requirements clearly and executed them flawlessly.",
    name: "Sherwani Rental",
    title: "Fashion Rental Brand",
  },
  {
    id: "09",
    quote:
      "We wanted a clean and minimal digital presence, and Wixwave delivered exactly that. The performance is excellent, and the design feels very professional.",
    name: "Boston Levin",
    title: "Corporate Brand",
  },
  {
    id: "10",
    quote:
      "The redesign gave our brand a fresh and modern identity. The website now feels more engaging, responsive, and aligned with current design standards.",
    name: "Bani Women",
    title: "Fashion Brand",
  },
  {
    id: "11",
    quote:
      "Wixwave captured our brand personality perfectly. The website feels bold, clean, and engaging, and it truly connects with our audience.",
    name: "Dimwit Coffee",
    title: "Coffee Brand",
  },

  // 🔥 Mobile App Testimonials
  {
    id: "12",
    quote:
      "Wixwave designed and developed our mobile app with a clean UI and smooth experience. The onboarding flow is seamless, and users immediately noticed the improvement.",
    name: "Aman Khurana",
    title: "Founder, QuickCart",
  },
  {
    id: "13",
    quote:
      "The app feels fast, intuitive, and well-structured. Wixwave focused on both design and performance, which helped us improve user retention significantly.",
    name: "Riya Gupta",
    title: "Co-Founder, Fitnest",
  },
  {
    id: "14",
    quote:
      "We had just an idea, but Wixwave turned it into a fully functional mobile app with a great user experience. The overall flow feels very polished.",
    name: "Saurabh Jain",
    title: "Founder, FinEdge App",
  },
  {
    id: "15",
    quote:
      "Wixwave delivered a scalable mobile application that works seamlessly across devices. The UI quality and performance are both excellent.",
    name: "Neeraj Verma",
    title: "CTO, FlowTrack",
  },
  {
    id: "16",
    quote:
      "The app design feels modern and user-friendly. Wixwave understood our audience well and created an experience that keeps users engaged.",
    name: "Pooja Arora",
    title: "Founder, StyleSync",
  },
  {
    id: "17",
    quote:
      "From wireframes to deployment, Wixwave handled everything smoothly. The final app exceeded our expectations in both design and performance.",
    name: "Kunal Mehta",
    title: "Founder, Taskly",
  },
];


/* ─────────────────────────────────────────────────────── */
export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const sectionRef    = useRef(null);
  const headerRef     = useRef(null);
  const subtitleRef   = useRef(null);
  const btnRef        = useRef(null);
  const trackRef      = useRef(null);
  const cardRefs      = useRef([]);
  const progressRef   = useRef(null);
  const progressTween = useRef(null);

  /* ── Responsive visible cards ── */
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  /* ── Entry animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(headerRef.current,   { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.1)
        .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.3)
        .fromTo(btnRef.current,      { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, 0.5);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Animate cards in after index change ── */
  const animateCardsIn = useCallback(() => {
    if (!cardRefs.current.length) return;
    gsap.fromTo(
      cardRefs.current.filter(Boolean),
      { y: 40, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1, ease: "power3.out",
        onComplete: () => setIsAnimating(false) }
    );
  }, []);

  /* ── Slide transition ── */
  const animateSlide = useCallback(
    (direction, newIndex) => {
      if (isAnimating) return;
      setIsAnimating(true);
      const outX = direction === "next" ? -50 : 50;
      gsap.to(trackRef.current, {
        x: outX, opacity: 0, duration: 0.3, ease: "power2.in",
        onComplete: () => {
          setCurrentIndex(newIndex);
          gsap.set(trackRef.current, { x: -outX, opacity: 0 });
          gsap.to(trackRef.current, {
            x: 0, opacity: 1, duration: 0.4, ease: "power2.out",
          });
        },
      });
    },
    [isAnimating]
  );

  /* trigger card stagger whenever currentIndex changes */
  useEffect(() => {
    if (!trackRef.current) return;
    // small timeout so React has committed new cards
    const id = setTimeout(animateCardsIn, 50);
    return () => clearTimeout(id);
  }, [currentIndex, animateCardsIn]);

  /* ── Navigation helpers ── */
  const goNext = useCallback(() => {
    const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    animateSlide("next", next);
  }, [currentIndex, maxIndex, animateSlide]);

  const goPrev = useCallback(() => {
    const prev = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    animateSlide("prev", prev);
  }, [currentIndex, maxIndex, animateSlide]);

  /* ── Progress bar & auto-scroll ── */
  const startProgress = useCallback(() => {
    if (!progressRef.current) return;
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
    progressTween.current = gsap.to(progressRef.current, {
      scaleX: 1, duration: 3.5, ease: "none",
      onComplete: goNext,
    });
  }, [goNext]);

  useEffect(() => {
    if (isPaused) {
      progressTween.current?.pause();
      return;
    }
    progressTween.current?.kill();
    startProgress();
    return () => progressTween.current?.kill();
  }, [isPaused, currentIndex, startProgress]);

  /* ── Card micro-interactions ── */
  const onCardEnter = (i) => {
    gsap.to(cardRefs.current[i], {
      y: -8, scale: 1.025,
      boxShadow: "0 24px 56px rgba(0,0,0,0.12)",
      duration: 0.35, ease: "power2.out",
    });
  };
  const onCardLeave = (i) => {
    gsap.to(cardRefs.current[i], {
      y: 0, scale: 1,
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      duration: 0.35, ease: "power2.inOut",
    });
  };

  const onArrowEnter = (el) => gsap.to(el, { scale: 1.15, duration: 0.2, ease: "power1.out" });
  const onArrowLeave = (el) => gsap.to(el, { scale: 1,    duration: 0.2, ease: "power1.in"  });

  const visibleCards = testimonials.slice(currentIndex, currentIndex + visibleCount);
const navigate = useNavigate();
  /* ─────────────────── JSX ─────────────────── */
  return (
    <section
      ref={sectionRef}
      className="bg-white w-full py-12 sm:py-16 lg:py-20 overflow-hidden"
     
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14">

        {/* ══ Header ══ */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 sm:mb-14 gap-8 lg:gap-12">

          {/* Left */}
          <div ref={headerRef} className="shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs text-gray-500 tracking-[0.14em] "
                >
                Testimonial
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-bold text-gray-950 leading-[1.07]">
              Words that
              <br />
              Inspire us.
            </h2>
          </div>

          {/* Right */}
          <div ref={subtitleRef} className="flex flex-col items-start gap-5 lg:max-w-sm xl:max-w-md">
            <p className="text-gray-500 text-sm sm:text-[0.95rem] leading-relaxed"
              style={{ fontFamily: "sans-serif" }}>
              Real feedback from real people. Discover how our design solutions have made a
              lasting impact on brands and businesses just like yours.
            </p>


<button
  ref={btnRef}
  onClick={() => navigate("/portfolio")}
  className="flex items-center gap-3 bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full cursor-pointer"
  onMouseEnter={(e) =>
    gsap.to(e.currentTarget, {
      scale: 1.05,
      backgroundColor: "#1d4ed8",
      duration: 0.2,
    })
  }
  onMouseLeave={(e) =>
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "#2563eb",
      duration: 0.2,
    })
  }
>
  Visit Our Portfolio
  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg
      className="w-3 h-3 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M7 7h10v10"
      />
    </svg>
  </span>
</button>
          </div>
        </div>

        {/* ══ Controls Row ══ */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5">

          {/* Progress bar */}
          <div className="flex-1 h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <div ref={progressRef}
              className="h-full bg-blue-600 rounded-full"
              style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
            />
          </div>

          {/* Counter */}
          <span className="text-xs text-gray-400 tabular-nums select-none shrink-0"
            style={{ fontFamily: "sans-serif" }}>
            {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>

          {/* Arrows */}
          <div className="flex gap-2 shrink-0">
            {[
              { label: "prev", path: "M15 19l-7-7 7-7", fn: goPrev },
              { label: "next", path: "M9 5l7 7-7 7",   fn: goNext },
            ].map(({ label, path, fn }) => (
              <button key={label} onClick={fn}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 transition-colors hover:border-gray-900 hover:text-gray-900 cursor-pointer"
                onMouseEnter={(e) => onArrowEnter(e.currentTarget)}
                onMouseLeave={(e) => onArrowLeave(e.currentTarget)}
                aria-label={label}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* ══ Card Track ══ */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            className="grid gap-4 sm:gap-5"
            style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
          >
            {visibleCards.map((t, i) => (
              <div
                key={`${currentIndex}-${i}`}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => onCardEnter(i)}
                onMouseLeave={() => onCardLeave(i)}
                className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                style={{ minHeight: "clamp(270px, 36vw, 360px)" }}
              >
                {/* Card top */}
                <div className="flex items-start justify-between mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm font-light tabular-nums"
                    style={{ fontFamily: "sans-serif" }}>
                    {String(currentIndex + i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-gray-900 text-base sm:text-[1.08rem] font-semibold leading-snug flex-1">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="mt-8 pt-5 border-t border-gray-200/70">
                  <p className="text-gray-900 text-sm font-bold">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5" >
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Paused badge */}
          {isPaused && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] text-gray-500" style={{ fontFamily: "sans-serif" }}>Paused</span>
            </div>
          )}
        </div>

        {/* ══ Dot Indicators ══ */}
        <div className="flex justify-center items-center gap-2 mt-7 sm:mt-9">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => !isAnimating && animateSlide(i > currentIndex ? "next" : "prev", i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === currentIndex ? "22px" : "8px",
                height: "8px",
                background: i === currentIndex ? "#2563eb" : "#d1d5db",
              }}
              aria-label={`Go to group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
