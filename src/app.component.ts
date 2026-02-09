import { Component, ElementRef, inject, viewChildren, viewChild, AfterViewInit, ViewEncapsulation, OnInit, OnDestroy, signal, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NavbarComponent } from './components/navbar.component';
import { TerminalComponent } from './components/terminal.component';
import { SolutionsSectionComponent } from './components/sections/solutions-section.component';
import { MaintenanceSectionComponent } from './components/sections/maintenance-section.component';
import { ProcessSectionComponent } from './components/sections/process-section.component';
import { FaqSectionComponent } from './components/sections/faq-section.component';
import { TextScrambleComponent } from './components/ui/text-scramble.component';

import { NotFoundComponent } from './components/pages/not-found.component';
import { MotionService } from './services/motion.service';
import { MailerService } from './services/mailer.service';
import { RecaptchaService } from './services/recaptcha.service';
import { BRAND, SERVICES, TECH_STACK, CODE_SNIPPETS } from './app/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, TerminalComponent, SolutionsSectionComponent, MaintenanceSectionComponent, ProcessSectionComponent, FaqSectionComponent, TextScrambleComponent, NotFoundComponent],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styles: [`
    .code-particle {
      position: absolute;
      pointer-events: none;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: rgba(120, 120, 120, 0.3);
      user-select: none;
      z-index: 0;
    }

    /* Infinite Marquee - Mobile Only */
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-mobile {
      animation: marquee 20s linear infinite;
    }
    @media (min-width: 768px) {
      .animate-marquee-mobile {
        animation: none;
        justify-content: center;
      }
    }

    /* Hide scrollbar but allow scrolling */
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `]
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  private motion = inject(MotionService);
  private fb: FormBuilder = inject(FormBuilder);
  private renderer = inject(Renderer2);
  private mailer = inject(MailerService);
  private recaptcha = inject(RecaptchaService);

  brand = BRAND;
  services = SERVICES;
  techStack = TECH_STACK;

  is404Page = false;

  // Floating Code Logic
  snippets = CODE_SNIPPETS;

  // Rotating Text Logic
  rotatingWords = ['Sin límites.', 'Estratégica.', 'De alto impacto.', 'Moderna.', 'A medida.'];
  currentWordIndex = signal(0);
  private rotationInterval: any;

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  recaptchaResolved = false;
  recaptchaReady = false;
  recaptchaLoadError = false;

  // Using viewChildren to get references for animations
  sectionRefs = viewChildren<ElementRef>('animateSection');
  particleContainer = viewChild<ElementRef>('particleContainer');

  ngOnInit() {
    const path = this.normalizePath(window.location.pathname);
    this.is404Page = !this.isKnownHomePath(path) || window.location.hash.includes('404');

    if (!this.is404Page) {
      this.startRotation();
    }
  }

  ngAfterViewInit() {
    if (!this.is404Page) {
      this.sectionRefs().forEach((ref) => {
        this.motion.animateReveal(ref.nativeElement);
      });

      void this.initRecaptcha();
    }
  }

  async initRecaptcha() {
    this.recaptchaLoadError = false;
    this.recaptchaReady = false;

    const rendered = await this.recaptcha.render(
      'recaptcha-container',
      (token: string) => { this.recaptchaResolved = !!token; },
      () => { this.recaptchaResolved = false; },
      () => { this.recaptchaResolved = false; this.recaptchaLoadError = true; },
      { timeoutMs: 12000, retryIntervalMs: 250, maxRetries: 2 }
    );

    this.recaptchaReady = rendered;
    this.recaptchaLoadError = !rendered;
  }

  ngOnDestroy() {
    if (this.rotationInterval) clearInterval(this.rotationInterval);
  }

  startRotation() {
    this.rotationInterval = setInterval(() => {
      this.currentWordIndex.update(index => (index + 1) % this.rotatingWords.length);
    }, 2000);
  }

  spawnCode(event: MouseEvent) {
    const container = this.particleContainer()?.nativeElement;
    if (!container) return;

    // Optional: avoid spawning if clicking interactive elements heavily
    const target = event.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input')) {
      // return; // Uncomment to strict disable
    }

    const particle = this.renderer.createElement('div');
    this.renderer.addClass(particle, 'code-particle');
    this.renderer.addClass(particle, 'animate-fade-in-out');

    // Random snippet
    const text = this.renderer.createText(this.snippets[Math.floor(Math.random() * this.snippets.length)]);
    this.renderer.appendChild(particle, text);

    // Calculate position relative to the container (absolute positioning within the section)
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.renderer.setStyle(particle, 'left', `${x}px`);
    this.renderer.setStyle(particle, 'top', `${y}px`);

    this.renderer.appendChild(container, particle);

    // Cleanup matching animation duration (2000ms)
    setTimeout(() => {
      this.renderer.removeChild(container, particle);
    }, 2000);
  }

  onSubmit() {
    if (!this.contactForm.valid || !this.recaptchaResolved || !this.recaptchaReady) {
      return;
    }

    this.formStatus = 'submitting';

    const recaptchaToken = this.recaptcha.getResponse();
    if (!recaptchaToken) {
      this.formStatus = 'error';
      this.recaptchaResolved = false;
      this.recaptcha.reset();
      return;
    }

    const formData = {
      email: this.contactForm.get('email')?.value || '',
      message: this.contactForm.get('message')?.value || '',
      recaptchaToken
    };

    this.mailer.sendContactEmail(formData).subscribe({
      next: (success) => {
        if (success) {
          this.formStatus = 'success';
          this.contactForm.reset();
        } else {
          this.formStatus = 'error';
        }
        this.recaptcha.reset();
        this.recaptchaResolved = false;
      },
      error: () => {
        this.formStatus = 'error';
        this.recaptcha.reset();
        this.recaptchaResolved = false;
      }
    });
  }

  private isKnownHomePath(pathname: string): boolean {
    const basePath = this.resolveBasePath();
    const indexPath = this.normalizePath(`${basePath}/index.html`);
    const knownPaths = new Set([basePath, indexPath]);
    return knownPaths.has(pathname);
  }

  private resolveBasePath(): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') ?? '/';

    try {
      const absolute = new URL(baseHref, window.location.origin);
      return this.normalizePath(absolute.pathname);
    } catch {
      return '/';
    }
  }

  private normalizePath(path: string): string {
    const trimmed = path.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  }
}
