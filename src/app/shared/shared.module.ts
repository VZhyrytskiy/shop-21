import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverEffectDirective } from './directives';

@NgModule({
  declarations: [HoverEffectDirective],
  imports: [CommonModule],
  exports: [HoverEffectDirective],
})
export class SharedModule {
}
