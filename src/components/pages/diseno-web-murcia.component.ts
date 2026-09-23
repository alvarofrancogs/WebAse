import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-diseno-web-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Diseño Web Murcia</span>
        </nav>

        <!-- Hero -->
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Diseño Web Profesional</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">
              Diseño que<br>convierte.
            </h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              Webs rápidas, modernas y optimizadas para SEO. Diseño a medida para tu negocio en Murcia. Sin plantillas, sin límites.
            </p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Pedir presupuesto</span>
              <span class="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Process Timeline -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Proceso</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">De la idea al pixel perfecto</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (step of processSteps; track step.num; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.15">
                <div class="h-full border border-white/10 bg-black p-8 hover:bg-white/[0.03] transition-colors duration-500 group flex flex-col relative overflow-hidden rounded-lg">
                  <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span class="text-sm font-mono tracking-widest text-white/40 mb-6 block border-b border-white/10 pb-4">Paso {{ step.num }}</span>
                  <h3 class="text-xl font-bold text-white mb-4 group-hover:text-neutral-300 transition-colors duration-300">{{ step.title }}</h3>
                  <p class="text-white/50 text-sm leading-relaxed flex-1">{{ step.desc }}</p>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- Qué incluye tu web -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Incluido</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Qué incluye tu web</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (benefit of benefits; track benefit.title; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.08">
                <div class="p-8 rounded-lg border border-white/10 bg-neutral-950 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                  <span class="text-2xl font-mono text-white/20 block mb-4">{{ benefit.num }}</span>
                  <h3 class="text-lg font-bold text-white mb-2">{{ benefit.title }}</h3>
                  <p class="text-white/60 text-sm leading-relaxed">{{ benefit.desc }}</p>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="space-y-2">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="bg-white/[0.02] border border-white/[0.06] rounded-lg">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex items-center gap-3 p-5 text-left font-mono text-sm hover:bg-white/[0.03] transition-colors rounded-lg">
                    <span class="text-white/50">&#10095;</span>
                    <span class="text-white flex-1">{{ faq.q }}</span>
                    <span class="text-white/30 text-xs transition-opacity" [class.opacity-0]="openFaq === i">[enter]</span>
                  </button>
                  <div class="grid transition-all duration-300 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                    <div class="overflow-hidden">
                      <div class="font-mono text-sm text-white/70 pl-11 pr-5 pb-5">
                        <div class="border-l border-white/20 pl-4 py-1">{{ faq.a }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="lift" [delay]="0.2">
          <div class="relative border border-white/10 p-12 md:p-20 text-center mb-16 rounded-lg">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Necesitas un diseño web profesional?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te enviamos presupuesto cerrado en 24h. Sin compromiso.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601423840" class="text-white hover:underline">601 423 840</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/desarrollo-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">Tienda Online</a>
            <a routerLink="/seo-local-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">SEO Local</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DisenoWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;

  faqs = [
    { q: '¿Qué incluye el servicio de diseño web?', a: 'Diseño UI/UX a medida, maquetación adaptada a móviles y ordenadores, optimización SEO técnica básica, formularios y entrega de código limpio.' },
    { q: '¿El diseño es exclusivo o utilizáis plantillas prediseñadas?', a: 'Diseñamos cada web desde cero según la identidad y objetivos comerciales de tu empresa, sin plantillas genéricas.' },
    { q: '¿Cómo se establecen los plazos de entrega?', a: 'Fijamos un cronograma y plazo cerrado desde la propuesta inicial según las secciones y requerimientos de tu proyecto.' }
  ];

  benefits = [
    { num: '01', title: 'Diseño UI/UX a medida', desc: 'Cada pantalla diseñada desde cero para tu marca. Nada de plantillas ni temas genéricos.' },
    { num: '02', title: 'Responsive total', desc: 'Tu web se ve perfecta en móvil, tablet, portátil y pantalla 4K. Probada en todos los dispositivos.' },
    { num: '03', title: 'SEO técnico incluido', desc: 'Metadatos, estructura de URLs, velocidad de carga y schema markup optimizados desde el primer día.' },
    { num: '04', title: 'Animaciones fluidas', desc: 'Microinteracciones y transiciones suaves que hacen que tu web se sienta premium y profesional.' },
    { num: '05', title: 'Código limpio y tuyo', desc: 'Sin dependencias cautivas. El código fuente es 100% de tu propiedad al finalizar el proyecto.' },
  ];

  processSteps = [
    { num: '01', title: 'Briefing', desc: 'Consultoría para entender tu negocio, tu marca y tus referentes estéticos.' },
    { num: '02', title: 'Wireframe & UI', desc: 'Prototipo visual que validas antes de escribir una sola línea de código.' },
    { num: '03', title: 'Desarrollo', desc: 'Código pixel-perfect con animaciones fluidas, optimizado para producción.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Diseño Web en Murcia | Web Profesional a Medida | EmberCode',
      description: 'Servicio de diseño web profesional en Murcia. Webs modernas, rápidas, responsive y optimizadas para SEO. Presupuesto sin compromiso y entrega ágil.',
      canonicalPath: '/diseno-web-murcia',
      geo: {
        region: 'ES-MU',
        placename: 'Murcia',
        position: '37.9922;-1.1307'
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Diseño Web en Murcia',
          'description': 'Servicio de diseño web profesional a medida para negocios en Murcia.',
          'provider': {
            '@type': 'LocalBusiness',
            '@id': 'https://www.embercode.es/#business',
            'name': 'EmberCode Web Studio',
            'url': 'https://www.embercode.es',
            'telephone': '+34601423840'
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Murcia',
            'sameAs': 'https://es.wikipedia.org/wiki/Murcia'
          },
          'serviceType': 'Diseño web'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Diseño Web Murcia', 'item': 'https://www.embercode.es/diseno-web-murcia' }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': '¿Qué incluye el servicio de diseño web?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Diseño UI/UX a medida, maquetación adaptada a móviles y ordenadores, optimización SEO técnica básica, formularios y entrega de código limpio.' } },
            { '@type': 'Question', 'name': '¿El diseño es exclusivo o utilizáis plantillas prediseñadas?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Diseñamos cada web desde cero según la identidad y objetivos comerciales de tu empresa, sin plantillas genéricas.' } },
            { '@type': 'Question', 'name': '¿Cómo se establecen los plazos de entrega?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Fijamos un cronograma y plazo cerrado desde la propuesta inicial según las secciones y requerimientos de tu proyecto.' } }
          ]
        }
      ]
    });
  }
}
