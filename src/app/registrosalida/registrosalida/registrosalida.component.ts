import { Component, OnInit } from '@angular/core';
import { RegistrosalidaService } from './service/registrosalida.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registrosalida',
    templateUrl: './registrosalida.component.html',
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
export class RegistrosalidaComponent implements OnInit {

    id!: number;
    fecha!: string;
    destino!: string;
    patron!: string;
    matricula!: any;

    constructor(public layoutService: LayoutService, private registrosalidaService: RegistrosalidaService, public router: Router, private service: MessageService, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.matricula = params.get("matricula");
        });
    }

    enviar() {
        this.registrosalidaService.setPropiedades(this.fecha,this.destino,this.patron,this.matricula);
        this.registrosalidaService.enviarDatos();
    }
}
