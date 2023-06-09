import { Component } from '@angular/core';
import { FormularioSocioService } from './service/formulario-socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-socio',
  templateUrl: './formulario-socio.component.html',
  styleUrls: ['./formulario-socio.component.css']
})
export class FormularioSocioComponent {
  id = null;
  nombre: String = "";
  telefono: String = "";

  constructor(private formService: FormularioSocioService, private router: Router){}

  enviar() {
    this.formService.setNombre(this.nombre);
    this.formService.setTelefono(this.telefono);

    this.formService.enviar();

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['socios']);
    }, 1000);
  }
}
