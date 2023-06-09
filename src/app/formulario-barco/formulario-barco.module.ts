import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioBarcoComponent } from './formulario-barco/formulario-barco.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioBarcoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioBarcoModule { }
