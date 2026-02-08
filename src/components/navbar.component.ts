import { Component, signal } from '@angular/core';
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
        <a href="#" class="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition">
          {{ brand.name }}
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center text-sm font-medium text-neutral-400">
          <a href="#servicios" class="hover:text-white transition">Servicios</a>
          <a href="#tarifas" class="hover:text-white transition">Tarifas</a>
          <a href="#proceso" class="hover:text-white transition">Proceso</a>
          <a href="#contacto" class="text-white border border-white/20 px-5 py-2 rounded-none hover:bg-white/10 transition font-mono text-xs tracking-wider">
            CONTACTO
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" (click)="toggleMobile()">
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

    <!-- Mobile Menu Dropdown (Outside nav to avoid transform containing block issue) -->
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
          <a href="#servicios" (click)="navigateTo($event, 'servicios')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 100ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">01</span>
            Servicios
          </a>
          <a href="#tarifas" (click)="navigateTo($event, 'tarifas')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 200ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">02</span>
            Tarifas
          </a>
          <a href="#proceso" (click)="navigateTo($event, 'proceso')" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 300ms">
            <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">03</span>
            Proceso
          </a>
        </div>
        <!-- Bloque inferior fijo abajo -->
        <div class="mt-auto pt-10">
          <a href="#contacto" (click)="navigateTo($event, 'contacto')" class="block w-full text-center border border-white/20 text-white py-4 rounded-none font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
            Iniciar Proyecto
          </a>
          
          <div class="mt-6 flex justify-between text-xs font-mono text-neutral-600">
             <span>{{ brand.location || 'Murcia, ES' }}</span>
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

    // Update scrolled state for background
    this.isScrolled.set(currentScrollY > 50);

    // Hide/show based on scroll direction
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      // Scrolling down & past threshold -> hide
      this.isHidden.set(true);
    } else {
      // Scrolling up -> show immediately
      this.isHidden.set(false);
    }

    this.lastScrollY = currentScrollY;
  }

  private lockScroll() {
    this.savedScrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  private unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.paddingRight = '';
    window.scrollTo(0, this.savedScrollY);
  }

  toggleMobile() {
    if (!this.mobileOpen()) {
      // Abriendo
      this.isOpening.set(true);
      this.mobileOpen.set(true);
      this.lockScroll();
      setTimeout(() => this.isOpening.set(false), 50);
    } else {
      // Cerrando
      this.closeMobile();
    }
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
      this.unlockScroll();
      this.closeTimer = undefined;
    }, 500);
  }

  navigateTo(event: Event, fragment: string) {
    event.preventDefault();
    // Close instantly on mobile links to avoid keeping body locked.
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
    this.mobileOpen.set(false);
    this.isClosing.set(false);
    this.isOpening.set(false);
    this.unlockScroll();

    // Wait one frame after unlocking to ensure scrolling works reliably on mobile.
    requestAnimationFrame(() => {
      const el = document.getElementById(fragment);

      if (!el) {
        window.location.hash = fragment;
        return;
      }

      const navEl = document.querySelector('nav.fixed');
      const navOffset = navEl instanceof HTMLElement ? navEl.offsetHeight : 72;
      const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset - 8);

      history.replaceState(null, '', `#${fragment}`);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
}
