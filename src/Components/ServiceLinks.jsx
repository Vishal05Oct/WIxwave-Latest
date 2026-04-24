import { Link, useLocation } from "react-router-dom";

const SERVICES = [
  { label: "Website Design & Development", to: "/services/web-dev" },
  { label: "App Design & Development", to: "/services/app-dev" },
  { label: "Branding & Graphics", to: "/services/branding" },
  { label: "Search Engine Optimisation", to: "/services/seo" },
  { label: "Social Media Management", to: "/services/social-media" },
  { label: "Performance Marketing", to: "/services/paid-ads" },
];

export function ServiceLinks({
  heading = "Explore our services",
  className = "",
  includeContact = true,
  excludeCurrent = true,
}) {
  const location = useLocation();
  const currentPath = location?.pathname;

  const items = excludeCurrent
    ? SERVICES.filter((s) => s.to !== currentPath)
    : SERVICES;

  return (
    <section className={`py-10 sm:py-12 px-4 md:px-16 ${className}`}>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#0b0b2c]">
              {heading}
            </h2>
            <p className="mt-1 text-[14px] text-[#5a5a6a]">
              Quick links to related pages so visitors (and Google) can find what
              they need faster.
            </p>
          </div>

          {includeContact ? (
            <Link
              to="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#2d2dfc] px-5 py-2.5 text-sm font-medium text-white hover:scale-[1.02] transition"
            >
              Get a quote
            </Link>
          ) : null}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-xl border border-gray-200 bg-[#f7f7fb] px-4 py-3 hover:bg-white hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-[#0b0b2c] text-[14px]">
                  {item.label}
                </span>
                <span className="text-[#2d2dfc] text-sm group-hover:translate-x-0.5 transition">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export const SERVICE_LINKS = SERVICES;
