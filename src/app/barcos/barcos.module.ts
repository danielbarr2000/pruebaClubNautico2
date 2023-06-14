import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarcosComponent } from './barcos/barcos.component';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    BarcosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule
  ]
})
export class BarcosModule { }
