import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { EditarbarcoService } from './service/editarbarco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

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

  barco!: any;

  matricula!: any;
  nombre!: string;
  nAmarre!: number;
  cuota!: number;
  idSocio = localStorage.getItem("id");

  constructor(public layoutService: LayoutService, private editarbarcoService: EditarbarcoService, public router: Router, private service: MessageService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.editarbarcoService.recibirDatos(params.get('matricula')).subscribe(data => {
        this.barco = data;
      });
    });
  }

  enviarDatos() {
    this.editarbarcoService.setPropiedades(this.barco.matricula, this.barco.nombre, this.barco.n_amarre, this.barco.cuota, this.idSocio);
    this.editarbarcoService.enviarDatos(this.barco.matricula);

    setTimeout(() => {
      this.router.navigate(['/barcos']);
    }, 1000);
  }
}
