import { useEffect } from "react";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "../seo/siteJsonLd";

const ORG_SCRIPT_ID = "wixwave-schema-org-global";
const WEB_SCRIPT_ID = "wixwave-schema-website-global";

function upsertSiteScript(scriptId, data) {
  if (typeof document === "undefined") return;
  const jsonText = JSON.stringify(data);
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld-site", "true");
    document.head.appendChild(script);
  }
  script.textContent = jsonText;
}

/**
 * Persistent Organization + WebSite JSON-LD on every route.
 * Page-level scripts managed by useSeo use data-seo-jsonld-page only.
 */
export default function GlobalJsonLd() {
  useEffect(() => {
    upsertSiteScript(ORG_SCRIPT_ID, getOrganizationJsonLd());
    upsertSiteScript(WEB_SCRIPT_ID, getWebsiteJsonLd());
  }, []);

  return null;
}
