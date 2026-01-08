import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialUIComponent } from '../ui/testimonial.component';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';
import { StaggeredTextComponent } from '../ui/staggered-text.component';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule, TestimonialUIComponent, ScrollRevealComponent, StaggeredTextComponent],
  template: `
    <section id="testimonials" class="w-full bg-background border-t border-white/10">
      <div class="container mx-auto px-6 py-20 md:py-28">
        
        <!-- Header Copy -->
        <div class="mb-10 md:mb-14">
          <app-scroll-reveal preset="fade-up">
            <p class="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Clientes / Casos
            </p>
          </app-scroll-reveal>

          <app-scroll-reveal preset="mask" [delay]="0.1">
            <h2 class="mt-3 text-3xl md:text-5xl font-light tracking-tight text-foreground">
              Resultados que se notan
            </h2>
          </app-scroll-reveal>
          
          <app-staggered-text 
            [delay]="0.2"
            className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            text="Automatización, webs rápidas y SEO técnico. Feedback real de clientes que querían menos fricción y más resultados."
          ></app-staggered-text>
        </div>

        <!-- Component Wrapper (Backdrop effect) -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.3">
          <div class="rounded-2xl border border-border bg-background/40 backdrop-blur-sm overflow-hidden">
            <app-testimonial-ui [compact]="true" class="px-5 md:px-10"></app-testimonial-ui>
          </div>
        </app-scroll-reveal>

        <!-- CTA Area -->
        <app-scroll-reveal preset="fade-up" [delay]="0.4">
          <div class="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#contacto" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-10 px-4 py-2">
              Quiero algo así
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 border-border">
              Ver servicios
            </a>

            <p class="sm:ml-auto text-sm text-muted-foreground">
              Respuesta rápida y proceso claro. Sin humo.
            </p>
          </div>
        </app-scroll-reveal>
      </div>
    </section>
  `
})
export class TestimonialSectionComponent {}