import { Component, Input, signal, OnDestroy, computed, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

@Component({
  selector: 'app-text-scramble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="group relative inline-flex flex-col cursor-pointer select-none"
      [class]="className"
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    >
      <span class="sr-only">{{ originalText }}</span>
      <span aria-hidden="true" class="relative font-mono tracking-widest uppercase">
        @for (char of displayChars(); track $index) {
          <span
            class="inline-block transition-all duration-150"
            [class.text-primary]="isScrambling() && char !== originalText[$index]"
            [class.text-foreground]="!isScrambling() || char === originalText[$index]"
            [class.scale-110]="isScrambling() && char !== originalText[$index]"
            [style.transitionDelay]="$index * 10 + 'ms'"
          >
            @if (char === ' ') { &nbsp; } @else { {{ char }} }
          </span>
        }
      </span>

      <!-- Animated underline -->
      <span class="relative h-px w-full mt-1 overflow-hidden">
        <span
          class="absolute inset-0 bg-foreground transition-transform duration-500 ease-out origin-left"
          [class.scale-x-100]="isHovering()"
          [class.scale-x-0]="!isHovering()"
        ></span>
        <span class="absolute inset-0 bg-border opacity-50"></span>
      </span>

      <!-- Subtle glow on hover -->
      <span
        class="absolute -inset-4 rounded-lg bg-primary/5 transition-opacity duration-300 -z-10"
        [class.opacity-100]="isHovering()"
        [class.opacity-0]="!isHovering()"
      ></span>
    </div>
  `
})
export class TextScrambleComponent implements AfterViewInit, OnDestroy {
  @Input() autoScramble = false;
  private elementRef = inject(ElementRef);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  @Input() set text(value: string) {
    this.originalText = value;
    this.displayText.set(value);
  }
  @Input() className: string = '';

  originalText = '';
  displayText = signal('');
  isHovering = signal(false);
  isScrambling = signal(false);

  displayChars = computed(() => this.displayText().split(''));

  private intervalId: any;
  private frame = 0;

  handleMouseEnter() {
    this.isHovering.set(true);
    this.scramble();
  }

  handleMouseLeave() {
    this.isHovering.set(false);
  }

  scramble() {
    if (this.isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.displayText.set(this.originalText);
      return;
    }
    this.isScrambling.set(true);
    this.frame = 0;
    const duration = this.originalText.length * 3;

    if (this.intervalId) clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      this.frame++;

      const progress = this.frame / duration;
      const revealedLength = Math.floor(progress * this.originalText.length);

      const newText = this.originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedLength) return this.originalText[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      this.displayText.set(newText);

      if (this.frame >= duration) {
        if (this.intervalId) clearInterval(this.intervalId);
        this.displayText.set(this.originalText);
        this.isScrambling.set(false);
      }
    }, 30);
  }

  ngAfterViewInit() {
    if (this.isBrowser && this.autoScramble && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.scramble();
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      observer.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
