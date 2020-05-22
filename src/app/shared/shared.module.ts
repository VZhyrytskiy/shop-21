import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HoverEffectDirective,
  EmphasizeDirective
} from './directives';

const declarations = [
  HoverEffectDirective,
  EmphasizeDirective,
];

const exports = [
  HoverEffectDirective,
  EmphasizeDirective,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...exports],
})
export class SharedModule {
}
