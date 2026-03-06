import { Component, signal, computed, effect, input, ElementRef, viewChild, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

export interface SolutionItem {
  title: string;
  kicker?: string;
  description: string;
  bullets?: string[];
  tag?: string;
  link?: string;
}

@Component({
  selector: 'app-solutions-ui',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="w-full overflow-hidden relative" [ngClass]="compact() ? '' : 'bg-background min-h-screen'" (mousemove)="onMouseMove($event)">
      <div class="relative w-full max-w-5xl mx-auto" [ngClass]="compact() ? 'py-10 md:py-16' : ''">
        
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
          
          <!-- Left Rail (Vertical Text on Desktop) -->
          <div class="hidden md:flex flex-col items-center justify-center gap-0 pr-16 border-r border-border min-w-[100px]">
            <span class="text-xs font-mono text-muted-foreground tracking-widest uppercase opacity-0 animate-reveal"
                  [ngClass]="compact() ? '' : '[writing-mode:vertical-rl] [text-orientation:mixed]'">
              Soluciones
            </span>
            
            <!-- Progress Line -->
            <div class="relative bg-border md:mt-8" [ngClass]="compact() ? 'h-px w-28' : 'h-px w-28 md:h-32 md:w-px'">
              <div 
                class="absolute top-0 left-0 bg-foreground transition-all duration-500 ease-out"
                [style.width.%]="compact() ? (activeIndex() / (solutions().length - 1)) * 100 : (isMobile() ? (activeIndex() / (solutions().length - 1)) * 100 : 100)"
                [style.height.%]="compact() ? 100 : (isMobile() ? 100 : (activeIndex() / (solutions().length - 1)) * 100)"
              ></div>
            </div>
          </div>

          <!-- Content Area -->
          <div class="flex-1 py-4 md:pl-16 md:py-10 px-4 md:px-0">
            
            <!-- Tag/Badge -->
            <div class="mb-6 min-h-[30px]">
              <span class="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 animate-fade-in">
                <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {{ current().tag || 'Solution' }}
              </span>
            </div>

            <!-- Title & Kicker Container -->
            <div class="relative mb-6 md:mb-10 min-h-[80px] md:min-h-[120px]">
              <div #titleContainer>
                <!-- Kicker -->
                <p class="text-sm text-muted-foreground mb-3 opacity-0 animate-fade-in delay-100">
                  {{ current().kicker || 'Solución' }}
                </p>

                <!-- Title (GSAP Word Reveal) -->
                <h3 #textReveal class="text-2xl md:text-5xl font-light text-foreground leading-[1.2] md:leading-[1.12] tracking-tight">
                  <!-- GSAP injects here -->
                </h3>
              </div>
            </div>

            <!-- Description -->
            <div class="min-h-[60px] md:min-h-[80px] mb-4 md:mb-6 relative">
              <p #descElement class="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl opacity-0 translate-y-4 transition-all duration-500 ease-out">
                 {{ current().description }}
              </p>
            </div>

            <!-- Bullets -->
            @if (current().bullets?.length) {
              <ul class="mt-4 md:mt-6 grid gap-2 text-sm text-foreground/80 min-h-[80px] md:min-h-[100px]">
                @for (bullet of current().bullets; track $index) {
                  <li class="flex items-center gap-2 bullet-item opacity-0 translate-y-2">
                    <span class="h-1 w-1 rounded-full bg-foreground/60"></span>
                    {{ bullet }}
                  </li>
                }
              </ul>
            }

            <!-- Navigation Buttons -->
            <div class="mt-10 flex items-center gap-4">
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

        <!-- Bottom Ticker -->
        <div class="absolute -bottom-10 md:-bottom-16 left-0 right-0 overflow-hidden opacity-[0.06] pointer-events-none select-none">
          <div class="flex whitespace-nowrap animate-scroll">
            @for (item of tickerItems(); track $index) {
               <span class="mx-8 text-3xl md:text-6xl font-bold tracking-tight">{{ item }}</span>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-reveal { animation: reveal 1s ease-out forwards; }
    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
    .delay-100 { animation-delay: 100ms; }
    
    @keyframes reveal { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
  `]
})
export class SolutionsUIComponent implements OnInit, OnDestroy {
  compact = input(false);
  solutions = input<SolutionItem[]>([]);

  activeIndex = signal(0);
  animating = signal(false);
  mouseX = signal(0);
  mouseY = signal(0);
  isMobile = signal(false);

  // Parallax
  numberX = computed(() => (this.mouseX() / window.innerWidth) * 40 - 20);
  numberY = computed(() => (this.mouseY() / window.innerHeight) * 20 - 10);

  current = computed(() => this.solutions()[this.activeIndex()]);

  tickerItems = computed(() =>
    Array(10).fill('').map(() => this.solutions().map(s => s.title).join(' • ') + ' • ')
  );

  textReveal = viewChild<ElementRef>('textReveal');
  descElement = viewChild<ElementRef>('descElement');

  private intervalId: any;
  private readonly resizeHandler = () => this.checkMobile();

  constructor() {
    this.checkMobile();
    window.addEventListener('resize', this.resizeHandler);

    // Effect for Title Animation
    effect(() => {
      const index = this.activeIndex();
      const container = this.textReveal()?.nativeElement;
      if (!container) return;

      const text = this.solutions()[index].title;
      this.animateTextChange(container, text);
    });

    // Effect for Description/Bullets Animation
    effect(() => {
      const index = this.activeIndex();
      const desc = this.descElement()?.nativeElement;
      if (desc) this.animateContent(desc);
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
    window.removeEventListener('resize', this.resizeHandler);
  }

  onMouseMove(e: MouseEvent) {
    this.mouseX.set(e.clientX);
    this.mouseY.set(e.clientY);
  }

  next() {
    this.stopAutoPlay();
    this.activeIndex.update(i => (i + 1) % this.solutions().length);
    this.startAutoPlay();
  }

  prev() {
    this.stopAutoPlay();
    this.activeIndex.update(i => (i - 1 + this.solutions().length) % this.solutions().length);
    this.startAutoPlay();
  }

  private startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.solutions().length);
    }, 6500);
  }

  private stopAutoPlay() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private animateTextChange(container: HTMLElement, newText: string) {
    this.animating.set(true);
    try {
      const tl = gsap.timeline({
        onComplete: () => this.animating.set(false)
      });

      const currentChars = container.querySelectorAll('.quote-word');
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
        const words = newText.split(' ');
        words.forEach((word, i) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'inline-block quote-word';
          wordSpan.textContent = word;
          wordSpan.style.opacity = '0';
          wordSpan.style.transform = 'translateY(18px) rotateX(90deg)';
          container.appendChild(wordSpan);
          if (i < words.length - 1) {
            container.appendChild(document.createTextNode(' '));
          }
        });
      });

      tl.to(container.querySelectorAll('.quote-word'), {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.06,
        duration: 0.45,
        ease: 'back.out(1.7)'
      });
    } catch {
      container.textContent = newText;
      this.animating.set(false);
    }
  }

  private animateContent(desc: HTMLElement) {
    try {
      gsap.fromTo(desc,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
      );

      setTimeout(() => {
        const bullets = document.querySelectorAll('.bullet-item');
        if (bullets.length) {
          gsap.fromTo(bullets,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, stagger: 0.05, duration: 0.3 }
          );
        }
      }, 100);
    } catch {
      desc.style.opacity = '1';
      desc.style.transform = 'none';
      const bullets = document.querySelectorAll<HTMLElement>('.bullet-item');
      bullets.forEach((bullet) => {
        bullet.style.opacity = '1';
        bullet.style.transform = 'none';
      });
    }
  }
}
