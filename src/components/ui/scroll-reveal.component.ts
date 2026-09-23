import { Component, Input, ElementRef, AfterViewInit, OnDestroy, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionService } from '../../services/motion.service';

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
    app-scroll-reveal {
      display: block;
      height: 100%;
    }
  `]
})
export class ScrollRevealComponent implements AfterViewInit, OnDestroy {
  @Input() preset: RevealPreset = 'fade-up-blur';
  @Input() delay: number = 0;
  @Input() duration: number = 0.6;
  @Input() once: boolean = true;
  @Input() amount: number = 0.15;

  private element = inject(ElementRef);
  private motion = inject(MotionService);
  private scrollTriggerInstance: ScrollTrigger | null = null;
  private tween: gsap.core.Tween | null = null;

  constructor() {
    // Only hide if animations are ready and not reduced motion
    const el = this.element.nativeElement as HTMLElement;
    if (!this.motion.isReducedMotion() && this.motion.animationsReady) {
      el.style.opacity = '0';
    }
  }

  ngAfterViewInit() {
    const el = this.element.nativeElement as HTMLElement;

    if (this.motion.isReducedMotion() || !this.motion.animationsReady) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.filter = 'none';
      return;
    }

    const settings = this.getPresetSettings();
    const rect = typeof window !== 'undefined' ? el.getBoundingClientRect() : null;
    const inInitialView = rect ? (rect.top < window.innerHeight && rect.bottom > 0) : false;

    if (inInitialView) {
      // Element is already in viewport on page load: reveal smoothly without waiting for ScrollTrigger
      this.tween = gsap.fromTo(el, settings.from, {
        ...settings.to,
        duration: this.duration,
        delay: this.delay,
        ease: 'power2.out'
      });
      return;
    }

    // Set the initial (hidden) state immediately via GSAP for elements below fold
    gsap.set(el, settings.from);

    // Use requestAnimationFrame to ensure layout is stable before creating ScrollTrigger
    requestAnimationFrame(() => {
      this.tween = gsap.to(el, {
        ...settings.to,
        duration: this.duration,
        delay: this.delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: this.once
        }
      });

      // Store reference for cleanup
      this.scrollTriggerInstance = this.tween.scrollTrigger as ScrollTrigger;
    });
  }

  ngOnDestroy() {
    if (this.scrollTriggerInstance) {
      this.scrollTriggerInstance.kill();
      this.scrollTriggerInstance = null;
    }
    if (this.tween) {
      this.tween.kill();
      this.tween = null;
    }
  }

  private getPresetSettings() {
    switch (this.preset) {
      case 'fade-up':
        return {
          from: { opacity: 0, y: 20 },
          to: { opacity: 1, y: 0 }
        };
      case 'fade-up-blur':
        return {
          from: { opacity: 0, y: 20, filter: 'blur(4px)' },
          to: { opacity: 1, y: 0, filter: 'blur(0px)' }
        };
      case 'slide-left':
      case 'slide-right':
        return {
          from: { opacity: 0, y: 16 },
          to: { opacity: 1, y: 0 }
        };
      case 'mask':
        return {
          from: { opacity: 0, y: 16 },
          to: { opacity: 1, y: 0 }
        };
      case 'lift':
        return {
          from: { opacity: 0, y: 20, scale: 0.98 },
          to: { opacity: 1, y: 0, scale: 1 }
        };
      default:
        return {
          from: { opacity: 0 },
          to: { opacity: 1 }
        };
    }
  }
}
