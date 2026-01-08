import { Injectable, signal } from '@angular/core';

declare var gsap: any;
declare var ScrollTrigger: any;

@Injectable({
  providedIn: 'root'
})
export class MotionService {
  isReducedMotion = signal(false);

  constructor() {
    this.checkReducedMotion();
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  private checkReducedMotion() {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.isReducedMotion.set(mediaQuery.matches);
      mediaQuery.addEventListener('change', () => {
        this.isReducedMotion.set(mediaQuery.matches);
      });
    }
  }

  // Animate element from bottom with opacity fade
  animateReveal(element: HTMLElement, delay: number = 0) {
    if (this.isReducedMotion()) {
      element.style.opacity = '1';
      return;
    }

    // Set initial state
    gsap.set(element, { opacity: 0, y: 30 });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        // Start slightly earlier (90%) so users see it happening as they scroll down
        start: 'top 90%', 
        // STRICT: Play on enter. Do NOTHING on leave, enterBack, or leaveBack.
        toggleActions: 'play none none none' 
      }
    });
  }

  // Staggered animation for lists
  animateStagger(elements: HTMLElement[], staggerTime: number = 0.1) {
    if (this.isReducedMotion()) {
      elements.forEach(el => el.style.opacity = '1');
      return;
    }

    gsap.set(elements, { opacity: 0, y: 20 });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: staggerTime,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    });
  }
}