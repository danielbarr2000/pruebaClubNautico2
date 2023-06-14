import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonasociosComponent } from './zonasocios/zonasocios.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    ZonasociosComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    GalleriaModule,
  ]
})
export class ZonasociosModule { }
