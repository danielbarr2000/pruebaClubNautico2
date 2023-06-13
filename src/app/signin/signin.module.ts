import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { SigninComponent } from './signin/signin.component';
import { SigninRoutingComponent } from './signin/signin-routing.module';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    SigninRoutingComponent,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ToastModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
