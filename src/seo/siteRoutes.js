/** Single source of truth for indexable routes (sitemap + prerender). */

export const SITE_URL = "https://wixwave.co";

export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png";

/** @type {import('./siteRoutes.js').SiteRoute[]} */
export const indexableRoutes = [
  {
    path: "/",
    title:
      "Wixwave | Web Design, App Development, SEO & Digital Marketing in Gurgaon & Patna",
    description:
      "Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: "2026-05-19",
    breadcrumbKey: "home",
  },
  {
    path: "/about",
    title: "About Wixwave | Web & SEO Agency Patna & Gurugram",
    description:
      "Meet Wixwave—a Patna & Gurugram digital agency for website development, app development, SEO & branding. Strategy-led, performance-first projects since 2020.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "about",
    faqKey: "about",
  },
  {
    path: "/services",
    title: "Digital Agency Patna & Gurugram | Web, App, SEO & Marketing",
    description:
      "Wixwave is a Patna and Gurugram digital agency for website development, app development, SEO, branding, social media, and paid ads. Strategy-led projects with free consultation.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "services",
    faqKey: "services",
  },
  {
    path: "/services/web-dev",
    title:
      "Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave",
    description:
      "Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram. Get a responsive, high-converting website designed for growth.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "web-dev",
    faqKey: "web-dev",
    serviceType: "Website Development",
  },
  {
    path: "/services/app-dev",
    title: "App Development Services | Custom Mobile & Web Apps by Wixwave",
    description:
      "Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, user-focused development that drives growth.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "app-dev",
    faqKey: "app-dev",
    serviceType: "App Development",
  },
  {
    path: "/services/seo",
    title: "SEO Services in Patna & Gurugram (Gurgaon) | Wixwave",
    description:
      "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram: technical SEO, on-page optimization, content strategy, and performance improvements.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "seo",
    faqKey: "seo",
    serviceType: "SEO Services",
  },
  {
    path: "/services/branding",
    title: "Branding & Logo Design | Creative Identity Solutions by Wixwave",
    description:
      "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "branding",
    serviceType: "Branding",
  },
  {
    path: "/services/social-media",
    title: "Social Media Marketing | Grow Your Brand Online with Wixwave",
    description:
      "Wixwave's social media marketing grows your audience and engagement with content creation, strategy, and management for all platforms.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "social-media",
    serviceType: "Social Media Marketing",
  },
  {
    path: "/services/paid-ads",
    title: "Paid Advertising Services | Google & Facebook Ads by Wixwave",
    description:
      "Maximize ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "paid-ads",
    serviceType: "Paid Advertising",
  },
  {
    path: "/portfolio",
    title: "Wixwave Portfolio | Website Development Projects in Patna & Gurugram",
    description:
      "Explore Wixwave's portfolio of website development, app development, SEO, and branding projects for businesses in Patna and Gurugram.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "portfolio",
  },
  {
    path: "/blog",
    title: "Wixwave Blog | Website Development & SEO Insights (Patna & Gurugram)",
    description:
      "Stay ahead with Wixwave's blog: practical insights on website development, technology, and SEO for businesses in Patna and Gurugram.",
    priority: "0.7",
    changefreq: "weekly",
    lastmod: "2026-05-27",
    breadcrumbKey: "blog",
  },
  {
    path: "/blog/business-website-development-company-patna",
    title:
      "Business Website Development in Patna (2026): Cost, Features & Company Guide | Wixwave Blog",
    description:
      "Plan your business website in Patna: must-have features, realistic costs, SEO-ready structure, and how to choose the best website development company in Patna.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-05-27",
    type: "article",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/shopify-expert-patna-store-development-guide",
    title:
      "Shopify Expert in Patna (2026): Store Setup, Custom Development & Pricing | Wixwave Blog",
    description:
      "Hire a Shopify expert in Patna for store setup, custom Shopify website development, theme customization, payments, SEO, and scalable ecommerce growth.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-05-27",
    type: "article",
    datePublished: "2026-05-27",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/shopify-vs-woocommerce-2026",
    title:
      "Shopify vs WooCommerce (2026): Which Ecommerce Platform Is Better? | Wixwave Blog",
    description:
      "Shopify vs WooCommerce compared for cost, SEO, speed, scalability, and ease of use. See which ecommerce platform fits your business in India—Patna, Gurugram, and beyond.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-05-20",
    type: "article",
    datePublished: "2026-05-20",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/shopify-seo-checklist-2026",
    title:
      "Shopify SEO Checklist (2026): Rank Your Store & Grow Organic Sales | Wixwave Blog",
    description:
      "A practical Shopify SEO checklist for 2026: technical setup, collection pages, product optimization, site speed, structured data, and content that drives organic ecommerce traffic.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    type: "article",
    datePublished: "2026-05-19",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/shopify-store-development-services",
    title:
      "Shopify Store Development Services: Custom Shopify Website Development Guide | Wixwave Blog",
    description:
      "Explore Shopify Store Development Services, Custom Shopify Website Development, Shopify SEO, theme customization, and ecommerce website development for growing brands.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-05-07",
    type: "article",
    datePublished: "2026-05-07",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/website-design-development-guide",
    title:
      "Website Design & Development (2026): How to Build Pages That Convert | Wixwave Blog",
    description:
      "Learn how to design and develop a modern website: architecture, performance, Core Web Vitals, content structure, internal linking, and conversion-first UX.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-04-24",
    type: "article",
    datePublished: "2026-04-24",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/local-seo-checklist-patna-gurugram",
    title: "Local SEO Checklist (2026): Patna + Gurugram (Gurgaon) | Wixwave Blog",
    description:
      "A practical local SEO checklist for Patna and Gurugram businesses: Google Business Profile setup, on-page SEO, citations, reviews, and content ideas.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-04-24",
    type: "article",
    datePublished: "2026-04-24",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/local-seo-mistakes-patna-gurugram",
    title: "Local SEO Mistakes to Avoid (2026): Patna + Gurugram | Wixwave Blog",
    description:
      "Avoid local SEO mistakes that block rankings in Patna and Gurugram: GBP issues, weak service pages, inconsistent citations, review gaps, and slow websites.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-04-24",
    type: "article",
    datePublished: "2026-04-24",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/choose-website-development-company-gurugram",
    title: "How to Choose a Website Development Company in Gurugram | Wixwave Blog",
    description:
      "Learn how to choose a website development company in Gurugram by comparing SEO readiness, portfolio quality, UX thinking, pricing clarity, and support.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-04-15",
    type: "article",
    datePublished: "2026-04-15",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/choose-website-development-company-patna",
    title: "How to Choose a Website Development Company in Patna | Wixwave Blog",
    description:
      "Learn how to choose a website development company in Patna by comparing portfolio quality, SEO readiness, pricing clarity, timelines, and support.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-04-14",
    type: "article",
    datePublished: "2026-04-14",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/website-technology-seo",
    title: "Website Technology & SEO in 2026: Wins That Compound | Wixwave Blog",
    description:
      "Learn how website performance, Core Web Vitals, technical SEO, structured data, and scalable systems drive long-term SEO growth in 2026.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-03-19",
    type: "article",
    datePublished: "2026-03-19",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/blog/ui-ux-trends-2026",
    title: "Top UI/UX Trends in 2026: Future of Design & User Experience | Wixwave Blog",
    description:
      "Explore UI/UX trends in 2026 including AI-driven design, immersive UX, micro-interactions, and privacy-first experiences.",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: "2026-03-15",
    type: "article",
    datePublished: "2026-03-15",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    path: "/website-development-patna",
    title: "Website Development Services in Patna | Wixwave",
    description:
      "Wixwave provides website development services in Patna with Shopify store builds, custom Shopify development, performance-first UX, and SEO-ready structure.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "patna",
    serviceType: "Website Development",
    areaServed: "Patna",
  },
  {
    path: "/website-development-gurugram",
    title: "Website Development Services in Gurgaon (Gurugram) | Wixwave",
    description:
      "Wixwave provides website development services in Gurgaon and Gurugram with Shopify builds, custom development, performance-first UX, and SEO-ready structure.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "gurugram",
    serviceType: "Website Development",
    areaServed: "Gurugram",
  },
  {
    path: "/contact",
    title: "Contact Wixwave | Website Development Company in Patna & Gurugram",
    description:
      "Contact Wixwave for website development, app development, SEO, branding, and digital marketing in Patna and Gurugram. Get a free consultation today.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-05-19",
    breadcrumbKey: "contact",
  },
];

export const noIndexRoutes = [
  {
    path: "/thank-you",
    title: "Thank You | Wixwave",
    description:
      "Thank you for reaching out. We received your message and will get back to you shortly.",
  },
];

export function canonicalFor(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
