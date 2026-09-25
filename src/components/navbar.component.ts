import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BRAND } from '../app/content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  host: {
    '(window:scroll)': 'onScroll()',
    'style': 'display: contents'
  },
  template: `
    <nav 
      class="fixed top-0 left-0 w-full z-50 border-b transition-transform duration-300 ease-out"
      [class.bg-black]="mobileOpen()"
      [class.bg-black/90]="isScrolled() && !mobileOpen()"
      [class.backdrop-blur-md]="isScrolled() || mobileOpen()"
      [class.border-white/5]="isScrolled() || mobileOpen()"
      [class.border-transparent]="!isScrolled() && !mobileOpen()"
      [class.py-4]="!isScrolled() && !mobileOpen()"
      [class.py-3]="isScrolled() || mobileOpen()"
      [class.-translate-y-full]="isHidden() && !mobileOpen()"
      [class.translate-y-0]="!isHidden() || mobileOpen()"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a (click)="goHome($event)" href="/" class="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity duration-200 cursor-pointer">
          {{ brand.name }}
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center text-sm font-medium text-neutral-400">
          <!-- Services dropdown -->
          <div class="relative group">
            <button (click)="goToSection($event, 'servicios')" class="hover:text-white transition flex items-center gap-1 cursor-pointer">
              Servicios
              <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-2 transition-all duration-200">
              <div class="bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg p-2 min-w-[220px] shadow-2xl">
                <a href="/diseno-web-murcia" (click)="navigateToPage($event, '/diseno-web-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Diseño Web</a>
                <a href="/desarrollo-web-murcia" (click)="navigateToPage($event, '/desarrollo-web-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Desarrollo Web</a>
                <a href="/tienda-online-murcia" (click)="navigateToPage($event, '/tienda-online-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Tienda Online</a>
                <a href="/mantenimiento-web-murcia" (click)="navigateToPage($event, '/mantenimiento-web-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Mantenimiento Web</a>
                <a href="/pagina-web-para-empresas-murcia" (click)="navigateToPage($event, '/pagina-web-para-empresas-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Web para Empresas</a>
                <a href="/seo-local-murcia" (click)="navigateToPage($event, '/seo-local-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">SEO Local</a>
                <div class="border-t border-white/10 mt-1 pt-1">
                  <a href="/precios-diseno-web-murcia" (click)="navigateToPage($event, '/precios-diseno-web-murcia')" class="block px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">Ver Precios</a>
                </div>
              </div>
            </div>
          </div>
          <button (click)="goToSection($event, 'tarifas')" class="hover:text-white transition cursor-pointer">Tarifas</button>
          <button (click)="goToSection($event, 'proceso')" class="hover:text-white transition cursor-pointer">Proceso</button>
          <button (click)="goToSection($event, 'contacto')" class="text-white border border-white/20 px-5 py-2 rounded-none hover:bg-white/10 transition font-mono text-xs tracking-wider cursor-pointer">
            CONTACTO
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" (click)="toggleMobile()" aria-label="Alternar menú de navegación">
           @if (!mobileOpen()) {
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
           } @else {
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
           }
        </button>
      </div>

    </nav>

    <!-- Mobile Menu Dropdown -->
    @if (mobileOpen()) {
      <div 
        class="mobile-menu-overlay md:hidden fixed top-0 left-0 w-full bg-black/[0.97] backdrop-blur-xl z-[60] flex flex-col px-8 pt-20 pb-[calc(2rem+env(safe-area-inset-bottom))] overflow-y-auto transition-opacity duration-500"
        style="overscroll-behavior: contain; touch-action: pan-y;"
        [class.opacity-0]="isOpening() || isClosing()"
        [class.opacity-100]="!isOpening() && !isClosing()"
      >
        
        <!-- Botón Atrás -->
        <button (click)="closeMobile()" class="group self-start flex items-center gap-2 text-neutral-400 hover:text-white transition-all duration-300 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span class="text-sm font-mono">Atrás</span>
        </button>

        <div class="flex flex-col space-y-8">
          <a href="/#servicios" (click)="navigateToMobile($event, 'servicios')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 100ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">01</span>
            Servicios
          </a>
          <a href="/#tarifas" (click)="navigateToMobile($event, 'tarifas')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 200ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">02</span>
            Tarifas
          </a>
          <a href="/#proceso" (click)="navigateToMobile($event, 'proceso')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 300ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">03</span>
            Proceso
          </a>

          <!-- Service pages -->
          <div class="border-t border-white/10 pt-6 animate-slide-up" style="animation-delay: 350ms">
            <p class="text-xs font-mono text-neutral-600 tracking-widest uppercase mb-4">Páginas de servicio</p>
            <div class="flex flex-col space-y-4">
              <a href="/diseno-web-murcia" (click)="navigateToPage($event, '/diseno-web-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Diseño Web Murcia</a>
              <a href="/desarrollo-web-murcia" (click)="navigateToPage($event, '/desarrollo-web-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Desarrollo Web Murcia</a>
              <a href="/tienda-online-murcia" (click)="navigateToPage($event, '/tienda-online-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Tienda Online Murcia</a>
              <a href="/mantenimiento-web-murcia" (click)="navigateToPage($event, '/mantenimiento-web-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Mantenimiento Web</a>
              <a href="/pagina-web-para-empresas-murcia" (click)="navigateToPage($event, '/pagina-web-para-empresas-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Web para Empresas</a>
              <a href="/seo-local-murcia" (click)="navigateToPage($event, '/seo-local-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">SEO Local</a>
              <a href="/precios-diseno-web-murcia" (click)="navigateToPage($event, '/precios-diseno-web-murcia')" class="text-lg text-neutral-400 hover:text-white transition-colors">Precios</a>
            </div>
          </div>
        </div>

        <!-- Bloque inferior -->
        <div class="mt-auto pt-10">
          <a href="/#contacto" (click)="navigateToMobile($event, 'contacto')" class="block w-full text-center border border-white/20 text-white py-4 rounded-none font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            Iniciar Proyecto
          </a>
          
          <div class="mt-6 flex justify-between text-xs font-mono text-neutral-600">
             <span>Murcia, ES</span>
             <span>{{ brand.email }}</span>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-up {
      animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }
    .mobile-menu-overlay {
      height: 100vh;
      height: 100dvh;
      min-height: 100vh;
      min-height: 100dvh;
      min-height: -webkit-fill-available;
    }
  `]
})
export class NavbarComponent {
  private router = inject(Router);

  brand = BRAND;
  isScrolled = signal(false);
  isHidden = signal(false);
  mobileOpen = signal(false);
  isClosing = signal(false);
  isOpening = signal(false);

  private lastScrollY = 0;
  private savedScrollY = 0;
  private closeTimer?: ReturnType<typeof setTimeout>;

  onScroll() {
    if (this.mobileOpen()) return;

    const currentScrollY = window.scrollY;
    this.isScrolled.set(currentScrollY > 50);

    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      this.isHidden.set(true);
    } else {
      this.isHidden.set(false);
    }

    this.lastScrollY = currentScrollY;
  }

  private lockScroll() {
    this.savedScrollY = window.scrollY;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll(restoreScroll: boolean = false) {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.paddingRight = '';

    if (restoreScroll && this.savedScrollY > 0) {
      window.scrollTo({ top: this.savedScrollY, behavior: 'instant' as ScrollBehavior });
    }
  }

  toggleMobile() {
    if (!this.mobileOpen()) {
      this.preloadPrimaryRoutes();
      this.isOpening.set(true);
      this.mobileOpen.set(true);
      this.lockScroll();
      setTimeout(() => this.isOpening.set(false), 50);
    } else {
      this.closeMobile();
    }
  }

  private primaryRoutesPreloaded = false;

  private preloadPrimaryRoutes() {
    if (this.primaryRoutesPreloaded || !document.querySelector('router-outlet + * h1')) return;
    this.primaryRoutesPreloaded = true;
    void Promise.allSettled([
      import('./pages/diseno-web-murcia.component'),
      import('./pages/desarrollo-web-murcia.component')
    ]).then((results) => {
      if (results.some((result) => result.status === 'rejected')) {
        this.primaryRoutesPreloaded = false;
      }
    });
  }

  closeMobile() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }

    this.isClosing.set(true);
    this.closeTimer = setTimeout(() => {
      this.mobileOpen.set(false);
      this.isClosing.set(false);
      this.unlockScroll(false);
      this.closeTimer = undefined;
    }, 400);
  }

  /** Navigate to home page and scroll to a section */
  goToSection(event: Event, fragment: string) {
    event.preventDefault();
    const isHome = this.router.url === '/' || this.router.url.startsWith('/#');

    if (isHome) {
      this.scrollToFragment(fragment);
    } else {
      // Navigate to home first, then scroll after render
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToFragment(fragment), 100);
      });
    }
  }

  /** Navigate to home */
  goHome(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** Navigate to a service page via Router */
  navigateToPage(event: Event, path: string) {
    event.preventDefault();
    this.closeMobileInstant(false);
    this.router.navigateByUrl(path).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    });
  }

  /** Mobile navigation to home section */
  navigateToMobile(event: Event, fragment: string) {
    event.preventDefault();
    this.closeMobileInstant(false);

    const isHome = this.router.url === '/' || this.router.url.startsWith('/#');

    if (isHome) {
      setTimeout(() => this.scrollToFragment(fragment), 50);
    } else {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToFragment(fragment), 150);
      });
    }
  }

  private closeMobileInstant(restoreScroll: boolean = false) {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
    this.mobileOpen.set(false);
    this.isClosing.set(false);
    this.isOpening.set(false);
    this.unlockScroll(restoreScroll);
  }

  private scrollToFragment(fragment: string) {
    const el = document.getElementById(fragment);

    if (!el) {
      window.location.hash = fragment;
      return;
    }

    const navEl = document.querySelector('nav.fixed');
    const navOffset = navEl instanceof HTMLElement ? navEl.offsetHeight : 72;
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset - 8);

    history.replaceState(null, '', `/#${fragment}`);
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
