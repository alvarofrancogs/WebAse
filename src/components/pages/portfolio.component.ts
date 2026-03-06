import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

interface CaseStudy {
    title: string;
    sector: string;
    description: string;
    results: { label: string; value: string }[];
    services: string[];
}

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealComponent],
    template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">

        <!-- Breadcrumb -->
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Portfolio</span>
        </nav>

        <!-- H1 -->
        <app-scroll-reveal preset="fade-up" [delay]="0">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Proyectos Web en Murcia
          </h1>
          <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-16">
            Cada proyecto es un caso real de cómo transformamos la presencia digital de negocios en Murcia. Resultados medibles, diseño profesional y tecnología que funciona.
          </p>
        </app-scroll-reveal>

        <!-- Case studies -->
        @for (project of projects; track $index) {
          <app-scroll-reveal preset="fade-up" [delay]="0.1 + ($index * 0.1)">
            <div class="mb-12 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors">
              <!-- Header -->
              <div class="p-6 md:p-8 border-b border-white/10 bg-white/[0.02]">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span class="text-xs font-mono tracking-widest uppercase text-emerald-500 mb-2 block">{{ project.sector }}</span>
                    <h2 class="text-xl md:text-2xl font-bold text-white">{{ project.title }}</h2>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    @for (service of project.services; track $index) {
                      <span class="text-[10px] font-mono tracking-wider uppercase px-3 py-1 border border-white/10 rounded-full text-neutral-400">{{ service }}</span>
                    }
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 md:p-8">
                <p class="text-neutral-400 text-sm leading-relaxed mb-6">{{ project.description }}</p>

                <!-- Results grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  @for (result of project.results; track $index) {
                    <div class="text-center p-4 border border-white/5 rounded bg-white/[0.02]">
                      <p class="text-xl md:text-2xl font-bold text-emerald-500">{{ result.value }}</p>
                      <p class="text-[10px] font-mono text-neutral-500 mt-1 tracking-wider uppercase">{{ result.label }}</p>
                    </div>
                  }
                </div>
              </div>
            </div>
          </app-scroll-reveal>
        }

        <!-- Why us -->
        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">¿Por qué eligen EmberCode?</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="border border-white/10 rounded-lg p-6">
                <p class="text-3xl font-bold text-white mb-2">100%</p>
                <p class="text-neutral-400 text-sm">Proyectos entregados a tiempo</p>
              </div>
              <div class="border border-white/10 rounded-lg p-6">
                <p class="text-3xl font-bold text-white mb-2">&lt;2s</p>
                <p class="text-neutral-400 text-sm">Velocidad de carga media</p>
              </div>
              <div class="border border-white/10 rounded-lg p-6">
                <p class="text-3xl font-bold text-white mb-2">24h</p>
                <p class="text-neutral-400 text-sm">Tiempo medio de respuesta</p>
              </div>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="fade-up" [delay]="0.35">
          <div class="text-center py-12 border border-white/10 rounded-lg bg-white/[0.02]">
            <h2 class="text-2xl font-bold text-white mb-3">¿Tu proyecto es el siguiente?</h2>
            <p class="text-neutral-400 text-sm mb-6">Cuéntanos tu idea. Te enviamos presupuesto cerrado en 24h.</p>
            <a href="https://wa.me/34601102877?text=Hola%2C%20he%20visto%20vuestro%20portfolio%20y%20me%20interesa%20un%20proyecto%20web" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors">
              HABLAR DE MI PROYECTO
            </a>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Nuestros servicios</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/seo-local-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">SEO Local</a>
          </div>
        </div>

      </div>
    </section>
    `
})
export class PortfolioComponent implements OnInit {
    private seo = inject(SeoService);

    projects: CaseStudy[] = [
        {
            title: 'Web corporativa para estudio de arquitectura',
            sector: 'Arquitectura · Murcia',
            description: 'Diseño y desarrollo de web profesional para estudio de arquitectura en Murcia. Portfolio de proyectos con galería visual, sección de servicios y formulario de contacto optimizado. SEO local para posicionar en búsquedas como "arquitecto murcia".',
            results: [
                { label: 'Tiempo de carga', value: '1.2s' },
                { label: 'Posición Google', value: 'Top 3' },
                { label: 'Contactos/mes', value: '+40' },
                { label: 'Entrega', value: '10 días' }
            ],
            services: ['Diseño Web', 'SEO Local', 'Formulario']
        },
        {
            title: 'Tienda online para marca de ropa local',
            sector: 'Moda · Región de Murcia',
            description: 'E-commerce completo con catálogo de productos, pasarela de pago, gestión de stock y panel de administración. Diseño mobile-first adaptado a la identidad de la marca con optimización de velocidad.',
            results: [
                { label: 'Productos', value: '120+' },
                { label: 'Conversión', value: '3.2%' },
                { label: 'Velocidad móvil', value: '95/100' },
                { label: 'Entrega', value: '3 sem.' }
            ],
            services: ['Tienda Online', 'CRM', 'Diseño']
        },
        {
            title: 'Sistema de gestión para clínica dental',
            sector: 'Salud · Murcia',
            description: 'Aplicación web interna para gestión de citas, historiales de pacientes y facturación. Dashboard con métricas del negocio y sistema de recordatorios automáticos por WhatsApp y email.',
            results: [
                { label: 'Citas auto.', value: '85%' },
                { label: 'Tiempo admin.', value: '-60%' },
                { label: 'No-shows', value: '-40%' },
                { label: 'Entrega', value: '4 sem.' }
            ],
            services: ['Backend', 'Automatización', 'Dashboard']
        },
        {
            title: 'Landing + SEO para empresa de reformas',
            sector: 'Construcción · Murcia',
            description: 'Página web de captación con casos de éxito, presupuestador online y posicionamiento SEO local. Integración con WhatsApp Business para respuesta inmediata a clientes potenciales.',
            results: [
                { label: 'Tráfico orgánico', value: '+280%' },
                { label: 'Leads/mes', value: '35+' },
                { label: 'Coste/lead', value: '-70%' },
                { label: 'Entrega', value: '12 días' }
            ],
            services: ['Diseño Web', 'SEO', 'WhatsApp']
        }
    ];

    ngOnInit() {
        this.seo.update({
            title: 'Portfolio Web en Murcia | Proyectos y Casos de Éxito | EmberCode',
            description: 'Descubre nuestros proyectos web en Murcia: webs corporativas, tiendas online, sistemas de gestión y SEO local. Resultados reales para negocios reales.',
            canonicalPath: '/portfolio',
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    'name': 'Portfolio de Proyectos Web en Murcia',
                    'description': 'Casos de éxito de diseño y desarrollo web para negocios en Murcia.',
                    'provider': {
                        '@type': 'ProfessionalService',
                        'name': 'EmberCode Web Studio',
                        'url': 'https://www.embercode.es'
                    }
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Portfolio', 'item': 'https://www.embercode.es/portfolio' }
                    ]
                }
            ]
        });
    }
}
