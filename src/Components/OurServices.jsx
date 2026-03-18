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
    <section className="py-12 md:py-16 px-4 md:px-16">
      {/* Top */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
        <div>
          <p className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Services
          </p>

          {/* FIX: responsive heading */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[64px] font-semibold leading-[1.1] md:leading-[1.05] text-[#0b0b2c]">
            Everything you <br /> need to grow.
          </h2>
        </div>

        <div className="flex flex-col md:items-end">
          <p className="text-[#5a5a6a] max-w-md mb-5 md:mb-6 text-[14px] md:text-[15px] leading-relaxed">
            From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.
          </p>

          <Link
            to="/contact"
            className="flex items-center gap-3 bg-[#2d2dfc] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm font-medium hover:scale-105 transition"
          >
            Contact us
            <span className="bg-white text-[#2d2dfc] p-2 rounded-full">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {services.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="relative bg-[#ececf1] rounded-2xl p-5 md:p-6 h-auto md:h-[260px] min-h-[220px] flex flex-col justify-end overflow-hidden group hover:bg-[#e4e4ea] transition"
          >
            {/* Dot */}
            <div className="absolute top-4 md:top-5 left-4 md:left-5 w-2 h-2 bg-blue-600 rounded-full"></div>

            {/* Number */}
            <span className="absolute top-4 md:top-5 right-4 md:right-6 text-[40px] md:text-[64px] font-semibold text-[#dcdce3] opacity-50">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition duration-500"
            />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#0b0b2c] mb-1">
                {item.title}
              </h3>

              <p className="text-[13px] md:text-[14px] text-[#6b6b7a] leading-relaxed">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}