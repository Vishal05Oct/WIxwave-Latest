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
  og = {},
  jsonLd,
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", Array.isArray(keywords) ? keywords.join(", ") : keywords);

    if (og.title) setMetaTag("og:title", og.title, true);
    if (og.description) setMetaTag("og:description", og.description, true);
    if (og.type) setMetaTag("og:type", og.type, true);
    if (og.url) setMetaTag("og:url", og.url, true);
    if (og.image) setMetaTag("og:image", og.image, true);

    if (canonical) setLinkRel("canonical", canonical);

    if (jsonLd) setJsonLd("seo-json-ld", jsonLd);
  }, [title, description, canonical, keywords, og, jsonLd]);
}
