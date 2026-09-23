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
  @Input() duration: number = 0.65;
  @Input() once: boolean = true;
  @Input() amount: number = 0.15;

  private element = inject(ElementRef);
  private motion = inject(MotionService);
  private scrollTriggerInstance: ScrollTrigger | null = null;
  private tween: gsap.core.Tween | null = null;

  constructor() {
    // Immediately hide element to prevent FOUC (CSS global no longer does this)
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

    // Set the initial (hidden) state immediately via GSAP
    gsap.set(el, settings.from);

    // Use requestAnimationFrame to ensure layout is stable before creating ScrollTrigger
    requestAnimationFrame(() => {
      this.tween = gsap.to(el, {
        ...settings.to,
        duration: this.duration,
        delay: this.delay,
        ease: 'power3.out',
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
