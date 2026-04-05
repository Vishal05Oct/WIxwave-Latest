import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

export default function Services() {
  const services = [
    {
      title: "Website Design & Development",
      text: "Custom websites tailored to your brand, optimized for SEO and performance.",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/our-services.jpg",
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
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/q_auto,f_webp,w_800/v1746641973/designing_nainbu.jpg",
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
    <PageWrapper>
      <section className="bg-[#f5f5f7] py-16 px-6 md:px-16 min-h-screen">

        {/* TOP SECTION (PERFECT ALIGNMENT) */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          
          {/* LEFT */}
          <div className="max-w-[600px]">
            <p className="flex items-center gap-2 text-sm text-blue-600 mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Our Services
            </p>

            <h1 className="text-[32px] sm:text-[40px] md:text-[64px] font-semibold leading-[1.1] md:leading-[1.05] tracking-tight text-[#0b0b2c]">
              Powerful services <br /> built for scale
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end">
            <p className="text-[#5a5a6a] max-w-[420px] text-[15px] leading-[1.8] mt-2 md:mt-14">
              We combine strategy, design, and technology to deliver impactful digital solutions. 
              Every service is crafted to help your business grow faster, smarter, and more efficiently.
            </p>
          </div>

        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="relative bg-[#ececf1] rounded-2xl p-5 sm:p-6 h-auto md:h-[280px] min-h-[220px] flex flex-col justify-end overflow-hidden group hover:bg-[#e4e4ea] transition"
            >
              {/* TOP DOT */}
              <div className="absolute top-5 left-5 w-2 h-2 bg-blue-600 rounded-full"></div>

              {/* NUMBER */}
              <span className="absolute top-4 sm:top-5 right-4 sm:right-6 text-[44px] sm:text-[64px] font-semibold text-[#dcdce3] opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* HOVER IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition duration-500"
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#0b0b2c] mb-2">
                  {item.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#6b6b7a] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </PageWrapper>
  );
}