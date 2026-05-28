import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import {
  blogHeadlineFromSeoTitle,
  breadcrumbsFor,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
  buildServiceJsonLd,
  buildWebPageJsonLd,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
  getLocalBusinessJsonLd,
  SITE,
} from "../src/seo/siteJsonLd.js";
import {
  aboutFaqs,
  buildFaqJsonLd,
  servicesHubFaqs,
  webDevFaqs,
  appDevFaqs,
  seoFaqs,
} from "../src/data/serviceFaqs.js";
import {
  canonicalFor,
  DEFAULT_OG_IMAGE,
  indexableRoutes,
  noIndexRoutes,
} from "../src/seo/siteRoutes.js";

const FAQ_BY_KEY = {
  about: aboutFaqs,
  services: servicesHubFaqs,
  "web-dev": webDevFaqs,
  "app-dev": appDevFaqs,
  seo: seoFaqs,
};

const distDir = "dist";
const publicDir = "public";
const baseHtmlPath = join(distDir, "index.html");
const baseHtml = readFileSync(baseHtmlPath, "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripManagedHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /\s*<meta\s+(?:name|property)=["'](?:description|title|robots|googlebot|bingbot|author|publisher|application-name|geo\.[^"']+|ICBM|og:[^"']+|twitter:[^"']+|article:[^"']+)["'][\s\S]*?>/gi,
      ""
    )
    .replace(/\s*<link\s+rel=["'](?:canonical|alternate|help)["'][\s\S]*?>/gi, "");
}

// Derive geo meta values from route.areaServed or route.geo when provided.
function geoForRoute(route) {
  // explicit per-route override
  if (route && route.geo) return route.geo;

  const area = (route && route.areaServed) ? String(route.areaServed).toLowerCase() : "";

  // default to Patna
  const defaults = {
    region: "IN-BR",
    placename: "Patna, Bihar, India",
    position: "25.5941;85.1376",
    icbm: "25.5941, 85.1376",
  };

  if (!area) return defaults;

  if (area.includes("patna")) return defaults;

  if (area.includes("gurugram") || area.includes("gurgaon") || area.includes("gurgaon")) {
    return {
      region: "IN-HR",
      placename: "Gurugram (Gurgaon), Haryana, India",
      position: "28.4595;77.0266",
      icbm: "28.4595, 77.0266",
    };
  }

  // fallback to defaults if unknown
  return defaults;
}

function jsonLdForRoute(route) {
  const canonical = canonicalFor(route.path);
  const blocks = [];

  // Build service block when route represents a service or area-specific page
  let serviceBlock = null;
  if (route.serviceType && route.path.startsWith("/services/")) {
    serviceBlock = buildServiceJsonLd({
      canonical,
      name: route.serviceType,
      description: route.description,
      serviceType: route.serviceType,
      category: route.category,
    });
  }
  if (route.areaServed && route.path.includes("website-development")) {
    serviceBlock = buildServiceJsonLd({
      canonical,
      name: stripTailBrand(route.title),
      description: route.description,
      serviceType: route.serviceType || "Website Development",
      areaServed: route.areaServed,
      category: route.category,
    });
  }

  // Build the WebPage and attach `about` reference to the service when available
  const webPageBlock = buildWebPageJsonLd({
    canonical,
    title: route.title,
    description: route.description,
  });
  if (serviceBlock) webPageBlock.about = { "@id": serviceBlock["@id"] };
  blocks.push(webPageBlock);

  if (route.breadcrumbKey) {
    blocks.push(breadcrumbsFor(route.breadcrumbKey, canonical));
  }

  if (route.serviceType && route.path.startsWith("/services/")) {
    // push serviceBlock if created above
    if (serviceBlock) blocks.push(serviceBlock);
  }

  if (route.areaServed && route.path.includes("website-development")) {
    // push serviceBlock if created above
    if (serviceBlock) blocks.push(serviceBlock);
  }

  if (route.faqKey && FAQ_BY_KEY[route.faqKey]) {
    blocks.push(buildFaqJsonLd(FAQ_BY_KEY[route.faqKey], canonical));
  }

  if (route.type === "article" && route.datePublished) {
    const headline = blogHeadlineFromSeoTitle(route.title);
    blocks.push(
      buildBlogPostingJsonLd({
        headline,
        description: route.description,
        url: canonical,
        datePublished: route.datePublished,
        image: route.image || DEFAULT_OG_IMAGE,
      }),
      buildBlogBreadcrumbsJsonLd({
        articleName: headline,
        canonicalUrl: canonical,
      })
    );
  }

  return blocks;
}

function stripTailBrand(title) {
  return title.replace(/\s*\|\s*Wixwave(\s*\|\s*Wixwave Blog)?\s*$/i, "").trim();
}

function bodyFallbackForRoute(route) {
  const safeTitle = escapeHtml(route.title || "");
  const safeDescription = escapeHtml(route.description || "");

  // For homepage and other routes that don't have a faqKey, provide a default FAQ set.
  const faqItems = (() => {
    if (route.faqKey && FAQ_BY_KEY[route.faqKey]) return FAQ_BY_KEY[route.faqKey];
    if (route.path === "/") return FAQ_BY_KEY.services;
    return [];
  })();

  const safeFaqHtml = faqItems
    .map(
      (item) => `<section aria-label="FAQ item" itemscope itemtype="https://schema.org/Question">
      <h3 itemprop="name">${escapeHtml(item.question)}</h3>
      <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
        <p itemprop="text">${escapeHtml(item.answer)}</p>
      </div>
    </section>`
    )
    .join("\n");

  const extraLine = route.areaServed
    ? ` ${escapeHtml(route.serviceType || "")} ${escapeHtml(
        route.areaServed
      )}.`
        .replace(/\s+/g, " ")
        .trim()
    : route.serviceType
    ? ` ${escapeHtml(route.serviceType)}.`
        .replace(/\s+/g, " ")
        .trim()
    : "";

  const genericOverview =
    "Wixwave is a digital agency delivering website development, app development, SEO, branding, social media marketing, and paid advertising for businesses across India, with strong delivery in Patna and Gurugram (Gurgaon). Our approach is strategy-led and performance-first: we plan site structure, build clean and scalable pages, optimize for speed and Core Web Vitals, and ensure SEO foundations like technical SEO, internal linking, structured data, and content that matches search intent.\n\nFor each project, we focus on high-converting UX, mobile responsiveness, and implementation details that help your pages rank and stay competitive. We support businesses with technical SEO improvements, local SEO targeting, on-page optimization, keyword research, and reporting that tracks growth in rankings and leads. Whether you need a modern marketing website, a Shopify store build, a custom web or mobile app, or a complete digital marketing plan, Wixwave helps turn your goals into measurable outcomes.\n\nWe can also support post-launch needs such as maintenance, updates, performance improvements, bug fixes, conversion-focused enhancements, and ongoing SEO support so your website and app keep growing after launch."
      .replace(/"/g, "&quot;");

  const routeSearchIntent =
    route.path === "/website-development-patna"
      ? "This page is optimized for search intent like &quot;website development company in Patna&quot;, &quot;best website development company in Patna&quot;, &quot;shopify development company in Patna&quot;, &quot;best digital marketing agency in Patna&quot;, &quot;website development agency in Patna&quot;, and &quot;top 10 website development company in Patna&quot;."
      : route.path === "/website-development-gurugram"
      ? "This page is optimized for search intent like &quot;website development company in Gurugram&quot;, &quot;best website development company in Gurgaon&quot;, &quot;shopify development Gurgaon&quot;, &quot;digital marketing agency Gurugram&quot;, and related high-intent queries."
      : "";

  return `    <section id="llm-fallback" data-llm-fallback="true" aria-label="Page summary and link structure" style="font-size:12px;line-height:1.4;opacity:0.95;max-width:980px;margin:24px auto;display: none;padding:12px 16px;border-top:1px solid rgba(0,0,0,0.08) display:none;">
      <h1 style="margin:0 0 8px;">${safeTitle}</h1>

      <h2 style="margin:12px 0 6px;">Overview</h2>
      <p style="margin:0 0 8px;">${safeDescription}${extraLine}</p>
      <p style="margin:0;">${genericOverview}${routeSearchIntent ? `\n\n${routeSearchIntent}` : ""}</p>

      <h2 style="margin:16px 0 6px;">Services</h2>
      <h3 style="margin:10px 0 4px;">Website development</h3>
      <h4 style="margin:8px 0 4px;">Deliverables</h4>
      <ul style="margin:0 0 6px;padding-left:18px;">
        <li>Responsive pages and conversion-first UX</li>
        <li>Performance optimization and Core Web Vitals improvements</li>
        <li>Technical SEO setup and SEO-ready structure</li>
      </ul>
      <h5 style="margin:8px 0 4px;">Quality checks</h5>
      <p style="margin:0 0 6px;">Cross-device QA, accessibility basics, and content structure validation.</p>
      <h6 style="margin:8px 0 4px;">Notes</h6>
      <p style="margin:0 0 10px;">Timelines and scope depend on page count, features, and content readiness.</p>

      <h3 style="margin:10px 0 4px;">App development</h3>
      <p style="margin:0 0 10px;">Mobile and web apps with scalable architecture, integrations, testing, and post-launch support.</p>

      <h3 style="margin:10px 0 4px;">SEO services</h3>
      <p style="margin:0 0 10px;">Technical SEO, on-page optimization, local SEO for Patna and Gurugram, and performance-led improvements.</p>

      <h3 style="margin:10px 0 4px;">Branding</h3>
      <p style="margin:0 0 10px;">Logo design, brand identity systems, and visual direction that improves trust and consistency.</p>

      <h3 style="margin:10px 0 4px;">Social media marketing</h3>
      <p style="margin:0 0 10px;">Content planning, creatives, posting support, engagement, and performance reporting.</p>

      <h3 style="margin:10px 0 4px;">Paid advertising</h3>
      <p style="margin:0 0 10px;">Google Ads and Meta campaigns optimized for measurable ROI and lead generation.</p>

      ${
        safeFaqHtml
          ? `<h2 style="margin:16px 0 6px;">FAQs</h2>
      <div aria-label="Frequently asked questions">
        ${safeFaqHtml}
      </div>`
          : ""
      }
      <nav aria-label="Primary pages">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/services/web-dev">Website Development</a></li>
          <li><a href="/services/app-dev">App Development</a></li>
          <li><a href="/services/seo">SEO Services</a></li>
          <li><a href="/services/branding">Branding</a></li>
          <li><a href="/services/social-media">Social Media</a></li>
          <li><a href="/services/paid-ads">Paid Ads</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/website-development-patna">Website Development Patna</a></li>
          <li><a href="/website-development-gurugram">Website Development Gurugram</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </section>`;
}

function metaFor(route) {
  const canonical = canonicalFor(route.path);
  const safeTitle = escapeHtml(route.title);
  const safeDescription = escapeHtml(route.description);
  const type = route.type === "article" ? "article" : "website";
  const image = escapeHtml(route.image || DEFAULT_OG_IMAGE);
  const siteLevel = [
    getOrganizationJsonLd(),
    getWebsiteJsonLd(),
    getLocalBusinessJsonLd(),
  ];

  const geo = geoForRoute(route);

  // If a local reviews file exists (generated by scripts/fetch-gmb-reviews.mjs), merge into LocalBusiness block
  try {
    const reviewsPath = join(process.cwd(), "data/gmb-reviews.json");
    const raw = readFileSync(reviewsPath, "utf8");
    const reviewsData = JSON.parse(raw);
    if (reviewsData) {
      const lbIndex = siteLevel.findIndex((b) => b["@type"] === "ProfessionalService" || b["@type"] === "LocalBusiness");
      if (lbIndex !== -1) {
        const lb = siteLevel[lbIndex];
        if (reviewsData.aggregateRating) lb.aggregateRating = reviewsData.aggregateRating;
        if (Array.isArray(reviewsData.reviews) && reviewsData.reviews.length) lb.review = reviewsData.reviews;
        siteLevel[lbIndex] = lb;
      }
    }
  } catch (e) {
    // no local reviews available — skip silently
  }

  // Keywords meta: combine site-level AEO keywords and any route-level keywords
  const siteKeywords = Array.isArray(SITE.keywords) ? SITE.keywords.join(", ") : "";
  const routeKeywords = route.keywords ? String(route.keywords).trim() : "";
  const keywordsContent = [siteKeywords, routeKeywords].filter(Boolean).join(", ");

  const jsonLdBlocks = [...siteLevel, ...jsonLdForRoute(route)];
  const articleMeta =
    route.type === "article" && route.datePublished
      ? `
    <meta property="article:published_time" content="${route.datePublished}" />
    <meta property="article:author" content="Wixwave" />
    <meta property="article:section" content="Blog" />`
      : "";

  // AEO enhancements: author, publisher, content classification
  const aeoBenefits = `
    <meta name="author" content="Wixwave" />
    <meta name="publisher" content="Wixwave" />
    <meta name="article.author" content="Wixwave" />
    <meta name="content-type" content="text/html; charset=UTF-8" />`;

  return `    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    ${keywordsContent ? `<meta name="keywords" content="${escapeHtml(
    keywordsContent
  )}" />` : ""}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="geo.region" content="${geo.region}" />
    <meta name="geo.placename" content="${escapeHtml(geo.placename)}" />
    <meta name="geo.position" content="${geo.position}" />
    <meta name="ICBM" content="${geo.icbm}" />${aeoBenefits}
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" href="${canonical}" hreflang="en-IN" />
    <link rel="alternate" href="${canonical}" hreflang="hi-IN" />
    <link rel="alternate" href="${canonical}" hreflang="x-default" />
    <link rel="alternate" type="text/plain" title="LLM content guide" href="https://wixwave.co/llms.txt" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Wixwave" />
    <meta property="og:locale" content="en_IN" />${articleMeta}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:site" content="@Wixwave" />
${jsonLdBlocks
  .map(
    (block) =>
      `    <script type="application/ld+json">${JSON.stringify(block)}</script>`
  )
  .join("\n")}
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
    <link rel="alternate" href="${canonical}" hreflang="en-IN" />
    <link rel="alternate" href="${canonical}" hreflang="hi-IN" />
    <link rel="alternate" href="${canonical}" hreflang="x-default" />
`;
}

function htmlFor(route) {
  const htmlWithHead = stripManagedHead(baseHtml).replace(
    "</head>",
    `${metaFor(route)}  </head>`
  );
  return htmlWithHead.replace(
    "</body>",
    `${bodyFallbackForRoute(route)}\n  </body>`
  );
}

function outputPathFor(routePath) {
  if (routePath === "/") return baseHtmlPath;
  const cleanPath = routePath.replace(/^\/|\/$/g, "");
  return join(distDir, cleanPath, "index.html");
}

for (const route of indexableRoutes) {
  const outPath = outputPathFor(route.path);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, htmlFor(route));
}

for (const route of noIndexRoutes) {
  const outPath = outputPathFor(route.path);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(
    outPath,
    stripManagedHead(baseHtml)
      .replace("</head>", `${noIndexMetaFor(route)}  </head>`)
      .replace("</body>", `${bodyFallbackForRoute(route)}\n  </body>`)
  );
}

const notFoundHtml = stripManagedHead(baseHtml).replace(
  "</head>",
  `    <title>404 - Page Not Found | Wixwave</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="description" content="The page you are looking for could not be found." />
    <link rel="canonical" href="${canonicalFor("/404")}" />
  </head>`
);
writeFileSync(join(distDir, "404.html"), notFoundHtml);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes
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
writeFileSync(join(publicDir, "sitemap.xml"), sitemap);

// Ensure robots.txt is present in dist for crawlers
try {
  const robots = readFileSync(join(publicDir, "robots.txt"), "utf8");
  writeFileSync(join(distDir, "robots.txt"), robots);
} catch (e) {
  // if public/robots.txt missing, skip silently
}
