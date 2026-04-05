import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Initialize Google Analytics lazily after hydration
const initializeGoogleAnalytics = async () => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
      
      // Load GTM script after config is set
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);
    });
  } else if (typeof window !== 'undefined') {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);
    }, 3000);
  }
};

// Defer non-critical imports to after hydration
const deferredImports = async () => {
  // These heavy libraries will be loaded after the initial render
  if (typeof window !== 'undefined') {
    // Preload non-critical vendor chunks after initial paint
    if ('requestIdleCallback' in window) {
      requestIdleCallback(async () => {
        try {
          await Promise.allSettled([
            import('three'),
            import('@react-three/fiber'),
            import('@react-three/drei'),
            import('lenis'),
            import('aos'),
          ]);
        } catch (e) {
          // Gracefully handle load errors
          console.warn('Non-critical imports failed:', e);
        }
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(async () => {
        try {
          await Promise.allSettled([
            import('three'),
            import('@react-three/fiber'),
            import('@react-three/drei'),
            import('lenis'),
            import('aos'),
          ]);
        } catch (e) {
          console.warn('Non-critical imports failed:', e);
        }
      }, 2000);
    }
  }
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Start loading non-critical resources and analytics after hydration
deferredImports();
initializeGoogleAnalytics();
