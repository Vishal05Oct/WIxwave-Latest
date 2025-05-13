// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './PageWrapper';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Blogs from '../Pages/Blogs';
import WebDev from '../Pages/WebDev';
import AppDev from '../Pages/AppDev';
import SEO from '../Pages/Seo';
import Branding from '../Pages/Branding';
import SocialMedia from '../Pages/SocialMedia';
import PaidAds from '../Pages/PaidAds';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
