import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-desarrollo-web-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">
        <nav class="mb-8 text-xs font-mono text-white/40">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-white/70">Desarrollo Web Murcia</span>
        </nav>
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Desarrollo a Medida</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">Código que<br>funciona.</h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">Aplicaciones web a medida, APIs robustas y arquitecturas escalables. Angular, React, Node.js, Java.</p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Pedir presupuesto</span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Stack Tecnológico</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Herramientas que dominamos</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            @for (tech of techStack; track tech; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.05">
                <div class="bg-black p-8 text-center group hover:bg-white/[0.03] transition-colors">
                  <span class="text-white font-mono text-sm">{{ tech }}</span>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Proceso</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Cómo trabajamos</h2>
          </app-scroll-reveal>
          <div class="relative pl-8 md:pl-16 border-l border-white/10 ml-4 md:ml-8">
            @for (step of processSteps; track step.num; let i = $index) {
              <app-scroll-reveal preset="fade-up-blur" [delay]="i * 0.1">
                <div class="relative py-12 group">
                  <!-- Timeline Node -->
                  <div class="absolute -left-[3.25rem] md:-left-[5.25rem] top-12 w-10 h-10 md:w-12 md:h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/50 group-hover:scale-110 transition-all duration-300">
                    <span class="text-sm font-mono">{{ step.num }}</span>
                  </div>
                  <!-- Content -->
                  <div class="bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-colors rounded-lg">
                    <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">{{ step.title }}</h3>
                    <p class="text-white/60 text-base leading-relaxed max-w-2xl">{{ step.desc }}</p>
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="space-y-2">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="bg-white/[0.02] border border-white/[0.06]">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex items-center gap-3 p-5 text-left font-mono text-sm hover:bg-white/[0.03] transition-colors">
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
        <app-scroll-reveal preset="lift" [delay]="0.2">
          <div class="relative border border-white/10 p-12 md:p-20 text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Tienes un proyecto de desarrollo web?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te enviamos propuesta técnica y presupuesto en 24h.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>
        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/tienda-online-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Mantenimiento</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DesarrolloWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;
  techStack = ['Angular', 'React', 'Next.js', 'Node.js', 'Java', 'TypeScript', 'PostgreSQL', 'Docker'];
  processSteps = [
    { num: '01', title: 'Análisis', desc: 'Estudiamos tu negocio, requisitos funcionales y definimos la arquitectura técnica ideal.' },
    { num: '02', title: 'Prototipo', desc: 'Wireframes y diseño UI que validas antes de escribir código. Sin sorpresas.' },
    { num: '03', title: 'Desarrollo', desc: 'Sprints ágiles con entregas periódicas. Código limpio, testeable y documentado.' },
    { num: '04', title: 'Deploy', desc: 'Lanzamiento en producción con CI/CD, monitorización y soporte post-lanzamiento.' },
  ];
  faqs = [
    { q: '¿En qué tecnologías desarrolláis?', a: 'Trabajamos con Angular, React, Next.js, Node.js, Java, TypeScript, PostgreSQL, MySQL y Docker.' },
    { q: '¿Cuál es la diferencia entre plantilla y desarrollo a medida?', a: 'Una plantilla es rápida y económica, pero limitada. El desarrollo a medida se construye para tu negocio.' },
    { q: '¿Ofrecéis mantenimiento después del desarrollo?', a: 'Sí. Planes de mantenimiento desde 30€/mes con hosting, backups, SSL y soporte técnico incluido.' },
  ];
  ngOnInit() {
    this.seo.update({
      title: 'Desarrollo Web a Medida en Murcia | EmberCode Web Studio',
      description: 'Desarrollo web profesional en Murcia. Aplicaciones a medida, APIs, backend robusto y frontend moderno.',
      canonicalPath: '/desarrollo-web-murcia',
      jsonLd: [
        { '@context': 'https://schema.org', '@type': 'Service', 'name': 'Desarrollo Web a Medida en Murcia', 'description': 'Desarrollo web profesional con tecnologías modernas para empresas en Murcia.', 'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' }, 'areaServed': { '@type': 'City', 'name': 'Murcia' }, 'serviceType': 'Desarrollo web' },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' }, { '@type': 'ListItem', 'position': 2, 'name': 'Desarrollo Web Murcia', 'item': 'https://www.embercode.es/desarrollo-web-murcia' }] }
      ]
    });
  }
}
