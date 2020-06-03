import { NgModule } from '@angular/core';

import { AboutComponent, LoginComponent } from './components';

import { SharedModule } from '../shared/shared.module';

const declarations = [
  AboutComponent,
  LoginComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule],
  exports: [AboutComponent],
})
export class LayoutModule { }
