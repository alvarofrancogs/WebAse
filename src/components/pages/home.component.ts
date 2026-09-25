import { Component, ElementRef, inject, viewChildren, viewChild, AfterViewInit, OnInit, OnDestroy, signal, Renderer2, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TerminalComponent } from '../terminal.component';
import { SolutionsSectionComponent } from '../sections/solutions-section.component';
import { MaintenanceSectionComponent } from '../sections/maintenance-section.component';
import { ProcessSectionComponent } from '../sections/process-section.component';
import { FaqSectionComponent } from '../sections/faq-section.component';
import { TextScrambleComponent } from '../ui/text-scramble.component';
import { MotionService } from '../../services/motion.service';
import { MailerService } from '../../services/mailer.service';
import { RecaptchaService } from '../../services/recaptcha.service';
import { SeoService } from '../../services/seo.service';
import { BRAND, SERVICES, TECH_STACK, CODE_SNIPPETS } from '../../app/content';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule, TerminalComponent, SolutionsSectionComponent, MaintenanceSectionComponent, ProcessSectionComponent, FaqSectionComponent, TextScrambleComponent],
    template: `
<!-- HERO SECTION -->
<section (click)="spawnCode($event)"
  class="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden bg-grid z-10 cursor-crosshair">

  <div #particleContainer class="absolute inset-0 pointer-events-none z-20 overflow-hidden"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-10"></div>

  <div class="container mx-auto px-6 relative z-30 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
    <div #animateSection class="space-y-8 pointer-events-auto">

      <h1 class="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white text-balance leading-tight">
        Diseño y Desarrollo Web en Murcia <br />
        <span class="relative inline-flex w-full h-[1.2em] overflow-hidden whitespace-nowrap">
          @for (word of rotatingWords; track $index) {
          <span class="absolute left-0 top-0 transition-all duration-500 ease-spring text-neutral-500"
            [class.opacity-100]="$index === currentWordIndex()" [class.opacity-0]="$index !== currentWordIndex()"
            [style.transform]="$index === currentWordIndex() ? 'translateY(0)' : ($index < currentWordIndex() ? 'translateY(-100%)' : 'translateY(100%)')">
            {{ word }}
          </span>
          }
        </span>
      </h1>
      <p class="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed">
        Desarrollo web a medida en Murcia. Contacto constante, rendimiento extremo y soluciones digitales que transforman tu negocio.
      </p>

      <div class="flex flex-wrap gap-4 items-center">
        <a href="#contacto" class="inline-flex">
          <app-text-scramble text="PEDIR PRESUPUESTO"
            className="text-white text-sm font-semibold px-4 py-2"></app-text-scramble>
        </a>

        <a href="#servicios"
          class="border border-white/20 text-white px-8 py-3 rounded text-sm font-semibold hover:bg-white/5 transition-colors bg-black/50 backdrop-blur-sm">
          Ver Servicios
        </a>
      </div>
    </div>

    <div #animateSection class="hidden lg:flex justify-end mt-0 pointer-events-auto">
      <app-terminal></app-terminal>
    </div>
  </div>
</section>

<!-- TECH STACK -->
<div class="py-4 md:py-6 bg-black border-y border-white/10 overflow-hidden relative z-30">
  <div class="flex animate-marquee-mobile whitespace-nowrap md:justify-center">
    @for (tech of techStack; track $index) {
    <span class="mx-4 md:mx-6 text-neutral-500 font-mono text-[10px] md:text-xs tracking-widest uppercase">{{ tech }}</span>
    }
    <span class="md:hidden flex">
      @for (tech of techStack; track $index) {
      <span class="mx-4 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">{{ tech }}</span>
      }
    </span>
  </div>
</div>

<!-- SERVICES SECTION -->
<section id="servicios" class="py-16 md:py-32 bg-black relative z-30">
  <div class="container mx-auto px-6">
    <div #animateSection class="mb-16">
      <h2 class="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Soluciones de Ingeniería</h2>
      <p class="text-neutral-400 max-w-xl">Desde landing pages ultrarrápidas hasta sistemas complejos de automatización.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      @for (service of services; track $index) {
      <a [routerLink]="service.link" #animateSection
        class="glass-panel p-5 md:p-8 rounded-lg hover:border-white/20 transition-colors group bg-black/80 block cursor-pointer">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg md:text-xl font-semibold text-white group-hover:text-neutral-200 transition">{{ service.title }}</h3>
          <svg aria-hidden="true" class="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
        <p class="text-neutral-400 text-sm mb-6 leading-relaxed">{{ service.description }}</p>
        <ul class="space-y-2">
          @for (feature of service.features; track $index) {
          <li class="text-xs text-neutral-500 flex items-center">
            <span class="w-1.5 h-1.5 bg-neutral-700 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
            {{ feature }}
          </li>
          }
        </ul>
      </a>
      }
    </div>
  </div>
</section>

<div class="h-12 md:h-24 bg-black"></div>

<!-- SOLUTIONS SECTION -->
<app-solutions-section class="relative z-30"></app-solutions-section>

<!-- PROCESS / TIMELINE -->
<app-process-section class="relative z-30"></app-process-section>

<div class="h-12 md:h-24 bg-black"></div>

<!-- MAINTENANCE & HOSTING SECTION -->
<app-maintenance-section class="relative z-30"></app-maintenance-section>

<!-- FAQ SECTION -->
<app-faq-section class="relative z-30"></app-faq-section>

<!-- CONTACT -->
<section id="contacto" class="py-24 relative overflow-hidden z-30">
  <div class="absolute inset-0 bg-neutral-900/20 skew-y-3 transform origin-bottom-left -z-10"></div>

  <div class="container mx-auto px-6 max-w-2xl text-center">
    <div #animateSection class="mb-12">
      <h2 class="text-4xl font-bold mb-4">Empezar Proyecto</h2>
      <p class="text-neutral-400">Cuéntanos tu idea y te responderemos con los siguientes pasos para tu proyecto.</p>
    </div>

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" #animateSection class="space-y-6 text-left">
      <div>
        <label for="contact-email" class="block text-xs font-mono text-neutral-400 mb-2">EMAIL CORPORATIVO</label>
        <input id="contact-email" name="email" type="email" autocomplete="email" aria-required="true" formControlName="email"
          class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors"
          placeholder="nombre@empresa.com">
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label for="contact-phone" class="block text-xs font-mono text-neutral-400 mb-2">TELÉFONO <span class="text-neutral-500">(opcional)</span></label>
          <input id="contact-phone" name="phone" type="tel" autocomplete="tel" formControlName="phone"
            class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors"
            placeholder="601 234 567">
        </div>
        <div class="relative">
          <span id="service-label" class="block text-xs font-mono text-neutral-400 mb-2">¿QUÉ NECESITAS?</span>
          <button id="service-select" type="button" (click)="toggleDropdown($event)" #serviceDropdown
            aria-labelledby="service-label service-value" [attr.aria-expanded]="dropdownOpen" [attr.aria-controls]="dropdownOpen ? 'service-options' : null"
            class="w-full bg-transparent border-b py-3 text-left flex items-center justify-between transition-colors cursor-pointer"
            [class.border-white]="dropdownOpen" [class.border-white/20]="!dropdownOpen">
            <span id="service-value" [class.text-white]="contactForm.get('service')?.value" [class.text-neutral-500]="!contactForm.get('service')?.value">{{ selectedServiceLabel }}</span>
            <svg aria-hidden="true" class="w-4 h-4 text-neutral-500 transition-transform duration-300" [class.rotate-180]="dropdownOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/></svg>
          </button>
          @if (dropdownOpen) {
            <div id="service-options" class="absolute top-full left-0 right-0 mt-1 border border-white/10 bg-neutral-950/95 backdrop-blur-md z-50 overflow-hidden rounded-lg shadow-2xl shadow-black/50">
              @for (opt of serviceOptions; track opt.value) {
                <button type="button" (click)="selectService(opt.value)"
                  class="w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3"
                  [class.bg-white/10]="contactForm.get('service')?.value === opt.value"
                  [class.text-white]="contactForm.get('service')?.value === opt.value"
                  [class.text-neutral-400]="contactForm.get('service')?.value !== opt.value"
                  [class.hover:bg-white/5]="contactForm.get('service')?.value !== opt.value"
                  [class.hover:text-white]="contactForm.get('service')?.value !== opt.value">
                  <span class="w-1.5 h-1.5 rounded-full shrink-0 transition-colors" [class.bg-white]="contactForm.get('service')?.value === opt.value" [class.bg-neutral-700]="contactForm.get('service')?.value !== opt.value"></span>
                  {{ opt.label }}
                </button>
              }
            </div>
          }
        </div>
      </div>

      <div>
        <label for="contact-message" class="block text-xs font-mono text-neutral-400 mb-2">DETALLES DEL PROYECTO</label>
        <textarea id="contact-message" name="message" autocomplete="off" aria-required="true" formControlName="message" rows="4"
          class="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
          placeholder="Necesito una web para..."></textarea>
      </div>

      <!-- reCAPTCHA v2 Widget -->
      <div id="recaptcha-container" class="flex justify-center my-4"></div>
      @if (!recaptchaReady && !recaptchaLoadError) {
      <p class="text-xs text-neutral-500 text-center">Cargando verificacion...</p>
      }
      @if (recaptchaLoadError) {
      <div class="text-center space-y-2">
        <p class="text-xs text-red-400">No se pudo cargar reCAPTCHA. Revisa tu conexion y vuelve a intentar.</p>
        <button type="button" (click)="initRecaptcha()"
          class="min-h-11 text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 text-white hover:bg-white/10 transition-colors">
          Reintentar reCAPTCHA
        </button>
      </div>
      }

      <button type="submit" [disabled]="contactForm.invalid || formStatus === 'submitting' || !recaptchaReady || !recaptchaResolved"
        class="w-full bg-white text-black font-bold py-4 rounded-none border border-white hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center font-mono tracking-widest text-xs uppercase">
        @if (formStatus === 'submitting') {
        <svg aria-hidden="true" class="animate-spin h-5 w-5 mr-3 text-black" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        Procesando...
        } @else if (formStatus === 'success') {
        ¡Mensaje Enviado!
        } @else {
        Enviar Solicitud
        }
      </button>

      <p class="text-sm text-neutral-400" aria-live="polite">
        @if (formStatus === 'error') { No se pudo enviar. Revisa la verificación e inténtalo de nuevo. }
        @else if (formStatus === 'success') { Mensaje enviado. Nos pondremos en contacto contigo. }
        @else if (formStatus === 'idle' && (contactForm.invalid || !recaptchaResolved)) { Completa el email, los detalles y la verificación para enviar. }
      </p>

      <div class="mt-8 text-center space-y-3">
        <p class="text-neutral-500 text-sm">O contáctanos directamente:</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a [attr.href]="'mailto:' + brand.email" class="text-white hover:underline inline-flex items-center gap-2 text-sm">
            <svg aria-hidden="true" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            {{brand.email}}
          </a>
          <a [attr.href]="'tel:' + brand.phone" class="text-white hover:underline inline-flex items-center gap-2 text-sm">
            <svg aria-hidden="true" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            {{brand.phoneDisplay}}
          </a>
          <a href="https://wa.me/34601423840?text=Hola%2C%20me%20interesa%20un%20presupuesto%20para%20mi%20web" target="_blank" rel="noopener" class="text-[#25D366] hover:underline inline-flex items-center gap-2 text-sm">
            <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </form>
  </div>
</section>
  `,
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

    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `]
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
    private motion = inject(MotionService);
    private fb: FormBuilder = inject(FormBuilder);
    private renderer = inject(Renderer2);
    private mailer = inject(MailerService);
    private recaptcha = inject(RecaptchaService);
    private seo = inject(SeoService);
    private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    brand = BRAND;
    services = SERVICES;
    techStack = TECH_STACK;

    snippets = CODE_SNIPPETS;

    rotatingWords = ['Sin límites.', 'Estratégica.', 'De alto impacto.', 'Moderna.', 'A medida.'];
    currentWordIndex = signal(0);
    private rotationInterval: any;

    contactForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        service: [''],
        message: ['', Validators.required]
    });

    formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
    recaptchaResolved = false;
    recaptchaReady = false;
    recaptchaLoadError = false;
    private recaptchaObserver?: IntersectionObserver;
    dropdownOpen = false;

    serviceOptions = [
        { value: 'diseno', label: 'Diseño Web' },
        { value: 'desarrollo', label: 'Desarrollo / Backend' },
        { value: 'tienda', label: 'Tienda Online' },
        { value: 'mantenimiento', label: 'Mantenimiento' },
        { value: 'otro', label: 'Otro' },
    ];

    get selectedServiceLabel(): string {
        const val = this.contactForm.get('service')?.value;
        if (!val) return 'Seleccionar servicio...';
        return this.serviceOptions.find(o => o.value === val)?.label || 'Seleccionar servicio...';
    }

    sectionRefs = viewChildren<ElementRef>('animateSection');
    particleContainer = viewChild<ElementRef>('particleContainer');

    ngOnInit() {
        if (this.isBrowser && !this.motion.isReducedMotion()) this.startRotation();

        this.seo.update({
            title: 'Diseño y Desarrollo Web en Murcia | EmberCode Web Studio',
            description: 'Diseño web profesional, desarrollo a medida y automatización en Murcia. Webs rápidas, optimizadas para Google y pensadas para convertir. Presupuesto sin compromiso.',
            canonicalPath: '/',
            geo: {
                region: 'ES-MU',
                placename: 'Murcia',
            },
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    '@id': 'https://www.embercode.es/#website',
                    'url': 'https://www.embercode.es/',
                    'name': BRAND.name,
                    'description': 'Estudio de diseño y desarrollo web en Murcia.',
                    'publisher': {
                        '@id': 'https://www.embercode.es/#organization'
                    },
                    'inLanguage': 'es-ES'
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    '@id': 'https://www.embercode.es/#organization',
                    'name': BRAND.name,
                    'url': 'https://www.embercode.es/',
                    'email': BRAND.email,
                    'description': 'Estudio de diseño y desarrollo web en Murcia que ofrece webs a medida, tiendas online, mantenimiento y SEO local.',
                    'areaServed': [
                        { '@type': 'City', 'name': 'Murcia' },
                        { '@type': 'City', 'name': 'Cartagena' },
                        { '@type': 'City', 'name': 'Lorca' },
                        { '@type': 'City', 'name': 'Molina de Segura' }
                    ],
                    'logo': {
                        '@type': 'ImageObject',
                        'url': 'https://www.embercode.es/og-image.png',
                        'width': 1200,
                        'height': 630
                    },
                    'contactPoint': {
                        '@type': 'ContactPoint',
                        'telephone': BRAND.phone,
                        'contactType': 'customer service',
                        'areaServed': 'ES',
                        'availableLanguage': 'Spanish'
                    }
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': '¿Cómo es el proceso de trabajo desde el primer contacto?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Primero analizamos las necesidades de tu negocio. Preparamos una propuesta técnica y un presupuesto según el alcance acordado. Si decides avanzar, arrancamos el desarrollo con comunicación continua y revisiones antes del despliegue final.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': '¿Cómo se definen los plazos de entrega?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Fijamos un cronograma cerrado desde el inicio en base a los requerimientos y alcance acordados, y revisamos contigo los cambios que afecten al calendario.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': '¿La web y el código serán de mi propiedad?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Sí, al 100%. Una vez entregado el proyecto, todo el código fuente, diseño y accesos son completamente tuyos. Sin ataduras ni plataformas cautivas.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': '¿Qué ocurre si necesito cambios o mantenimiento más adelante?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Dispones de nuestros planes de mantenimiento mensual con hosting, copias de seguridad, SSL y modificaciones incluidas, o bien soporte puntual bajo demanda según tus necesidades.'
                            }
                        }
                    ]
                }
            ]
        });
    }

    ngAfterViewInit() {
        if (!this.isBrowser) return;

        this.sectionRefs().forEach((ref) => {
            this.motion.animateReveal(ref.nativeElement);
        });

        const container = document.getElementById('recaptcha-container');
        if (container && 'IntersectionObserver' in window) {
            this.recaptchaObserver = new IntersectionObserver((entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    this.recaptchaObserver?.disconnect();
                    void this.initRecaptcha();
                }
            }, { rootMargin: '800px 0px' });
            this.recaptchaObserver.observe(container);
        } else {
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
        this.recaptchaObserver?.disconnect();
        if (this.rotationInterval) clearInterval(this.rotationInterval);
    }

    startRotation() {
        this.rotationInterval = setInterval(() => {
            if (this.motion.isReducedMotion()) return;
            this.currentWordIndex.update(index => (index + 1) % this.rotatingWords.length);
        }, 2000);
    }

    toggleDropdown(event: Event) {
        event.stopPropagation();
        this.dropdownOpen = !this.dropdownOpen;
    }

    @HostListener('document:keydown.escape')
    closeDropdownOnEscape() {
        if (!this.dropdownOpen) return;
        this.dropdownOpen = false;
        this.isBrowser && document.getElementById('service-select')?.focus();
    }

    selectService(value: string) {
        this.contactForm.patchValue({ service: value });
        this.dropdownOpen = false;
    }

    @HostListener('document:click')
    onDocumentClick() {
        this.dropdownOpen = false;
    }

    spawnCode(event: MouseEvent) {
        if (this.motion.isReducedMotion()) return;
        const container = this.particleContainer()?.nativeElement;
        if (!container) return;

        const particle = this.renderer.createElement('div');
        this.renderer.addClass(particle, 'code-particle');
        this.renderer.addClass(particle, 'animate-fade-in-out');

        const text = this.renderer.createText(this.snippets[Math.floor(Math.random() * this.snippets.length)]);
        this.renderer.appendChild(particle, text);

        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        this.renderer.setStyle(particle, 'left', `${x}px`);
        this.renderer.setStyle(particle, 'top', `${y}px`);

        this.renderer.appendChild(container, particle);

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
            phone: this.contactForm.get('phone')?.value || '',
            service: this.contactForm.get('service')?.value || '',
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
}
