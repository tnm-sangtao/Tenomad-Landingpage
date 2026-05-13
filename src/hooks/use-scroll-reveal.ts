import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', delay = 0 } = options;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Stark minimal snap effect: starts lower, pure snappy bezier curve
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    
    // Using the same curve from index.css (--o4 or standard snappy curve)
    element.style.transition = `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        observer.unobserve(element);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return ref;
}
