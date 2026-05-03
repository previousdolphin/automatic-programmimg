/**
 * THE AGENCY RECORD - JS
 * Subtle Motion: IntersectionObserver for fade-in elements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'fade-in' class
  const fadeElements = document.querySelectorAll('.fade-in');

  // Check if IntersectionObserver is supported (it is in modern browsers)
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '0px 0px -50px 0px', // trigger slightly before it enters the viewport
      threshold: 0.1 // trigger when 10% is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the class that handles the transition via CSS
          entry.target.classList.add('is-visible');
          // Unobserve so the animation only happens once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each element
    fadeElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers: just show everything immediately
    fadeElements.forEach(el => {
      el.classList.add('is-visible');
    });
  }
});