import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="relative w-full h-screen overflow-hidden bg-black font-mono">
      <canvas #matrixCanvas class="absolute inset-0 w-full h-full opacity-40"></canvas>
      
      <div class="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <h1 class="text-7xl md:text-[20rem] font-bold text-white tracking-tighter leading-none select-none mix-blend-overlay">404</h1>
        <div class="mt-8 text-neutral-400 tracking-[0.5em] text-sm md:text-base uppercase animate-pulse">
          Señal Perdida
        </div>
        <a routerLink="/" class="mt-12 pointer-events-auto border border-white/20 hover:bg-white hover:text-black hover:border-white px-8 py-3 text-xs tracking-widest transition-all duration-300 uppercase text-white/60">
          Volver al Origen
        </a>
        <div class="mt-8 pointer-events-auto flex flex-wrap justify-center gap-3">
          <a routerLink="/diseno-web-murcia" class="text-neutral-500 text-xs hover:text-white transition-colors">Diseño Web</a>
          <span class="text-neutral-700">·</span>
          <a routerLink="/desarrollo-web-murcia" class="text-neutral-500 text-xs hover:text-white transition-colors">Desarrollo Web</a>
          <span class="text-neutral-700">·</span>
          <a routerLink="/tienda-online-murcia" class="text-neutral-500 text-xs hover:text-white transition-colors">Tienda Online</a>
          <span class="text-neutral-700">·</span>
          <a routerLink="/mantenimiento-web-murcia" class="text-neutral-500 text-xs hover:text-white transition-colors">Mantenimiento</a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private animationFrameId!: number;
  private columns: number[] = [];
  private drops: number[] = [];

  // "Techy" characters for the rain
  private chars = '{ } [ ] ( ) ; : < > / \\ | ! @ # $ % ^ & * + - = 0 1 _'.split('');
  private fontSize = 14;
  private readonly resizeHandler = () => this.resizeCanvas();

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.initCanvas();

    // Handle resize
    window.addEventListener('resize', this.resizeHandler);

    // Run animation outside Angular zone for performance
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.resizeHandler);
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;

    this.resizeCanvas();

    // Initialize drops
    const columns = Math.floor(canvas.width / this.fontSize);
    this.drops = new Array(columns).fill(1);
  }

  private resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Re-initialize drops if width changes significantly to avoid gaps
    const newColumns = Math.floor(canvas.width / this.fontSize);
    if (this.drops.length !== newColumns) {
      this.drops = new Array(newColumns).fill(1).map(() => Math.random() * -100); // Random start Y
    }
  }

  private lastTime = 0;
  private dropInterval = 50; // Controls speed (higher = slower)
  private timer = 0;

  private animate(timeStamp: number = 0) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    this.timer += deltaTime;

    // Only update drops if enough time has passed (speed control)
    if (this.timer > this.dropInterval) {
      // Semi-transparent black to create trail effect
      this.ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      this.ctx.fillRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

      this.ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < this.drops.length; i++) {
        const text = this.chars[Math.floor(Math.random() * this.chars.length)];

        // Professional Palette: Subtle Emerald/Slate selection
        const isHighlight = Math.random() > 0.98;

        if (isHighlight) {
          this.ctx.fillStyle = '#f0fdf4'; // Very light green/white for highlights
        } else {
          // A more sophisticated, deeper green (Tailwind emerald-500 equivalent)
          this.ctx.fillStyle = Math.random() > 0.5 ? '#10b981' : '#059669';
        }

        this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

        // Reset drop to top randomly after it crosses screen
        if (this.drops[i] * this.fontSize > this.canvasRef.nativeElement.height && Math.random() > 0.985) {
          this.drops[i] = 0;
        }

        this.drops[i]++;
      }
      this.timer = 0;
    }

    this.animationFrameId = requestAnimationFrame((t) => this.animate(t));
  }
}
