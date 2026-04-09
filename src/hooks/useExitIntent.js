import { useEffect } from 'react';

export const useExitIntent = (callback) => {
  useEffect(() => {
    let triggered = false;

    const shouldTrigger = (e) => {
      const from = e.relatedTarget || e.toElement;
      return !from && e.clientY <= 5;
    };

    const handleMouseOut = (e) => {
      if (triggered || !shouldTrigger(e)) return;
      triggered = true;
      callback();
    };

    const handleMouseLeave = (e) => {
      if (triggered || !shouldTrigger(e)) return;
      triggered = true;
      callback();
    };

    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [callback]);
};