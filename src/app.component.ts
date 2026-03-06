import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FloatingCtaComponent } from './components/floating-cta.component';
import { BRAND } from './app/content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NavbarComponent, FloatingCtaComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-floating-cta></app-floating-cta>

    <!-- FOOTER -->
    <footer class="py-12 border-t border-white/10 bg-black relative z-30">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <!-- Brand -->
          <div>
            <p class="text-white font-semibold mb-2">{{ brand.name }}</p>
            <p class="text-neutral-500 text-sm">Diseño y desarrollo web profesional en Murcia.</p>
          </div>

          <!-- Contact / NAP -->
          <div>
            <p class="text-neutral-400 text-sm mb-1">
              <a href="mailto:{{brand.email}}" class="hover:text-white transition-colors">{{brand.email}}</a>
            </p>
            <p class="text-neutral-400 text-sm mb-1">
              <a href="tel:+34601102877" class="hover:text-white transition-colors">+34 601 102 877</a>
            </p>
            <p class="text-neutral-500 text-xs mt-2">Murcia, Región de Murcia, España</p>
          </div>

          <!-- Services links -->
          <div>
            <p class="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-3">Servicios</p>
            <nav class="flex flex-col gap-1">
              <a routerLink="/diseno-web-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">Diseño Web</a>
              <a routerLink="/desarrollo-web-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">Desarrollo Web</a>
              <a routerLink="/tienda-online-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">Tienda Online</a>
              <a routerLink="/mantenimiento-web-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">Mantenimiento</a>
              <a routerLink="/pagina-web-para-empresas-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">Web para Empresas</a>
              <a routerLink="/seo-local-murcia" class="text-neutral-400 text-sm hover:text-white transition-colors">SEO Local</a>
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
export class AppComponent {
  brand = BRAND;
}
