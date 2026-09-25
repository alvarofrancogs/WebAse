import { Component, ViewEncapsulation, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NavbarComponent } from './components/navbar.component';
import { FloatingCtaComponent } from './components/floating-cta.component';
import { BRAND } from './app/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, FloatingCtaComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-3">Saltar al contenido</a>
    <app-navbar></app-navbar>
    <main id="main-content" tabindex="-1" class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-floating-cta></app-floating-cta>

    <!-- FOOTER -->
    <footer class="py-12 border-t border-white/10 bg-black relative z-30">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <!-- Brand -->
          <div>
            <p class="text-white font-semibold mb-2">{{ brand.name }}</p>
            <p class="text-neutral-500 text-sm">Diseño y desarrollo web profesional en Murcia.</p>
          </div>

          <!-- Contact / NAP -->
          <div>
            <p class="text-neutral-400 text-sm mb-1">
              <a [attr.href]="'mailto:' + brand.email" class="hover:text-white transition-colors">{{brand.email}}</a>
            </p>
            <p class="text-neutral-400 text-sm mb-1">
              <a [attr.href]="'tel:' + brand.phone" class="hover:text-white transition-colors">+34 {{brand.phoneDisplay}}</a>
            </p>
            <p class="text-neutral-500 text-xs mt-2">
              {{ brand.location }}
            </p>
          </div>

          <!-- Services links -->
          <div>
            <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-3">Servicios</p>
            <nav class="flex flex-col gap-1">
              <a routerLink="/diseno-web-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Diseño Web</a>
              <a routerLink="/desarrollo-web-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Desarrollo Web</a>
              <a routerLink="/tienda-online-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Tienda Online</a>
              <a routerLink="/mantenimiento-web-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Mantenimiento</a>
              <a routerLink="/pagina-web-para-empresas-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Web para Empresas</a>
              <a routerLink="/seo-local-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">SEO Local</a>
            </nav>
          </div>

          <!-- Geo / Zones links -->
          <div>
            <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-3">Zonas</p>
            <nav class="flex flex-col gap-1">
              <a routerLink="/diseno-web-murcia" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Murcia Capital</a>
              <a routerLink="/diseno-web-cartagena" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Cartagena</a>
              <a routerLink="/diseno-web-lorca" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Lorca</a>
              <a routerLink="/diseno-web-molina-de-segura" class="min-h-11 flex items-center justify-center sm:min-h-0 sm:block text-neutral-400 text-sm hover:text-white transition-colors">Molina de Segura</a>
            </nav>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/10 text-center">
          <p class="text-neutral-600 text-sm">© 2026 {{ brand.name }}. Todos los derechos reservados.</p>
          <p class="mt-1 text-xs font-mono text-neutral-700">Diseñado con Precisión y Código en Murcia.</p>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  brand = BRAND;
  private router = inject(Router);

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (typeof window !== 'undefined') {
        const url = event.urlAfterRedirects || event.url || '';
        // If not a fragment navigation on the same page, scroll to top
        if (!url.includes('#')) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }
      }
    });
  }
}
