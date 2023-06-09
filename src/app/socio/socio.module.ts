import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioComponent } from './socio/socio.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    SocioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,

  ]
})
export class SocioModule { }
