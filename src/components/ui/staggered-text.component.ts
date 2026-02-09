import { Component, Input, ElementRef, AfterViewInit, inject, signal, computed, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-staggered-text',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container [ngSwitch]="tag">
      <!-- Screen reader text -->
      <span class="sr-only">{{ text }}</span>
      
      <!-- Visible animated text -->
      <p *ngSwitchCase="'p'" [class]="className + ' relative perspective-900'" #container>
        @for (word of words(); track $index) {
          <span class="word-span inline-block will-change-transform opacity-0">{{ word }}</span>{{ $index < words().length - 1 ? ' ' : '' }}
        }
      </p>
      <h1 *ngSwitchCase="'h1'" [class]="className + ' relative perspective-900'" #container>
        @for (word of words(); track $index) {
          <span class="word-span inline-block will-change-transform opacity-0">{{ word }}</span>{{ $index < words().length - 1 ? ' ' : '' }}
        }
      </h1>
      <h2 *ngSwitchCase="'h2'" [class]="className + ' relative perspective-900'" #container>
        @for (word of words(); track $index) {
          <span class="word-span inline-block will-change-transform opacity-0">{{ word }}</span>{{ $index < words().length - 1 ? ' ' : '' }}
        }
      </h2>
      <h3 *ngSwitchCase="'h3'" [class]="className + ' relative perspective-900'" #container>
        @for (word of words(); track $index) {
          <span class="word-span inline-block will-change-transform opacity-0">{{ word }}</span>{{ $index < words().length - 1 ? ' ' : '' }}
        }
      </h3>
      <span *ngSwitchDefault [class]="className + ' relative perspective-900'" #container>
        @for (word of words(); track $index) {
          <span class="word-span inline-block will-change-transform opacity-0">{{ word }}</span>{{ $index < words().length - 1 ? ' ' : '' }}
        }
      </span>
    </ng-container>
  `,
  styles: [`
    .perspective-900 { perspective: 900px; }
  `]
})
export class StaggeredTextComponent implements AfterViewInit {
  @Input({ required: true }) text: string = '';
  @Input() className: string = '';
  @Input() delay: number = 0;
  @Input() stagger: number = 0.035;
  @Input() tag: 'p' | 'h1' | 'h2' | 'h3' | 'span' = 'p';

  words = computed(() => this.text.split(' '));

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
    if (!this.animationsReady) {
      setTimeout(() => {
        const container = this.element.nativeElement.querySelector('.relative');
        if (!container) return;

        const spans = container.querySelectorAll('.word-span') as NodeListOf<HTMLElement>;
        spans.forEach((span) => {
          span.style.opacity = '1';
          span.style.transform = 'none';
          span.style.filter = 'none';
        });
      }, 0);
      return;
    }

    // Use a small timeout to ensure DOM is ready and layout is stable
    setTimeout(() => {
      const container = this.element.nativeElement.querySelector('.relative');
      if (!container) return;

      const spans = container.querySelectorAll('.word-span');
      if (spans.length === 0) return;

      if (this.isReducedMotion()) {
        gsap.to(spans, { opacity: 1, duration: 0.5 });
        return;
      }

      // Explicitly set initial state immediately
      gsap.set(spans, {
        opacity: 0,
        y: 10,
        rotateX: 45,
        filter: 'blur(4px)',
        transformOrigin: 'top center'
      });

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: container,
        start: 'top 95%', // Trigger slightly earlier
        once: true, // Only run once
        onEnter: () => {
          gsap.to(spans, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: this.stagger,
            delay: this.delay,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      });
    }, 200); // Increased timeout slightly for better safety
  }
}
