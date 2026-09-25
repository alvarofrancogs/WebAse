import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-precios-diseno-web-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-4xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Precios Diseño Web Murcia</span>
        </nav>

        <app-scroll-reveal preset="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Precios de Diseño Web en Murcia
          </h1>
          <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Presupuesto transparente y sin sorpresas. Cada proyecto es diferente, pero aquí tienes una orientación de lo que incluyen nuestros servicios web en Murcia.
          </p>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">¿Qué incluye cada proyecto?</h2>
          <div class="space-y-6 mb-16">
            @for (item of inclusions; track item.title) {
              <div class="border border-white/10 rounded-lg p-6">
                <h3 class="text-white font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-neutral-400 text-sm leading-relaxed mb-3">{{ item.desc }}</p>
                <ul class="flex flex-wrap gap-2">
                  @for (tag of item.tags; track tag) {
                    <li class="text-[10px] font-mono tracking-widest uppercase text-neutral-500 bg-white/5 px-3 py-1 rounded">{{ tag }}</li>
                  }
                </ul>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <!-- Maintenance prices (the only confirmed pricing) -->
        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">Mantenimiento mensual</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <div class="border border-white/10 rounded-lg p-6 md:p-8 bg-neutral-950">
              <h3 class="text-xl font-semibold text-white mb-1">Básico</h3>
              <p class="text-sm text-neutral-500 mb-4">Para webs que solo necesitan estar online.</p>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-bold text-white">30€</span>
                <span class="text-neutral-500 text-sm">/mes</span>
              </div>
              <ul class="space-y-2 text-sm text-neutral-400">
                <li>✓ Hosting + dominio + SSL</li>
                <li>✓ Backups automáticos</li>
                <li>✓ 1 modificación mensual</li>
                <li>✓ Soporte en menos de 24h</li>
              </ul>
            </div>
            <div class="border border-white/20 rounded-lg p-6 md:p-8 bg-neutral-950">
              <div class="flex items-center justify-between mb-1">
                <h3 class="text-xl font-semibold text-white">Estándar</h3>
                <span class="text-[10px] font-mono tracking-widest uppercase text-white/60 bg-white/10 px-2 py-0.5 rounded">Recomendado</span>
              </div>
              <p class="text-sm text-neutral-500 mb-4">Para negocios que necesitan cambios frecuentes.</p>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-4xl font-bold text-white">50€</span>
                <span class="text-neutral-500 text-sm">/mes</span>
              </div>
              <ul class="space-y-2 text-sm text-neutral-400">
                <li>✓ Todo lo del plan Básico</li>
                <li>✓ 3 modificaciones mensuales</li>
                <li>✓ SEO continuo</li>
                <li>✓ Monitorización 24/7</li>
                <li>✓ Reportes de rendimiento</li>
              </ul>
            </div>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes sobre precios</h2>
          <div class="space-y-4 mb-16">
            @for (faq of faqs; track faq.q) {
              <div class="border border-white/10 rounded-lg p-5">
                <h3 class="text-white font-semibold text-sm mb-2">{{ faq.q }}</h3>
                <p class="text-neutral-400 text-sm leading-relaxed">{{ faq.a }}</p>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.4">
          <div class="text-center bg-neutral-900/50 border border-white/10 rounded-lg p-8 md:p-12">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Quieres un presupuesto personalizado?</h2>
            <p class="text-neutral-400 mb-6">Cuéntanos tu proyecto y te preparamos una propuesta detallada, sin compromiso.</p>
            <a href="/#contacto" class="inline-flex items-center justify-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 hover:bg-neutral-200 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-neutral-500 text-xs mt-4">O llámanos: <a href="tel:+34601423840" class="text-white hover:underline">601 423 840</a></p>
          </div>
        </app-scroll-reveal>

        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Mantenimiento Web</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PreciosDisenoWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);

  inclusions = [
    {
      title: 'Sitio Web Profesional',
      desc: 'Diseño y desarrollo web a medida. Tu escaparate online optimizado para convertir visitas en clientes.',
      tags: ['Diseño responsive', 'SEO base', 'Entrega ágil', 'Código limpio']
    },
    {
      title: 'Tienda Online',
      desc: 'E-commerce completo con catálogo, pasarela de pago y gestión de pedidos.',
      tags: ['Catálogo productos', 'Pasarela pago', 'Panel admin', 'SEO ecommerce']
    },
    {
      title: 'Backend & Automatización',
      desc: 'Paneles de gestión, CRM, bases de datos y procesos automáticos para tu negocio.',
      tags: ['Dashboard', 'APIs', 'Integraciones', 'Automatizaciones']
    }
  ];

  faqs = [
    { q: '¿Los precios incluyen IVA?', a: 'Los precios de mantenimiento mostrados no incluyen IVA. El presupuesto final del proyecto siempre detalla IVA de forma separada.' },
    { q: '¿Hay costes ocultos?', a: 'No. El presupuesto es cerrado y aprobado antes de empezar. Si durante el proyecto surge algo adicional, lo hablamos antes de cualquier coste extra.' },
    { q: '¿Cómo se paga?', a: 'Normalmente 50% al comenzar y 50% a la entrega. Para mantenimiento, facturación mensual o trimestral. Transferencia bancaria o Bizum.' },
    { q: '¿Puedo pedir presupuesto sin compromiso?', a: 'Sí, siempre. Nos cuentas tu idea, preparamos una propuesta técnica y un presupuesto, y tú decides sin presión.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Precios Diseño Web en Murcia | Presupuesto sin Compromiso | EmberCode',
      description: 'Precios orientativos de diseño web en Murcia. Mantenimiento desde 30€/mes. Presupuesto personalizado sin compromiso.',
      canonicalPath: '/precios-diseno-web-murcia',
      geo: {
        region: 'ES-MU',
        placename: 'Murcia',
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://www.embercode.es/precios-diseno-web-murcia#service',
          'name': 'Precios Diseño Web en Murcia',
          'description': 'Precios orientativos y planes de mantenimiento web para empresas en Murcia.',
          'provider': { '@id': 'https://www.embercode.es/#organization' },
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
            { '@type': 'ListItem', 'position': 2, 'name': 'Precios Diseño Web Murcia', 'item': 'https://www.embercode.es/precios-diseno-web-murcia' }
          ]
        }
      ]
    });
  }
}
