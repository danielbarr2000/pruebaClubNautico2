import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosalidaComponent } from './registrosalida/registrosalida.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RegistrosalidaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ToastModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class RegistrosalidaModule { }
