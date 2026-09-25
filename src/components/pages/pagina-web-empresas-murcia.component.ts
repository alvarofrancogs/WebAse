import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-pagina-web-empresas-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Web para Empresas</span>
        </nav>

        <!-- Hero -->
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Web Corporativa</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">
              Tu empresa,<br>online.
            </h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              Páginas web profesionales que posicionan tu marca, generan confianza y captan clientes. Diseño a medida para cada sector.
            </p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Solicitar presupuesto</span>
              <span class="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Stats -->
        <app-scroll-reveal preset="lift" [delay]="0.15">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-32">
            @for (stat of stats; track stat.label) {
              <div class="bg-black p-8 text-center group hover:bg-white/[0.03] transition-colors duration-500">
                <div class="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">{{ stat.value }}</div>
                <div class="text-xs font-mono text-white/40 uppercase tracking-wider">{{ stat.label }}</div>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <!-- Benefits Grid -->
        <div class="mb-32 max-w-5xl mx-auto">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4 text-center">¿Por qué una web profesional?</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16 text-center">Lo que incluye tu web corporativa</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (benefit of benefits; track benefit.title; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.08">
                <div class="p-8 rounded-lg border border-white/10 bg-neutral-950 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span class="text-2xl font-mono text-white/20 block mb-4">{{ benefit.num }}</span>
                    <h3 class="text-lg font-bold text-white mb-2">{{ benefit.title }}</h3>
                    <p class="text-white/60 text-sm leading-relaxed">{{ benefit.desc }}</p>
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- FAQ Accordion -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32 max-w-3xl mx-auto">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="flex flex-col gap-4">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="group border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <button type="button" (click)="openFaq = openFaq === i ? -1 : i" [attr.aria-expanded]="openFaq === i" [attr.aria-controls]="'faq-answer-' + i" class="w-full flex gap-4 items-center p-6 text-left">
                    <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-white/10" [class.bg-white]="openFaq === i" [class.text-black]="openFaq === i" [class.text-white]="openFaq !== i">
                      <span class="text-xs font-mono">{{ i + 1 }}</span>
                    </div>
                    <span class="text-white font-bold flex-1">{{ faq.q }}</span>
                  </button>
                  <div [attr.id]="'faq-answer-' + i" [attr.aria-hidden]="openFaq !== i" class="grid transition-all duration-300 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                    <div class="overflow-hidden">
                      <div class="pl-[4.5rem] pr-6 pb-6 text-white/70 text-sm leading-relaxed">
                        {{ faq.a }}
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
          <div class="relative border border-white/10 p-12 md:p-20 text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Tu empresa necesita una web profesional?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te preparamos un presupuesto según las necesidades de tu empresa, sin compromiso.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">SOLICITAR PRESUPUESTO</a>
            <p class="text-white/60 text-xs mt-6">O llámanos: <a href="tel:+34601423840" class="text-white hover:underline">601 423 840</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="text-center">
          <p class="text-white/60 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/seo-local-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">SEO Local</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PaginaWebEmpresasMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;

  stats = [
    { value: 'A medida', label: 'Diseño' },
    { value: 'Móvil', label: 'Adaptación' },
    { value: 'SEO', label: 'Base técnica' },
    { value: 'Directo', label: 'Contacto' },
  ];

  benefits = [
    { num: '01', title: 'Diseño a medida', desc: 'Nada de plantillas. Tu web refleja la identidad visual de tu empresa con un diseño único y profesional.' },
    { num: '02', title: 'Optimización SEO', desc: 'Estructura técnica preparada para Google: velocidad, metadatos, URLs y contenido optimizado.' },
    { num: '03', title: 'Responsive total', desc: 'Se adapta a cualquier dispositivo: móvil, tablet, portátil y pantalla 4K. Sin perder ni un detalle.' },
    { num: '04', title: 'Panel de gestión', desc: 'Gestiona contenido, imágenes y textos desde un panel intuitivo. Sin depender de nadie.' },
    { num: '05', title: 'Hosting y soporte', desc: 'Hosting de alto rendimiento, dominio, SSL y soporte técnico incluido en nuestros planes de mantenimiento.' },
  ];

  faqs = [
    { q: '¿Cuánto cuesta una web para mi empresa en Murcia?', a: 'Cada proyecto es diferente. Una web corporativa básica parte de unos ~500€, pero el precio depende del número de páginas, funcionalidades y diseño. Te damos presupuesto cerrado desde el primer día.' },
    { q: '¿Qué ocurre si mi empresa necesita integraciones o funcionalidades especiales?', a: 'Desarrollamos soluciones avanzadas a medida: integración con APIs, CRMs, ERPs, áreas privadas de clientes y formularios personalizados.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Página Web para Empresas en Murcia | Diseño Profesional | EmberCode',
      description: 'Creamos páginas web profesionales para empresas en Murcia. Diseño a medida, optimización SEO, adaptada a móvil y enfocada en captar clientes. Presupuesto sin compromiso.',
      canonicalPath: '/pagina-web-para-empresas-murcia',
      geo: {
        region: 'ES-MU',
        placename: 'Murcia',
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://www.embercode.es/pagina-web-para-empresas-murcia#service',
          'name': 'Página Web para Empresas en Murcia',
          'provider': { '@id': 'https://www.embercode.es/#organization' },
          'areaServed': {
            '@type': 'City',
            'name': 'Murcia',
            'sameAs': 'https://es.wikipedia.org/wiki/Murcia'
          },
          'description': 'Diseño y desarrollo de páginas web profesionales para empresas, autónomos y pymes en Murcia.'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Página Web para Empresas Murcia', 'item': 'https://www.embercode.es/pagina-web-para-empresas-murcia' }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': '¿Cuánto cuesta una web para mi empresa en Murcia?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Cada proyecto es diferente. Una web corporativa básica parte de unos ~500€, pero el precio depende del número de páginas, funcionalidades y diseño. Te damos presupuesto cerrado desde el primer día.' } },
            { '@type': 'Question', 'name': '¿Qué ocurre si mi empresa necesita integraciones o funcionalidades especiales?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Desarrollamos soluciones avanzadas a medida: integración con APIs, CRMs, ERPs, áreas privadas de clientes y formularios personalizados.' } }
          ]
        }
      ]
    });
  }
}
