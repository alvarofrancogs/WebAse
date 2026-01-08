import { Component, signal, computed, effect, input, ElementRef, viewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var gsap: any;

@Component({
  selector: 'app-testimonial-ui',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="w-full overflow-hidden relative" [ngClass]="compact() ? '' : 'bg-background min-h-screen'" (mousemove)="onMouseMove($event)">
      <div class="relative w-full max-w-5xl mx-auto" [ngClass]="compact() ? 'py-16 md:py-20' : ''">
        
        <!-- Oversized index number (Parallax) -->
        <div 
          class="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 text-[18rem] md:text-[26rem] font-bold text-foreground/[0.03] select-none pointer-events-none leading-none tracking-tighter transition-transform duration-100 ease-out"
          [style.transform]="'translate(' + numberX() + 'px, ' + numberY() + 'px) translateY(-50%)'"
        >
          <div class="block transition-all duration-500 blur-0 scale-100" [class.opacity-0]="animating()">
             {{ (activeIndex() + 1).toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- Main content -->
        <div class="relative flex flex-col md:flex-row">
          
          <!-- Left column (Vertical Text on Desktop, Top on Mobile) -->
          <div class="flex flex-row md:flex-col items-center justify-between md:justify-center gap-6 md:gap-0 md:pr-16 md:border-r border-border pb-8 md:pb-0 min-w-[100px]">
            <span class="text-xs font-mono text-muted-foreground tracking-widest uppercase opacity-0 animate-reveal"
                  [ngClass]="compact() ? '' : '[writing-mode:vertical-rl] [text-orientation:mixed]'">
              Testimonios
            </span>
            
            <!-- Progress Line -->
            <div class="relative bg-border md:mt-8" [ngClass]="compact() ? 'h-px w-28' : 'h-px w-28 md:h-32 md:w-px'">
              <div 
                class="absolute top-0 left-0 bg-foreground transition-all duration-500 ease-out"
                [style.width.%]="compact() ? ((activeIndex() + 1) / testimonials().length) * 100 : (isMobile() ? ((activeIndex() + 1) / testimonials().length) * 100 : 100)"
                [style.height.%]="compact() ? 100 : (isMobile() ? 100 : ((activeIndex() + 1) / testimonials().length) * 100)"
              ></div>
            </div>
          </div>

          <!-- Center Content -->
          <div class="flex-1 py-6 md:pl-16 md:py-12">
            
            <!-- Company Badge -->
            <div class="mb-6 md:mb-8 min-h-[30px]">
              <span class="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 animate-fade-in">
                <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {{ current().company }}
              </span>
            </div>

            <!-- Quote Container -->
            <div class="relative mb-10 md:mb-12 min-h-[120px] md:min-h-[140px]">
              <blockquote #quoteContainer class="text-3xl md:text-5xl font-light text-foreground leading-[1.15] tracking-tight">
                <!-- GSAP will inject spans here -->
              </blockquote>
            </div>

            <!-- Author Row -->
            <div class="flex flex-wrap items-end justify-between gap-6">
              <div class="flex items-center gap-4 animate-fade-up">
                <div class="w-8 h-px bg-foreground origin-left transition-transform duration-500 delay-300 scale-x-100"></div>
                <div>
                  <p class="text-base font-medium text-foreground">{{ current().author }}</p>
                  <p class="text-sm text-muted-foreground">{{ current().role }}</p>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex items-center gap-4">
                <button 
                  (click)="prev()"
                  class="group relative w-11 h-11 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center overflow-hidden hover:border-foreground transition-colors"
                >
                  <div class="absolute inset-0 bg-foreground translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" class="relative z-10 text-foreground group-hover:text-background transition-colors">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  (click)="next()"
                  class="group relative w-11 h-11 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center overflow-hidden hover:border-foreground transition-colors"
                >
                  <div class="absolute inset-0 bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" class="relative z-10 text-foreground group-hover:text-background transition-colors">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Ticker -->
        <div class="absolute -bottom-10 md:-bottom-16 left-0 right-0 overflow-hidden opacity-[0.06] pointer-events-none select-none hidden md:block">
          <div class="flex whitespace-nowrap animate-scroll">
            @for (item of tickerItems(); track $index) {
               <span class="mx-8 text-5xl md:text-6xl font-bold tracking-tight">{{ item }}</span>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-reveal { animation: reveal 1s ease-out forwards; }
    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
    .animate-fade-up { animation: fadeUp 0.6s ease-out forwards; }
    
    @keyframes reveal { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  `]
})
export class TestimonialUIComponent implements OnInit, OnDestroy {
  // Input for compact mode (landing page integration)
  compact = input(false);
  
  // Data passed via Input or default
  testimonials = input([
    {
      quote: "Entregaron la web en menos de dos semanas y el rendimiento se disparó.",
      author: "Laura M.",
      role: "Founder",
      company: "E-commerce local",
    },
    {
      quote: "Automatizamos WhatsApp y correos: ahora respondemos en minutos, no en horas.",
      author: "David R.",
      role: "Operaciones",
      company: "Servicios",
    },
    {
      quote: "SEO técnico + cambios rápidos: subimos posiciones y bajó el coste de captación.",
      author: "Sofía G.",
      role: "Marketing",
      company: "B2B",
    },
  ]);

  activeIndex = signal(0);
  animating = signal(false);
  mouseX = signal(0);
  mouseY = signal(0);
  isMobile = signal(false);

  // Computed parallax values for the large number
  numberX = computed(() => (this.mouseX() / window.innerWidth) * 40 - 20);
  numberY = computed(() => (this.mouseY() / window.innerHeight) * 20 - 10);
  
  current = computed(() => this.testimonials()[this.activeIndex()]);
  
  // Ticker items (duplicated for infinite loop)
  tickerItems = computed(() => 
    Array(10).fill('').map(() => this.testimonials().map(t => t.company).join(' • ') + ' • ')
  );

  quoteContainer = viewChild<ElementRef>('quoteContainer');
  private intervalId: any;

  constructor() {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());

    // Effect to trigger GSAP animation when index changes
    effect(() => {
      const index = this.activeIndex(); 
      const container = this.quoteContainer()?.nativeElement;
      if (!container) return;
      
      const text = this.testimonials()[index].quote;
      this.animateTextChange(container, text);
    });
  }

  checkMobile() {
    this.isMobile.set(window.innerWidth < 768);
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    window.removeEventListener('resize', () => this.checkMobile());
  }

  onMouseMove(e: MouseEvent) {
    this.mouseX.set(e.clientX);
    this.mouseY.set(e.clientY);
  }

  next() {
    this.stopAutoPlay();
    this.activeIndex.update(i => (i + 1) % this.testimonials().length);
    this.startAutoPlay();
  }

  prev() {
    this.stopAutoPlay();
    this.activeIndex.update(i => (i - 1 + this.testimonials().length) % this.testimonials().length);
    this.startAutoPlay();
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.testimonials().length);
    }, 6000);
  }

  private stopAutoPlay() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private animateTextChange(container: HTMLElement, newText: string) {
    this.animating.set(true);

    const tl = gsap.timeline({
      onComplete: () => this.animating.set(false)
    });

    const currentChars = container.querySelectorAll('.char, .quote-word');
    if (currentChars.length > 0) {
      tl.to(currentChars, {
        y: -20,
        opacity: 0,
        rotateX: 90,
        stagger: 0.02,
        duration: 0.3,
        ease: 'power2.in'
      });
    }

    tl.add(() => {
      container.innerHTML = '';
      newText.split(' ').forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block mr-[0.3em] whitespace-nowrap quote-word';
        wordSpan.textContent = word;
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(20px) rotateX(90deg)';
        container.appendChild(wordSpan);
      });
    });

    tl.to(container.querySelectorAll('.quote-word'), {
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'back.out(1.7)'
    });
  }
}
