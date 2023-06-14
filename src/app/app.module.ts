import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcoModule } from './barco/barco.module';
import { FormularioSocioComponent } from './formulario-socio/formulario-socio/formulario-socio.component';
import { InicioComponent } from './inicio/inicio.component';
import { SalidaModule } from './salida/salida.module';
import { SocioModule } from './socio/socio.module';
import { LandingModule } from './landing/landing.module';
import { ZonasociosModule } from './zonasocios/zonasocios.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioBarcoComponent } from './formulario-barco/formulario-barco/formulario-barco.component';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida/formulario-salida.component';
import { CookieService } from 'ngx-cookie-service';
import { SigninModule } from './signin/signin.module';
import { LoginModule } from './login/login.module';
import { BarcosModule } from './barcos/barcos.module';
import { RegistrobarcoModule } from './registrobarco/registrobarco.module';
import { EditarbarcoModule } from './editarbarco/editarbarco.module';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormularioSocioComponent,
    FormularioBarcoComponent,
    FormularioSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocioModule,
    BarcoModule,
    SalidaModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    LandingModule,
    SigninModule,
    LoginModule,
    BarcosModule,
    ZonasociosModule,
    RegistrobarcoModule,
    EditarbarcoModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
