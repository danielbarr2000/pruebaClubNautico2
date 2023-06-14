import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EditarbarcoService } from './service/editarbarco.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-editarbarco',
  templateUrl: './editarbarco.component.html',
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
export class EditarbarcoComponent implements OnInit {
  msgs: Message[] = [];

  matricula!: string;
  nombre!: string;
  nAmarre!: number;
  cuota!: number;
  idSocio = localStorage.getItem("id");

  constructor(public layoutService: LayoutService, private editarbarcoService: EditarbarcoService, public router: Router, private service: MessageService) { }

  ngOnInit(): void {
    
  }

  // enviar() {
  //   this.editarbarcoService.setPropiedades(this.matricula, this.nombre, this.nAmarre, this.cuota, this.idSocio);
  //   this.editarbarcoService.enviar();

  //   setTimeout(() => {
  //     console.log('sleep');
  //     this.router.navigate(['barcos']);
  //   }, 1000);
  // }
}
