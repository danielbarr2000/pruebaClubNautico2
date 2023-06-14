import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LandingComponent } from './landing/landing.component';
import { ZonasociosComponent } from './zonasocios/zonasocios/zonasocios.component';

import { FormularioSocioComponent } from './formulario-socio/formulario-socio/formulario-socio.component';
import { FormularioBarcoComponent } from './formulario-barco/formulario-barco/formulario-barco.component';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida/formulario-salida.component';
import { SigninComponent } from './signin/signin/signin.component';
import { LoginComponent } from './login/login/login.component';
import { BarcosComponent } from './barcos/barcos/barcos.component';
import { RegistrobarcoComponent } from './registrobarco/registrobarco/registrobarco.component';
import { EditarbarcoComponent } from './editarbarco/editarbarco/editarbarco.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  // {
  //   path: 'socios',
  //   component: SocioComponent
  // },
  // {
  //   path: 'barcos',
  //   component: BarcoComponent
  // },
  // {
  //   path: 'salidas',
  //   component: SalidaComponent
  // },
  {
    path: 'formsocio',
    component: FormularioSocioComponent
  },
  {
    path: 'formbarco/:socio',
    component: FormularioBarcoComponent
  },
  {
    path: 'formsalida/:barco',
    component: FormularioSalidaComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "barcos",
    component: BarcosComponent
  },
  {
    path: "zonasocios",
    component: ZonasociosComponent
  },
  {
    path: "registrobarco",
    component: RegistrobarcoComponent
  },
  {
    path: "editarbarco",
    component: EditarbarcoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
