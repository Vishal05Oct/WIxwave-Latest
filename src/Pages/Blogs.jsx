import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Components/Blogs_Hero'

// ✅ DATA INSIDE SAME FILE
export const blogPosts = [
  {
    id: 1,
    title: "Website + Technology: SEO Wins That Compound (A Practical Playbook)",
    date: "2026-03-19",
    displayDate: "Mar 19, 2026",
    tags: ["SEO", "Website", "Technology"],
    excerpt:
      "Learn how performance, clean architecture, structured data, and scalable content systems can boost rankings and conversions—without gimmicks.",
    slug: "website-technology-seo",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Top UI/UX Trends That Will Dominate 2026",
    date: "2026-03-15",
    displayDate: "Mar 15, 2026",
    tags: ["UI/UX", "Design"],
    excerpt:
      "Explore modern UI/UX trends that are shaping digital experiences.",
    slug: "ui-ux-trends-2026",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
  },
];

const Blogs = () => {

  useEffect(() => {
    document.title = 'Wixwave Blog | Best IT & Website Development Company in Patna, Gurugram';

    const description =
      "Stay ahead with Wixwave's blog — insights from the best IT and website development company in Patna and Gurugram.";

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords',
      'IT company Patna, website development company Patna, website development company Gurugram, web design, app development, SEO, digital marketing'
    );

    const setOg = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOg('og:title', document.title);
    setOg('og:description', description);
    setOg('og:type', 'website');
    setOg('og:url', 'https://wixwave.co/blog');
    setOg('og:image', blogPosts[0]?.image);

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://wixwave.co/blog');

  }, []);

  // ✅ SORT LATEST FIRST
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Hero />

      <section className="py-12 md:py-16 px-4 md:px-16 bg-white">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
          <div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[48px] font-semibold text-[#0b0b2c]">
              Latest posts
            </h2>
            <p className="text-[#5a5a6a] mt-1">
              Fresh insights on websites, technology, and SEO.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Updated {sortedPosts[0]?.displayDate}
          </span>
        </div>

        {/* POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {sortedPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition"
            >
              <Link to={`/blog/${post.slug}`} className="block">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5 md:p-6">

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold">
                      {post.tags.join(" • ")}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.displayDate}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg md:text-xl font-semibold text-[#0b0b2c] group-hover:text-[#2d2dfc] transition">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[#6b6b7a] text-[14px] leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 text-[#2d2dfc] font-medium group-hover:underline">
                    Read post →
                  </div>

                </div>
              </Link>
            </article>
          ))}
        </div>

      </section>
    </>
  )
}

export default Blogs