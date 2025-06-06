// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './PageWrapper';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Services = lazy(() => import('../Pages/Services'));
const Contact = lazy(() => import('../Pages/Contact'));
const Portfolio = lazy(() => import('../Pages/Portfolio'));
const Blogs = lazy(() => import('../Pages/Blogs'));
const WebDev = lazy(() => import('../Pages/WebDev'));
const AppDev = lazy(() => import('../Pages/AppDev'));
const SEO = lazy(() => import('../Pages/Seo'));
const Branding = lazy(() => import('../Pages/Branding'));
const SocialMedia = lazy(() => import('../Pages/SocialMedia'));
const PaidAds = lazy(() => import('../Pages/PaidAds'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-2xl">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blogs /></PageWrapper>} />
          <Route path="/services/web-dev" element={<PageWrapper><WebDev /></PageWrapper>} />
          <Route path="/services/app-dev" element={<PageWrapper><AppDev /></PageWrapper>} />
          <Route path="/services/seo" element={<PageWrapper><SEO /></PageWrapper>} />
          <Route path="/services/branding" element={<PageWrapper><Branding /></PageWrapper>} />
          <Route path="/services/social-media" element={<PageWrapper><SocialMedia /></PageWrapper>} />
          <Route path="/services/paid-ads" element={<PageWrapper><PaidAds /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
