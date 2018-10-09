import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRoutingModule } from './all-routing.module';
import {AllComponent} from './all.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
      AllRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ],
  declarations: [
      AllComponent
  ],
    exports: [AllComponent]
})
export class AllModule { }
