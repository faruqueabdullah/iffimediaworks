import { useState, useEffect } from 'react';

/**
 * useWindowWidth
 * --------------
 * Returns the current window width and updates on resize.
 * SSR-safe: defaults to 1024 when window is not available.
 */
export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return width;
}
