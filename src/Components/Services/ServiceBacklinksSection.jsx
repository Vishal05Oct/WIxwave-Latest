import { Link } from "react-router-dom";

export default function ServiceBacklinksSection({
  cityLinks = true,
  primaryLinks = [],
  heading = "Related pages",
  subheading = "Explore services, resources, and location pages.",
}) {
  const baseLinks = [
    { to: "/services/web-dev", label: "Website design & development" },
    { to: "/services/seo", label: "SEO services" },
    { to: "/services/paid-ads", label: "Performance marketing" },
    { to: "/services/branding", label: "Branding & graphics" },
    { to: "/services/social-media", label: "Social media management" },
    { to: "/services/app-dev", label: "App design & development" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const blogLinks = [
    { to: "/blog/website-technology-seo", label: "Website + technology guide" },
    { to: "/blog/local-seo-checklist-patna-gurugram", label: "Local growth checklist" },
    { to: "/blog/website-design-development-guide", label: "Website design & development guide" },
  ];

  const locationLinks = cityLinks
    ? [
        { to: "/website-development-patna", label: "Website development in Patna" },
        { to: "/website-development-gurugram", label: "Website development in Gurugram" },
      ]
    : [];

  const seen = new Set();
  const merged = [...primaryLinks, ...baseLinks, ...blogLinks, ...locationLinks].filter(
    (l) => {
      if (!l?.to || seen.has(l.to)) return false;
      seen.add(l.to);
      return true;
    }
  );

  return (
    <section>
      <div className="rounded-2xl border border-gray-200 bg-[#f7f7fb] p-5 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#0b0b2c]">
              {heading}
            </h2>
            <p className="mt-1 text-[14px] text-[#5a5a6a]">{subheading}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#2d2dfc] px-5 py-2.5 text-sm font-medium text-white hover:scale-[1.02] transition"
          >
            Get a quote
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {merged.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0b0b2c] hover:border-blue-300 hover:shadow-sm transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

