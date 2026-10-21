import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to trigger entrance and convergence animations when elements
 * scroll into the viewport using the native IntersectionObserver API.
 * Automatically adds 'is-revealed' class to matching elements.
 * Re-evaluates whenever the route/pathname changes to prevent blank pages on navigation.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealSelector = '.reveal, .reveal-left, .reveal-right, .reveal-stagger';

    if (prefersReducedMotion) {
      document.querySelectorAll(revealSelector).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Function to check if an element is in or near the viewport
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // In viewport or already scrolled past
      return rect.top <= windowHeight && rect.bottom >= -50;
    };

    let observer = null;
    let fallbackTimeout = null;

    const setupObserver = () => {
      const elements = Array.from(document.querySelectorAll(revealSelector));
      if (elements.length === 0) return;

      // 1. Immediately reveal all elements currently visible in viewport (hero, headers, etc.)
      elements.forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add('is-revealed');
        }
      });

      // 2. Setup IntersectionObserver for remaining unrevealed elements
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -30px 0px',
          threshold: 0.08,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });

      // 3. Robust Safety Fallback: after 1000ms, reveal any remaining elements
      // so content can NEVER be permanently blank under any circumstance
      fallbackTimeout = setTimeout(() => {
        document.querySelectorAll(revealSelector).forEach((el) => {
          el.classList.add('is-revealed');
        });
      }, 1000);
    };

    // Run on next tick to allow DOM to commit after route transition
    const rafId = requestAnimationFrame(() => {
      setupObserver();
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);
}

export default useScrollReveal;
