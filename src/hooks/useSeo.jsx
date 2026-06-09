import { useEffect, useMemo } from "react";
import { SITE } from "../seo/siteJsonLd";
import { GOOGLE_AI_BOT } from "../seo/aeoConfig";
import { INDEX_ROBOTS } from "../seo/crawlConfig";
import {
  DEFAULT_OG_IMAGE_ALT,
  hreflangLinksFor,
  OG_IMAGE_DIMENSIONS,
} from "../seo/seoConfig";

const BRAND_SUFFIX = " | Wixwave";
const LLMS_TXT_URL = `${SITE.url}/llms.txt`;
const AI_MD_URL = `${SITE.url}/AI.md`;
const TITLE_MAX_LENGTH = 60;
const DESCRIPTION_MAX_LENGTH = 160;

function normalizeWhitespace(value) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function truncateAtWordBoundary(value, maxLength) {
  if (!value || value.length <= maxLength) return value;
  const sliced = value.slice(0, maxLength).trim();
  const lastSpace = sliced.lastIndexOf(" ");
  if (lastSpace > 0) {
    return `${sliced.slice(0, lastSpace).trim()}...`;
  }
  return `${sliced}...`;
}

function normalizeTitle(rawTitle) {
  const cleanTitle = normalizeWhitespace(rawTitle);
  if (!cleanTitle) return cleanTitle;

  // Remove duplicate suffix variants before applying one standard format.
  const baseTitle = cleanTitle
    .replace(/\s*\|\s*Wixwave(\s*Blog)?$/i, "")
    .replace(/\s*-\s*Wixwave(\s*Blog)?$/i, "")
    .trim();

  const maxBaseLength = Math.max(0, TITLE_MAX_LENGTH - BRAND_SUFFIX.length);
  const limitedBase = truncateAtWordBoundary(baseTitle, maxBaseLength);
  return `${limitedBase}${BRAND_SUFFIX}`;
}

function normalizeDescription(rawDescription) {
  const cleanDescription = normalizeWhitespace(rawDescription);
  return truncateAtWordBoundary(cleanDescription, DESCRIPTION_MAX_LENGTH);
}

function setMetaTag(name, content, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.querySelector(selector);
  if (!content) {
    if (tag) tag.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("meta");
    if (isProperty) {
      tag.setAttribute("property", name);
    } else {
      tag.setAttribute("name", name);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLinkRel(rel, href, extra = {}) {
  let link = document.querySelector(`link[rel='${rel}']`);
  if (!href) {
    if (link) link.remove();
    return;
  }
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  Object.entries(extra).forEach(([key, value]) => {
    if (value) link.setAttribute(key, value);
    else link.removeAttribute(key);
  });
}

function removeHreflangLinks() {
  document
    .querySelectorAll("link[rel='alternate'][hreflang]")
    .forEach((node) => node.remove());
}

function setHreflangLinks(canonical) {
  removeHreflangLinks();
  if (!canonical) return;
  hreflangLinksFor(canonical).forEach(({ hreflang, href }) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    document.head.appendChild(link);
  });
}

function setDiscoveryLinks() {
  setLinkRel("sitemap", `${SITE.url}/sitemap.xml`, {
    type: "application/xml",
    title: "Sitemap",
  });
  setLinkRel("alternate", LLMS_TXT_URL, {
    type: "text/plain",
    title: "LLM content guide",
  });
  setLinkRel("help", AI_MD_URL, { type: "text/markdown", title: "AI context" });
}

const PAGE_LD_ATTR = "data-seo-jsonld-page";

function removePageJsonLdScripts() {
  document.querySelectorAll(`script[type="application/ld+json"][${PAGE_LD_ATTR}]`).forEach((n) => n.remove());
}

function setJsonLd(id, json) {
  let script = document.getElementById(id);
  if (!json) {
    if (script) script.remove();
    return;
  }
  const jsonString = JSON.stringify(json);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.setAttribute(PAGE_LD_ATTR, "true");
    document.head.appendChild(script);
  }
  script.textContent = jsonString;
}

function setMultipleJsonLd(jsonLdArray) {
  removePageJsonLdScripts();

  if (!jsonLdArray || !Array.isArray(jsonLdArray)) return;

  jsonLdArray.forEach((jsonLd) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(PAGE_LD_ATTR, "true");
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  });
}

export default function useSeo({
  title,
  description,
  canonical,
  keywords,
  robots,
  aeo = {},
  og = {},
  twitter = {},
  article,
  geo,
  jsonLd,
  jsonLdArray,
}) {
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : undefined;

  const normalizedTitle = useMemo(() => normalizeTitle(title), [title]);
  const normalizedDescription = useMemo(
    () => normalizeDescription(description),
    [description]
  );

  const keywordContent = useMemo(
    () => (Array.isArray(keywords) ? keywords.join(", ") : keywords),
    [keywords]
  );

  const resolvedCanonical = canonical || currentUrl;
  const resolvedRobots = robots ?? INDEX_ROBOTS;
  const isBlogPage = useMemo(
    () => Boolean(resolvedCanonical && /\/blog\/.+/i.test(resolvedCanonical)),
    [resolvedCanonical]
  );
  const resolvedAeo = useMemo(
    () => ({
      googlebot: GOOGLE_AI_BOT,
      bingbot: GOOGLE_AI_BOT,
      ...aeo,
    }),
    [aeo]
  );

  const resolvedOg = useMemo(
    () => ({
      type: isBlogPage ? "article" : "website",
      siteName: "Wixwave",
      locale: "en_IN",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
      imageAlt: DEFAULT_OG_IMAGE_ALT,
      imageWidth: OG_IMAGE_DIMENSIONS.width,
      imageHeight: OG_IMAGE_DIMENSIONS.height,
      ...og,
    }),
    [isBlogPage, og]
  );

  const resolvedOgTitle = resolvedOg.title || normalizedTitle;
  const resolvedOgDescription = resolvedOg.description || normalizedDescription;
  const resolvedOgUrl = resolvedOg.url || resolvedCanonical;
  const resolvedOgImage = resolvedOg.image;

  const resolvedTwitter = useMemo(
    () => ({
      card: "summary_large_image",
      ...twitter,
    }),
    [twitter]
  );

  const resolvedTwitterTitle =
    resolvedTwitter.title || resolvedOgTitle || normalizedTitle;
  const resolvedTwitterDescription =
    resolvedTwitter.description || resolvedOgDescription || normalizedDescription;
  const resolvedTwitterImage = resolvedTwitter.image || resolvedOgImage;

  const resolvedArticle = useMemo(() => article ?? {}, [article]);
  const resolvedGeo = useMemo(
    () => ({
      region: "IN-BR",
      placename: "Patna, Bihar, India",
      position: "25.5941;85.1376",
      icbm: "25.5941, 85.1376",
      ...geo,
    }),
    [geo]
  );

  useEffect(() => {
    if (normalizedTitle) document.title = normalizedTitle;
    if (typeof document !== "undefined") {
      document.documentElement.lang = "en-IN";
    }

    setMetaTag("description", normalizedDescription);
    setMetaTag("title", normalizedTitle);
    setMetaTag("keywords", keywordContent);
    setMetaTag("robots", resolvedRobots);
    setMetaTag("googlebot", resolvedAeo.googlebot);
    setMetaTag("bingbot", resolvedAeo.bingbot);

    setMetaTag("og:title", resolvedOgTitle, true);
    setMetaTag("og:description", resolvedOgDescription, true);
    setMetaTag("og:type", resolvedOg.type, true);
    setMetaTag("og:url", resolvedOgUrl, true);
    setMetaTag("og:image", resolvedOgImage, true);
    setMetaTag("og:image:alt", resolvedOg.imageAlt, true);
    setMetaTag("og:image:width", resolvedOg.imageWidth, true);
    setMetaTag("og:image:height", resolvedOg.imageHeight, true);
    setMetaTag("og:site_name", resolvedOg.siteName, true);
    setMetaTag("og:locale", resolvedOg.locale, true);

    if (resolvedArticle.publishedTime) {
      setMetaTag("article:published_time", resolvedArticle.publishedTime, true);
      setMetaTag("article:author", resolvedArticle.author || "Wixwave", true);
      setMetaTag("article:section", resolvedArticle.section || "Blog", true);
    } else {
      setMetaTag("article:published_time", null, true);
      setMetaTag("article:author", null, true);
      setMetaTag("article:section", null, true);
    }
    if (resolvedArticle.modifiedTime) {
      setMetaTag("article:modified_time", resolvedArticle.modifiedTime, true);
    } else {
      setMetaTag("article:modified_time", null, true);
    }

    setMetaTag("geo.region", resolvedGeo.region);
    setMetaTag("geo.placename", resolvedGeo.placename);
    setMetaTag("geo.position", resolvedGeo.position);
    setMetaTag("ICBM", resolvedGeo.icbm);

    setLinkRel("canonical", resolvedCanonical);
    setHreflangLinks(resolvedCanonical);
    setDiscoveryLinks();

    setMetaTag("twitter:card", resolvedTwitter.card);
    setMetaTag("twitter:title", resolvedTwitterTitle);
    setMetaTag("twitter:description", resolvedTwitterDescription);
    setMetaTag("twitter:image", resolvedTwitterImage);
    setMetaTag("twitter:site", "@Wixwave");
    setMetaTag("author", "Wixwave");
    setMetaTag("publisher", "Wixwave");
    setMetaTag("application-name", "Wixwave");
    setMetaTag("format-detection", "telephone=no");

    setMetaTag("abstract", resolvedAeo.abstract || normalizedDescription);
    setMetaTag("summary", resolvedAeo.summary || normalizedDescription);
    setMetaTag("topic", resolvedAeo.topic);
    setMetaTag("pagetype", resolvedAeo.pagetype);
    setMetaTag("coverage", resolvedAeo.coverage);
    setMetaTag("audience", resolvedAeo.audience);

    if (jsonLdArray) {
      setMultipleJsonLd(jsonLdArray);
      return;
    }

    removePageJsonLdScripts();
    setJsonLd("seo-json-ld", jsonLd);
  }, [
    normalizedTitle,
    normalizedDescription,
    keywordContent,
    resolvedRobots,
    resolvedAeo,
    resolvedCanonical,
    resolvedOg,
    resolvedOgTitle,
    resolvedOgDescription,
    resolvedOgUrl,
    resolvedOgImage,
    resolvedTwitter,
    resolvedTwitterTitle,
    resolvedTwitterDescription,
    resolvedTwitterImage,
    resolvedArticle,
    resolvedGeo,
    jsonLd,
    jsonLdArray,
  ]);
}
