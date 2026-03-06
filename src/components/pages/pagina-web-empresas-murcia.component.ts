import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
    selector: 'app-pagina-web-empresas-murcia',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealComponent],
    template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-4xl">

        <!-- Breadcrumb -->
        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Página Web para Empresas Murcia</span>
        </nav>

        <!-- H1 -->
        <app-scroll-reveal preset="fade-up" [delay]="0">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Página Web para Empresas en Murcia
          </h1>
          <p class="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Tu empresa en Murcia necesita una web que transmita profesionalidad, genere confianza y convierta visitantes en clientes. Diseñamos webs corporativas a medida con enfoque en resultados.
          </p>
        </app-scroll-reveal>

        <!-- Value proposition -->
        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-6 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <h3 class="text-white font-semibold mb-3">Imagen profesional</h3>
              <p class="text-neutral-400 text-sm leading-relaxed">El 75% de los usuarios juzga la credibilidad de una empresa por el diseño de su web. Creamos webs que reflejan la calidad de tu negocio en Murcia.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <h3 class="text-white font-semibold mb-3">Optimizada para captar clientes</h3>
              <p class="text-neutral-400 text-sm leading-relaxed">Cada elemento está pensado para que el visitante contacte contigo: CTAs claros, formularios simples, acceso directo a WhatsApp y teléfono.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <h3 class="text-white font-semibold mb-3">Visible en Google</h3>
              <p class="text-neutral-400 text-sm leading-relaxed">SEO técnico y local incluido: tu empresa aparece cuando buscan tus servicios en Murcia. Velocidad de carga, estructura correcta y contenido optimizado.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <h3 class="text-white font-semibold mb-3">Adaptada a móvil</h3>
              <p class="text-neutral-400 text-sm leading-relaxed">El 70% del tráfico en Murcia viene de móvil. Tu web se ve perfecta en cualquier dispositivo, con tiempos de carga inferiores a 2 segundos.</p>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- Para qué tipo de empresas -->
        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">¿Qué tipo de empresa eres?</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors">
                <p class="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-2">Autónomos</p>
                <p class="text-neutral-400 text-sm">Web personal con portfolio, servicios y contacto directo. Desde veterinarios hasta arquitectos.</p>
              </div>
              <div class="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors">
                <p class="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-2">Pymes</p>
                <p class="text-neutral-400 text-sm">Web corporativa con catálogo de servicios, equipo, casos de éxito y sistema de contacto.</p>
              </div>
              <div class="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors">
                <p class="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-2">Negocios locales</p>
                <p class="text-neutral-400 text-sm">Restaurantes, clínicas, talleres… Web optimizada para búsquedas locales en Murcia con Google Maps integrado.</p>
              </div>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- Proceso -->
        <app-scroll-reveal preset="fade-up" [delay]="0.25">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Cómo trabajamos</h2>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <span class="text-xs font-mono text-neutral-600 mt-1 shrink-0">01</span>
                <div>
                  <h3 class="text-white font-medium mb-1">Entendemos tu negocio</h3>
                  <p class="text-neutral-400 text-sm">Reunión inicial (presencial o videollamada) para conocer tu empresa, tus objetivos y tu competencia en Murcia.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-xs font-mono text-neutral-600 mt-1 shrink-0">02</span>
                <div>
                  <h3 class="text-white font-medium mb-1">Diseño y propuesta</h3>
                  <p class="text-neutral-400 text-sm">Te enviamos un presupuesto cerrado y mockup del diseño. Sin sorpresas ni costes ocultos.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-xs font-mono text-neutral-600 mt-1 shrink-0">03</span>
                <div>
                  <h3 class="text-white font-medium mb-1">Desarrollo con contacto constante</h3>
                  <p class="text-neutral-400 text-sm">Puedes ver avances cada 2-3 días por WhatsApp. Correcciones ilimitadas antes de la entrega.</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <span class="text-xs font-mono text-neutral-600 mt-1 shrink-0">04</span>
                <div>
                  <h3 class="text-white font-medium mb-1">Lanzamiento y soporte</h3>
                  <p class="text-neutral-400 text-sm">Publicamos la web, configuramos dominio y hosting, y te enseñamos a gestionar lo que necesites.</p>
                </div>
              </div>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up" [delay]="0.3">
          <div class="mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes</h2>
            <div class="space-y-4">
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Cuánto cuesta una web para mi empresa en Murcia?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">Cada proyecto es diferente. Una web corporativa básica parte de unos ~500€, pero el precio depende del número de páginas, funcionalidades y diseño. Te damos presupuesto cerrado desde el primer día.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Puedo actualizar la web yo mismo después?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">Depende del tipo de web. Si necesitas actualizar contenido con frecuencia, podemos integrarte un CMS sencillo. Para cambios puntuales, nuestros planes de mantenimiento (desde 30€/mes) incluyen modificaciones mensuales.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Incluye el dominio y hosting?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">Sí. Con nuestros planes de mantenimiento, dominio (.com, .es), hosting de alto rendimiento, SSL y backups están incluidos. Si ya tienes dominio propio, lo configuramos sin coste adicional.</p>
              </details>
              <details class="group border border-white/10 rounded-lg">
                <summary class="flex justify-between items-center p-4 cursor-pointer text-white text-sm font-medium hover:bg-white/5 rounded-lg transition-colors">
                  ¿Hacéis webs para empresas fuera de Murcia?
                  <svg class="w-4 h-4 text-neutral-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <p class="px-4 pb-4 text-neutral-400 text-sm leading-relaxed">Sí, trabajamos con empresas de toda la Región de Murcia y también de otras provincias. La comunicación es igual de fluida por videollamada y WhatsApp.</p>
              </details>
            </div>
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="fade-up" [delay]="0.35">
          <div class="text-center py-12 border border-white/10 rounded-lg bg-white/[0.02]">
            <h2 class="text-2xl font-bold text-white mb-3">¿Hablamos de tu proyecto?</h2>
            <p class="text-neutral-400 text-sm mb-6">Cuéntanos qué necesita tu empresa. Te respondemos con una propuesta en 24h.</p>
            <a href="https://wa.me/34601102877?text=Hola%2C%20necesito%20una%20web%20para%20mi%20empresa%20en%20Murcia" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors">
              PEDIR PRESUPUESTO
            </a>
          </div>
        </app-scroll-reveal>

        <!-- Related services -->
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
export class PaginaWebEmpresasMurciaComponent implements OnInit {
    private seo = inject(SeoService);

    ngOnInit() {
        this.seo.update({
            title: 'Página Web para Empresas en Murcia | Diseño Profesional | EmberCode',
            description: 'Creamos páginas web profesionales para empresas en Murcia. Diseño a medida, optimización SEO, adaptada a móvil y enfocada en captar clientes. Presupuesto sin compromiso.',
            canonicalPath: '/pagina-web-para-empresas-murcia',
            jsonLd: [
                {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    'name': 'Página Web para Empresas en Murcia',
                    'provider': {
                        '@type': 'ProfessionalService',
                        'name': 'EmberCode Web Studio',
                        'url': 'https://www.embercode.es'
                    },
                    'areaServed': { '@type': 'City', 'name': 'Murcia' },
                    'description': 'Diseño y desarrollo de páginas web profesionales para empresas, autónomos y pymes en Murcia.'
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
                        { '@type': 'ListItem', 'position': 2, 'name': 'Página Web para Empresas Murcia', 'item': 'https://www.embercode.es/pagina-web-para-empresas-murcia' }
                    ]
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': '¿Cuánto cuesta una web para mi empresa en Murcia?',
                            'acceptedAnswer': { '@type': 'Answer', 'text': 'Cada proyecto es diferente. Una web corporativa básica parte de unos ~500€, pero el precio depende del número de páginas, funcionalidades y diseño. Te damos presupuesto cerrado desde el primer día.' }
                        },
                        {
                            '@type': 'Question',
                            'name': '¿Incluye el dominio y hosting?',
                            'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Con nuestros planes de mantenimiento, dominio (.com, .es), hosting de alto rendimiento, SSL y backups están incluidos.' }
                        }
                    ]
                }
            ]
        });
    }
}
