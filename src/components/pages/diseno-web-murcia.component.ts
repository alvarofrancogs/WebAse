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
      <div class="container mx-auto px-6 max-w-4xl">

        <!-- Breadcrumb -->
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Diseño Web Murcia</span>
        </nav>

        <app-scroll-reveal preset="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Diseño Web en Murcia
          </h1>
          <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Diseño web profesional para empresas y autónomos en Murcia. Webs modernas, rápidas y optimizadas que convierten visitas en clientes.
          </p>
        </app-scroll-reveal>

        <!-- What we offer -->
        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Diseño a medida</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">
                Cada web se diseña desde cero para tu negocio. Sin plantillas genéricas. Tu marca, tu estilo, tu mensaje.
              </p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Optimizado para móvil</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">
                Responsive design que se ve perfecto en móvil, tablet y escritorio. Más del 70% del tráfico es móvil.
              </p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Velocidad extrema</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">
                Carga en menos de 2 segundos. Optimización de imágenes, código limpio y hosting de alto rendimiento.
              </p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">SEO incluido</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">
                Base SEO técnica para que Google te encuentre: estructura, velocidad, metadatos y contenido optimizado.
              </p>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- Process -->
        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">¿Cómo trabajamos el diseño web en Murcia?</h2>
          <div class="space-y-6 mb-16">
            <div class="flex gap-4 items-start">
              <span class="text-white font-mono text-sm bg-white/10 w-8 h-8 flex items-center justify-center rounded shrink-0">1</span>
              <div>
                <h3 class="text-white font-semibold mb-1">Escuchamos tu idea</h3>
                <p class="text-neutral-400 text-sm">Reunión inicial para entender tu negocio, tus objetivos y tu público en Murcia.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <span class="text-white font-mono text-sm bg-white/10 w-8 h-8 flex items-center justify-center rounded shrink-0">2</span>
              <div>
                <h3 class="text-white font-semibold mb-1">Diseñamos y validamos</h3>
                <p class="text-neutral-400 text-sm">Prototipo visual que apruebas antes de avanzar. Sin sorpresas.</p>
              </div>
            </div>
            <div class="flex gap-4 items-start">
              <span class="text-white font-mono text-sm bg-white/10 w-8 h-8 flex items-center justify-center rounded shrink-0">3</span>
              <div>
                <h3 class="text-white font-semibold mb-1">Desarrollamos y lanzamos</h3>
                <p class="text-neutral-400 text-sm">Código limpio, optimizado y listo para publicar. Entrega en 1-2 semanas.</p>
              </div>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes sobre diseño web en Murcia</h2>
          <div class="space-y-4 mb-16">
            @for (faq of faqs; track faq.q) {
              <div class="border border-white/10 rounded-lg p-5">
                <h3 class="text-white font-semibold text-sm mb-2">{{ faq.q }}</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="fade-up" [delay]="0.4">
          <div class="text-center bg-neutral-900/50 border border-white/10 rounded-xl p-8 md:p-12">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Necesitas una web profesional en Murcia?</h2>
            <p class="text-neutral-400 mb-6">Cuéntanos tu proyecto y te enviamos presupuesto sin compromiso en 24h.</p>
            <a href="/#contacto"
              class="inline-flex items-center justify-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 hover:bg-neutral-200 transition-colors">
              PEDIR PRESUPUESTO
            </a>
            <p class="text-neutral-500 text-xs mt-4">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Internal links -->
        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Mantenimiento Web</a>
            <a routerLink="/precios-diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Precios</a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class DisenoWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);

  faqs = [
    { q: '¿Cuánto tarda un diseño web en Murcia?', a: 'Normalmente entre 1 y 2 semanas, dependiendo de la complejidad del proyecto. Proyectos urgentes pueden acelerarse.' },
    { q: '¿El diseño incluye SEO?', a: 'Sí. Todas nuestras webs incluyen base SEO técnica: estructura optimizada, velocidad de carga, metadatos y contenido preparado para posicionar en Google.' },
    { q: '¿Puedo ver el diseño antes de la entrega?', a: 'Por supuesto. Te enviamos un prototipo visual que apruebas antes de empezar el desarrollo. Sin sorpresas ni costes extra.' },
    { q: '¿Qué pasa después de la entrega?', a: 'Ofrecemos planes de mantenimiento desde 30€/mes que incluyen hosting, dominio, SSL, backups y soporte. Tu web siempre actualizada y segura.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Diseño Web en Murcia | Web Profesional a Medida | EmberCode',
      description: 'Servicio de diseño web profesional en Murcia. Webs modernas, rápidas, responsive y optimizadas para SEO. Presupuesto sin compromiso. Entrega en 1-2 semanas.',
      canonicalPath: '/diseno-web-murcia',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Diseño Web en Murcia',
          'description': 'Servicio profesional de diseño web a medida para empresas y autónomos en Murcia.',
          'provider': {
            '@type': 'ProfessionalService',
            'name': 'EmberCode Web Studio',
            'url': 'https://www.embercode.es'
          },
          'areaServed': { '@type': 'City', 'name': 'Murcia' },
          'serviceType': 'Diseño web'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Diseño Web Murcia', 'item': 'https://www.embercode.es/diseno-web-murcia' }
          ]
        }
      ]
    });
  }
}
