import { useEffect } from 'react';

export const useExitIntent = (callback) => {
  useEffect(() => {
    let hasExited = false;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasExited) {
        hasExited = true;
        callback();

        // Show modal, don't track again for 30 mins
        sessionStorage.setItem('exitIntentShown', Date.now());
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [callback]);
};