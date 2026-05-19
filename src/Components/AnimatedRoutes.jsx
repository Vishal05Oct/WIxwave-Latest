import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import PageWrapper from './PageWrapper';

// Lazy-loaded pages
const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const Services = lazy(() => import('../Pages/Services'));
const Contact = lazy(() => import('../Pages/Contact'));
const Portfolio = lazy(() => import('../Pages/Portfolio'));
const Blogs = lazy(() => import('../Pages/Blogs'));
const BlogPost1 = lazy(() => import('../Pages/blogpost1'));
const BlogPost2 = lazy(() => import('../Pages/blogpost2'));
const BlogPost3 = lazy(() => import('../Pages/blogpost3'));
const BlogPost4 = lazy(() => import('../Pages/blogpost4'));
const BlogPost5 = lazy(() => import('../Pages/blogpost5'));
const BlogPost6 = lazy(() => import('../Pages/blogpost6'));
const BlogPost7 = lazy(() => import('../Pages/blogpost7'));
const BlogPost8 = lazy(() => import('../Pages/blogpost8'));
const BlogPost9 = lazy(() => import('../Pages/blogpost9'));
const BlogPost10 = lazy(() => import('../Pages/blogpost10'));
const WebsiteDevelopmentPatna = lazy(() => import('../Pages/WebsiteDevelopmentPatna'));
const WebsiteDevelopmentGurugram = lazy(() => import('../Pages/WebsiteDevelopmentGurugram'));
const WebDev = lazy(() => import('../Pages/WebDev'));
const AppDev = lazy(() => import('../Pages/AppDev'));
const SEO = lazy(() => import('../Pages/Seo'));
const Branding = lazy(() => import('../Pages/Branding'));
const SocialMedia = lazy(() => import('../Pages/SocialMedia'));
const PaidAds = lazy(() => import('../Pages/PaidAds'));
const ThankYou = lazy(() => import('../Pages/ThankYou'));
const NotFound = lazy(() => import('../Components/NotFound'));

// Branded Loader
const Loader = () => {
  const dotVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: 'easeInOut',
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-4"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <img
          src="https://res.cloudinary.com/dobbdtftp/image/upload/v1746202311/3_rgrvsx.png"
          alt="WixWave Logo"
          className="w-14 h-14 object-contain"
        />
      </motion.div>

      <div className="text-gray-600 text-lg font-medium flex items-center space-x-1">
        <span>WixWave is loading</span>
        <motion.div
          className="flex space-x-1"
          variants={dotVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span>.</motion.span>
          <motion.span>.</motion.span>
          <motion.span>.</motion.span>
        </motion.div>
      </div>
    </div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blogs /></PageWrapper>} />
          <Route path="/blog/website-technology-seo" element={<PageWrapper><BlogPost1 /></PageWrapper>} />
          <Route path="/blog/ui-ux-trends-2026" element={<PageWrapper><BlogPost2 /></PageWrapper>} />
          <Route path="/blog/choose-website-development-company-patna" element={<PageWrapper><BlogPost3 /></PageWrapper>} />
          <Route path="/blog/choose-website-development-company-gurugram" element={<PageWrapper><BlogPost4 /></PageWrapper>} />
          <Route path="/blog/local-seo-checklist-patna-gurugram" element={<PageWrapper><BlogPost5 /></PageWrapper>} />
          <Route path="/blog/local-seo-mistakes-patna-gurugram" element={<PageWrapper><BlogPost6 /></PageWrapper>} />
          <Route path="/blog/website-design-development-guide" element={<PageWrapper><BlogPost7 /></PageWrapper>} />
          <Route path="/blog/shopify-store-development-services" element={<PageWrapper><BlogPost8 /></PageWrapper>} />
          <Route path="/blog/shopify-seo-checklist-2026" element={<PageWrapper><BlogPost9 /></PageWrapper>} />
          <Route path="/blog/shopify-vs-woocommerce-2026" element={<PageWrapper><BlogPost10 /></PageWrapper>} />
          <Route path="/website-development-patna" element={<PageWrapper><WebsiteDevelopmentPatna /></PageWrapper>} />
          <Route path="/website-development-gurugram" element={<PageWrapper><WebsiteDevelopmentGurugram /></PageWrapper>} />
          <Route path="/services/web-dev" element={<PageWrapper><WebDev /></PageWrapper>} />
          <Route path="/services/app-dev" element={<PageWrapper><AppDev /></PageWrapper>} />
          <Route path="/services/seo" element={<PageWrapper><SEO /></PageWrapper>} />
          <Route path="/services/branding" element={<PageWrapper><Branding /></PageWrapper>} />
          <Route path="/services/social-media" element={<PageWrapper><SocialMedia /></PageWrapper>} />
          <Route path="/services/paid-ads" element={<PageWrapper><PaidAds /></PageWrapper>} />
          <Route path="/thank-you" element={<PageWrapper><ThankYou /></PageWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
