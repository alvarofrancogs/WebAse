import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-tienda-online-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-4xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Tienda Online Murcia</span>
        </nav>

        <app-scroll-reveal preset="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Tienda Online en Murcia
          </h1>
          <p class="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Creamos tu tienda online en Murcia. E-commerce profesional con pasarela de pago, gestión de productos y diseño que convierte visitantes en compradores.
          </p>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.1">
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Catálogo de productos</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Gestión completa de productos, categorías, variantes, stock e imágenes. Fácil de administrar tú mismo.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Pasarela de pago segura</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Stripe, PayPal, Redsys, Bizum — integración con los métodos de pago que usan tus clientes en Murcia y toda España.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">Diseño para vender</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">UX optimizada para conversión: carrito visible, checkout sencillo, fichas de producto atractivas y confianza visual.</p>
            </div>
            <div class="glass-panel p-6 rounded-lg border border-white/10">
              <h2 class="text-xl font-semibold text-white mb-3">SEO para ecommerce</h2>
              <p class="text-neutral-400 text-sm leading-relaxed">Estructura optimizada para que tus productos aparezcan en Google. URLs limpias, metadatos y velocidad de carga.</p>
            </div>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.2">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Preguntas frecuentes sobre tiendas online en Murcia</h2>
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
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Quieres vender online desde Murcia?</h2>
            <p class="text-neutral-400 mb-6">Te ayudamos a montar tu tienda online. Presupuesto sin compromiso en 24h.</p>
            <a href="/#contacto" class="inline-flex items-center justify-center bg-white text-black font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 hover:bg-neutral-200 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-neutral-500 text-xs mt-4">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <div class="mt-12 text-center">
          <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-neutral-400 text-sm border border-white/10 px-4 py-2 rounded hover:text-white hover:border-white/30 transition-colors">Mantenimiento Web</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TiendaOnlineMurciaComponent implements OnInit {
  private seo = inject(SeoService);

  faqs = [
    { q: '¿Qué plataformas usáis para tiendas online?', a: 'Trabajamos con soluciones a medida y también con WooCommerce, Shopify o PrestaShop según las necesidades de tu negocio. Te asesoramos sobre la mejor opción.' },
    { q: '¿Puedo gestionar los productos yo mismo?', a: 'Sí. Todas nuestras tiendas incluyen panel de administración para que puedas añadir, editar y eliminar productos sin conocimientos técnicos.' },
    { q: '¿Incluye métodos de pago?', a: 'Sí. Configuramos Stripe, PayPal, Redsys, Bizum o el método de pago que prefieras. Todo con certificado SSL y seguridad garantizada.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Tienda Online en Murcia | E-commerce Profesional | EmberCode',
      description: 'Creamos tu tienda online en Murcia. E-commerce con pasarela de pago, catálogo de productos y diseño optimizado para vender. Presupuesto sin compromiso.',
      canonicalPath: '/tienda-online-murcia',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Tienda Online en Murcia',
          'description': 'Creación de tiendas online profesionales para negocios en Murcia.',
          'provider': { '@type': 'ProfessionalService', 'name': 'EmberCode Web Studio', 'url': 'https://www.embercode.es' },
          'areaServed': { '@type': 'City', 'name': 'Murcia' },
          'serviceType': 'Tienda online'
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Tienda Online Murcia', 'item': 'https://www.embercode.es/tienda-online-murcia' }
          ]
        }
      ]
    });
  }
}
