import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  HoverEffectDirective,
  EmphasizeDirective
} from './directives';

import { OrderByPipe } from './pipes';

const declarations = [
  HoverEffectDirective,
  EmphasizeDirective,
  OrderByPipe,
];

const exports = [
  CommonModule,
  FormsModule,
  HoverEffectDirective,
  EmphasizeDirective,
  OrderByPipe,
];

@NgModule({
  declarations: [...declarations, ],
  imports: [CommonModule],
  exports: [...exports],
})
export class SharedModule {
}
