/**
 * Shared SEO / GEO / AEO configuration.
 * Single source for prerender (Node) and client (Vite) builds.
 */

import {
  aboutFaqs,
  appDevFaqs,
  brandingFaqs,
  gurugramLandingFaqs,
  homeEntityFaqs,
  paidAdsFaqs,
  patnaLandingFaqs,
  seoFaqs,
  servicesHubFaqs,
  socialMediaFaqs,
  webDevFaqs,
} from "../data/serviceFaqs.js";

export const OG_IMAGE_DIMENSIONS = {
  width: "1200",
  height: "630",
};

export const DEFAULT_OG_IMAGE_ALT = "Wixwave digital agency logo";

/** FAQ registry keyed by siteRoutes `faqKey`. */
export const FAQ_BY_KEY = {
  home: homeEntityFaqs,
  about: aboutFaqs,
  services: servicesHubFaqs,
  "web-dev": webDevFaqs,
  "app-dev": appDevFaqs,
  seo: seoFaqs,
  branding: brandingFaqs,
  "social-media": socialMediaFaqs,
  "paid-ads": paidAdsFaqs,
  patna: patnaLandingFaqs,
  gurugram: gurugramLandingFaqs,
};

/** Geo meta overrides by areaServed or explicit route.geo. */
export function geoForRoute(route) {
  if (route?.geo) return route.geo;

  const area = route?.areaServed ? String(route.areaServed).toLowerCase() : "";

  const patna = {
    region: "IN-BR",
    placename: "Patna, Bihar, India",
    position: "25.5941;85.1376",
    icbm: "25.5941, 85.1376",
  };

  if (!area || area.includes("patna")) return patna;

  if (area.includes("gurugram") || area.includes("gurgaon")) {
    return {
      region: "IN-HR",
      placename: "Gurugram (Gurgaon), Haryana, India",
      position: "28.4595;77.0266",
      icbm: "28.4595, 77.0266",
    };
  }

  return {
    region: "IN",
    placename: "Patna & Gurugram, India",
    position: "28.4595;77.0266",
    icbm: "28.4595, 77.0266",
  };
}

/** hreflang links — en-IN + x-default only (no Hindi pages yet). */
export function hreflangLinksFor(canonical) {
  return [
    { hreflang: "en-IN", href: canonical },
    { hreflang: "x-default", href: canonical },
  ];
}
