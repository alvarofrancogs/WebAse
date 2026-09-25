import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../services/seo.service';
import { ScrollRevealComponent } from '../../ui/scroll-reveal.component';

@Component({
    selector: 'app-diseno-web-molina',
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
          <span class="text-neutral-400">Molina de Segura</span>
        </nav>

        <app-scroll-reveal preset="fade-up" [delay]="0">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Diseño Web en Molina de Segura
          </h1>
          <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Creamos webs para empresas de Molina de Segura que necesitan explicar qué ofrecen y recibir consultas. Trabajamos la estructura, la experiencia móvil y la información local relevante para su actividad.
          </p>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Posicionamiento en Molina</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Investigamos las búsquedas relacionadas con tus servicios en Molina de Segura y organizamos las páginas según las zonas donde realmente trabajas.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Cercanía total</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Concretamos contigo el público, los servicios y la información que deben encontrar los clientes antes de contactar.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Web que convierte</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Cada página está diseñada para que el visitante confíe en tu negocio y te contacte. CTA claros, WhatsApp directo, formularios simples.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-white font-semibold mb-3">Entrega rápida</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Acordamos alcance y calendario antes de empezar; revisamos el contenido y las funciones durante el desarrollo.</p>
            </div>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <div class="text-center py-12 border border-white/10 rounded-lg bg-white/[0.02] mb-12">
            <h2 class="text-2xl font-bold text-white mb-3">¿Necesitas una web en Molina de Segura?</h2>
            <p class="text-neutral-400 text-sm mb-6">Cuéntanos qué necesita tu negocio y te prepararemos una propuesta personalizada.</p>
            <a href="https://wa.me/34601423840?text=Hola%2C%20necesito%20una%20web%20para%20mi%20negocio%20en%20Molina%20de%20Segura" target="_blank" rel="noopener noreferrer"
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
            <a routerLink="/diseno-web-lorca" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Lorca</a>
          </div>
        </div>
      </div>
    </section>
    `
})
export class DisenoWebMolinaComponent implements OnInit {
    private seo = inject(SeoService);
    ngOnInit() {
        this.seo.update({
            title: 'Diseño Web en Molina de Segura | Páginas Web a Medida | EmberCode',
            description: 'Diseño web profesional en Molina de Segura. Webs modernas para empresas y autónomos con SEO local, adaptadas a móvil. Presupuesto sin compromiso.',
            canonicalPath: '/diseno-web-molina-de-segura',
            geo: {
                region: 'ES-MU',
                placename: 'Molina de Segura',
            },
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    '@id': 'https://www.embercode.es/diseno-web-molina-de-segura#service',
                    'name': 'Diseño Web en Molina de Segura',
                    'description': 'Diseño web profesional para empresas y autónomos en Molina de Segura.',
                    'provider': { '@id': 'https://www.embercode.es/#organization' },
                    'areaServed': {
                        '@type': 'City',
                        'name': 'Molina de Segura',
                        'sameAs': 'https://es.wikipedia.org/wiki/Molina_de_Segura'
                    }
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Diseño Web', 'item': 'https://www.embercode.es/diseno-web-murcia' },
                        { '@type': 'ListItem', 'position': 3, 'name': 'Molina de Segura', 'item': 'https://www.embercode.es/diseno-web-molina-de-segura' }
                    ]
                }
            ]
        });
    }
}
