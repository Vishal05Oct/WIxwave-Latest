/**
 * Answer Engine Optimization (AEO) for Google AI Search / AI Overviews.
 * Shared by useSeo, useRouteSeo, and prerender.
 */

function stripBrand(title) {
  return (title || "Wixwave")
    .replace(/\s*\|\s*Wixwave(\s*Blog)?\s*$/i, "")
    .trim();
}

/** Snippet-friendly bot directives (max-snippet helps AI extract answers). */
export const GOOGLE_AI_BOT =
  "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

/** HowTo process steps keyed by siteRoutes `faqKey` / service pages. */
export const HOWTO_BY_KEY = {
  services: [
    {
      name: "Share goals and scope",
      description:
        "Tell Wixwave your business goals, target audience, locations (Patna, Gurugram, or pan-India), and whether you need a website, app, SEO, or full marketing support.",
    },
    {
      name: "Review strategy and proposal",
      description:
        "Receive a clear plan covering site structure, SEO foundations, timelines, deliverables, and investment aligned to your growth targets.",
    },
    {
      name: "Design, build, and optimize",
      description:
        "Wixwave executes design, development, technical SEO, performance optimization, and content structure with conversion-first UX.",
    },
    {
      name: "Launch and measure growth",
      description:
        "Go live with tracking, Search Console readiness, and optional ongoing SEO, ads, or social support to improve rankings and leads.",
    },
  ],
  "web-dev": [
    {
      name: "Discovery and sitemap planning",
      description:
        "Define pages, offers, and conversion goals. Plan URL structure, internal links, and SEO-ready information architecture.",
    },
    {
      name: "UI design and content structure",
      description:
        "Create mobile-first layouts with clear headings, service sections, trust proof, and calls to action that match search intent.",
    },
    {
      name: "Development and performance tuning",
      description:
        "Build responsive pages with clean code, fast load times, Core Web Vitals improvements, schema markup, and analytics.",
    },
    {
      name: "QA, launch, and SEO handoff",
      description:
        "Test across devices, publish, submit sitemap, and align metadata and technical SEO for indexing in Google Search.",
    },
  ],
  "app-dev": [
    {
      name: "Product scoping",
      description:
        "Define users, core features, platforms (iOS, Android, web), integrations, and success metrics for the app.",
    },
    {
      name: "UX flows and prototyping",
      description:
        "Map user journeys, wireframes, and UI direction before development to reduce rework and improve adoption.",
    },
    {
      name: "Build and integrate",
      description:
        "Develop scalable front-end and back-end components, APIs, authentication, and third-party integrations as needed.",
    },
    {
      name: "Test, deploy, and support",
      description:
        "Run QA, publish to app stores or web hosting, and provide post-launch fixes and iteration support.",
    },
  ],
  seo: [
    {
      name: "SEO audit and keyword mapping",
      description:
        "Analyze technical health, competitors, and search intent for Patna, Gurugram, and target service keywords.",
    },
    {
      name: "On-page and content optimization",
      description:
        "Improve titles, headings, internal links, metadata, and page copy so pages answer real buyer questions clearly.",
    },
    {
      name: "Technical SEO fixes",
      description:
        "Address crawlability, speed, mobile usability, structured data, canonicals, and indexation issues in Search Console.",
    },
    {
      name: "Track rankings and iterate",
      description:
        "Monitor impressions, clicks, and conversions; refine content and pages based on performance data.",
    },
  ],
  branding: [
    {
      name: "Brand discovery",
      description:
        "Clarify positioning, audience, competitors, and personality traits that should shape the visual identity.",
    },
    {
      name: "Concept and logo exploration",
      description:
        "Present logo directions, color palettes, typography, and visual systems aligned to your market.",
    },
    {
      name: "Identity system delivery",
      description:
        "Finalize logo files, brand guidelines, and marketing-ready assets for web and social use.",
    },
    {
      name: "Rollout across touchpoints",
      description:
        "Apply branding consistently on website, social profiles, ads, and collateral for recognition and trust.",
    },
  ],
  "social-media": [
    {
      name: "Channel and audience audit",
      description:
        "Identify the right platforms, content pillars, and posting cadence for your brand and local market.",
    },
    {
      name: "Content strategy and calendar",
      description:
        "Plan themes, offers, reels/posts, and campaigns that support awareness and lead generation.",
    },
    {
      name: "Creative production",
      description:
        "Design posts, carousels, short videos, and ad creatives aligned with brand guidelines.",
    },
    {
      name: "Publish, engage, and report",
      description:
        "Manage posting, community replies, and monthly performance summaries with optimization recommendations.",
    },
  ],
  "paid-ads": [
    {
      name: "Goal and funnel mapping",
      description:
        "Define lead or sales targets, offers, landing pages, and conversion tracking requirements.",
    },
    {
      name: "Campaign setup",
      description:
        "Structure Google Ads or Meta campaigns with audiences, keywords, creatives, and budgets.",
    },
    {
      name: "Launch and optimize",
      description:
        "Monitor CPL/ROAS, test ads and landing pages, and refine targeting for efficient spend.",
    },
    {
      name: "Scale winning campaigns",
      description:
        "Increase budget on profitable segments and refresh creatives to sustain performance.",
    },
  ],
  patna: [
    {
      name: "Local discovery call",
      description:
        "Discuss your Patna business goals, competitors, and whether you need a business site, Shopify store, or local SEO.",
    },
    {
      name: "Patna-focused site plan",
      description:
        "Plan pages and content that match Patna search intent such as website development company in Patna.",
    },
    {
      name: "Build with local SEO foundations",
      description:
        "Deliver fast, mobile-ready pages with schema, metadata, and internal links for Patna rankings.",
    },
    {
      name: "Launch and local growth support",
      description:
        "Go live and optionally continue SEO, ads, or content support for Patna lead generation.",
    },
  ],
  gurugram: [
    {
      name: "Gurugram project scoping",
      description:
        "Align on Gurugram/Gurgaon audience, service pages, and ecommerce or lead-gen priorities.",
    },
    {
      name: "UX and SEO architecture",
      description:
        "Structure pages for Gurugram keywords and conversion paths with clear service messaging.",
    },
    {
      name: "Development and performance",
      description:
        "Build SEO-ready, high-speed websites or Shopify stores optimized for Gurugram buyers.",
    },
    {
      name: "Post-launch optimization",
      description:
        "Support indexing, local SEO, and ongoing marketing to grow visibility in Gurugram.",
    },
  ],
};

/** Top entity Q&A for Google AI / answer engines (also in llms.txt). */
export const GOOGLE_AI_ENTITY_QA = [
  {
    question: "What is Wixwave?",
    answer:
      "Wixwave is a digital agency in India offering website development, app development, SEO, AEO, branding, social media marketing, and paid advertising, with strong delivery in Patna and Gurugram (Gurgaon).",
  },
  {
    question: "What services does Wixwave provide?",
    answer:
      "Wixwave provides website development, Shopify and ecommerce builds, mobile and web app development, SEO and local SEO, branding and logo design, social media marketing, and Google/Meta paid advertising.",
  },
  {
    question: "Does Wixwave serve Patna and Gurugram?",
    answer:
      "Yes. Wixwave serves businesses in Patna, Bihar and Gurugram (Gurgaon), Haryana, as well as clients across India. Local landing pages: wixwave.co/website-development-patna and wixwave.co/website-development-gurugram.",
  },
  {
    question: "How do I hire Wixwave for website development or SEO?",
    answer:
      "Contact Wixwave at connect@wixwave.co, call +917479787717, or use the contact form at wixwave.co/contact for a free consultation on websites, SEO, apps, or marketing.",
  },
  {
    question: "Is Wixwave good for SEO and Google AI visibility?",
    answer:
      "Wixwave builds SEO-ready websites with technical SEO, structured data (JSON-LD), fast performance, FAQ content, and Search Console-friendly architecture to support Google Search and AI-generated answers.",
  },
];

export function pageTypeForRoute(route) {
  if (route?.type === "article") return "article";
  if (route?.serviceType && route.path?.startsWith("/services/")) return "service";
  if (route?.path?.includes("website-development")) return "local-landing";
  if (route?.path === "/contact") return "contact";
  if (route?.path === "/blog") return "blog-index";
  return "webpage";
}

/** Meta tags consumed by useSeo and prerender for answer engines. */
export function buildAeoMetaForRoute(route) {
  if (!route) return {};
  const topic = stripBrand(route.title || "Wixwave");
  return {
    googlebot: GOOGLE_AI_BOT,
    bingbot: GOOGLE_AI_BOT,
    summary: route.description,
    abstract: route.description,
    topic,
    pagetype: pageTypeForRoute(route),
    coverage: "Patna, Gurugram, Gurgaon, India",
    audience: "businesses, startups, ecommerce brands",
  };
}

/** HTML meta block for prerender (descriptions are pre-escaped by caller). */
export function buildAeoHeadMetaHtml(route, escapeHtml) {
  const meta = buildAeoMetaForRoute(route);
  const safe = (v) => escapeHtml(v || "");
  return `
    <meta name="abstract" content="${safe(meta.abstract)}" />
    <meta name="summary" content="${safe(meta.summary)}" />
    <meta name="topic" content="${safe(meta.topic)}" />
    <meta name="pagetype" content="${safe(meta.pagetype)}" />
    <meta name="coverage" content="${safe(meta.coverage)}" />
    <meta name="audience" content="${safe(meta.audience)}" />`;
}
