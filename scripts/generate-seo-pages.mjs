import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE_URL = "https://wixwave.co";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png";

const routes = [
  {
    path: "/",
    title:
      "Wixwave | Web Design, App Development, SEO & Digital Marketing in Gurgaon & Patna",
    description:
      "Wixwave empowers businesses in Gurgaon and Patna with expert web design, app development, SEO, branding, and digital marketing. Start your digital journey with our local team.",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: "2026-04-15",
  },
  {
    path: "/about",
    title: "About Wixwave | Website Development Company in Patna & Gurugram",
    description:
      "Meet Wixwave, a digital team helping businesses grow with website development, app development, SEO, and branding services in Patna and Gurugram.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-03-19",
  },
  {
    path: "/services",
    title:
      "Wixwave Services | Web, App, SEO, Branding & Digital Marketing in Patna & Gurugram",
    description:
      "Discover Wixwave's digital services: website development, app development, SEO, branding, paid ads, and social media marketing for business growth.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-04-15",
  },
  {
    path: "/services/web-dev",
    title:
      "Website Development Company | Fast, SEO-Optimized Websites in Patna & Gurugram | Wixwave",
    description:
      "Wixwave builds fast, SEO-optimized websites for businesses in Patna and Gurugram. Get a responsive, high-converting website designed for growth.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/services/app-dev",
    title: "App Development Services | Custom Mobile & Web Apps by Wixwave",
    description:
      "Wixwave builds custom mobile and web apps for startups and enterprises. Modern, scalable, user-focused development that drives growth.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/services/seo",
    title: "SEO Services in Patna & Gurugram (Gurgaon) | Wixwave",
    description:
      "Boost rankings and leads with Wixwave's SEO services in Patna and Gurugram: technical SEO, on-page optimization, content strategy, and performance improvements.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/services/branding",
    title: "Branding & Logo Design | Creative Identity Solutions by Wixwave",
    description:
      "Stand out with Wixwave's branding, logo design, website, app development, SEO, and digital marketing services.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/services/social-media",
    title: "Social Media Marketing | Grow Your Brand Online with Wixwave",
    description:
      "Wixwave's social media marketing grows your audience and engagement with content creation, strategy, and management for all platforms.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/services/paid-ads",
    title: "Paid Advertising Services | Google & Facebook Ads by Wixwave",
    description:
      "Maximize ROI with Wixwave's paid ads, Google Ads, Facebook campaigns, and digital marketing expertise.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-14",
  },
  {
    path: "/portfolio",
    title: "Wixwave Portfolio | Website Development Projects in Patna & Gurugram",
    description:
      "Explore Wixwave's portfolio of website development, app development, SEO, and branding projects for businesses in Patna and Gurugram.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-03-19",
  },
  {
    path: "/blog",
    title: "Wixwave Blog | Website Development & SEO Insights (Patna & Gurugram)",
    description:
      "Stay ahead with Wixwave's blog: practical insights on website development, technology, and SEO for businesses in Patna and Gurugram.",
    priority: "0.7",
    changefreq: "weekly",
    lastmod: "2026-05-07",
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
  },
  {
    path: "/website-development-patna",
    title: "Website Development Services in Patna | Wixwave",
    description:
      "Wixwave provides website development services in Patna with Shopify store builds, custom Shopify development, performance-first UX, and SEO-ready structure.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-15",
  },
  {
    path: "/website-development-gurugram",
    title: "Website Development Services in Gurgaon (Gurugram) | Wixwave",
    description:
      "Wixwave provides website development services in Gurgaon and Gurugram with Shopify builds, custom development, performance-first UX, and SEO-ready structure.",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: "2026-04-15",
  },
  {
    path: "/contact",
    title: "Contact Wixwave | Website Development Company in Patna & Gurugram",
    description:
      "Contact Wixwave for website development, app development, SEO, branding, and digital marketing in Patna and Gurugram. Get a free consultation today.",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: "2026-04-15",
  },
];

const noIndexRoutes = [
  {
    path: "/thank-you",
    title: "Thank You | Wixwave",
    description:
      "Thank you for reaching out. We received your message and will get back to you shortly.",
  },
];

const distDir = "dist";
const baseHtmlPath = join(distDir, "index.html");
const baseHtml = readFileSync(baseHtmlPath, "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function canonicalFor(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

function stripManagedHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/\s*<meta\s+(?:name|property)=["'](?:description|title|robots|googlebot|bingbot|author|publisher|application-name|og:[^"']+|twitter:[^"']+)["'][\s\S]*?>/gi, "")
    .replace(/\s*<link\s+rel=["']canonical["'][\s\S]*?>/gi, "");
}

function metaFor(route) {
  const canonical = canonicalFor(route.path);
  const safeTitle = escapeHtml(route.title);
  const safeDescription = escapeHtml(route.description);
  const type = route.type === "article" ? "article" : "website";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "BlogPosting" : "WebPage",
    headline: route.title,
    name: route.title,
    description: route.description,
    url: canonical,
    isPartOf: { "@type": "WebSite", name: "Wixwave", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Wixwave", url: SITE_URL },
  };

  return `    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${DEFAULT_IMAGE}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Wixwave" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
`;
}

function noIndexMetaFor(route) {
  const canonical = canonicalFor(route.path);
  const safeTitle = escapeHtml(route.title);
  const safeDescription = escapeHtml(route.description);

  return `    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="googlebot" content="noindex, nofollow" />
    <link rel="canonical" href="${canonical}" />
`;
}

function htmlFor(route) {
  return stripManagedHead(baseHtml).replace("</head>", `${metaFor(route)}  </head>`);
}

function outputPathFor(routePath) {
  if (routePath === "/") return baseHtmlPath;
  const cleanPath = routePath.replace(/^\/|\/$/g, "");
  return join(distDir, cleanPath, "index.html");
}

for (const route of routes) {
  const outPath = outputPathFor(route.path);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, htmlFor(route));
}

for (const route of noIndexRoutes) {
  const outPath = outputPathFor(route.path);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    stripManagedHead(baseHtml).replace("</head>", `${noIndexMetaFor(route)}  </head>`)
  );
}

const notFoundHtml = stripManagedHead(baseHtml).replace(
  "</head>",
  `    <title>404 - Page Not Found | Wixwave</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="description" content="The page you are looking for could not be found." />
    <link rel="canonical" href="${SITE_URL}/404" />
  </head>`
);
writeFileSync(join(distDir, "404.html"), notFoundHtml);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${canonicalFor(route.path)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(distDir, "sitemap.xml"), sitemap);
