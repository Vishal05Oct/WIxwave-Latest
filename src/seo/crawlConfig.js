/**
 * Crawl / index signals shared by client SEO hooks and prerender build.
 */

import {
  SITE_URL,
  canonicalFor,
  indexableRoutes,
  noIndexRoutes,
} from "./siteRoutes.js";

export const INDEX_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export const NOINDEX_ROBOTS = "noindex, nofollow";

/** All indexable URLs for internal linking and structured data. */
export function getCrawlNavLinks() {
  return indexableRoutes.map((route) => ({
    href: route.path === "/" ? "/" : route.path,
    label: route.title.replace(/\s*\|\s*Wixwave(\s*Blog)?\s*$/i, "").trim(),
    canonical: canonicalFor(route.path),
  }));
}

/** robots.txt — generated on each production build from siteRoutes. */
export function buildRobotsTxt() {
  const disallowBlock = noIndexRoutes
    .map((route) => `Disallow: ${route.path}`)
    .join("\n");

  return `User-agent: *
Allow: /
${disallowBlock}

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
