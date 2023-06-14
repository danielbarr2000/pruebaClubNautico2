import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LandingModule } from './landing/landing.module';
import { ZonasociosModule } from './zonasocios/zonasocios.module';
import { ContactoModule } from './contacto/contacto.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { SigninModule } from './signin/signin.module';
import { LoginModule } from './login/login.module';
import { BarcosModule } from './barcos/barcos.module';
import { RegistrobarcoModule } from './registrobarco/registrobarco.module';
import { EditarbarcoModule } from './editarbarco/editarbarco.module';
import { RegistrosalidaModule } from './registrosalida/registrosalida.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    LandingModule,
    SigninModule,
    LoginModule,
    BarcosModule,
    ZonasociosModule,
    RegistrobarcoModule,
    EditarbarcoModule,
    ContactoModule,
    RegistrosalidaModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
