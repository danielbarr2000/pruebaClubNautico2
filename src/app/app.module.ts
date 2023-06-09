import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocioModule } from './socio/socio.module';
import { BarcoModule } from './barco/barco.module';
import { SalidaModule } from './salida/salida.module';
import { FormularioSocioComponent } from './formulario-socio/formulario-socio/formulario-socio.component';
import { InicioComponent } from './inicio/inicio.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioBarcoComponent } from './formulario-barco/formulario-barco/formulario-barco.component';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida/formulario-salida.component';

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
