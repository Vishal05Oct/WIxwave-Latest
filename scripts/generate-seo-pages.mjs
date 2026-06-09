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
import { buildFaqJsonLd } from "../src/data/serviceFaqs.js";
import {
  canonicalFor,
  DEFAULT_OG_IMAGE,
  indexableRoutes,
  noIndexRoutes,
} from "../src/seo/siteRoutes.js";
import {
  DEFAULT_OG_IMAGE_ALT,
  FAQ_BY_KEY,
  geoForRoute,
  hreflangLinksFor,
  OG_IMAGE_DIMENSIONS,
} from "../src/seo/seoConfig.js";
import { jsonLdForRoute, stripTailBrand } from "../src/seo/routeSeo.js";
import {
  buildRobotsTxt,
  getCrawlNavLinks,
  INDEX_ROBOTS,
  NOINDEX_ROBOTS,
} from "../src/seo/crawlConfig.js";
import { buildAeoHeadMetaHtml } from "../src/seo/aeoConfig.js";

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
      /\s*<meta\s+(?:name|property)=["'](?:description|title|robots|googlebot|bingbot|google-site-verification|author|publisher|application-name|geo\.[^"']+|ICBM|og:[^"']+|twitter:[^"']+|article:[^"']+)["'][\s\S]*?>/gi,
      ""
    )
    .replace(/\s*<link\s+rel=["'](?:canonical|alternate|help|sitemap)["'][\s\S]*?>/gi, "");
}

function crawlNavHtml() {
  return getCrawlNavLinks()
    .map(
      (link) =>
        `          <li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`
    )
    .join("\n");
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

  const faqBlock = safeFaqHtml
    ? `
      <h2>FAQs</h2>
      <div aria-label="Frequently asked questions">
        ${safeFaqHtml}
      </div>`
    : "";

  return `    <noscript id="crawl-fallback">
      <article aria-label="Page summary" style="max-width:980px;margin:24px auto;padding:16px;font-family:system-ui,sans-serif;line-height:1.5;">
        <h1>${safeTitle}</h1>
        <p>${safeDescription}${extraLine}</p>
        <p>${genericOverview}${routeSearchIntent ? ` ${routeSearchIntent}` : ""}</p>
        ${faqBlock}
        <nav aria-label="All site pages">
          <h2>Site pages</h2>
          <ul>
${crawlNavHtml()}
          </ul>
        </nav>
      </article>
    </noscript>`;
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
  const routeKeywordList = Array.isArray(route.keywords)
    ? route.keywords.join(", ")
    : routeKeywords;
  const keywordsContent = [siteKeywords, routeKeywordList].filter(Boolean).join(", ");

  const hreflangHtml = hreflangLinksFor(canonical)
    .map(
      (link) =>
        `    <link rel="alternate" href="${link.href}" hreflang="${link.hreflang}" />`
    )
    .join("\n");

  const jsonLdBlocks = [...siteLevel, ...jsonLdForRoute(route)];
  const articleMeta =
    route.type === "article" && route.datePublished
      ? `
    <meta property="article:published_time" content="${route.datePublished}" />
    <meta property="article:author" content="Wixwave" />
    <meta property="article:section" content="Blog" />`
      : "";

  const aeoBenefits = `${buildAeoHeadMetaHtml(route, escapeHtml)}
    <meta name="author" content="Wixwave" />
    <meta name="publisher" content="Wixwave" />
    <meta name="application-name" content="Wixwave" />`;

  return `    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    ${keywordsContent ? `<meta name="keywords" content="${escapeHtml(
    keywordsContent
  )}" />` : ""}
    <meta name="robots" content="${INDEX_ROBOTS}" />
    <meta name="googlebot" content="${INDEX_ROBOTS}" />
    <meta name="bingbot" content="${INDEX_ROBOTS}" />
    <meta name="geo.region" content="${geo.region}" />
    <meta name="geo.placename" content="${escapeHtml(geo.placename)}" />
    <meta name="geo.position" content="${geo.position}" />
    <meta name="ICBM" content="${geo.icbm}" />${aeoBenefits}
    <link rel="canonical" href="${canonical}" />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="https://wixwave.co/sitemap.xml" />
${hreflangHtml}
    <link rel="alternate" type="text/plain" title="LLM content guide" href="https://wixwave.co/llms.txt" />
    <link rel="help" type="text/markdown" title="AI context" href="https://wixwave.co/AI.md" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${escapeHtml(DEFAULT_OG_IMAGE_ALT)}" />
    <meta property="og:image:width" content="${OG_IMAGE_DIMENSIONS.width}" />
    <meta property="og:image:height" content="${OG_IMAGE_DIMENSIONS.height}" />
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
    <meta name="robots" content="${NOINDEX_ROBOTS}" />
    <meta name="googlebot" content="${NOINDEX_ROBOTS}" />
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
    <meta name="robots" content="${NOINDEX_ROBOTS}" />
    <meta name="googlebot" content="${NOINDEX_ROBOTS}" />
    <meta name="description" content="The page you are looking for could not be found." />
  </head>`
);
writeFileSync(join(distDir, "404.html"), notFoundHtml);

const robotsTxt = buildRobotsTxt();
writeFileSync(join(distDir, "robots.txt"), robotsTxt);
writeFileSync(join(publicDir, "robots.txt"), robotsTxt);

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

console.log(
  `SEO prerender: ${indexableRoutes.length} indexable pages, sitemap.xml, robots.txt`
);
