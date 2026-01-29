import { Component, signal } from '@angular/core';
import { BRAND } from '../app/content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  host: {
    '(window:scroll)': 'onScroll()'
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

      <!-- Mobile Menu Dropdown (Full Screen Overlay) -->
      @if (mobileOpen()) {
        <div class="md:hidden fixed inset-0 top-[60px] bg-gradient-to-b from-neutral-900/95 to-black/95 backdrop-blur-xl z-40 flex flex-col p-8 border-t border-white/10 h-[calc(100vh-60px)] animate-fade-in">
          
          <div class="flex flex-col space-y-8 mt-8">
            <a href="#servicios" (click)="toggleMobile()" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 100ms">
              <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">01</span>
              Servicios
            </a>
            <a href="#tarifas" (click)="toggleMobile()" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 200ms">
              <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">02</span>
              Tarifas
            </a>
            <a href="#proceso" (click)="toggleMobile()" class="text-3xl font-light text-neutral-300 hover:text-white transition-colors flex items-center group animate-slide-up" style="animation-delay: 300ms">
              <span class="text-xs font-mono text-neutral-600 mr-4 group-hover:text-neutral-400">03</span>
              Proceso
            </a>
          </div>

          <div class="mt-auto mb-8">
            <a href="#contacto" (click)="toggleMobile()" class="block w-full text-center border border-white/20 text-white py-4 rounded-none font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
              Iniciar Proyecto
            </a>
            
            <div class="mt-8 flex justify-between text-xs font-mono text-neutral-600">
               <span>{{ brand.location || 'Murcia, ES' }}</span>
               <span>{{ brand.email }}</span>
            </div>
          </div>
        </div>
      }
    </nav>
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
  `]
})
export class NavbarComponent {
  brand = BRAND;
  isScrolled = signal(false);
  isHidden = signal(false);
  mobileOpen = signal(false);

  private lastScrollY = 0;

  onScroll() {
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

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }
}