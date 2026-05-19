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

function jsonLdForRoute(route) {
  const canonical = canonicalFor(route.path);
  const blocks = [
    buildWebPageJsonLd({
      canonical,
      title: route.title,
      description: route.description,
    }),
  ];

  if (route.breadcrumbKey) {
    blocks.push(breadcrumbsFor(route.breadcrumbKey, canonical));
  }

  if (route.serviceType && route.path.startsWith("/services/")) {
    blocks.push(
      buildServiceJsonLd({
        canonical,
        name: route.serviceType,
        description: route.description,
        serviceType: route.serviceType,
      })
    );
  }

  if (route.areaServed && route.path.includes("website-development")) {
    blocks.push(
      buildServiceJsonLd({
        canonical,
        name: stripTailBrand(route.title),
        description: route.description,
        serviceType: route.serviceType || "Website Development",
        areaServed: route.areaServed,
      })
    );
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

  const jsonLdBlocks = [...siteLevel, ...jsonLdForRoute(route)];
  const articleMeta =
    route.type === "article" && route.datePublished
      ? `
    <meta property="article:published_time" content="${route.datePublished}" />
    <meta property="article:author" content="Wixwave" />
    <meta property="article:section" content="Blog" />`
      : "";

  return `    <title>${safeTitle}</title>
    <meta name="title" content="${safeTitle}" />
    <meta name="description" content="${safeDescription}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="geo.region" content="IN-BR" />
    <meta name="geo.placename" content="Patna, Gurugram" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" href="${canonical}" hreflang="en-IN" />
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
    stripManagedHead(baseHtml).replace("</head>", `${noIndexMetaFor(route)}  </head>`)
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
