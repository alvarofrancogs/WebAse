import { Component, signal } from '@angular/core';
import { BRAND } from '../app/content';

@Component({
  selector: 'app-floating-cta',
  standalone: true,
  template: `
    <!-- Floating contact — bottom right, integrated with site design -->
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <!-- Expanded panel -->
      @if (isOpen()) {
        <div class="floating-panel bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg p-4 shadow-2xl w-64 animate-panel-in">
          <!-- Header -->
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <span class="text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500">Canal directo</span>
            <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>

          <!-- WhatsApp -->
          <a href="https://wa.me/34601102877?text=Hola%2C%20me%20interesa%20un%20presupuesto%20para%20mi%20web"
            target="_blank" rel="noopener noreferrer"
            class="group flex items-center gap-3 py-2.5 px-3 -mx-1 rounded hover:bg-white/5 transition-all">
            <span class="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center group-hover:border-emerald-500/60 transition-colors">
              <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <div class="flex flex-col">
              <span class="text-xs text-white font-medium">WhatsApp</span>
              <span class="text-[10px] text-neutral-500 font-mono">Respuesta en < 1h</span>
            </div>
          </a>

          <!-- Phone -->
          <a href="tel:{{ brand.phone }}"
            class="group flex items-center gap-3 py-2.5 px-3 -mx-1 rounded hover:bg-white/5 transition-all">
            <span class="w-8 h-8 border border-white/10 rounded flex items-center justify-center group-hover:border-white/30 transition-colors">
              <svg class="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <div class="flex flex-col">
              <span class="text-xs text-white font-medium">{{ brand.phoneDisplay }}</span>
              <span class="text-[10px] text-neutral-500 font-mono">L-V · 9:00–19:00</span>
            </div>
          </a>

          <!-- Email -->
          <a href="mailto:{{ brand.email }}"
            class="group flex items-center gap-3 py-2.5 px-3 -mx-1 rounded hover:bg-white/5 transition-all">
            <span class="w-8 h-8 border border-white/10 rounded flex items-center justify-center group-hover:border-white/30 transition-colors">
              <svg class="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <div class="flex flex-col">
              <span class="text-xs text-white font-medium">{{ brand.email }}</span>
              <span class="text-[10px] text-neutral-500 font-mono">Presupuesto en 24h</span>
            </div>
          </a>
        </div>
      }

      <!-- Toggle button — minimal, dark, matches site -->
      <button (click)="isOpen.set(!isOpen())"
        class="group relative w-12 h-12 bg-black/80 backdrop-blur-xl border rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/50"
        [class.border-emerald-500/30]="!isOpen()"
        [class.border-white/20]="isOpen()"
        [class.hover:border-emerald-500/60]="!isOpen()"
        [class.hover:border-white/40]="isOpen()"
        [attr.aria-label]="isOpen() ? 'Cerrar contacto' : 'Contactar'">

        <!-- Pulse ring when closed -->
        @if (!isOpen()) {
          <span class="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping-slow"></span>
        }

        @if (!isOpen()) {
          <!-- Chat icon -->
          <svg class="w-5 h-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM21 11.25c0 4.97-4.03 9-9 9a9.016 9.016 0 01-4.126-.98L3 21l1.73-4.874A8.96 8.96 0 013 11.25c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
          </svg>
        } @else {
          <!-- Close icon -->
          <svg class="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        }
      </button>
    </div>
  `,
  styles: [`
    @keyframes panelIn {
      from { opacity: 0; transform: translateY(8px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .animate-panel-in {
      animation: panelIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes pingSlow {
      0% { transform: scale(1); opacity: 0.4; }
      75%, 100% { transform: scale(1.6); opacity: 0; }
    }
    .animate-ping-slow {
      animation: pingSlow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  `]
})
export class FloatingCtaComponent {
  brand = BRAND;
  isOpen = signal(false);
}
