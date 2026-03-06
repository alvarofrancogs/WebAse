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
      <div class="container mx-auto px-6 max-w-4xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Desarrollo Web Murcia</span>
        </nav>

        <app-scroll-reveal preset="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Desarrollo Web a Medida en Murcia
          </h1>
          <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Desarrollo web profesional con código limpio, rendimiento extremo y funcionalidades avanzadas. Soluciones técnicas reales para negocios en Murcia.
          </p>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Frontend moderno</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Angular, React, Next.js — interfaces rápidas, interactivas y optimizadas para cualquier dispositivo.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Backend robusto</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">APIs, bases de datos, paneles de gestión. Node.js, Java, PostgreSQL — la arquitectura que tu negocio necesita.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Integraciones</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Pasarelas de pago, CRM, email marketing, APIs de terceros. Conectamos tu web con las herramientas que ya usas.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Escalable y mantenible</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Código documentado, buenas prácticas y arquitectura pensada para crecer. Tu inversión protegida a largo plazo.</p>
            </div>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes sobre desarrollo web en Murcia</h2>
          <div class="space-y-4 mb-16">
            @for (faq of faqs; track faq.q) {
              <div class="border border-white/10 rounded-lg p-5">
                <h3 class="text-white font-semibold text-sm mb-2">{{ faq.q }}</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <div class="text-center bg-neutral-900/50 border border-white/10 rounded-xl p-8 md:p-12">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Tienes un proyecto de desarrollo web en Murcia?</h2>
            <p class="text-neutral-400 mb-6">Te enviamos propuesta técnica y presupuesto en 24h. Sin compromiso.</p>
            <a href="/#contacto" class="inline-flex items-center justify-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 hover:bg-neutral-200 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-neutral-500 text-xs mt-4">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Mantenimiento Web</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DesarrolloWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);

  faqs = [
    { q: '¿En qué tecnologías desarrolláis?', a: 'Trabajamos con Angular, React, Next.js, Node.js, Java, TypeScript, PostgreSQL, MySQL y Docker. Elegimos la tecnología que mejor se adapta a tu proyecto.' },
    { q: '¿Cuál es la diferencia entre plantilla y desarrollo a medida?', a: 'Una plantilla es rápida y económica, pero limitada. El desarrollo a medida se construye para tu negocio: funcionalidades específicas, rendimiento optimizado y sin limitaciones de diseño.' },
    { q: '¿Ofrecéis mantenimiento después del desarrollo?', a: 'Sí. Planes de mantenimiento desde 30€/mes con hosting, backups, SSL y soporte técnico incluido.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Desarrollo Web a Medida en Murcia | EmberCode Web Studio',
      description: 'Desarrollo web profesional en Murcia. Aplicaciones a medida, APIs, backend robusto y frontend moderno. Angular, React, Node.js. Presupuesto sin compromiso.',
      canonicalPath: '/desarrollo-web-murcia',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Desarrollo Web a Medida en Murcia',
          'description': 'Desarrollo web profesional con tecnologías modernas para empresas en Murcia.',
          'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' },
          'areaServed': { '@type': 'City', 'name': 'Murcia' },
          'serviceType': 'Desarrollo web'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Desarrollo Web Murcia', 'item': 'https://www.embercode.es/desarrollo-web-murcia' }
          ]
        }
      ]
    });
  }
}
