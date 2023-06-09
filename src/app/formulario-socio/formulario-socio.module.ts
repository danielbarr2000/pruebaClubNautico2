import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioSocioComponent } from './formulario-socio/formulario-socio.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioSocioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioSocioModule { }
