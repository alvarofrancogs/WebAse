import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ScrollRevealComponent } from '../ui/scroll-reveal.component';

@Component({
  selector: 'app-desarrollo-web-murcia',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealComponent],
  template: `
    <section class="min-h-screen pt-28 pb-20 bg-black relative z-30">
      <div class="container mx-auto px-6 max-w-5xl">

        <nav class="mb-8 text-xs font-mono text-neutral-500">
          <a routerLink="/" class="hover:text-white transition-colors">Inicio</a>
          <span class="mx-2">/</span>
          <span class="text-neutral-400">Desarrollo Web Murcia</span>
        </nav>

        <!-- Hero -->
        <div class="relative py-20 md:py-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/50 mb-6">Ingeniería Web a Medida</p>
            <h1 class="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]">Backend,<br>APIs y<br>sistemas.</h1>
            <p class="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">Desarrollo técnico avanzado: aplicaciones web, paneles de gestión, automatizaciones e integraciones a medida para tu negocio en Murcia.</p>
            <a href="/#contacto" class="inline-flex items-center gap-3 group">
              <span class="bg-white text-black font-bold px-8 py-4 text-sm tracking-widest uppercase group-hover:bg-white/90 transition-colors">Pedir presupuesto</span>
              <span class="w-12 h-12 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </a>
          </app-scroll-reveal>
          <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <!-- Qué desarrollamos — Service Cards -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Especialidades</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Qué desarrollamos</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            @for (svc of devServices; track svc.title; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.1">
                <div class="group relative border border-white/10 bg-neutral-950 p-8 md:p-10 hover:border-white/25 transition-all duration-500 h-full flex flex-col overflow-hidden rounded-lg">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                      @switch (svc.icon) {
                        @case ('api') {
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>
                        }
                        @case ('panel') {
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/></svg>
                        }
                        @case ('auto') {
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
                        }
                        @case ('migrate') {
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>
                        }
                        @case ('ia') {
                          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>
                        }
                      }
                    </div>
                    <h3 class="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors duration-300">{{ svc.title }}</h3>
                  </div>
                  <p class="text-white/55 text-sm leading-relaxed flex-1 mb-6">{{ svc.desc }}</p>
                  <div class="flex flex-wrap gap-2">
                    @for (tag of svc.tags; track tag) {
                      <span class="text-[10px] font-mono tracking-wider uppercase text-white/30 border border-white/10 px-2.5 py-1 rounded-full">{{ tag }}</span>
                    }
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- Proceso simplificado — 3 columnas -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Entrega</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-16">Cómo entregamos</h2>
          </app-scroll-reveal>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @for (step of deliverySteps; track step.num; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.15">
                <div class="h-full border border-white/10 bg-black p-8 hover:bg-white/[0.03] transition-colors duration-500 group flex flex-col relative overflow-hidden rounded-lg">
                  <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span class="text-sm font-mono tracking-widest text-white/40 mb-6 block border-b border-white/10 pb-4">{{ step.num }}</span>
                  <h3 class="text-xl font-bold text-white mb-4 group-hover:text-neutral-300 transition-colors duration-300">{{ step.title }}</h3>
                  <p class="text-white/50 text-sm leading-relaxed flex-1">{{ step.desc }}</p>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- Stack Tecnológico — Badges por categoría -->
        <div class="mb-32">
          <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">Tecnologías</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Stack que dominamos</h2>
          </app-scroll-reveal>
          <div class="space-y-8">
            @for (cat of stackCategories; track cat.label; let i = $index) {
              <app-scroll-reveal preset="fade-up" [delay]="i * 0.1">
                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span class="text-xs font-mono tracking-widest uppercase text-white/30 shrink-0 w-24">{{ cat.label }}</span>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of cat.items; track tech) {
                      <span class="text-xs font-mono text-white/70 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default">{{ tech }}</span>
                    }
                  </div>
                </div>
              </app-scroll-reveal>
            }
          </div>
        </div>

        <!-- FAQ -->
        <app-scroll-reveal preset="fade-up-blur" [delay]="0.1">
          <div class="mb-32">
            <p class="text-xs font-mono tracking-[0.3em] uppercase text-white/40 mb-4">FAQ</p>
            <h2 class="text-3xl md:text-4xl font-black text-white mb-12">Preguntas frecuentes</h2>
            <div class="space-y-2">
              @for (faq of faqs; track faq.q; let i = $index) {
                <div class="bg-white/[0.02] border border-white/[0.06] rounded-lg">
                  <button (click)="openFaq = openFaq === i ? -1 : i" class="w-full flex items-center gap-3 p-5 text-left font-mono text-sm hover:bg-white/[0.03] transition-colors rounded-lg">
                    <span class="text-white/50">&#10095;</span>
                    <span class="text-white flex-1">{{ faq.q }}</span>
                    <span class="text-white/30 text-xs transition-opacity" [class.opacity-0]="openFaq === i">[enter]</span>
                  </button>
                  <div class="grid transition-all duration-300 ease-in-out" [ngClass]="openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                    <div class="overflow-hidden">
                      <div class="font-mono text-sm text-white/70 pl-11 pr-5 pb-5">
                        <div class="border-l border-white/20 pl-4 py-1">{{ faq.a }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </app-scroll-reveal>

        <!-- CTA -->
        <app-scroll-reveal preset="lift" [delay]="0.2">
          <div class="relative border border-white/10 p-12 md:p-20 text-center mb-16 rounded-lg">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-4">¿Tienes un proyecto técnico?</h2>
            <p class="text-white/50 mb-8 max-w-lg mx-auto">Te enviamos propuesta técnica y presupuesto en 24h.</p>
            <a href="/#contacto" class="inline-block bg-white text-black font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/90 transition-colors">PEDIR PRESUPUESTO</a>
            <p class="text-white/40 text-xs mt-6">O llámanos: <a href="tel:+34601423840" class="text-white hover:underline">601 423 840</a></p>
          </div>
        </app-scroll-reveal>

        <!-- Related -->
        <div class="text-center">
          <p class="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">Servicios relacionados</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a routerLink="/diseno-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">Diseño Web</a>
            <a routerLink="/tienda-online-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">Tienda Online</a>
            <a routerLink="/mantenimiento-web-murcia" class="text-white/50 text-sm border border-white/10 px-5 py-2.5 hover:text-white hover:border-white/30 transition-colors rounded-full">Mantenimiento</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DesarrolloWebMurciaComponent implements OnInit {
  private seo = inject(SeoService);
  openFaq: number = -1;

  devServices = [
    {
      icon: 'api',
      title: 'APIs y Backend',
      desc: 'Arquitecturas REST y GraphQL, microservicios, autenticación segura e integraciones con servicios externos. Backend robusto que soporta tu operativa.',
      tags: ['REST', 'GraphQL', 'Auth', 'Microservicios']
    },
    {
      icon: 'panel',
      title: 'Paneles y CRM',
      desc: 'Dashboards a medida para gestionar clientes, pedidos, inventario o cualquier dato de tu negocio. Acceso desde cualquier dispositivo.',
      tags: ['Dashboard', 'CRUD', 'Reportes', 'Roles']
    },
    {
      icon: 'auto',
      title: 'Automatización',
      desc: 'Bots, workflows automáticos, alertas por email/WhatsApp y procesos que trabajan 24/7 sin intervención manual.',
      tags: ['Workflows', 'Bots', 'Alertas', 'Cron']
    },
    {
      icon: 'migrate',
      title: 'Migración y Escalado',
      desc: 'De WordPress o plantillas a código propio. Infraestructura escalable con CI/CD, contenedores y monitorización en producción.',
      tags: ['CI/CD', 'Docker', 'Cloud', 'Migración']
    },
    {
      icon: 'ia',
      title: 'Implementación de IA',
      desc: 'Integración de modelos de inteligencia artificial en tus aplicaciones: chatbots, análisis predictivo, procesamiento de lenguaje natural y visión artificial.',
      tags: ['LLMs', 'Chatbots', 'NLP', 'ML']
    }
  ];

  deliverySteps = [
    { num: '01', title: 'Arquitectura', desc: 'Definimos la estructura técnica, tecnologías y requisitos funcionales antes de escribir código.' },
    { num: '02', title: 'Sprint', desc: 'Desarrollo ágil con entregas periódicas y revisiones. Código limpio, testeable y documentado.' },
    { num: '03', title: 'Producción', desc: 'Despliegue con CI/CD, monitorización activa y soporte técnico post-lanzamiento incluido.' },
  ];

  stackCategories = [
    { label: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { label: 'Backend', items: ['Node.js', 'Java', 'Spring Boot', '.NET', 'Express', 'NestJS', 'Python'] },
    { label: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { label: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
  ];

  faqs = [
    { q: '¿Qué ventaja tiene un desarrollo a medida frente a CMS como WordPress?', a: 'El desarrollo a medida ofrece tiempos de carga ultrarrápidos (<1s), seguridad sin plugins vulnerables y una arquitectura escalable adaptada exactamente a la operativa de tu empresa. Sin dependencias de terceros.' },
    { q: '¿El código fuente y la infraestructura son de mi propiedad?', a: 'Sí, totalmente. Al finalizar el proyecto te entregamos el repositorio completo y accesos de despliegue. No hay ataduras ni dependencias cautivas.' },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'Desarrollo Web a Medida en Murcia | EmberCode Web Studio',
      description: 'Desarrollo web profesional en Murcia. Aplicaciones a medida, APIs, backend robusto y frontend moderno.',
      canonicalPath: '/desarrollo-web-murcia',
      geo: {
        region: 'ES-MU',
        placename: 'Murcia',
        position: '37.9922;-1.1307'
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'Desarrollo Web a Medida en Murcia',
          'description': 'Desarrollo web profesional con tecnologías modernas para empresas en Murcia.',
          'provider': {
            '@type': 'LocalBusiness',
            '@id': 'https://www.embercode.es/#business',
            'name': 'EmberCode Web Studio',
            'url': 'https://www.embercode.es',
            'telephone': '+34601423840'
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Murcia',
            'sameAs': 'https://es.wikipedia.org/wiki/Murcia'
          },
          'serviceType': 'Desarrollo web'
        },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [{ '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://www.embercode.es/' }, { '@type': 'ListItem', 'position': 2, 'name': 'Desarrollo Web Murcia', 'item': 'https://www.embercode.es/desarrollo-web-murcia' }] },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': '¿Qué ventaja tiene un desarrollo a medida frente a CMS como WordPress?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El desarrollo a medida ofrece tiempos de carga ultrarrápidos (<1s), seguridad sin plugins vulnerables y una arquitectura escalable adaptada exactamente a la operativa de tu empresa. Sin dependencias de terceros.' } },
            { '@type': 'Question', 'name': '¿El código fuente y la infraestructura son de mi propiedad?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, totalmente. Al finalizar el proyecto te entregamos el repositorio completo y accesos de despliegue. No hay ataduras ni dependencias cautivas.' } }
          ]
        }
      ]
    });
  }
}
