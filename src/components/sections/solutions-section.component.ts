import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsUIComponent, SolutionItem } from '../ui/solutions.component';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-solutions-section',
  standalone: true,
  imports: [CommonModule, SolutionsUIComponent, ScrollRevealComponent],
  template: `
    <section id="soluciones" class="w-full bg-background border-t border-white/10">
      <div class="container mx-auto px-6 py-20 md:py-28">
        
        <!-- Header Copy -->
        <div class="mb-10 md:mb-14">
          <app-scroll-reveal preset="fade-up" [delay]="0">
            <p class="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Soluciones
            </p>
          </app-scroll-reveal>
          
          <app-scroll-reveal preset="fade-up" [delay]="0.1">
            <h2 class="mt-3 text-3xl md:text-5xl font-light tracking-tight text-foreground">
              Hacemos crecer tu negocio
            </h2>
          </app-scroll-reveal>

          <app-scroll-reveal preset="fade-up" [delay]="0.2">
            <p class="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Herramientas digitales que funcionan: webs que venden, automatizaciones que ahorran tiempo y sistemas que te dan control.
            </p>
          </app-scroll-reveal>
        </div>

        <!-- Component Wrapper (Backdrop effect) -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.3" [duration]="0.8">
          <div class="rounded-2xl border border-border bg-background/40 backdrop-blur-sm overflow-hidden">
            <app-solutions-ui [solutions]="solutions" [compact]="true" class="px-5 md:px-10"></app-solutions-ui>
          </div>
        </app-scroll-reveal>

        <!-- CTA Area -->
        <app-scroll-reveal preset="fade-up" [delay]="0.4">
          <div class="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#contacto" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-mono tracking-widest uppercase font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:bg-foreground/90 h-10 px-6 py-2">
              PEDIR PRESUPUESTO
            </a>
            <a href="#servicios" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-mono tracking-widest uppercase font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2 border-border">
              VER SERVICIOS
            </a>

            <p class="sm:ml-auto text-sm text-muted-foreground">
              Sin compromiso. Cuéntanos tu idea.
            </p>
          </div>
        </app-scroll-reveal>
      </div>
    </section>
  `
})
export class SolutionsSectionComponent {
  solutions: SolutionItem[] = [
    {
      title: "Tu negocio funciona solo",
      kicker: "Automatizaciones que trabajan 24/7",
      description: "Configuramos respuestas automáticas, seguimiento de clientes y notificaciones para que no pierdas ninguna oportunidad. Mientras duermes, tu negocio sigue captando.",
      bullets: ["Respuestas automáticas en WhatsApp", "Seguimiento de clientes potenciales", "Recordatorios y alertas", "Integración con tu email"],
      tag: "Productividad",
      link: "/desarrollo-web-murcia",
    },
    {
      title: "Tu mejor vendedor online",
      kicker: "Webs que convierten visitantes en clientes",
      description: "Diseñamos páginas pensadas para generar confianza y hacer que el visitante contacte contigo. Rápidas, bonitas y optimizadas para móvil.",
      bullets: ["Diseño profesional a medida", "Optimizada para Google", "Carga optimizada", "Adaptada a móvil"],
      tag: "Presencia Online",
      link: "/diseno-web-murcia",
    },
    {
      title: "Control total de tu negocio",
      kicker: "Tu centro de operaciones personalizado",
      description: "Creamos herramientas internas para que veas todo lo que pasa en tu negocio: clientes, pedidos, empleados, métricas. Todo en un solo lugar.",
      bullets: ["Dashboard con tus datos clave", "Gestión de clientes y pedidos", "Control de empleados o equipo", "Acceso desde cualquier dispositivo"],
      tag: "Gestión",
      link: "/desarrollo-web-murcia",
    },
    {
      title: "Primero en Google, primero en ventas",
      kicker: "Posicionamiento y rendimiento real",
      description: "Trabajamos la estructura y el contenido de tu web para responder a las búsquedas relevantes de tus clientes potenciales.",
      bullets: ["Análisis de palabras clave", "Optimización técnica completa", "Rendimiento medido y optimizado", "Seguimiento de posiciones"],
      tag: "Crecimiento",
      link: "/precios-diseno-web-murcia",
    },
  ];
}