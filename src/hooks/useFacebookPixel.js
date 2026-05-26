import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function initFacebookPixel(pixelId) {
  if (!pixelId) return;
  if (typeof window === "undefined") return;

  // If fbq already exists, we can safely call init/track.
  if (typeof window.fbq === "function") {
    try {
      window.fbq("init", pixelId);
    } catch {
      // ignore
    }
    return;
  }

  // Standard fbq stub so calls made before the library loads are queued.
  const w = window;
  const d = document;

  const fbqStub = function (...args) {
    if (fbqStub.callMethod) {
      fbqStub.callMethod.apply(fbqStub, args);
      return;
    }
    fbqStub.queue.push(args);
  };

  if (!w._fbq) w._fbq = fbqStub;
  w.fbq = fbqStub;
  w.fbq.queue = w.fbq.queue || [];
  w.fbq.loaded = true;
  w.fbq.version = "2.0";

  const script = d.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  // Insert the library once.
  const firstScript = d.getElementsByTagName("script")[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    d.head.appendChild(script);
  }

  // Init + a first page view (additional tracking happens on route changes).
  try {
    w.fbq("init", pixelId);
  } catch {
    // ignore
  }
}

function trackPageView(location) {
  if (!window.fbq) return;
  try {
    // Pass URL so the backend can dedupe/segment on full path.
    window.fbq("track", "PageView", {
      page_path: location.pathname + location.search,
    });
  } catch {
    // ignore
  }
}

export function FacebookPixelTracker() {
  const location = useLocation();
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    initFacebookPixel(pixelId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!pixelId) return;
    if (!window.fbq) return;
    trackPageView(location);
  }, [location, pixelId]);

  return null;
}

