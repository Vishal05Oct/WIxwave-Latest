import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import GlobalJsonLd from "./Components/GlobalJsonLd";
import Footer from "./Components/Footer";
import CursorSpotlight from "./Components/CursorSpotlight";
import WhatsappButton from "./Components/WhatsappButton";
import { usePerformanceMonitoring } from "./hooks/usePerformanceMonitoring";
import { FacebookPixelTracker } from "./hooks/useFacebookPixel";

// Lazy load non-critical components to reduce initial bundle
const ExitIntentModal = lazy(() => import("./Components/ExitIntentModal"));
const StickyCtaBar = lazy(() => import("./Components/StickyCtaBar").then(m => ({ default: m.StickyCtaBar })));

function App() {
  usePerformanceMonitoring();

  return (
    <Router>
      <CursorSpotlight>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:text-blue-700"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <GlobalJsonLd />
        <FacebookPixelTracker />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsappButton />

        {/* Lazy-load non-critical modal components */}
        <Suspense fallback={null}>
          <ExitIntentModal />
          <StickyCtaBar />
        </Suspense>
      </CursorSpotlight>
    </Router>
  );
}

export default App;
