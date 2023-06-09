import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioSalidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormularioSalidaModule { }
