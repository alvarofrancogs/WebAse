import { Component, signal, OnInit, OnDestroy, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { EDITOR_VARIANTS } from '../app/content';

interface EditorLine {
  text: string;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative w-full max-w-lg mx-auto font-mono text-sm select-none">
      
      <!-- Simple IDE Window -->
      <div class="bg-[#1a1a2e] rounded-lg shadow-xl overflow-hidden border border-white/5">
        
        <!-- Header with dots -->
        <div class="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-white/5">
          <div class="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div class="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28c840]"></div>
          <span class="ml-4 text-neutral-400 text-xs">{{ currentFile() }}</span>
        </div>

        <!-- Code Area -->
        <div class="p-5 min-h-[220px]">
          <div class="space-y-1">
            @for (line of displayedLines(); track $index) {
              <div class="leading-relaxed">
                <span class="text-neutral-300" [innerHTML]="highlightLine(line.text)"></span>
              </div>
            }
            <div class="leading-relaxed">
              <span class="text-neutral-300">{{ currentTypingLine() }}<span class="inline-block w-[2px] h-4 bg-blue-400 ml-0.5 align-middle animate-pulse"></span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class TerminalComponent implements OnInit, OnDestroy {
  displayedLines = signal<EditorLine[]>([]);
  currentTypingLine = signal('');
  currentFile = signal(EDITOR_VARIANTS[0].filename);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private variants = EDITOR_VARIANTS;
  private currentVariantIndex = 0;
  private currentLineIndex = 0;
  private charIndex = 0;
  private timeoutId: any;

  ngOnInit() {
    if (this.isBrowser) this.typeNextChar();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private typeNextChar() {
    const variant = this.variants[this.currentVariantIndex];
    const currentLines = variant.lines;
    const currentFullLine = currentLines[this.currentLineIndex];

    if (this.charIndex < currentFullLine.length) {
      this.currentTypingLine.update(val => val + currentFullLine.charAt(this.charIndex));
      this.charIndex++;

      const speed = Math.random() * 25 + 15;
      this.timeoutId = setTimeout(() => this.typeNextChar(), speed);
    } else {
      this.timeoutId = setTimeout(() => {
        this.displayedLines.update(lines => [...lines, { text: currentFullLine }]);
        this.currentTypingLine.set('');
        this.charIndex = 0;
        this.currentLineIndex++;

        if (this.currentLineIndex < currentLines.length) {
          this.typeNextChar();
        } else {
          this.timeoutId = setTimeout(() => this.prepareNextVariant(), 3500);
        }
      }, 200);
    }
  }

  private prepareNextVariant() {
    this.displayedLines.set([]);
    this.currentLineIndex = 0;
    this.currentVariantIndex = (this.currentVariantIndex + 1) % this.variants.length;
    this.currentFile.set(this.variants[this.currentVariantIndex].filename);
    this.typeNextChar();
  }

  highlightLine(text: string): string {
    if (!text) return '';

    return text
      // Comments - green
      .replace(/(\/\/.*)/g, '<span class="text-emerald-400">$1</span>')
      // Strings - sky blue
      .replace(/(["'].*?["'])/g, '<span class="text-sky-300">$1</span>')
      // Keywords - purple
      .replace(/\b(const|let|var|function|return)\b/g, '<span class="text-purple-400">$1</span>')
      // Properties/keys - orange
      .replace(/(\w+):/g, '<span class="text-amber-300">$1</span>:');
  }
}
