/**
 * Build client SEO options + JSON-LD from siteRoutes (single source of truth).
 * Shared by useRouteSeo and scripts/generate-seo-pages.mjs.
 */

import { buildFaqJsonLd } from "../data/serviceFaqs.js";
import {
  blogHeadlineFromSeoTitle,
  buildBlogBreadcrumbsJsonLd,
  buildBlogPostingJsonLd,
  buildContactPageJsonLd,
  breadcrumbsFor,
  buildServiceJsonLd,
  buildHowToJsonLd,
  buildServicesItemListJsonLd,
  buildWebPageJsonLd,
  SERVICE_CATALOG,
  SITE,
} from "./siteJsonLd.js";
import { buildAeoMetaForRoute, HOWTO_BY_KEY } from "./aeoConfig.js";
import { INDEX_ROBOTS, NOINDEX_ROBOTS } from "./crawlConfig.js";
import { FAQ_BY_KEY, geoForRoute } from "./seoConfig.js";
import {
  canonicalFor,
  DEFAULT_OG_IMAGE,
  getRouteByPath,
  getNoIndexRouteByPath,
} from "./siteRoutes.js";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

export function stripTailBrand(title) {
  return title.replace(/\s*\|\s*Wixwave(\s*\|\s*Wixwave Blog)?\s*$/i, "").trim();
}

/** JSON-LD blocks for a route (matches prerender logic). */
export function jsonLdForRoute(route) {
  if (!route) return [];

  const canonical = canonicalFor(route.path);
  const blocks = [];

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

  let faqBlock = null;
  if (route.faqKey && FAQ_BY_KEY[route.faqKey]) {
    faqBlock = buildFaqJsonLd(FAQ_BY_KEY[route.faqKey], canonical);
  }

  const webPageBlock = buildWebPageJsonLd({
    canonical,
    title: route.title,
    description: route.description,
    mainEntity: faqBlock ? { "@id": faqBlock["@id"] } : undefined,
  });
  if (serviceBlock) webPageBlock.about = { "@id": serviceBlock["@id"] };
  blocks.push(webPageBlock);

  if (route.breadcrumbKey) {
    blocks.push(breadcrumbsFor(route.breadcrumbKey, canonical));
  }

  if (route.serviceType && route.path.startsWith("/services/")) {
    if (serviceBlock) blocks.push(serviceBlock);
  }

  if (route.areaServed && route.path.includes("website-development")) {
    if (serviceBlock) blocks.push(serviceBlock);
  }

  if (faqBlock) blocks.push(faqBlock);

  if (route.faqKey && HOWTO_BY_KEY[route.faqKey]) {
    blocks.push(
      buildHowToJsonLd({
        canonical,
        title: route.title,
        description: route.description,
        steps: HOWTO_BY_KEY[route.faqKey],
      })
    );
  }

  if (route.type === "article" && route.datePublished) {
    const headline = blogHeadlineFromSeoTitle(route.title);
    blocks.push(
      buildBlogPostingJsonLd({
        headline,
        description: route.description,
        url: canonical,
        datePublished: route.datePublished,
        dateModified: route.lastmod || route.datePublished,
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

export function buildServicesHubJsonLd(route) {
  const canonical = canonicalFor("/services");
  const faqBlock = buildFaqJsonLd(FAQ_BY_KEY.services, canonical);
  const blocks = [
    buildWebPageJsonLd({
      canonical,
      title: route.title,
      description: route.description,
      mainEntity: { "@id": faqBlock["@id"] },
      about: SERVICE_CATALOG.map((service) => ({
        "@type": "Thing",
        name: service.name,
        url: `${SITE.url}${service.path}`,
      })),
    }),
    breadcrumbsFor("services", canonical),
    buildServicesItemListJsonLd(),
    faqBlock,
    ...SERVICE_CATALOG.map((service) =>
      buildServiceJsonLd({
        canonical: `${SITE.url}${service.path}`,
        name: service.name,
        description: service.description,
        serviceType: service.name,
      })
    ),
  ];
  if (HOWTO_BY_KEY.services) {
    blocks.push(
      buildHowToJsonLd({
        canonical,
        title: route.title,
        description: route.description,
        steps: HOWTO_BY_KEY.services,
      })
    );
  }
  return blocks;
}

export function buildContactRouteJsonLd(route) {
  const canonical = canonicalFor("/contact");
  return [
    buildWebPageJsonLd({
      canonical,
      title: route.title,
      description: route.description,
    }),
    breadcrumbsFor("contact", canonical),
    buildContactPageJsonLd({
      canonical,
      title: route.title,
      description: route.description,
    }),
  ];
}

function resolveKeywords(route) {
  const siteKeywords = Array.isArray(SITE.keywords) ? SITE.keywords.join(", ") : "";
  const routeKeywords = Array.isArray(route?.keywords)
    ? route.keywords.join(", ")
    : route?.keywords
      ? String(route.keywords).trim()
      : "";
  return [siteKeywords, routeKeywords].filter(Boolean).join(", ") || undefined;
}

function jsonLdForPath(path, route) {
  if (path === "/services") return buildServicesHubJsonLd(route);
  if (path === "/contact") return buildContactRouteJsonLd(route);
  if (path === "/") return [...jsonLdForRoute(route), buildServicesItemListJsonLd()];
  return jsonLdForRoute(route);
}

/**
 * @param {string} pathname
 * @param {object} [overrides] Merged into useSeo options (e.g. extraJsonLd, og).
 */
export function buildRouteSeoOptions(pathname, overrides = {}) {
  const path = normalizePath(pathname);
  const route = getRouteByPath(path) ?? getNoIndexRouteByPath(path);

  if (!route) {
    return overrides;
  }

  const { extraJsonLd, og: ogOverride, ...restOverrides } = overrides;
  const canonical = canonicalFor(path);
  const geo = geoForRoute(route);
  const isNoIndex = Boolean(getNoIndexRouteByPath(path));
  const isArticle = route.type === "article";

  let jsonLdArray = jsonLdForPath(path, route);
  if (extraJsonLd?.length) {
    jsonLdArray = [...jsonLdArray, ...extraJsonLd];
  }
  if (overrides.jsonLdArray) {
    jsonLdArray = overrides.jsonLdArray;
  }

  const article =
    isArticle && route.datePublished
      ? {
          publishedTime: `${route.datePublished}T00:00:00+05:30`,
          author: "Wixwave",
          section: "Blog",
          ...overrides.article,
        }
      : overrides.article;

  return {
    title: route.title,
    description: route.description,
    canonical,
    keywords: resolveKeywords(route),
    robots: isNoIndex ? NOINDEX_ROBOTS : INDEX_ROBOTS,
    aeo: buildAeoMetaForRoute(route),
    geo,
    og: {
      url: canonical,
      type: isArticle ? "article" : "website",
      image: route.image || DEFAULT_OG_IMAGE,
      siteName: "Wixwave",
      locale: "en_IN",
      ...ogOverride,
    },
    article,
    jsonLdArray,
    ...restOverrides,
  };
}
