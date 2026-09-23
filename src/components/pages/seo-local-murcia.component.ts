import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-seo-local-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">SEO Local Murcia</span>
        </nav>
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Posicionamiento Web</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">Aparece en<br>Google.</h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">SEO local para que tu negocio en Murcia aparezca en los primeros resultados cuando tus clientes te buscan.</p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Mejorar mi SEO</span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Strategies Grid -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Estrategia</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Cómo posicionamos tu negocio</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            @for (step of strategies; track step.title; let i = $index) {
              <app-scroll-reveal [preset]="i % 2 === 0 ? 'fade-up' : 'fade-up-blur'" [delay]="i * 0.1">
                <div class="relative bg-white/[0.02] border border-white/10 p-10 md:p-12 hover:bg-white/[0.04] transition-colors duration-500 group overflow-hidden h-full flex flex-col justify-end">
                  <div class="absolute -top-6 -right-6 text-[120px] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 leading-none select-none pointer-events-none">
                    {{ step.num }}
                  </div>
                  <div class="relative z-10">
                    <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">{{ step.title }}</h3>
                    <p class="text-white/50 text-sm leading-relaxed max-w-sm">{{ step.desc }}</p>
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- Stats -->
        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 mb-32">
            @for (stat of stats; track stat.label) {
              <div class="bg-black p-8 md:p-12 text-center group hover:bg-white/[0.03] transition-colors">
                <div class="text-3xl md:text-5xl font-black text-white mb-2">{{ stat.value }}</div>
                <div class="text-xs font-mono text-white/40 uppercase tracking-wider">{{ stat.label }}</div>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="flex flex-col">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="border-b border-white/10 overflow-hidden group">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex justify-between items-center py-8 text-left">
                    <h3 class="text-xl md:text-2xl font-black transition-colors duration-300 pr-8" [class.text-white]="openFaq === i" [class.text-white/50]="openFaq !== i">{{ faq.q }}</h3>
                    <div class="relative w-6 h-6 shrink-0 text-white/40 transition-transform duration-500" [class.rotate-45]="openFaq === i" [class.text-white]="openFaq === i">
                      <div class="absolute inset-0 m-auto w-full h-[2px] bg-current"></div>
                      <div class="absolute inset-0 m-auto w-[2px] h-full bg-current"></div>
                    </div>
                  </button>
                  <div class="grid transition-all duration-500 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                    <div class="overflow-hidden">
                      <p class="text-white/70 text-lg leading-relaxed pb-8 max-w-3xl">{{ faq.a }}</p>
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
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Quieres aparecer primero en Google?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Analizamos tu web gratuitamente y te proponemos un plan de posicionamiento.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">MEJORAR MI SEO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601423840" class="text-white hover:underline">601 423 840</a></p>
          </div>
        </app-scroll-reveal>

        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/pagina-web-para-empresas-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Web Empresas</a>
            <a routerLink="/tienda-online-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SeoLocalMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;
  strategies = [
    { num: '01', title: 'Auditoría SEO técnica', desc: 'Analizamos velocidad, estructura, indexación, errores 404, redirecciones y todo el aspecto técnico de tu web.' },
    { num: '02', title: 'Keyword research local', desc: 'Identificamos las búsquedas que hacen tus clientes potenciales en Murcia y optimizamos tu contenido para ellas.' },
    { num: '03', title: 'Google Business Profile', desc: 'Optimizamos tu ficha de Google para aparecer en el mapa local y en el pack de 3 resultados.' },
    { num: '04', title: 'Contenido y citaciones', desc: 'Creamos contenido optimizado y presencia en directorios locales para reforzar la autoridad de tu web.' },
  ];
  stats = [
    { value: '46%', label: 'Búsquedas locales' },
    { value: '3x', label: 'Más conversiones' },
    { value: '78%', label: 'Compran en 24h' },
  ];
  faqs = [
    { q: '¿En cuánto tiempo veré resultados del SEO?', a: 'El SEO local suele mostrar resultados iniciales en 1-3 meses y resultados sólidos en 3-6 meses. Depende de la competencia en tu sector.' },
    { q: '¿Qué diferencia hay entre SEO local y SEO normal?', a: 'El SEO local optimiza tu web para búsquedas en tu zona geográfica, incluyendo Google Business Profile y citaciones locales.' },
    { q: '¿Necesito una web para hacer SEO?', a: 'Sí. El SEO optimiza tu presencia web. Sin una web profesional, no hay base sobre la que trabajar.' },
  ];
  ngOnInit() {
    this.seo.update({
      title: 'SEO Local en Murcia | Posicionamiento Web para Negocios | EmberCode',
      description: 'Servicio de SEO local en Murcia para que tu negocio aparezca en los primeros resultados de Google.',
      canonicalPath: '/seo-local-murcia',
      geo: {
        region: 'ES-MU',
        placename: 'Murcia',
        position: '37.9922;-1.1307'
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'SEO Local en Murcia',
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
          'description': 'Posicionamiento SEO local para negocios en Murcia.'
        },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' }, { '@type': 'ListItem', 'position': 2, 'name': 'SEO Local Murcia', 'item': 'https://www.embercode.es/seo-local-murcia' }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{ '@type': 'Question', 'name': '¿En cuánto tiempo veré resultados del SEO?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El SEO local suele mostrar resultados iniciales en 1-3 meses.' } }, { '@type': 'Question', 'name': '¿Qué diferencia hay entre SEO local y SEO normal?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El SEO local optimiza tu web para búsquedas en tu zona geográfica.' } }] }
      ]
    });
  }
}
