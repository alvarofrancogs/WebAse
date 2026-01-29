import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule, ScrollRevealComponent],
  template: `
    <section id="proceso" class="py-24 border-t border-white/10 bg-offblack relative z-30">
      <div class="container mx-auto px-6">
        <div class="mb-16 text-center">
          <app-scroll-reveal preset="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Metodología de Trabajo</h2>
          </app-scroll-reveal>

          <app-scroll-reveal preset="fade-up" [delay]="0.1">
            <p class="text-neutral-400">Transparencia y velocidad en cada etapa.</p>
          </app-scroll-reveal>
        </div>

        <div class="relative ml-6 md:ml-12" #timelineContainer>
          <!-- Top Dot (Start) -->
          <span class="absolute -left-[4.5px] -top-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white] z-20"></span>
          
          <!-- Middle Dot -->
          <span class="absolute -left-[4.5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full transition-all duration-500 z-20 border border-white/20"
                [class.bg-white]="scrollProgress() > 50"
                [class.bg-neutral-900]="scrollProgress() <= 50"
                [class.shadow-[0_0_15px_white]]="scrollProgress() > 50"></span>
          
          <!-- Bottom Dot (End) -->
          <span class="absolute -left-[4.5px] -bottom-1 w-2.5 h-2.5 rounded-full transition-all duration-500 z-20 border border-white/20"
                [class.bg-white]="scrollProgress() > 95"
                [class.bg-neutral-900]="scrollProgress() <= 95"
                [class.shadow-[0_0_15px_white]]="scrollProgress() > 95"></span>

          <!-- Background Line (Static) -->
          <div class="absolute left-0 top-0 bottom-0 w-px bg-white/10"></div>
          
          <!-- Active Line (Animated) -->
          <div class="absolute left-0 top-0 w-px bg-white transition-all duration-100 ease-linear shadow-[0_0_10px_white]"
               [style.height.%]="scrollProgress()"></div>

          <div class="space-y-16 relative">
            <!-- Step 1 -->
            <app-scroll-reveal preset="fade-down" [delay]="0.2">
              <div class="relative pl-8 md:pl-12 group">
                <h3 class="text-xl font-semibold transition-colors duration-300" [class.text-white]="step1Active()" [class.text-neutral-500]="!step1Active()">Consulta y Diseño</h3>
                <p class="text-neutral-400 max-w-2xl transition-opacity duration-300" [class.opacity-100]="step1Active()" [class.opacity-50]="!step1Active()">
                  Consultas siempre con el comprador sobre el diseño. Personalización total al gusto del cliente.
                </p>
              </div>
            </app-scroll-reveal>

            <!-- Step 2 -->
            <app-scroll-reveal preset="fade-down" [delay]="0.4">
              <div class="relative pl-10 md:pl-12 group">
                <h3 class="text-xl font-semibold transition-colors duration-300" [class.text-white]="step2Active()" [class.text-neutral-500]="!step2Active()">Desarrollo Ágil</h3>
                <p class="text-neutral-400 max-w-2xl transition-opacity duration-300" [class.opacity-100]="step2Active()" [class.opacity-50]="!step2Active()">
                  Despliegue en <strong>menos de 2 semanas</strong> (normal) o <strong>menos de 1 semana</strong> (express).
                </p>
              </div>
            </app-scroll-reveal>

            <!-- Step 3 -->
            <app-scroll-reveal preset="fade-down" [delay]="0.6">
              <div class="relative pl-10 md:pl-12 group">
                <h3 class="text-xl font-semibold transition-colors duration-300" [class.text-white]="step3Active()" [class.text-neutral-500]="!step3Active()">Mantenimiento y Entrega</h3>
                <p class="text-neutral-400 max-w-2xl transition-opacity duration-300" [class.opacity-100]="step3Active()" [class.opacity-50]="!step3Active()">
                  Contacto constante. Webs alojadas en servidores de alta capacidad.
                </p>
              </div>
            </app-scroll-reveal>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessSectionComponent {
  @ViewChild('timelineContainer') container!: ElementRef<HTMLElement>;

  scrollProgress = signal(0);
  step1Active = signal(false);
  step2Active = signal(false);
  step3Active = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.container) return;

    const element = this.container.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress based on how much of the element is visible from the center of the screen
    // Start filling when the top reaches the center
    const startOffset = windowHeight * 0.6;
    const endOffset = windowHeight * 0.4;

    const viewportPosition = windowHeight - rect.top;
    const totalHeight = rect.height + startOffset; // Extend range a bit

    let progress = 0;

    // Simple Calculation: 0% when top is at bottom of screen, 100% when bottom is at top
    // Adjusted logic: Line fills as we scroll past the element

    if (rect.top < startOffset) {
      const scrolled = startOffset - rect.top;
      progress = (scrolled / rect.height) * 100;
    }

    progress = Math.max(0, Math.min(100, progress));
    this.scrollProgress.set(progress);

    // Active triggers (thresholds based on percentage down the timeline)
    this.step1Active.set(progress > 10);
    this.step2Active.set(progress > 45);
    this.step3Active.set(progress > 80);
  }
}
