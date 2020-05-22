import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmphasize]'
})
export class EmphasizeDirective {
  @Input('appEmphasize') fontWeight: number;

  constructor(
    private el: ElementRef,
    private render: Renderer2) {
  }

  @HostListener('click') onClick() {
    this.emphasize(this.fontWeight);
  }

  private emphasize(fontWeight: number): void {
    this.render.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }
}
