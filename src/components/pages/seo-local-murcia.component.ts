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
      <div class="container mx-auto px-6 max-w-4xl">

        <!-- Breadcrumb -->
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">SEO Local Murcia</span>
        </nav>

        <!-- H1 -->
        <app-scroll-reveal preset="fade-up" [delay]="0">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            SEO Local en Murcia: Que Te Encuentren Tus Clientes
          </h1>
          <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            El 46% de las búsquedas en Google tienen intención local. Si tu negocio en Murcia no aparece en los primeros resultados, estás perdiendo clientes cada día. Nosotros lo solucionamos.
          </p>
        </app-scroll-reveal>

        <!-- What is local SEO -->
        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">¿Qué incluye nuestro SEO local?</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="glass-panel p-6 rounded-lg border border-white/10">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
                  </span>
                  <h3 class="text-white font-semibold">Investigación de keywords locales</h3>
                </div>
                <p class="text-neutral-400 text-sm leading-relaxed">Analizamos qué buscan tus clientes potenciales en Murcia: "fontanero murcia", "restaurante italiano murcia"… y optimizamos para esas búsquedas.</p>
              </div>
              <div class="glass-panel p-6 rounded-lg border border-white/10">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                  </span>
                  <h3 class="text-white font-semibold">Google Business Profile</h3>
                </div>
                <p class="text-neutral-400 text-sm leading-relaxed">Configuramos y optimizamos tu ficha de Google para que aparezcas en Google Maps y en el pack local con fotos, horarios y reseñas.</p>
              </div>
              <div class="glass-panel p-6 rounded-lg border border-white/10">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
                  </span>
                  <h3 class="text-white font-semibold">SEO técnico on-page</h3>
                </div>
                <p class="text-neutral-400 text-sm leading-relaxed">Títulos, metas, estructura de encabezados, datos estructurados (Schema.org), velocidad de carga y Core Web Vitals optimizados.</p>
              </div>
              <div class="glass-panel p-6 rounded-lg border border-white/10">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center">
                    <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.97-2.121l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg>
                  </span>
                  <h3 class="text-white font-semibold">Citaciones locales</h3>
                </div>
                <p class="text-neutral-400 text-sm leading-relaxed">Tu negocio aparece en directorios de Murcia y España con datos consistentes (NAP): Páginas Amarillas, QDQ, TripAdvisor, y más.</p>
              </div>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- Results -->
        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <div class="mb-16 border border-white/10 rounded-lg p-8 bg-white/[0.02]">
            <h2 class="text-2xl font-bold text-white mb-6 text-center">Resultados que puedes esperar</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p class="text-3xl font-bold text-emerald-500">+300%</p>
                <p class="text-neutral-500 text-xs mt-1 font-mono">Tráfico orgánico</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-emerald-500">Top 5</p>
                <p class="text-neutral-500 text-xs mt-1 font-mono">Google Murcia</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-emerald-500">+150%</p>
                <p class="text-neutral-500 text-xs mt-1 font-mono">Llamadas/mes</p>
              </div>
              <div>
                <p class="text-3xl font-bold text-emerald-500">&lt;2s</p>
                <p class="text-neutral-500 text-xs mt-1 font-mono">Tiempo de carga</p>
              </div>
            </div>
            <p class="text-neutral-500 text-xs text-center mt-6">*Resultados promedio en clientes activos tras 3-6 meses de optimización.</p>
          </div>
        </app-scroll-reveal>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up" [delay]="0.25">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas sobre SEO local</h2>
            <div class="space-y-4">
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿En cuánto tiempo veré resultados del SEO?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">El SEO local suele mostrar resultados iniciales en 1-3 meses y resultados sólidos en 3-6 meses. Es una inversión a medio plazo que genera retorno continuo.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Necesito una web nueva para hacer SEO?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">No necesariamente. Podemos optimizar tu web actual o, si no tiene buena base técnica, te recomendamos crear una nueva con SEO integrado desde el principio. Siempre es más eficiente.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Qué diferencia hay entre SEO local y SEO normal?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">El SEO local optimiza tu web para que aparezca cuando buscan servicios en tu zona geográfica (ej: "dentista murcia"). Incluye Google Business Profile, citaciones locales y señales NAP que el SEO general no cubre.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Puedo hacer SEO solo para Murcia capital?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">Sí, es exactamente lo que hacemos. Empezamos enfocando en Murcia capital y, una vez posicionado, expandimos a municipios cercanos como Molina de Segura, Alcantarilla, Cartagena o Lorca.</p>
              </details>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <div class="text-center py-12 border border-white/10 rounded-lg bg-white/[0.02]">
            <h2 class="text-2xl font-bold text-white mb-3">Auditoría SEO gratuita</h2>
            <p class="text-neutral-400 text-sm mb-6 max-w-lg mx-auto">Te analizamos gratis cómo está tu web en Google y te decimos exactamente qué mejorar para posicionarte en Murcia.</p>
            <a href="https://wa.me/34601102877?text=Hola%2C%20me%20interesa%20una%20auditor%C3%ADa%20SEO%20de%20mi%20web%20en%20Murcia" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors">
              PEDIR AUDITORÍA SEO
            </a>
          </div>
        </app-scroll-reveal>

        <!-- Related services -->
        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/pagina-web-para-empresas-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Web para Empresas</a>
            <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Tienda Online</a>
            <a routerLink="/precios-diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Precios</a>
          </div>
        </div>

      </div>
    </section>
    `
})
export class SeoLocalMurciaComponent implements OnInit {
    private seo = inject(SeoService);

    ngOnInit() {
        this.seo.update({
            title: 'SEO Local en Murcia | Posicionamiento Web para Negocios | EmberCode',
            description: 'Servicio de SEO local en Murcia para que tu negocio aparezca en los primeros resultados de Google. Keywords locales, Google Business Profile, citaciones y optimización técnica.',
            canonicalPath: '/seo-local-murcia',
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    'name': 'SEO Local en Murcia',
                    'provider': {
                        '@type': 'ProfessionalService',
                        'name': 'EmberCode Web Studio',
                        'url': 'https://www.embercode.es'
                    },
                    'areaServed': { '@type': 'City', 'name': 'Murcia' },
                    'description': 'Posicionamiento SEO local para negocios en Murcia. Aparecer en los primeros resultados de Google cuando tus clientes buscan lo que ofreces.'
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'SEO Local Murcia', 'item': 'https://www.embercode.es/seo-local-murcia' }
                    ]
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': '¿En cuánto tiempo veré resultados del SEO?',
                            'acceptedAnswer': { '@type': 'Answer', 'text': 'El SEO local suele mostrar resultados iniciales en 1-3 meses y resultados sólidos en 3-6 meses.' }
                        },
                        {
                            '@type': 'Question',
                            'name': '¿Qué diferencia hay entre SEO local y SEO normal?',
                            'acceptedAnswer': { '@type': 'Answer', 'text': 'El SEO local optimiza tu web para búsquedas en tu zona geográfica, incluyendo Google Business Profile y citaciones locales.' }
                        }
                    ]
                }
            ]
        });
    }
}
