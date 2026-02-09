import { Component, Input, ElementRef, AfterViewInit, inject, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type RevealPreset = 
  | 'fade-up' 
  | 'fade-up-blur' 
  | 'slide-left' 
  | 'slide-right' 
  | 'mask' 
  | 'lift';

@Component({
  selector: 'app-scroll-reveal',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `<ng-content></ng-content>`,
  styles: [`
    app-scroll-reveal { display: block; }
  `]
})
export class ScrollRevealComponent implements AfterViewInit {
  @Input() preset: RevealPreset = 'fade-up-blur';
  @Input() delay: number = 0;
  @Input() duration: number = 0.65;
  // Even if 'once' is false, we generally don't want to hide it on scroll down (leave), so we force 'play none none none' mostly.
  // But strictly speaking, the user complained about "hiding when going down". 
  // To be safe, we will force permanent reveal.
  @Input() once: boolean = true; 
  @Input() amount: number = 0.15; // Trigger earlier (15% from bottom instead of 25%)

  private element = inject(ElementRef);
  private isReducedMotion = signal(false);
  private animationsReady = false;

  constructor() {
    this.checkReducedMotion();
    try {
      gsap.registerPlugin(ScrollTrigger);
      this.animationsReady = true;
    } catch {
      this.animationsReady = false;
    }
  }

  checkReducedMotion() {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.isReducedMotion.set(mediaQuery.matches);
    }
  }

  ngAfterViewInit() {
    if (this.isReducedMotion() || !this.animationsReady) {
      const el = this.element.nativeElement as HTMLElement;
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    const el = this.element.nativeElement;
    const settings = this.getPresetSettings();

    // Initial state
    gsap.set(el, settings.from);

    // Animation
    gsap.to(el, {
      ...settings.to,
      duration: this.duration,
      delay: this.delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        // 'top 85%' means when the top of the element hits 85% down the viewport
        // We use 'top 90%' to trigger it sooner when scrolling down
        start: 'top 90%',
        // toggleActions: onEnter, onLeave, onEnterBack, onLeaveBack
        // 'play none none none' ensures it plays once and NEVER hides again.
        toggleActions: 'play none none none'
      }
    });
  }

  private getPresetSettings() {
    switch (this.preset) {
      case 'fade-up':
        return {
          from: { opacity: 0, y: 30 },
          to: { opacity: 1, y: 0 }
        };
      case 'fade-up-blur':
        return {
          from: { opacity: 0, y: 30, filter: 'blur(10px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' }
        };
      case 'slide-left':
        return {
          from: { opacity: 0, x: 30, filter: 'blur(8px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' }
        };
      case 'slide-right':
        return {
          from: { opacity: 0, x: -30, filter: 'blur(8px)' },
          to: { opacity: 1, x: 0, filter: 'blur(0px)' }
        };
      case 'mask':
        return {
          from: { opacity: 0, y: 20, filter: 'blur(10px)', clipPath: 'inset(0 0 100% 0 round 10px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0 round 10px)' }
        };
      case 'lift':
        return {
          from: { opacity: 0, y: 30, rotateX: 10, filter: 'blur(10px)', transformPerspective: 900 },
          to: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }
        };
      default:
        return {
          from: { opacity: 0 },
          to: { opacity: 1 }
        };
    }
  }
}
