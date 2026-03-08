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
      <div class="container mx-auto px-6 max-w-5xl">
        <nav class="mb-8 text-xs font-mono text-white/40">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-white/70">Mantenimiento Web</span>
        </nav>
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Mantenimiento Web</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">Tu web,<br>siempre activa.</h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">Hosting, seguridad, backups y soporte técnico. Nos encargamos de todo para que tú te centres en tu negocio.</p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Contratar</span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Pricing Cards -->
        <app-scroll-reveal preset="lift" [delay]="0.15">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-32 max-w-3xl mx-auto">
            @for (plan of plans; track plan.name) {
              <div class="bg-black p-10 group hover:bg-white/[0.02] transition-colors duration-500" [class.border-t-2]="plan.highlighted" [class.border-t-white]="plan.highlighted">
                @if (plan.highlighted) {
                  <span class="text-[10px] font-mono tracking-widest uppercase text-white/50 mb-4 block">Recomendado</span>
                }
                <h3 class="text-2xl font-black text-white mb-1">{{ plan.name }}</h3>
                <p class="text-white/40 text-sm mb-6">{{ plan.desc }}</p>
                <div class="flex items-baseline gap-1 mb-8">
                  <span class="text-4xl font-black text-white">{{ plan.price }}</span>
                  <span class="text-white/40 text-sm">/mes</span>
                </div>
                <ul class="space-y-3 mb-8">
                  @for (feat of plan.features; track feat) {
                    <li class="flex items-start gap-3 text-sm text-white/70">
                      <svg class="w-4 h-4 text-white/40 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      {{ feat }}
                    </li>
                  }
                </ul>
                <a href="/#contacto" class="block text-center border border-white/20 py-3 text-sm font-bold text-white hover:bg-white hover:text-black transition-all duration-300">Contratar</a>
              </div>
            }
          </div>
        </app-scroll-reveal>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="space-y-6">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="relative pl-6 group">
                  <div class="absolute left-0 top-3 w-1.5 h-1.5 rounded-full transition-all duration-500" [class.bg-white]="openFaq === i" [class.bg-white/20]="openFaq !== i" [class.scale-150]="openFaq === i"></div>
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full text-left font-bold text-lg text-white mb-2 hover:text-white/70 transition-colors">
                    {{ faq.q }}
                  </button>
                  <div class="grid transition-all duration-500 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                    <div class="overflow-hidden">
                      <p class="text-white/70 text-sm leading-relaxed pb-2">{{ faq.a }}</p>
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
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Tu web necesita mantenimiento profesional?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Hosting, seguridad, backups y soporte. Desde 30€/mes.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">CONTRATAR MANTENIMIENTO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MantenimientoWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;
  plans = [
    { name: 'Básico', price: '30€', desc: 'Para webs que solo necesitan estar online.', highlighted: false, features: ['Hosting incluido', 'Dominio .com o .es', 'Certificado SSL (https)', 'Backups automáticos', '1 modificación mensual', 'Soporte en menos de 24h'] },
    { name: 'Estándar', price: '50€', desc: 'Para negocios que necesitan cambios frecuentes.', highlighted: true, features: ['Todo lo del plan Básico', '3 modificaciones mensuales', 'Optimización SEO continua', 'Monitorización 24/7', 'Soporte en menos de 24h', 'Reportes de rendimiento'] }
  ];
  faqs = [
    { q: '¿Qué pasa si no contrato mantenimiento?', a: 'Tu web seguirá funcionando, pero no tendrás hosting gestionado, backups automáticos ni soporte.' },
    { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes subir o bajar de plan en cualquier momento. Sin permanencia y sin penalizaciones.' },
    { q: '¿Incluye dominio y hosting?', a: 'Sí. Ambos planes incluyen hosting de alto rendimiento, dominio (.com o .es) y certificado SSL gratuito.' },
  ];
  ngOnInit() {
    this.seo.update({
      title: 'Mantenimiento Web en Murcia | Hosting, SSL y Soporte | EmberCode',
      description: 'Planes de mantenimiento web en Murcia desde 30€/mes. Hosting, dominio, SSL, backups, soporte en 24h y modificaciones incluidas.',
      canonicalPath: '/mantenimiento-web-murcia',
      jsonLd: [
        { '@context': 'https://schema.org', '@type': 'Service', 'name': 'Mantenimiento Web en Murcia', 'description': 'Planes de mantenimiento web profesional con hosting, dominio, SSL y soporte técnico.', 'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' }, 'areaServed': { '@type': 'City', 'name': 'Murcia' }, 'serviceType': 'Mantenimiento web' },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' }, { '@type': 'ListItem', 'position': 2, 'name': 'Mantenimiento Web Murcia', 'item': 'https://www.embercode.es/mantenimiento-web-murcia' }] }
      ]
    });
  }
}
