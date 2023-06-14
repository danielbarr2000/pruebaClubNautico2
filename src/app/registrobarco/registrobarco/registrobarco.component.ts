import { Component } from '@angular/core';
import { RegistrobarcoService } from './service/registrobarco.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-registrobarco',
  templateUrl: './registrobarco.component.html',
  providers: [MessageService],
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegistrobarcoComponent {

  msgs: Message[] = [];

  matricula!: string;
  nombre!: string;
  nAmarre!: number;
  cuota!: number;
  idSocio = localStorage.getItem("id");

  constructor(public layoutService: LayoutService, private registrobarcoService: RegistrobarcoService, public router: Router, private service: MessageService) { }

  enviar() {
    this.registrobarcoService.setPropiedades(this.matricula, this.nombre, this.nAmarre, this.cuota, this.idSocio);
    this.registrobarcoService.enviar();

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['barcos']);
    }, 1000);
  }
}
