import { Component, Input, signal, inject, computed, AfterViewInit, ElementRef, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service to manage the accordion state across items
class AccordionState {
  activeValue = signal<string | null>(null);

  toggle(value: string) {
    if (this.activeValue() === value) {
      this.activeValue.set(null);
    } else {
      this.activeValue.set(value);
    }
  }
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  providers: [AccordionState], // Provide state per accordion instance
  template: `<ng-content></ng-content>`,
  styles: [`
    :host { display: block; width: 100%; }
  `]
})
export class AccordionComponent {
  @Input() type: 'single' | 'multiple' = 'single'; // Implementation supports single for now
  @Input() collapsible = true;
}

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'block border-b border-border'
  }
})
export class AccordionItemComponent {
  @Input({ required: true }) value!: string;
}

@Component({
  selector: 'app-accordion-trigger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      type="button"
      (click)="toggle()"
      [attr.data-state]="isOpen() ? 'open' : 'closed'"
      class="flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-full text-left"
    >
      <ng-content></ng-content>
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="shrink-0 opacity-60 transition-transform duration-200"
        aria-hidden="true"
      >
        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </button>
  `
})
export class AccordionTriggerComponent {
  state = inject(AccordionState);
  item = inject(AccordionItemComponent);

  isOpen = computed(() => this.state.activeValue() === this.item.value);

  toggle() {
    this.state.toggle(this.item.value);
  }
}

@Component({
  selector: 'app-accordion-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="overflow-hidden text-sm transition-all duration-300 ease-in-out"
      [style.height.px]="contentHeight()"
      [style.opacity]="isOpen() ? 1 : 0"
      [attr.data-state]="isOpen() ? 'open' : 'closed'"
    >
      <div #content class="pb-4 pt-0 text-muted-foreground transition-opacity duration-300">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class AccordionContentComponent implements AfterViewInit {
  state = inject(AccordionState);
  item = inject(AccordionItemComponent);

  isOpen = computed(() => this.state.activeValue() === this.item.value);
  contentHeight = signal(0);
  @ViewChild('content') content?: ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => {
      this.isOpen();
      this.updateHeight();
    });
  }

  ngAfterViewInit() {
    this.updateHeight();
  }

  private updateHeight() {
    const el = this.content?.nativeElement;
    if (!el) return;
    this.contentHeight.set(this.isOpen() ? el.scrollHeight : 0);
  }
}
