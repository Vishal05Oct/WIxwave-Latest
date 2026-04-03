import { useEffect, useMemo } from "react";

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

function setLinkRel(rel, href) {
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
    document.head.appendChild(script);
  }
  script.textContent = jsonString;
}

function setMultipleJsonLd(jsonLdArray) {
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach((script) => script.remove());

  if (!jsonLdArray || !Array.isArray(jsonLdArray)) return;

  jsonLdArray.forEach((jsonLd) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
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
  og = {},
  twitter = {},
  jsonLd,
  jsonLdArray,
}) {
  const currentUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : undefined;

  const keywordContent = useMemo(
    () => (Array.isArray(keywords) ? keywords.join(", ") : keywords),
    [keywords]
  );

  const resolvedCanonical = canonical || currentUrl;
  const resolvedRobots = robots ?? "index,follow";

  const resolvedOg = useMemo(
    () => ({
      type: "website",
      siteName: "Wixwave",
      locale: "en_IN",
      image: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
      ...og,
    }),
    [og]
  );

  const resolvedOgTitle = resolvedOg.title || title;
  const resolvedOgDescription = resolvedOg.description || description;
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
    resolvedTwitter.title || resolvedOgTitle || title;
  const resolvedTwitterDescription =
    resolvedTwitter.description || resolvedOgDescription || description;
  const resolvedTwitterImage = resolvedTwitter.image || resolvedOgImage;

  useEffect(() => {
    if (title) document.title = title;

    setMetaTag("description", description);
    setMetaTag("keywords", keywordContent);
    setMetaTag("robots", resolvedRobots);

    setMetaTag("og:title", resolvedOgTitle, true);
    setMetaTag("og:description", resolvedOgDescription, true);
    setMetaTag("og:type", resolvedOg.type, true);
    setMetaTag("og:url", resolvedOgUrl, true);
    setMetaTag("og:image", resolvedOgImage, true);
    setMetaTag("og:site_name", resolvedOg.siteName, true);
    setMetaTag("og:locale", resolvedOg.locale, true);

    setLinkRel("canonical", resolvedCanonical);

    setMetaTag("twitter:card", resolvedTwitter.card);
    setMetaTag("twitter:title", resolvedTwitterTitle);
    setMetaTag("twitter:description", resolvedTwitterDescription);
    setMetaTag("twitter:image", resolvedTwitterImage);

    if (jsonLdArray) {
      setMultipleJsonLd(jsonLdArray);
      return;
    }

    setJsonLd("seo-json-ld", jsonLd);
  }, [
    title,
    description,
    keywordContent,
    resolvedRobots,
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
    jsonLd,
    jsonLdArray,
  ]);
}