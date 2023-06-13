import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { SigninService } from './service/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  providers: [MessageService]
})
export class SigninComponent {
  nombre!: string;
  clave!: string;

  constructor(public layoutService: LayoutService, private signinService:SigninService) { }

  signIn(){
      this.signinService.setNombre(this.nombre);
      this.signinService.setClave(this.clave);

      // this.signinService.compruebaUsuario();
      this.signinService.compruebaUsuario();
      
          // localStorage.setItem('nombre',this.nombre);
      
  }
}
