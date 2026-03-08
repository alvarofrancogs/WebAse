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
      <div class="container mx-auto px-6 max-w-5xl">

        <nav class="mb-8 text-xs font-mono text-white/40">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-white/70">Tienda Online Murcia</span>
        </nav>

        <!-- Hero -->
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">E-Commerce Profesional</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">
              Vende<br>online.
            </h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              Creamos tiendas online que venden. Pasarela de pago, catálogo de productos y un checkout pensado para maximizar conversiones.
            </p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Montar mi tienda</span>
              <span class="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Features -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Funcionalidades</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Todo lo que necesitas para vender</h2>
          </app-scroll-reveal>
          @for (feat of features; track feat.title; let i = $index) {
            <app-scroll-reveal [preset]="i % 2 === 0 ? 'slide-left' : 'slide-right'" [delay]="i * 0.08">
              <div class="flex gap-8 items-start py-10 border-t border-white/10 group hover:bg-white/[0.02] transition-colors -mx-6 px-6">
                <span class="text-5xl font-black text-white/[0.06] group-hover:text-white/20 transition-colors shrink-0 w-20 leading-none">{{ feat.num }}</span>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">{{ feat.title }}</h3>
                  <p class="text-white/50 text-sm leading-relaxed max-w-lg">{{ feat.desc }}</p>
                </div>
              </div>
            </app-scroll-reveal>
          }
        </div>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="divide-y divide-white/10">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="py-2">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex justify-between items-center py-4 text-left group">
                    <span class="text-white font-bold group-hover:text-white/80 transition-colors">{{ faq.q }}</span>
                    <svg class="w-5 h-5 text-white transition-transform duration-500 transform shrink-0 ml-4" [class.rotate-180]="openFaq === i" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="grid transition-all duration-500 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                    <div class="overflow-hidden">
                      <div class="text-white/70 text-sm leading-relaxed pb-6 pr-12">
                        {{ faq.a }}
                      </div>
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
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Listo para vender online?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te ayudamos a montar tu tienda online. Presupuesto sin compromiso en 24h.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">MONTAR MI TIENDA</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601102877" class="text-white hover:underline">601 102 877</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Diseño Web</a>
            <a routerLink="/desarrollo-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Desarrollo Web</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors">Mantenimiento</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TiendaOnlineMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;

  features = [
    { num: '01', title: 'Catálogo de productos', desc: 'Gestiona productos, variantes, stock e imágenes desde un panel intuitivo sin necesidad de conocimientos técnicos.' },
    { num: '02', title: 'Pasarela de pago', desc: 'Stripe, PayPal, Redsys o Bizum. Pagos seguros con SSL y PCI compliance. Tu cliente paga en segundos.' },
    { num: '03', title: 'Checkout optimizado', desc: 'Proceso de compra simplificado en un solo paso. Menos abandonos, más conversiones.' },
    { num: '04', title: 'Envíos y logística', desc: 'Integración con transportistas, cálculo automático de costes de envío y seguimiento de pedidos.' },
  ];

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
