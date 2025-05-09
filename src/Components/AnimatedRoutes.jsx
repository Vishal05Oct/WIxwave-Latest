// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './PageWrapper';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Blogs from '../Pages/Blogs';

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
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
