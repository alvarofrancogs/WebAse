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

        <nav class="mb-8 text-xs font-mono text-white/40">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-white/70">Web para Empresas</span>
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

        <!-- Benefits Accordion -->
        <div class="mb-32 max-w-4xl mx-auto">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4 text-center">¿Por qué una web profesional?</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16 text-center">Lo que incluye tu web corporativa</h2>
          </app-scroll-reveal>
          <div class="flex flex-col border-t border-white/10">
            @for (benefit of benefits; track benefit.title; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.1">
                <div class="border-b border-white/10 group overflow-hidden">
                  <button (click)="openBenefit = openBenefit === i ? -1 : i" class="w-full flex items-center justify-between py-8 md:py-10 text-left hover:bg-white/[0.02] transition-colors duration-500 px-0">
                    <div class="flex items-center gap-6 md:gap-12 transition-transform duration-500 ease-out group-hover:translate-x-4">
                      <span class="text-2xl md:text-3xl font-mono text-white/20 transition-colors" [class.text-amber-400]="openBenefit === i">{{ benefit.num }}</span>
                      <h3 class="text-xl md:text-3xl font-bold text-white/70 transition-colors" [class.text-white]="openBenefit === i">{{ benefit.title }}</h3>
                    </div>
                    <div class="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-500" [class.bg-white]="openBenefit === i" [class.border-white]="openBenefit === i">
                      <div class="absolute w-3 h-[2px] bg-white transition-colors" [class.bg-black]="openBenefit === i"></div>
                      <div class="absolute w-[2px] h-3 bg-white transition-all duration-500" [class.bg-black]="openBenefit === i" [class.rotate-90]="openBenefit === i"></div>
                    </div>
                  </button>
                  <div class="grid transition-all duration-500 ease-in-out" 
                       [class.grid-rows-[1fr]]="openBenefit === i" 
                       [class.opacity-100]="openBenefit === i" 
                       [class.grid-rows-[0fr]]="openBenefit !== i" 
                       [class.opacity-0]="openBenefit !== i">
                    <div class="overflow-hidden">
                      <div class="pl-0 md:pl-24 pr-6 pb-10">
                        <p class="text-white/60 text-lg leading-relaxed max-w-2xl">{{ benefit.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- FAQ Accordion -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="flex flex-col gap-4">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="group border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex gap-4 items-center p-6 text-left">
                    <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors group-hover:bg-white/10" [class.bg-white]="openFaq === i" [class.text-black]="openFaq === i" [class.text-white]="openFaq !== i">
                      <span class="text-xs font-mono">{{ i + 1 }}</span>
                    </div>
                    <span class="text-white font-bold flex-1">{{ faq.q }}</span>
                  </button>
                  <div class="grid transition-all duration-300 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
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
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te enviamos presupuesto cerrado en 24h. Sin compromiso.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">SOLICITAR PRESUPUESTO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
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
  openBenefit: number = 0;

  stats = [
    { value: '100+', label: 'Webs entregadas' },
    { value: '<2s', label: 'Carga media' },
    { value: '24h', label: 'Soporte' },
    { value: '0€', label: 'Permanencia' },
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
    { q: '¿Incluye el dominio y hosting?', a: 'Sí. Con nuestros planes de mantenimiento, dominio (.com, .es), hosting de alto rendimiento, SSL y backups están incluidos.' },
    { q: '¿Cuánto tarda en estar lista?', a: 'Normalmente entre 1 y 3 semanas según el alcance del proyecto. Proyectos urgentes pueden acelerarse.' },
    { q: '¿Y si necesito funcionalidades especiales?', a: 'Tenemos experiencia en formularios avanzados, zonas privadas, integración con APIs, CRMs, ERPs y mucho más.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Página Web para Empresas en Murcia | Diseño Profesional | EmberCode',
      description: 'Creamos páginas web profesionales para empresas en Murcia. Diseño a medida, optimización SEO, adaptada a móvil y enfocada en captar clientes. Presupuesto sin compromiso.',
      canonicalPath: '/pagina-web-para-empresas-murcia',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Página Web para Empresas en Murcia',
          'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' },
          'areaServed': { '@type': 'City', 'name': 'Murcia' },
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
            { '@type': 'Question', 'name': '¿Cuánto cuesta una web para mi empresa en Murcia?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Cada proyecto es diferente. Una web corporativa básica parte de unos ~500€, pero el precio depende del número de páginas, funcionalidades y diseño.' } },
            { '@type': 'Question', 'name': '¿Incluye el dominio y hosting?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Con nuestros planes de mantenimiento, dominio (.com, .es), hosting de alto rendimiento, SSL y backups están incluidos.' } }
          ]
        }
      ]
    });
  }
}
