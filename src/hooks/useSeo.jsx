import { useEffect } from "react";

function setMetaTag(name, content, isProperty = false) {
  if (!content) return;
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.querySelector(selector);
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

function setLinkRel(rel, href) {
  if (!href) return;
  let link = document.querySelector(`link[rel='${rel}']`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setJsonLd(id, json) {
  if (!json) return;
  const jsonString = JSON.stringify(json);
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = jsonString;
}

export default function useSeo({
  title,
  description,
  canonical,
  keywords,
  robots,
  og = {},
  twitter = {},
  jsonLd,
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", Array.isArray(keywords) ? keywords.join(", ") : keywords);
    if (robots) setMetaTag("robots", robots);

    const resolvedOgTitle = og.title || title;
    const resolvedOgDescription = og.description || description;
    if (resolvedOgTitle) setMetaTag("og:title", resolvedOgTitle, true);
    if (resolvedOgDescription) setMetaTag("og:description", resolvedOgDescription, true);
    if (og.type) setMetaTag("og:type", og.type, true);
    if (og.url || canonical) setMetaTag("og:url", og.url || canonical, true);
    if (og.image) setMetaTag("og:image", og.image, true);
    if (og.siteName) setMetaTag("og:site_name", og.siteName, true);
    if (og.locale) setMetaTag("og:locale", og.locale, true);

    if (canonical) setLinkRel("canonical", canonical);

    const resolvedTwitterTitle = twitter.title || title;
    const resolvedTwitterDescription = twitter.description || description;
    if (twitter.card || og.image) setMetaTag("twitter:card", twitter.card || "summary_large_image");
    if (resolvedTwitterTitle) setMetaTag("twitter:title", resolvedTwitterTitle);
    if (resolvedTwitterDescription) setMetaTag("twitter:description", resolvedTwitterDescription);
    if (twitter.image || og.image) setMetaTag("twitter:image", twitter.image || og.image);

    if (jsonLd) setJsonLd("seo-json-ld", jsonLd);
  }, [
    title,
    description,
    canonical,
    keywords,
    robots,
    // stabilize object deps to avoid reruns on new literals
    JSON.stringify(og),
    JSON.stringify(twitter),
    JSON.stringify(jsonLd),
  ]);
}
