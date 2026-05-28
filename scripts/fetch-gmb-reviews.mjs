#!/usr/bin/env node
// Fetch Google My Business (Places) reviews for a Place ID and save to data/gmb-reviews.json
// Usage: node scripts/fetch-gmb-reviews.mjs <PLACE_ID> <API_KEY>
// Example: node scripts/fetch-gmb-reviews.mjs ChIJ... YOUR_API_KEY

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const [,, placeId, apiKey] = process.argv;
if (!placeId || !apiKey) {
  console.error("Usage: node scripts/fetch-gmb-reviews.mjs <PLACE_ID> <API_KEY>");
  process.exit(2);
}

async function fetchPlaceDetails(pid, key) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(pid)}&fields=rating,reviews,user_ratings_total&key=${encodeURIComponent(key)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}

(async () => {
  try {
    const json = await fetchPlaceDetails(placeId, apiKey);
    if (json.status !== "OK") {
      console.error("Google Places API error:", json.status, json.error_message || "");
      process.exit(3);
    }

    const result = json.result || {};
    const out = {
      aggregateRating: result.rating ? { "@type": "AggregateRating", ratingValue: result.rating, ratingCount: result.user_ratings_total || 0 } : null,
      reviews: Array.isArray(result.reviews)
        ? result.reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author_name },
            datePublished: r.relative_time_description || undefined,
            reviewBody: r.text,
            reviewRating: r.rating ? { "@type": "Rating", ratingValue: r.rating } : undefined,
          }))
        : [],
      fetchedAt: new Date().toISOString(),
      placeId,
    };

    const outDir = join(process.cwd(), "data");
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "gmb-reviews.json"), JSON.stringify(out, null, 2), "utf8");
    console.log("Wrote data/gmb-reviews.json with", out.reviews.length, "reviews.");
  } catch (err) {
    console.error(err);
    process.exit(4);
  }
})();
