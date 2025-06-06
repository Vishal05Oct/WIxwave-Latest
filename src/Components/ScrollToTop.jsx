// components/ScrollToTop.jsx
import { useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = memo(function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
});

export default ScrollToTop;
