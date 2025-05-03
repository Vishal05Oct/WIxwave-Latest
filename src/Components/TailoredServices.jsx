import React, { useState } from "react";
import { FaBullhorn, FaChartLine, FaPalette, FaSearch, FaCogs, FaRocket, FaHandshake } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Brand Strategy", description: "Crafting bold identities and clear messaging that sets you apart from the noise.", bgColor: "bg-gradient-to-br from-gray-700 to-gray-800", textColor: "text-white/70", icon: <FaBullhorn size={28} /> },
  { title: "Performance Marketing", description: "ROI-driven ad campaigns that scale your brand and supercharge conversions.", bgColor: "bg-black", textColor: "text-white", icon: <FaChartLine size={28} /> },
  { title: "UI/UX & Website Design", description: "Designing frictionless, beautiful digital experiences that actually work.", bgColor: "bg-gradient-to-br from-slate-800 to-black", textColor: "text-white", border: "border border-blue-400", icon: <FaPalette size={28} /> },
  { title: "SEO & Organic Growth", description: "Making sure your audience finds you first — and often.", bgColor: "bg-purple-600", textColor: "text-white", icon: <FaSearch size={28} /> },
  { title: "Technical Optimization", description: "Enhancing site performance, security, and scalability.", bgColor: "bg-indigo-700", textColor: "text-white", icon: <FaCogs size={28} /> },
  { title: "Growth Hacking", description: "Innovative tactics to accelerate your business growth.", bgColor: "bg-pink-600", textColor: "text-white", icon: <FaRocket size={28} /> },
  { title: "Partnership Development", description: "Building strategic alliances to extend your market reach.", bgColor: "bg-green-600", textColor: "text-white", icon: <FaHandshake size={28} /> },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-purple-900 py-16 px-6 text-white overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Tailored Services=Results</h2>
      <p className="mb-6 text-lg md:text-xl text-center">Crafting bold identities and clear messaging that sets you apart from the noise.</p>

      <div className="text-center mb-10">
        <button className="underline text-purple-300 hover:text-purple-100">View all services</button>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <button onClick={handlePrev} className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronLeft size={28} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-stretch px-4">
          {[0, 1, 2, 3].map((i) => {
            const service = services[(currentIndex + i) % services.length];
            return (
              <div
                key={service.title}
                className={`group relative min-h-[360px] px-6 py-8 rounded-2xl flex flex-col items-start justify-end shadow-lg overflow-hidden ${service.bgColor} ${service.textColor} ${service.border || ""} transition-transform duration-500 hover:scale-105 hover:ring-4 hover:ring-purple-400`}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-cover bg-center pointer-events-none transition-opacity duration-500 group-hover:opacity-20"></div>
                <div className="z-10 relative mb-4 text-4xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 z-10 relative leading-tight text-left w-full transition-colors duration-500 group-hover:text-white">{service.title}</h3>
                <p className="text-sm leading-snug z-10 relative text-left w-full transition-all duration-500 group-hover:opacity-80">{service.description}</p>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-2 rounded-full hover:bg-white/20 shadow-lg transition-all duration-300 hover:scale-110">
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
