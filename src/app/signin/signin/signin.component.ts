import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SigninService } from './service/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  providers: [MessageService]
})
export class SigninComponent {
  nombre!: string;
  clave!: string;

  constructor(public layoutService: LayoutService, private signinService:SigninService, public router: Router) { }

  signIn(){
      this.signinService.setNombre(this.nombre);
      this.signinService.setClave(this.clave);
      this.signinService.compruebaUsuario();
  }
}
