import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-signin',
  templateUrl: 'signin.component.html'
})
export class SigninComponent {
  nombre!: string;
  clave!: string;

  constructor(public layoutService: LayoutService) { }

  signIn(){
      
    // Esto hay que meterlo en un if y hacer la comprobacion en la base de datos
          localStorage.setItem('nombre',this.nombre);
      
  }
}
