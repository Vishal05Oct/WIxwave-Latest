import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Website Design & Development",
      text: "Custom websites tailored to your brand, optimized for SEO and performance.",
      image: "https://img.freepik.com/free-vector/concept-landing-page-website-setup_52683-25031.jpg",
      link: "/services/web-dev",
    },
    {
      title: "App Design & Development",
      text: "Scalable mobile applications built with top UI/UX practices for iOS and Android.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/app_dev_ewptnp.jpg",
      link: "/services/app-dev",
    },
    {
      title: "Branding & Graphics",
      text: "Crafting impactful identities, from logos to full brand experiences.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746641973/designing_nainbu.jpg",
      link: "/services/branding",
    },
    {
      title: "Search Engine Optimisation",
      text: "Drive traffic with ethical SEO techniques and data-backed strategies.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/seo_ph2x6b.avif",
      link: "/services/seo",
    },
    {
      title: "Social Media Management",
      text: "Grow your brand through strategic content and engagement.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621737/social_media_gseote.avif",
      link: "/services/social-media",
    },
    {
      title: "Performance Marketing",
      text: "Data-driven paid ad strategies focused on ROI and growth.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746621736/performance_bkyvvp.avif",
      link: "/services/paid-ads",
    },
  ];

  return (
    <section
      className="w-full"
      style={{
        paddingTop: "clamp(60px, 10vh, 120px)",
        paddingBottom: "clamp(60px, 10vh, 120px)",
      }}
    >
      {/* ✅ CONSISTENT CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

        {/* TOP */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-start"
          style={{
            gap: "clamp(24px, 5vw, 80px)",
            marginBottom: "clamp(40px, 8vh, 100px)",
          }}
        >
          {/* LEFT */}
          <div>
            <p className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Services
            </p>

            <h2
              className="font-semibold text-[#0b0b2c]"
              style={{
                fontSize: "clamp(28px, 6vw, 64px)", // ✅ perfect scaling
                lineHeight: "1.05",
              }}
            >
              Everything you <br /> need to grow.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col md:items-end">
            <p className="text-[#5a5a6a] max-w-md mb-5 text-[13px] sm:text-[15px] leading-relaxed text-left md:text-right">
              From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.
            </p>

            <Link
              to="/contact"
              className="flex items-center gap-3 bg-[#2d2dfc] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition"
            >
              Contact us
              <span className="bg-white text-[#2d2dfc] p-1.5 sm:p-2 rounded-full">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "clamp(16px, 2.5vw, 28px)", // ✅ consistent spacing
          }}
        >
          {services.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="relative bg-[#ececf1] rounded-2xl p-5 sm:p-6 min-h-[220px] sm:min-h-[240px] flex flex-col justify-end overflow-hidden group hover:bg-[#e4e4ea] transition"
            >
              {/* DOT */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-600 rounded-full"></div>

              {/* NUMBER */}
              <span className="absolute top-3 right-4 text-[40px] sm:text-[56px] md:text-[64px] font-semibold text-[#dcdce3] opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition duration-500"
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#0b0b2c] mb-1">
                  {item.title}
                </h3>

                <p className="text-[12px] sm:text-[14px] text-[#6b6b7a] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}