import { Link } from 'react-router-dom'
import Hero from '../Components/Blogs_Hero'
import useSeo from '../hooks/useSeo'
import { ServiceLinks } from '../Components/ServiceLinks'
import {
  breadcrumbsFor,
  buildBlogCollectionJsonLd,
  buildWebPageJsonLd,
} from '../seo/siteJsonLd'

export const blogPosts = [
  {
    id: 10,
    title: "Shopify vs WooCommerce (2026): Which Ecommerce Platform Is Better?",
    date: "2026-05-20",
    displayDate: "May 20, 2026",
    tags: ["Shopify", "WooCommerce", "Ecommerce"],
    excerpt:
      "Shopify vs WooCommerce compared for cost, SEO, speed, customization, and scalability—plus which platform fits small businesses in India.",
    slug: "shopify-vs-woocommerce-2026",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 9,
    title: "Shopify SEO Checklist (2026): Rank Your Store & Grow Organic Sales",
    date: "2026-05-19",
    displayDate: "May 19, 2026",
    tags: ["Shopify", "SEO", "Ecommerce"],
    excerpt:
      "A practical Shopify SEO checklist for 2026: technical setup, collections, product pages, speed, structured data, and content that drives organic ecommerce traffic.",
    slug: "shopify-seo-checklist-2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 8,
    title: "Shopify Store Development Services: Custom Shopify Website Development Guide",
    date: "2026-05-07",
    displayDate: "May 7, 2026",
    tags: ["Shopify", "Ecommerce", "Website"],
    excerpt:
      "A practical guide to Shopify Store Development Services, Custom Shopify Website Development, Shopify SEO, theme customization, and conversion-focused ecommerce stores.",
    slug: "shopify-store-development-services",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 7,
    title: "Website Design & Development (2026): How to Build Pages That Convert",
    date: "2026-04-24",
    displayDate: "Apr 24, 2026",
    tags: ["Website", "Development", "Growth"],
    excerpt:
      "A practical blueprint for building a modern business website: architecture, performance, content structure, internal linking, and conversion-first UX.",
    slug: "website-design-development-guide",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Local SEO Mistakes to Avoid (2026): Patna + Gurugram",
    date: "2026-04-24",
    displayDate: "Apr 24, 2026",
    tags: ["Local SEO", "Patna", "Gurugram"],
    excerpt:
      "Avoid the local SEO mistakes that block rankings in Patna and Gurugram: GBP issues, weak service pages, inconsistent citations, review gaps, and slow websites.",
    slug: "local-seo-mistakes-patna-gurugram",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "Local SEO Checklist (2026): Patna + Gurugram (Gurgaon)",
    date: "2026-04-24",
    displayDate: "Apr 24, 2026",
    tags: ["Local SEO", "Patna", "Gurugram"],
    excerpt:
      "A step-by-step local SEO checklist for Patna and Gurugram businesses: GBP optimization, on-page SEO, citations, reviews, and content ideas.",
    slug: "local-seo-checklist-patna-gurugram",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "How to Choose a Website Development Company in Gurugram",
    date: "2026-04-15",
    displayDate: "Apr 15, 2026",
    tags: ["Website", "Gurugram", "SEO"],
    excerpt:
      "A practical guide for comparing website development companies in Gurugram and Gurgaon based on SEO readiness, performance, and support.",
    slug: "choose-website-development-company-gurugram",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "How to Choose a Website Development Company in Patna",
    date: "2026-04-14",
    displayDate: "Apr 14, 2026",
    tags: ["Website", "Patna", "SEO"],
    excerpt:
      "Compare website development companies in Patna with a simple checklist focused on quality, SEO readiness, and support.",
    slug: "choose-website-development-company-patna",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
  },
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
    title: "Top UI/UX Trends That Will Dominate 2026 and Shape Digital Product Experiences",
    date: "2026-03-15",
    displayDate: "Mar 15, 2026",
    tags: ["UI/UX", "Design"],
    excerpt:
      "Explore modern UI/UX trends that are shaping digital experiences across websites, apps, and customer journeys.",
    slug: "ui-ux-trends-2026",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
  },
]

const Blogs = () => {
  useSeo({
    title: 'Wixwave Blog | Website Development & SEO Insights (Patna & Gurugram)',
    description:
      "Stay ahead with Wixwave's blog: practical insights on website development, technology, and SEO for businesses in Patna and Gurugram (Gurgaon).",
    canonical: 'https://wixwave.co/blog',
    keywords: [
      'website development company patna',
      'website development company gurugram',
      'website development company gurgaon',
      'seo tips',
      'web development blog',
    ],
    robots: 'index,follow',
    og: {
      url: 'https://wixwave.co/blog',
      type: 'website',
      image: blogPosts[0]?.image,
      siteName: 'Wixwave',
      locale: 'en_IN',
    },
    jsonLdArray: [
      buildWebPageJsonLd({
        canonical: 'https://wixwave.co/blog',
        title: 'Wixwave Blog | Website Development & SEO Insights (Patna & Gurugram)',
        description:
          "Stay ahead with Wixwave's blog: practical insights on website development, technology, and SEO for businesses in Patna and Gurugram (Gurgaon).",
      }),
      breadcrumbsFor('blog', 'https://wixwave.co/blog'),
      buildBlogCollectionJsonLd(blogPosts),
    ],
  })

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  return (
    <main id="main" className="bg-white" aria-label="Main content">
      <Hero />

      <section className="py-10 sm:py-12 md:py-16 px-4 md:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2 md:gap-4 mb-8 md:mb-10">
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
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-56 object-cover"
                />

                <div className="p-4 sm:p-5 md:p-6">
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

                  <p className="mt-2 text-[#4a4a5a] text-[14px] leading-relaxed">
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

      <ServiceLinks heading="Need help with your website or marketing?" />
    </main>
  )
}

export default Blogs
