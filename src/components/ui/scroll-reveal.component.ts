import { Component, Input, ElementRef, AfterViewInit, OnDestroy, inject, signal, ViewEncapsulation } from '@angular/core';
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
export class ScrollRevealComponent implements AfterViewInit, OnDestroy {
  @Input() preset: RevealPreset = 'fade-up-blur';
  @Input() delay: number = 0;
  @Input() duration: number = 0.65;
  @Input() once: boolean = true;
  @Input() amount: number = 0.15;

  private element = inject(ElementRef);
  private isReducedMotion = signal(false);
  private animationsReady = false;
  private scrollTriggerInstance: ScrollTrigger | null = null;

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
    const el = this.element.nativeElement as HTMLElement;

    if (this.isReducedMotion() || !this.animationsReady) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    const settings = this.getPresetSettings();

    // Set the initial (hidden) state immediately via GSAP
    gsap.set(el, settings.from);

    // Use requestAnimationFrame to ensure layout is stable before creating ScrollTrigger
    requestAnimationFrame(() => {
      const tween = gsap.to(el, {
        ...settings.to,
        duration: this.duration,
        delay: this.delay,
        ease: 'power3.out',
        paused: true, // We'll let ScrollTrigger control playback
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
          onEnter: () => {
            tween.play();
          }
        }
      });

      // Store reference for cleanup
      this.scrollTriggerInstance = tween.scrollTrigger as ScrollTrigger;

      // Force a refresh so elements already in view trigger immediately
      ScrollTrigger.refresh();
    });
  }

  ngOnDestroy() {
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
      this.scrollTriggerInstance = null;
    }
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
