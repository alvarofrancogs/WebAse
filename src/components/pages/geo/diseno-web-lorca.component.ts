import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../services/seo.service';
import { ScrollRevealComponent } from '../../ui/scroll-reveal.component';

@Component({
    selector: 'app-diseno-web-lorca',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealComponent],
    template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-4xl">
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <a routerLink="/diseno-web-murcia" class="hover:text-white transition-colors">Diseño Web</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Lorca</span>
        </nav>

        <app-scroll-reveal preset="fade-up" [delay]="0">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Diseño Web en Lorca
          </h1>
          <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Diseñamos webs para negocios de Lorca que necesitan presentar sus servicios con claridad y facilitar el contacto desde el móvil. La estructura y el contenido se adaptan a las búsquedas de su público local.
          </p>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">SEO local para Lorca</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Analizamos cómo buscan tus servicios en Lorca y organizamos las páginas para responder a esas consultas. Si atiendes otras localidades, reflejamos las zonas reales de tu actividad.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Diseño profesional</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Diseñamos primero la experiencia de consulta y contacto en móvil, y adaptamos el contenido a pantallas más grandes.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Precios accesibles</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Presupuesto cerrado sin sorpresas. Web profesional desde ~500€ y mantenimiento desde 30€/mes con hosting y SSL incluidos.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Comunicación directa</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Revisamos contigo el contenido y las funciones por videollamada o por el canal de contacto acordado durante el proyecto.</p>
            </div>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <div class="text-center py-12 border border-white/10 rounded-lg bg-white/[0.02] mb-12">
            <h2 class="text-2xl font-bold text-white mb-3">¿Necesitas una web en Lorca?</h2>
            <p class="text-neutral-400 text-sm mb-6">Cuéntanos qué necesita tu negocio y te prepararemos una propuesta personalizada.</p>
            <a href="https://wa.me/34601423840?text=Hola%2C%20necesito%20una%20web%20para%20mi%20negocio%20en%20Lorca" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors">
              PEDIR PRESUPUESTO
            </a>
          </div>
        </app-scroll-reveal>

        <div class="text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">También trabajamos en</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Murcia</a>
            <a routerLink="/diseno-web-cartagena" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Cartagena</a>
            <a routerLink="/diseno-web-molina-de-segura" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Molina de Segura</a>
          </div>
        </div>
      </div>
    </section>
    `
})
export class DisenoWebLorcaComponent implements OnInit {
    private seo = inject(SeoService);
    ngOnInit() {
        this.seo.update({
            title: 'Diseño Web en Lorca | Páginas Web Profesionales | EmberCode',
            description: 'Diseño y desarrollo web en Lorca. Webs profesionales para negocios locales con SEO, adaptadas a móvil y velocidad optimizada. Presupuesto sin compromiso.',
            canonicalPath: '/diseno-web-lorca',
            geo: {
                region: 'ES-MU',
                placename: 'Lorca',
            },
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    '@id': 'https://www.embercode.es/diseno-web-lorca#service',
                    'name': 'Diseño Web en Lorca',
                    'description': 'Diseño y desarrollo web profesional para empresas y autónomos en Lorca.',
                    'provider': { '@id': 'https://www.embercode.es/#organization' },
                    'areaServed': {
                        '@type': 'City',
                        'name': 'Lorca',
                        'sameAs': 'https://es.wikipedia.org/wiki/Lorca'
                    }
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Diseño Web', 'item': 'https://www.embercode.es/diseno-web-murcia' },
                        { '@type': 'ListItem', 'position': 3, 'name': 'Lorca', 'item': 'https://www.embercode.es/diseno-web-lorca' }
                    ]
                }
            ]
        });
    }
}
