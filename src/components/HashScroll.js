'use client';

import { useEffect } from 'react';

const scrollWithOffset = (hash) => {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  if (!hash || hash === '#') return;
  const element = document.querySelector(hash);
  if (!element) return;
  const rect = element.getBoundingClientRect();
  const offset = 80; // account for fixed navbar
  const top = rect.top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

const HashScroll = () => {
  useEffect(() => {
    // initial load after hydration
    const run = () => {
      if (window.location.hash) {
        // Try a couple times to ensure layout is ready
        scrollWithOffset(window.location.hash);
        setTimeout(() => scrollWithOffset(window.location.hash), 100);
        setTimeout(() => scrollWithOffset(window.location.hash), 250);
      }
    };
    run();

    const onHashChange = () => {
      if (window.location.hash) scrollWithOffset(window.location.hash);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
};

export default HashScroll;


