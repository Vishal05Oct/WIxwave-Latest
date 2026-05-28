/** Central Schema.org identifiers + builders for https://schema.org */

export const SITE = {
  name: "Wixwave",
  url: "https://wixwave.co",
  logo: "https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png",
  telephone: "+917479787717",
  description:
    "Wixwave is a full-service digital agency offering website development, app development, SEO, branding, and digital marketing for businesses in Patna, Bihar, Gurugram, and Gurgaon.",
  email: "connect@wixwave.co",
  foundingDate: "2020",
  knowsAbout: [
    "Website Development",
    "App Development",
    "Search Engine Optimization",
    "Branding",
    "Social Media Marketing",
    "Paid Advertising",
    "Local SEO",
    "Shopify Development",
  ],
  sameAs: [
    "https://www.linkedin.com/company/wixwave/",
    "https://www.facebook.com/people/WixWave-The-Digital-Solutions/61570872845668/",
    "https://www.instagram.com/wixwave.co/",
    "https://x.com/Wixwave",
    "https://maps.app.goo.gl/YSQFAgevasfNKmaU6",
  ],
};

/** Core service offerings for ItemList / AEO entity clarity */
export const SERVICE_CATALOG = [
  {
    name: "Website Development",
    path: "/services/web-dev",
    description: "Fast, SEO-optimized business websites for Patna and Gurugram.",
  },
  {
    name: "App Development",
    path: "/services/app-dev",
    description: "Custom mobile and web apps for startups and enterprises.",
  },
  {
    name: "SEO Services",
    path: "/services/seo",
    description: "Technical SEO, on-page optimization, and local SEO in India.",
  },
  {
    name: "Branding",
    path: "/services/branding",
    description: "Logo design and brand identity systems for growing businesses.",
  },
  {
    name: "Social Media Marketing",
    path: "/services/social-media",
    description: "Content, strategy, and account management across major platforms.",
  },
  {
    name: "Paid Advertising",
    path: "/services/paid-ads",
    description: "Google Ads and Meta campaigns optimized for ROI.",
  },
];

export const SITE_ORGANIZATION_ID = `${SITE.url}/#organization`;
export const SITE_WEBSITE_ID = `${SITE.url}/#website`;
export const SITE_LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`;

function stripTailBrand(title) {
  if (!title) return SITE.name;
  return title
    .replace(/\s*\|\s*Wixwave(\s*\|\s*Wixwave Blog)?\s*$/i, "")
    .trim() || SITE.name;
}

/** Absolute URL helpers for breadcrumbs */
export function absoluteUrl(canonicalOrPath) {
  if (!canonicalOrPath) return `${SITE.url}/`;
  const s = String(canonicalOrPath).trim();
  if (s.startsWith("http")) return s;
  const path = s.startsWith("/") ? s : `/${s}`;
  return `${SITE.url}${path}`;
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": SITE_ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    description: SITE.description,
    telephone: SITE.telephone,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    knowsAbout: SITE.knowsAbout,
    sameAs: SITE.sameAs,
    areaServed: [
      { "@type": "City", name: "Patna" },
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "Country", name: "India" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.telephone,
        email: SITE.email,
        contactType: "sales",
        areaServed: ["IN"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": SITE_ORGANIZATION_ID },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SITE_LOCAL_BUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    image: SITE.logo,
    description: SITE.description,
    telephone: SITE.telephone,
    email: SITE.email,
    priceRange: "$$",
    currenciesAccepted: "INR",
    areaServed: [
      { "@type": "City", name: "Patna" },
      { "@type": "AdministrativeArea", name: "Bihar" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "Country", name: "India" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Bihar",
      addressLocality: "Patna",
      streetAddress: "Patna, Bihar",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.5941,
      longitude: 85.1376,
    },
    hasMap: "https://maps.app.goo.gl/YSQFAgevasfNKmaU6",
    sameAs: SITE.sameAs,
    parentOrganization: { "@id": SITE_ORGANIZATION_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: SERVICE_CATALOG.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE.url}${s.path}`,
          description: s.description,
        },
      })),
    },
  };
}

/**
 * Generic WebPage referencing global WebSite + Organization.
 * @param {object} opts
 * @param {string} opts.canonical
 * @param {string} opts.title SEO title (pipe suffix stripped for `name`)
 * @param {string} [opts.name] Explicit visible name override
 * @param {string} opts.description
 */
export function buildWebPageJsonLd({
  canonical,
  title,
  name,
  description,
  about,
}) {
  const url = absoluteUrl(canonical);
  const pageName = name ?? stripTailBrand(title);
  const idUrl = `${url}#webpage`;
  const out = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": idUrl,
    url,
    name: pageName,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_WEBSITE_ID },
    publisher: { "@id": SITE_ORGANIZATION_ID },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "main p"],
    },
  };
  if (about) out.about = about;
  return out;
}

/** Service detail page schema (AEO-friendly entity) */
export function buildServiceJsonLd({
  canonical,
  name,
  description,
  serviceType,
  areaServed,
}) {
  const url = absoluteUrl(canonical);
  const cities = areaServed
    ? areaServed === "Patna"
      ? [
          { "@type": "City", name: "Patna" },
          { "@type": "AdministrativeArea", name: "Bihar" },
          { "@type": "Country", name: "India" },
        ]
      : [{ "@type": "City", name: areaServed }]
    : [
        { "@type": "City", name: "Patna" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Gurgaon" },
      ];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    url,
    description,
    serviceType: serviceType || name,
    areaServed: cities,
    provider: { "@id": SITE_ORGANIZATION_ID },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

/** Services hub ItemList for answer engines */
export function buildServicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/services#itemlist`,
    name: "Wixwave Digital Services",
    itemListElement: SERVICE_CATALOG.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE.url}${s.path}`,
      description: s.description,
    })),
  };
}

/** Contact page schema */
export function buildContactPageJsonLd({ canonical, title, description }) {
  const url = absoluteUrl(canonical);
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#contactpage`,
    url,
    name: stripTailBrand(title),
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE_WEBSITE_ID },
    publisher: { "@id": SITE_ORGANIZATION_ID },
    mainEntity: {
      "@type": "Organization",
      "@id": SITE_ORGANIZATION_ID,
      name: SITE.name,
      telephone: SITE.telephone,
      email: SITE.email,
      url: SITE.url,
    },
  };
}

/** Blog index CollectionPage + blog post references */
export function buildBlogCollectionJsonLd(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/blog#collection`,
    name: "Wixwave Blog",
    url: `${SITE.url}/blog`,
    description:
      "Practical insights on website development, SEO, and digital growth for businesses in Patna and Gurugram.",
    isPartOf: { "@id": SITE_WEBSITE_ID },
    publisher: { "@id": SITE_ORGANIZATION_ID },
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };
}

/** @param {{ name: string, item: string }[]} crumbs — `item` must be absolute URLs */
export function buildBreadcrumbListJsonLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

/** @param {'about'|'contact'|'services'|'portfolio'|'blog'|'web-dev'|'app-dev'|'seo'|'branding'|'social-media'|'paid-ads'|'gurugram'|'patna'} key */
export function breadcrumbsFor(key, canonical) {
  const home = SITE.url + "/";
  const servicesUrl = SITE.url + "/services";
  const u = absoluteUrl(canonical);

  switch (key) {
    case "about":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "About", item: u },
      ]);
    case "contact":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Contact", item: u },
      ]);
    case "services":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: u },
      ]);
    case "portfolio":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Portfolio", item: u },
      ]);
    case "blog":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Blog", item: u },
      ]);
    case "web-dev":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "Website Development", item: u },
      ]);
    case "app-dev":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "App Development", item: u },
      ]);
    case "seo":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "SEO Services", item: u },
      ]);
    case "branding":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "Branding", item: u },
      ]);
    case "social-media":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "Social Media Marketing", item: u },
      ]);
    case "paid-ads":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: "Services", item: servicesUrl },
        { name: "Paid Advertising", item: u },
      ]);
    case "gurugram":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        {
          name: "Website Development Services in Gurgaon",
          item: u,
        },
      ]);
    case "patna":
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        {
          name: "Website Development Services in Patna",
          item: u,
        },
      ]);
    default:
      return buildBreadcrumbListJsonLd([
        { name: "Home", item: home },
        { name: SITE.name, item: u },
      ]);
  }
}

export function buildBlogPostingJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}) {
  const pageUrl = absoluteUrl(url);
  const json = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url: pageUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Organization", "@id": SITE_ORGANIZATION_ID },
    publisher: {
      "@type": "Organization",
      "@id": SITE_ORGANIZATION_ID,
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
    },
  };
  if (image) json.image = image;
  return json;
}

export function blogHeadlineFromSeoTitle(title) {
  if (!title) return SITE.name;
  return title.replace(/\s*\|\s*Wixwave Blog\s*$/i, "").trim() || SITE.name;
}

export function buildBlogBreadcrumbsJsonLd({ articleName, canonicalUrl }) {
  const home = SITE.url + "/";
  const blogUrl = SITE.url + "/blog";
  const article = absoluteUrl(canonicalUrl);
  return buildBreadcrumbListJsonLd([
    { name: "Home", item: home },
    { name: "Blog", item: blogUrl },
    { name: articleName, item: article },
  ]);
}
