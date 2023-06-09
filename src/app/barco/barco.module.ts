import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcoComponent } from './barco/barco.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BarcoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports:[BarcoComponent],
})
export class BarcoModule { }
