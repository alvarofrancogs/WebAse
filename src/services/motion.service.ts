import { Injectable, signal } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class MotionService {
  isReducedMotion = signal(false);
  animationsReady = false;

  constructor() {
    this.checkReducedMotion();
    try {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        this.animationsReady = true;
      }
    } catch {
      this.animationsReady = false;
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
    if (this.isReducedMotion() || !this.animationsReady) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    const rect = typeof window !== 'undefined' ? element.getBoundingClientRect() : null;
    const inInitialView = rect ? (rect.top < window.innerHeight && rect.bottom > 0) : false;

    if (inInitialView) {
      gsap.fromTo(element,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: delay, ease: 'power2.out' }
      );
      return;
    }

    // Set initial state for elements below viewport
    gsap.set(element, { opacity: 0, y: 20 });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 92%', 
        toggleActions: 'play none none none' 
      }
    });
  }

  // Staggered animation for lists
  animateStagger(elements: HTMLElement[], staggerTime: number = 0.1) {
    if (this.isReducedMotion() || !this.animationsReady) {
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
