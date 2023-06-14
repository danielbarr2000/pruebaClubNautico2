import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { ZonasociosComponent } from './zonasocios/zonasocios/zonasocios.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';


import { SigninComponent } from './signin/signin/signin.component';
import { LoginComponent } from './login/login/login.component';
import { BarcosComponent } from './barcos/barcos/barcos.component';
import { RegistrobarcoComponent } from './registrobarco/registrobarco/registrobarco.component';
import { EditarbarcoComponent } from './editarbarco/editarbarco/editarbarco.component';
import { RegistrosalidaComponent } from './registrosalida/registrosalida/registrosalida.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
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
    path: "registrosalida",
    component: RegistrosalidaComponent
  },
  {
    path: "editarbarco",
    component: EditarbarcoComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
