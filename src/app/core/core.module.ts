import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PathNotFoundComponent } from './components';

@NgModule({
  declarations: [PathNotFoundComponent],
  imports: [SharedModule],
  exports: [PathNotFoundComponent],
})
export class CoreModule { }
