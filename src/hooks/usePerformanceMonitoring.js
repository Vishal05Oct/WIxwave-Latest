import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Web Vitals tracking
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'largest-contentful-paint') {
          console.log('LCP:', entry.renderTime || entry.loadTime);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(entry.renderTime || entry.loadTime)
            });
          }
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingDuration);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FID',
              value: Math.round(entry.processingDuration)
            });
          }
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'CLS',
              value: Math.round(entry.value * 1000)
            });
          }
        }
      }
    });

    try {
      perfObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.log('PerformanceObserver not supported');
    }

    // Send to analytics (Google Analytics or custom endpoint)
    window.addEventListener('unload', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData && window.gtag) {
        window.gtag('event', 'page_performance', {
          event_category: 'Performance',
          custom_map: {
            metric1: 'FCP',
            metric2: 'LCP'
          },
          FCP: perfData.responseEnd - perfData.fetchStart,
          LCP: perfData.loadEventEnd - perfData.fetchStart
        });
      }
    });

    return () => perfObserver.disconnect();
  }, []);
};