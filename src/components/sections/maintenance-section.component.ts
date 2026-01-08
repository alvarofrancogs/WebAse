import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

interface MaintenancePlan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted?: boolean;
}

@Component({
    selector: 'app-maintenance-section',
    standalone: true,
    imports: [CommonModule, ScrollRevealComponent],
    template: `
    <section id="mantenimiento" class="py-24 bg-black relative z-30 overflow-hidden">
      <!-- Animated background gradient -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>

      <div class="container mx-auto px-6 relative">
        <!-- Header -->
        <div class="mb-16 text-center">
          <app-scroll-reveal preset="fade-up">
            <p class="text-xs font-mono tracking-widest uppercase text-neutral-500 mb-4">
              Mantenimiento & Hosting
            </p>
          </app-scroll-reveal>
          
          <app-scroll-reveal preset="fade-up" [delay]="0.1">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">
              Tu web siempre <span class="text-neutral-500">activa</span>
            </h2>
          </app-scroll-reveal>
          
          <app-scroll-reveal preset="fade-up" [delay]="0.2">
            <p class="text-neutral-400 max-w-2xl mx-auto">
              Hosting incluido, dominio propio, SSL y soporte en menos de 24h. Sin sorpresas.
            </p>
          </app-scroll-reveal>
        </div>

        <!-- Plans Grid -->
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          @for (plan of plans; track plan.name) {
            <app-scroll-reveal [preset]="$index === 0 ? 'slide-right' : 'slide-left'" [delay]="0.3 + ($index * 0.1)">
              <div 
                class="relative group h-full"
                [class.md:-translate-y-4]="plan.highlighted"
              >
                <!-- Card with terminal header -->
                <div 
                  class="relative h-full rounded-xl border overflow-hidden transition-all duration-300"
                  [class.border-white/20]="plan.highlighted"
                  [class.border-white/10]="!plan.highlighted"
                  [class.bg-neutral-950]="true"
                >
                  <!-- Terminal-style Header Bar -->
                  <div class="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-neutral-900/80">
                    <div class="flex gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full" [class.bg-white/40]="!plan.highlighted" [class.bg-white/60]="plan.highlighted"></span>
                      <span class="w-2.5 h-2.5 rounded-full" [class.bg-white/20]="!plan.highlighted" [class.bg-white/40]="plan.highlighted"></span>
                      <span class="w-2.5 h-2.5 rounded-full" [class.bg-white/10]="!plan.highlighted" [class.bg-white/20]="plan.highlighted"></span>
                    </div>
                    @if (plan.highlighted) {
                      <span class="ml-auto text-[10px] font-mono tracking-widest uppercase text-white/60 bg-white/10 px-2 py-0.5 rounded">Recomendado</span>
                    }
                  </div>

                  <!-- Content -->
                  <div class="p-6 md:p-8">
                    <!-- Plan header -->
                    <div class="mb-6">
                      <h3 class="text-xl font-semibold text-white mb-1">{{ plan.name }}</h3>
                      <p class="text-sm text-neutral-500">{{ plan.description }}</p>
                    </div>

                    <!-- Price -->
                    <div class="mb-8 pb-6 border-b border-white/10">
                      <div class="flex items-baseline gap-1">
                        <span class="text-4xl md:text-5xl font-bold text-white">{{ plan.price }}</span>
                        <span class="text-neutral-500 text-sm">{{ plan.period }}</span>
                      </div>
                      <p class="text-xs text-neutral-600 mt-2">Facturación trimestral disponible</p>
                    </div>

                    <!-- Features -->
                    <ul class="space-y-3">
                      @for (feature of plan.features; track $index) {
                        <li class="flex items-start gap-3 text-sm">
                          <svg class="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span class="text-neutral-400">{{ feature }}</span>
                        </li>
                      }
                    </ul>

                    <!-- CTA Button -->
                    <div class="mt-8">
                      <a 
                        href="#contacto"
                        class="block w-full py-3 px-6 text-center text-sm font-medium rounded-lg transition-all duration-300"
                        [class.bg-white]="plan.highlighted"
                        [class.text-black]="plan.highlighted"
                        [class.hover:bg-neutral-200]="plan.highlighted"
                        [class.border]="!plan.highlighted"
                        [class.border-white/20]="!plan.highlighted"
                        [class.text-white]="!plan.highlighted"
                        [class.hover:bg-white/5]="!plan.highlighted"
                      >
                        Empezar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </app-scroll-reveal>
          }
        </div>

        <!-- Bottom info -->
        <app-scroll-reveal preset="fade-up" [delay]="0.5">
          <div class="mt-16 text-center">
            <div class="inline-flex items-center gap-6 text-sm text-neutral-500 flex-wrap justify-center">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                SSL incluido
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                CDN Global
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Sin permanencia
              </span>
            </div>
          </div>
        </app-scroll-reveal>
      </div>
    </section>
  `
})
export class MaintenanceSectionComponent {
    plans: MaintenancePlan[] = [
        {
            name: 'Básico',
            price: '30€',
            period: '/mes',
            description: 'Para webs que solo necesitan estar online.',
            features: [
                'Hosting incluido',
                'Dominio .com o .es',
                'Certificado SSL (https)',
                'Backups automáticos',
                '1 modificación mensual',
                'Soporte en menos de 24h'
            ],
            highlighted: false
        },
        {
            name: 'Estándar',
            price: '50€',
            period: '/mes',
            description: 'Para negocios que necesitan cambios frecuentes.',
            features: [
                'Todo lo del plan Básico',
                '3 modificaciones mensuales',
                'Optimización SEO continua',
                'Monitorización 24/7',
                'Soporte en menos de 24h',
                'Reportes de rendimiento'
            ],
            highlighted: true
        }
    ];
}
