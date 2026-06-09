import { absoluteUrl } from "../seo/siteJsonLd.js";

/** @param {string} [pageCanonical] — adds stable @id for this URL */
export function buildFaqJsonLd(items, pageCanonical) {
  const pageUrl = pageCanonical ? absoluteUrl(pageCanonical) : null;
  const base = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-IN",
    mainEntity: items.map((item, index) => ({
      "@type": "Question",
      ...(pageUrl ? { "@id": `${pageUrl}#faq-q${index + 1}` } : {}),
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  if (pageUrl) {
    base["@id"] = `${pageUrl}#faq`;
    base.url = pageUrl;
  }
  return base;
}

/** Home page entity FAQs for Google AI / answer engines. */
export const homeEntityFaqs = [
  {
    question: "What is Wixwave?",
    answer:
      "Wixwave is a digital agency that helps businesses in Patna and Gurugram grow online through website development, app development, SEO, branding, social media, and paid advertising.",
  },
  {
    question: "What services does Wixwave offer?",
    answer:
      "Wixwave offers website development, app development, SEO services, branding, social media marketing, and paid ads management for startups and established businesses in India.",
  },
  {
    question: "Does Wixwave work with businesses in Patna and Gurugram?",
    answer:
      "Yes. Wixwave serves Patna, Gurugram (Gurgaon), and clients across India with local SEO, custom websites, Shopify stores, and digital marketing.",
  },
  {
    question: "How can I contact Wixwave?",
    answer:
      "Reach Wixwave at connect@wixwave.co, +917479787717, or https://wixwave.co/contact for a free consultation.",
  },
];

/** Gurugram location landing (/website-development-gurugram) */
export const gurugramLandingFaqs = [
  {
    question: "Who is the best website development company in Gurugram (Gurgaon)?",
    answer:
      "The best website development company in Gurugram depends on your goals, budget, and timeline. Compare portfolio quality, SEO-ready builds, Shopify expertise, and post-launch support. Wixwave serves Gurugram and Gurgaon businesses with performance-first websites and ongoing digital marketing.",
  },
  {
    question: "What does website development cost in Gurugram?",
    answer:
      "Website development pricing in Gurugram varies by pages, design complexity, ecommerce needs, and integrations. Business websites range from brochure sites to larger custom builds. Wixwave provides a clear scope and quote before development starts.",
  },
  {
    question: "Do you offer SEO-friendly website development in Gurugram?",
    answer:
      "Yes. Wixwave builds SEO-friendly websites in Gurugram with fast load times, mobile-first layouts, clean code, metadata, internal linking, and content structure that supports local rankings on Google.",
  },
  {
    question: "How long does website development take in Gurugram?",
    answer:
      "A focused business website often takes 1–3 weeks. Shopify or larger custom projects may take 2–6 weeks depending on content readiness, features, and revision rounds.",
  },
  {
    question: "Do you provide Shopify development in Gurugram?",
    answer:
      "Yes. Wixwave offers Shopify store development in Gurugram including theme customization, product setup, payment gateways, app integrations, and performance optimization for ecommerce growth.",
  },
];

/** Patna location landing (/website-development-patna) */
export const patnaLandingFaqs = [
  {
    question: "Who is the best website development company in Patna?",
    answer:
      "The best website development company in Patna depends on your goals, budget, and timeline. Compare portfolio quality, SEO-ready builds, post-launch support, and local delivery experience. Wixwave serves Patna businesses with performance-first websites, Shopify stores, and ongoing support.",
  },
  {
    question: "What does a website development company in Patna typically charge?",
    answer:
      "Pricing varies by pages, design complexity, ecommerce needs, and integrations. Most business websites in Patna range from affordable brochure sites to larger custom builds. Wixwave shares a clear scope and quote before development starts.",
  },
  {
    question: "Do you offer SEO-friendly website development in Patna?",
    answer:
      "Yes. Wixwave builds SEO-friendly websites in Patna with fast load times, mobile-first layouts, clean code, metadata, internal linking, and content structure that supports local rankings on Google.",
  },
  {
    question: "How long does website development take in Patna?",
    answer:
      "A focused business website often takes 1–3 weeks. Shopify or larger custom projects may take 2–6 weeks depending on content readiness, features, and revision rounds.",
  },
];

export const webDevFaqs = [
  {
    question: "What is included in website development services?",
    answer:
      "Our website development services include planning, UI design, responsive development, speed optimization, technical SEO setup, content sections, and launch support for business websites.",
  },
  {
    question: "How long does custom website development take?",
    answer:
      "Custom website development usually takes 2 to 6 weeks depending on the number of pages, features, revisions, content readiness, and integrations required.",
  },
  {
    question: "Do you offer Shopify website development services for online stores?",
    answer:
      "Yes. We provide Shopify website development services including store design, custom themes and theme development, product setup, payment gateways, and app integration so your online store runs smoothly and stays user friendly.",
  },
  {
    question: "Do you provide ongoing support after launching a Shopify store?",
    answer:
      "Yes. We offer ongoing support after launch—bug fixes, updates, performance improvements, and reliable Shopify maintenance—so your store keeps improving as your business grows.",
  },
  {
    question: "Will my website be SEO-friendly and mobile responsive?",
    answer:
      "Yes, every website is built to be mobile responsive and SEO-friendly with clean code, strong page structure, fast loading, and technical SEO best practices.",
  },
  {
    question: "How much does website development cost in Patna and Gurugram?",
    answer:
      "Website development cost depends on scope, design complexity, features, and content, but we provide clear proposals for businesses in Patna, Gurugram, and Gurgaon before development begins.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes, we provide website maintenance, updates, performance improvements, bug fixes, and SEO support after launch so your website keeps growing with your business.",
  },
];

export const appDevFaqs = [
  {
    question: "What app development services do you offer?",
    answer:
      "We offer mobile app development, web app development, UI-focused product design, backend integration, testing, deployment support, and post-launch app maintenance services.",
  },
  {
    question: "Do you build Android and iOS mobile apps?",
    answer:
      "Yes, we build Android and iOS mobile apps with user-friendly interfaces, scalable architecture, and features tailored to startup, business, and enterprise requirements.",
  },
  {
    question: "How long does custom mobile app development take?",
    answer:
      "Custom mobile app development timelines depend on features, integrations, and complexity, but many MVP and business app projects take several weeks to a few months.",
  },
  {
    question: "How much does app development cost?",
    answer:
      "App development cost depends on platform choice, features, admin dashboard needs, integrations, and testing scope, so we share a tailored estimate after understanding your app goals.",
  },
  {
    question: "Do you provide app maintenance and updates after launch?",
    answer:
      "Yes, we provide ongoing app maintenance, feature updates, bug fixes, and performance improvements so your mobile or web app stays reliable and competitive.",
  },
];

export const seoFaqs = [
  {
    question: "What is included in your SEO services?",
    answer:
      "Our SEO services include keyword research, on-page SEO, technical SEO, content optimization, internal linking, performance improvements, and reporting focused on rankings and leads.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes a few months to show meaningful results because rankings depend on competition, website quality, content strength, and technical SEO improvements.",
  },
  {
    question: "Do you provide local SEO services in Patna and Gurugram?",
    answer:
      "Yes, we provide local SEO services for businesses in Patna, Gurugram, and Gurgaon, including local keyword targeting, Google Business Profile support, and location-focused content strategy.",
  },
  {
    question: "Can you improve rankings for an existing website?",
    answer:
      "Yes, we can audit and improve an existing website through technical SEO fixes, content updates, speed optimization, and better keyword targeting to grow organic traffic.",
  },
  {
    question: "How do you choose SEO keywords for a business website?",
    answer:
      "We choose SEO keywords by studying your services, target audience, search intent, competition, and local opportunities so the strategy supports rankings, traffic, and conversions.",
  },
];

export const brandingFaqs = [
  {
    question: "What is included in branding and logo design services?",
    answer:
      "Our branding and logo design services can include logo creation, brand identity design, color systems, typography direction, marketing visuals, and brand usage guidance.",
  },
  {
    question: "Do you create complete brand identity systems?",
    answer:
      "Yes, we create complete brand identity systems that help businesses stay consistent across websites, social media, packaging, advertising, and digital marketing campaigns.",
  },
  {
    question: "How long does branding design take?",
    answer:
      "Branding design timelines depend on the depth of strategy, number of design routes, and revision rounds, but most branding projects move in structured phases over several weeks.",
  },
  {
    question: "Can branding improve website conversions and marketing performance?",
    answer:
      "Yes, strong branding improves trust, recognition, and message clarity, which can strengthen website conversions, ad performance, and overall marketing consistency.",
  },
  {
    question: "Do you offer branding services for startups and small businesses?",
    answer:
      "Yes, we offer branding services for startups, small businesses, and growing companies that need a clear visual identity and professional market positioning.",
  },
];

export const socialMediaFaqs = [
  {
    question: "What is included in social media marketing services?",
    answer:
      "Our social media marketing services include content planning, creative design, posting support, account management, audience engagement, and performance reporting.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We manage major social media platforms such as Instagram, Facebook, LinkedIn, and other channels based on your audience, goals, and content strategy.",
  },
  {
    question: "Do you create social media content and monthly calendars?",
    answer:
      "Yes, we create social media content, post designs, captions, and monthly content calendars to keep your brand active and consistent online.",
  },
  {
    question: "How does social media marketing help generate leads?",
    answer:
      "Social media marketing helps generate leads by improving reach, building trust, driving traffic to landing pages, and supporting remarketing and sales campaigns.",
  },
  {
    question: "Do you offer paid social media campaigns too?",
    answer:
      "Yes, we can support paid social media campaigns alongside organic social media management to help brands increase reach, engagement, and lead generation.",
  },
];

export const paidAdsFaqs = [
  {
    question: "What platforms do your paid advertising services cover?",
    answer:
      "Our paid advertising services cover Google Ads, Facebook Ads, Instagram campaigns, and other performance marketing channels based on your audience and goals.",
  },
  {
    question: "Do you manage Google Ads and Facebook Ads campaigns?",
    answer:
      "Yes, we manage Google Ads and Facebook Ads campaigns, including keyword targeting, audience strategy, ad creatives, bidding, tracking, and reporting.",
  },
  {
    question: "How do you improve ROI from paid ads?",
    answer:
      "We improve ROI from paid ads through campaign structure, audience targeting, landing page alignment, conversion tracking, creative testing, and ongoing optimization.",
  },
  {
    question: "How much budget do I need for PPC advertising?",
    answer:
      "PPC advertising budget depends on your industry, competition, target locations, and goals, but we recommend a workable testing budget based on lead volume and cost targets.",
  },
  {
    question: "Do you create landing pages and conversion tracking for paid campaigns?",
    answer:
      "Yes, we can help with landing page recommendations, conversion tracking, analytics setup, and campaign funnel improvements so paid ads deliver measurable results.",
  },
];

/** Services hub (/services) — matches visible FAQ accordion */
export const servicesHubFaqs = [
  {
    question: "What digital marketing and website development services do you offer?",
    answer:
      "We offer website design and development, mobile app development, branding and graphic design, SEO services, social media management, and performance marketing for business growth in Patna, Gurugram, and Gurgaon.",
  },
  {
    question: "How can I contact Wixwave for website development or SEO services?",
    answer:
      "You can contact Wixwave through our contact page or call +917479787717 to discuss website development, SEO services, app development, branding, or digital marketing requirements.",
  },
  {
    question: "Do you offer custom website development services in Patna and Gurugram?",
    answer:
      "Yes, we provide custom website development services tailored to your business goals in Patna and Gurugram, whether you need an ecommerce website, business website, landing page, or portfolio website.",
  },
  {
    question: "What is SEO and why is it important for website growth?",
    answer:
      "SEO, or search engine optimization, improves your website structure, content, and authority so it ranks higher on Google and drives more organic traffic and leads for businesses in Patna and Gurugram.",
  },
  {
    question: "Do you offer mobile app development services?",
    answer:
      "Yes, we offer mobile app development services for iOS and Android, with a focus on user experience, performance, and scalable business apps.",
  },
  {
    question: "What is branding and graphic design for business growth?",
    answer:
      "Branding and graphic design help shape your business identity through logos, visual systems, marketing creatives, and brand assets that improve recognition and trust.",
  },
  {
    question: "How long does custom website development take?",
    answer:
      "Custom website development timelines depend on page count, features, content, and revisions, but most business websites take around 4 to 8 weeks to complete.",
  },
  {
    question: "Do you offer website maintenance and support after development?",
    answer:
      "Yes, we offer website maintenance and support after development so your website or app stays updated, secure, fast, and optimized for growth.",
  },
  {
    question: "How do you handle SEO for a business website?",
    answer:
      "We handle SEO through keyword research, on-page optimization, technical SEO, content improvements, internal linking, and performance enhancements that support higher rankings.",
  },
  {
    question: "What is performance marketing and how does it generate leads?",
    answer:
      "Performance marketing is a results-driven advertising strategy where you pay for actions like clicks, leads, or sales, making it an effective way to generate measurable ROI and business growth.",
  },
];

/** About page (/about) */
export const aboutFaqs = [
  {
    question: "What is Wixwave and what does the company do?",
    answer:
      "Wixwave is a digital agency that helps businesses grow online through website development, app development, SEO, branding, social media marketing, and paid advertising, with strong delivery in Patna and Gurugram (Gurgaon).",
  },
  {
    question: "Where is Wixwave located and which cities do you serve?",
    answer:
      "Wixwave serves businesses across India with a focus on Patna, Gurugram, and Gurgaon. We work with startups, local businesses, and growing brands that need strategy-led digital execution.",
  },
  {
    question: "Why choose Wixwave over other website development companies?",
    answer:
      "Wixwave combines strategy, design, development, and marketing in one workflow. Projects are built performance-first with SEO-ready structure, clear communication, and long-term support after launch.",
  },
  {
    question: "What types of businesses does Wixwave work with?",
    answer:
      "We partner with startups, local service businesses, ecommerce brands, and established companies that need websites, apps, or marketing systems designed to generate leads and revenue.",
  },
  {
    question: "Does Wixwave provide SEO and marketing after website launch?",
    answer:
      "Yes. We offer SEO services, content support, paid ads management, and social media marketing so your website continues to attract traffic and convert visitors after launch.",
  },
  {
    question: "How do I start a project with Wixwave?",
    answer:
      "Share your goals through our contact page. We discuss scope, timeline, and budget, then propose a clear plan for website development, app development, or digital marketing.",
  },
];
