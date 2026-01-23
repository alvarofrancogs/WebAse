import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden font-mono">
      
      <!-- Static Noise Background (Optional subtle texture) -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+');">
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6">
        
        <!-- Glitch 404 -->
        <div class="relative mb-6 select-none">
          <h1 class="text-[8rem] md:text-[15rem] font-bold leading-none tracking-tighter text-white mix-blend-difference relative glitch-layer" data-text="404">
            404
          </h1>
        </div>

        <!-- Terminal Error Box -->
        <div class="border border-white/20 bg-neutral-900/50 backdrop-blur-sm p-6 max-w-lg mx-auto mb-10 overflow-hidden relative">
          <!-- Decorative corners -->
          <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
          <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>

          <div class="text-left space-y-2 font-mono text-xs md:text-sm text-neutral-400">
            <p><span class="text-neutral-600">></span> ERROR_CODE: <span class="text-white">NOT_FOUND</span></p>
            <p><span class="text-neutral-600">></span> SYSTEM_STATUS: <span class="text-white">SIGNAL_LOST</span></p>
            <p><span class="text-neutral-600">></span> LOCATION: <span class="text-red-500 line-through decoration-red-500/50">UNKNOWN_SECTOR</span></p>
            <p class="animate-pulse mt-4"><span class="text-white">_</span></p>
          </div>
        </div>

        <!-- Message -->
        <h2 class="text-xl md:text-2xl font-light text-white mb-8 tracking-wide">
          Página no encontrada
        </h2>

        <!-- CTA Button -->
        <a href="/" 
           class="inline-block border border-white px-8 py-3 text-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 uppercase">
          Volver al sistema
        </a>

      </div>

      <!-- Scanline effect -->
      <div class="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.02] to-transparent animate-scan"></div>
    </div>
  `,
    styles: [`
    .glitch-layer {
      position: relative;
    }
    
    .glitch-layer::before,
    .glitch-layer::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-layer::before {
      left: 2px;
      text-shadow: -1px 0 #fff;
      clip-path: inset(24% 0 13% 0);
      animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
    }

    .glitch-layer::after {
      left: -2px;
      text-shadow: -1px 0 #fff;
      clip-path: inset(85% 0 1% 0);
      animation: glitch-anim-2 3s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim-1 {
      0% { clip-path: inset(20% 0 80% 0); }
      20% { clip-path: inset(60% 0 10% 0); }
      40% { clip-path: inset(40% 0 50% 0); }
      60% { clip-path: inset(80% 0 5% 0); }
      80% { clip-path: inset(10% 0 60% 0); }
      100% { clip-path: inset(30% 0 30% 0); }
    }

    @keyframes glitch-anim-2 {
      0% { clip-path: inset(10% 0 60% 0); }
      20% { clip-path: inset(30% 0 10% 0); }
      40% { clip-path: inset(70% 0 20% 0); }
      60% { clip-path: inset(20% 0 50% 0); }
      80% { clip-path: inset(50% 0 30% 0); }
      100% { clip-path: inset(10% 0 80% 0); }
    }

    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    .animate-scan {
      animation: scan 4s linear infinite;
    }
  `]
})
export class NotFoundComponent { }
