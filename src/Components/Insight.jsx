import { Link } from "react-router-dom";
import { blogPosts } from "../Pages/Blogs";

export default function Insight() {

  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <section className="py-12 md:py-16 px-4 md:px-16">

      {/* 🔹 HERO (Services Style Layout) */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center mb-10">

        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Latest insights
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-[1.05] tracking-tight text-[#0b0b2c]">
            Clarity, strategy, and <br /> growth insights.
          </h2>
        </div>

        {/* RIGHT (FIXED RIGHT SIDE) */}
        <div className="max-w-md ml-auto">
          <p className="text-[#5a5a6a] text-[14px] md:text-[15px] leading-relaxed">
            Stay current with our latest thinking on web, SEO, and marketing—designed to help you grow your brand and drive real results.
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#2d2dfc] px-6 py-3 text-sm font-medium text-white hover:scale-105 transition"
          >
            See all posts
            <span className="w-6 h-6 flex items-center justify-center bg-white text-[#2d2dfc] rounded-full text-xs">
              ↗
            </span>
          </Link>
        </div>

      </div>

      {/* 🔹 BLOG CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {latestPosts.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition"
          >
            <Link to={`/blog/${post.slug}`} className="block">

              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                
                {/* Meta */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[11px] font-semibold">
                    {post.tags.join(" • ")}
                  </span>
                  <span className="text-xs text-gray-500">
                    {post.displayDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-[16px] md:text-[18px] font-semibold text-[#0b0b2c] group-hover:text-[#2d2dfc] transition leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-1 text-[#6b6b7a] text-[13px] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <div className="mt-3 text-[#2d2dfc] text-sm font-medium group-hover:underline">
                  Read →
                </div>
              </div>

            </Link>
          </article>
        ))}
      </div>

    </section>
  );
}