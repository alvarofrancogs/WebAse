import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-mantenimiento-web-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-4xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Mantenimiento Web Murcia</span>
        </nav>

        <app-scroll-reveal preset="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Mantenimiento Web en Murcia
          </h1>
          <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Tu web siempre online, segura y actualizada. Planes de mantenimiento web en Murcia con hosting, dominio, SSL, backups y soporte técnico incluido.
          </p>
        </app-scroll-reveal>

        <!-- Plans -->
        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">Planes de mantenimiento</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            @for (plan of plans; track plan.name) {
              <div class="border rounded-xl overflow-hidden"
                [class.border-white/20]="plan.highlighted"
                [class.border-white/10]="!plan.highlighted">
                @if (plan.highlighted) {
                  <div class="bg-white/10 text-center py-2">
                    <span class="text-[10px] font-mono tracking-widest uppercase text-white/80">Recomendado</span>
                  </div>
                }
                <div class="p-6 md:p-8 bg-neutral-950">
                  <h3 class="text-xl font-semibold text-white mb-1">{{ plan.name }}</h3>
                  <p class="text-sm text-neutral-500 mb-6">{{ plan.desc }}</p>
                  <div class="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/10">
                    <span class="text-4xl font-bold text-white">{{ plan.price }}</span>
                    <span class="text-neutral-500 text-sm">/mes</span>
                  </div>
                  <ul class="space-y-3">
                    @for (f of plan.features; track f) {
                      <li class="flex items-start gap-3 text-sm">
                        <svg class="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-neutral-400">{{ f }}</span>
                      </li>
                    }
                  </ul>
                  <a href="/#contacto" class="block w-full mt-8 py-3 text-center text-xs font-mono tracking-widest uppercase font-medium transition-all"
                    [class.bg-white]="plan.highlighted" [class.text-black]="plan.highlighted" [class.hover:bg-neutral-200]="plan.highlighted"
                    [class.border]="!plan.highlighted" [class.border-white/20]="!plan.highlighted" [class.text-white]="!plan.highlighted" [class.hover:bg-white/5]="!plan.highlighted">
                    Contratar
                  </a>
                </div>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes sobre mantenimiento web</h2>
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
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Tu web necesita mantenimiento profesional?</h2>
            <p class="text-neutral-400 mb-6">Hosting, seguridad, backups y soporte. Desde 30€/mes.</p>
            <a href="/#contacto" class="inline-flex items-center justify-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 hover:bg-neutral-200 transition-colors">CONTRATAR MANTENIMIENTO</a>
            <p class="text-neutral-500 text-xs mt-4">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MantenimientoWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);

  plans = [
    {
      name: 'Básico',
      price: '30€',
      desc: 'Para webs que solo necesitan estar online.',
      highlighted: false,
      features: ['Hosting incluido', 'Dominio .com o .es', 'Certificado SSL (https)', 'Backups automáticos', '1 modificación mensual', 'Soporte en menos de 24h']
    },
    {
      name: 'Estándar',
      price: '50€',
      desc: 'Para negocios que necesitan cambios frecuentes.',
      highlighted: true,
      features: ['Todo lo del plan Básico', '3 modificaciones mensuales', 'Optimización SEO continua', 'Monitorización 24/7', 'Soporte en menos de 24h', 'Reportes de rendimiento']
    }
  ];

  faqs = [
    { q: '¿Qué pasa si no contrato mantenimiento?', a: 'Tu web seguirá funcionando, pero no tendrás hosting gestionado, backups automáticos ni soporte. Los cambios se cobrarán por hora.' },
    { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes subir o bajar de plan en cualquier momento. Sin permanencia y sin penalizaciones.' },
    { q: '¿Incluye dominio y hosting?', a: 'Sí. Ambos planes incluyen hosting de alto rendimiento, dominio (.com o .es) y certificado SSL gratuito.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Mantenimiento Web en Murcia | Hosting, SSL y Soporte | EmberCode',
      description: 'Planes de mantenimiento web en Murcia desde 30€/mes. Hosting, dominio, SSL, backups, soporte en 24h y modificaciones incluidas. Sin permanencia.',
      canonicalPath: '/mantenimiento-web-murcia',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Mantenimiento Web en Murcia',
          'description': 'Planes de mantenimiento web profesional con hosting, dominio, SSL y soporte técnico para empresas en Murcia.',
          'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' },
          'areaServed': { '@type': 'City', 'name': 'Murcia' },
          'serviceType': 'Mantenimiento web'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Mantenimiento Web Murcia', 'item': 'https://www.embercode.es/mantenimiento-web-murcia' }
          ]
        }
      ]
    });
  }
}
