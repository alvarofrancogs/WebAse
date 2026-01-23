import { Component, ElementRef, inject, viewChildren, viewChild, AfterViewInit, ViewEncapsulation, OnInit, OnDestroy, signal, HostListener, Renderer2 } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NavbarComponent } from './components/navbar.component';
import { TerminalComponent } from './components/terminal.component';
import { SolutionsSectionComponent } from './components/sections/solutions-section.component';
import { MaintenanceSectionComponent } from './components/sections/maintenance-section.component';
import { FaqSectionComponent } from './components/sections/faq-section.component';
import { TextScrambleComponent } from './components/ui/text-scramble.component';
import { ScrollRevealComponent } from './components/ui/scroll-reveal.component';
import { NotFoundComponent } from './components/pages/not-found.component';
import { MotionService } from './services/motion.service';
import { BRAND, SERVICES, TECH_STACK, CODE_SNIPPETS } from './app/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, TerminalComponent, SolutionsSectionComponent, MaintenanceSectionComponent, FaqSectionComponent, TextScrambleComponent, ScrollRevealComponent, NgOptimizedImage, NotFoundComponent],
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
  `]
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  private motion = inject(MotionService);
  private fb: FormBuilder = inject(FormBuilder);
  private renderer = inject(Renderer2);

  brand = BRAND;
  services = SERVICES;
  techStack = TECH_STACK;

  // Check if we're on 404 page
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

  formStatus = 'idle'; // idle, submitting, success

  // Using viewChildren to get references for animations
  sectionRefs = viewChildren<ElementRef>('animateSection');
  particleContainer = viewChild<ElementRef>('particleContainer');

  ngOnInit() {
    // Check if URL contains /404
    this.is404Page = window.location.pathname.includes('/404') ||
      window.location.hash.includes('404');

    if (!this.is404Page) {
      this.startRotation();
    }
  }

  ngAfterViewInit() {
    if (!this.is404Page) {
      // Initialize Scroll Animations for all sections tagged with #animateSection
      this.sectionRefs().forEach((ref) => {
        this.motion.animateReveal(ref.nativeElement);
      });
    }
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
    if (this.contactForm.valid) {
      this.formStatus = 'submitting';
      // Simulate API call
      setTimeout(() => {
        this.formStatus = 'success';
        this.contactForm.reset();
      }, 1500);
    }
  }
}