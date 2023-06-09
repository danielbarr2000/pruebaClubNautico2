import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { SocioComponent } from './socio/socio/socio.component';
import { BarcoComponent } from './barco/barco/barco.component';
import { SalidaComponent } from './salida/salida/salida.component';

import { FormularioSocioComponent } from './formulario-socio/formulario-socio/formulario-socio.component';
import { FormularioBarcoComponent } from './formulario-barco/formulario-barco/formulario-barco.component';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida/formulario-salida.component';

const routes: Routes = [
  {
    path: '',
    component:InicioComponent
  },
  {
    path:'socios',
    component:SocioComponent
  },
  {
    path:'barcos',
    component:BarcoComponent
  },
  {
    path:'salidas',
    component:SalidaComponent
  },
  {
    path: 'formsocio',
    component:FormularioSocioComponent
  },
  {
    path: 'formbarco/:socio',
    component:FormularioBarcoComponent
  },
  {
    path: 'formsalida/:barco',
    component:FormularioSalidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
