import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent } from '../ui/accordion.component';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';
import { StaggeredTextComponent } from '../ui/staggered-text.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent, ScrollRevealComponent, StaggeredTextComponent],
  template: `
    <section id="faq" class="w-full bg-background">
      <div class="container mx-auto px-4 py-20 md:py-28">
        <div class="mb-10 md:mb-14">
          <app-scroll-reveal preset="fade-up">
            <p class="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              FAQ
            </p>
          </app-scroll-reveal>
          
          <h2 class="mt-3 text-3xl md:text-5xl font-light tracking-tight text-foreground">
            Preguntas frecuentes
          </h2>
          
          <app-staggered-text 
            [delay]="0.2"
            className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            text="Respuestas claras para decidir rápido: plazos, mantenimiento, SEO y automatización."
          ></app-staggered-text>
        </div>

        <app-scroll-reveal preset="fade-up-blur" [delay]="0.3">
          <div class="max-w-3xl rounded-2xl border border-border bg-background/40 backdrop-blur-sm px-5 md:px-8">
            <app-accordion type="single" [collapsible]="true">
              
              <app-accordion-item value="faq-1">
                <app-accordion-trigger>¿Cómo es el proceso de trabajo con vosotros?</app-accordion-trigger>
                <app-accordion-content>
                  Primero hablamos para entender tu proyecto. Luego te enviamos presupuesto cerrado y, si aceptas, empezamos. Durante el desarrollo hay contacto constante por WhatsApp o email, y siempre ves avances antes de la entrega final.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-2">
                <app-accordion-trigger>¿En cuánto tiempo tengo mi web lista?</app-accordion-trigger>
                <app-accordion-content>
                  Normalmente entre 1 y 2 semanas, dependiendo de la complejidad. Proyectos urgentes se pueden acelerar con un ajuste de alcance y coste.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-3">
                <app-accordion-trigger>¿Qué incluye el mantenimiento mensual?</app-accordion-trigger>
                <app-accordion-content>
                  Ofrecemos dos planes: Básico (30€/mes) con hosting, dominio, SSL, backups y 1 modificación mensual. Estándar (50€/mes) añade 3 modificaciones, SEO continuo y monitorización 24/7. Ambos con soporte en menos de 24h.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-4">
                <app-accordion-trigger>¿Puedo tener mi propio dominio (miempresa.com)?</app-accordion-trigger>
                <app-accordion-content>
                  Sí, el dominio está incluido en los planes de mantenimiento. Puedes elegir .com, .es u otras extensiones. Si ya tienes uno, lo configuramos sin problema.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-5">
                <app-accordion-trigger>¿Qué pasa si quiero hacer cambios después de la entrega?</app-accordion-trigger>
                <app-accordion-content>
                  Con el plan de mantenimiento puedes pedir cambios cada mes (1 o 3 según el plan). Si no tienes mantenimiento, cobramos por hora de trabajo. Siempre te avisamos antes de cualquier coste.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-6">
                <app-accordion-trigger>¿Optimización SEO y hosting de alto rendimiento: vale la pena?</app-accordion-trigger>
                <app-accordion-content>
                  Sí, si quieres competir por visibilidad y velocidad: base SEO técnica + rendimiento real. También podemos alojar en servidores de alta capacidad para carga óptima.
                </app-accordion-content>
              </app-accordion-item>

            </app-accordion>
          </div>
        </app-scroll-reveal>

        <app-scroll-reveal preset="fade-up" [delay]="0.4">
          <div class="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a href="#contacto" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-mono tracking-widest uppercase font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-10 px-6 py-2">
              HABLAR DE MI CASO
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-mono tracking-widest uppercase font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2 border-border">
              VER SERVICIOS
            </a>

            <p class="sm:ml-auto text-sm text-muted-foreground">
              Si algo no encaja, lo adaptamos al alcance real.
            </p>
          </div>
        </app-scroll-reveal>
      </div>
    </section>
  `
})
export class FaqSectionComponent { }
