export function buildFaqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

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
