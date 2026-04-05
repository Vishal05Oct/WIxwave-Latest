import { useEffect, useState } from 'react';

/**
 * Lazy loads framer-motion only when animations are actually needed
 * Falls back to static rendering if motion is not yet loaded
 * Saves ~30 KiB by deferring framer-motion on non-animated pages
 */
export const useLazyMotion = () => {
  const [MotionLoaded, setMotionLoaded] = useState(false);

  useEffect(() => {
    // Load framer-motion dynamically after component mounts
    import('framer-motion')
      .then(() => {
        setMotionLoaded(true);
      })
      .catch(err => {
        console.warn('Failed to load framer-motion:', err);
        // Gracefully handle error - render without animations
        setMotionLoaded(false);
      });
  }, []);

  return MotionLoaded;
};

/**
 * Lazy loads GSAP only when needed for complex animations
 * Saves ~20 KiB by deferring on non-gsap pages
 */
export const useLazyGSAP = () => {
  const [GSAPLoaded, setGSAPLoaded] = useState(false);

  useEffect(() => {
    import('gsap')
      .then(() => {
        setGSAPLoaded(true);
      })
      .catch(err => {
        console.warn('Failed to load GSAP:', err);
        setGSAPLoaded(false);
      });
  }, []);

  return GSAPLoaded;
};
