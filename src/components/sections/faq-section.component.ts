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
                <app-accordion-trigger>¿Cómo es el proceso de trabajo desde el primer contacto?</app-accordion-trigger>
                <app-accordion-content>
                  Primero analizamos las necesidades de tu negocio. Preparamos una propuesta técnica y un presupuesto según el alcance acordado. Si decides avanzar, arrancamos el desarrollo con comunicación continua y revisiones antes del despliegue final.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-2">
                <app-accordion-trigger>¿Cómo se definen los plazos de entrega?</app-accordion-trigger>
                <app-accordion-content>
                  Fijamos un cronograma cerrado desde el inicio en base a los requerimientos y alcance acordados, y revisamos contigo los cambios que afecten al calendario.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-3">
                <app-accordion-trigger>¿La web y el código serán de mi propiedad?</app-accordion-trigger>
                <app-accordion-content>
                  Sí, al 100%. Una vez entregado el proyecto, todo el código fuente, diseño y accesos son completamente tuyos. Sin ataduras ni plataformas cautivas.
                </app-accordion-content>
              </app-accordion-item>

              <app-accordion-item value="faq-4">
                <app-accordion-trigger>¿Qué ocurre si necesito cambios o mantenimiento más adelante?</app-accordion-trigger>
                <app-accordion-content>
                  Dispones de nuestros planes de mantenimiento mensual con hosting, copias de seguridad, SSL y modificaciones incluidas, o bien soporte puntual bajo demanda según tus necesidades.
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
