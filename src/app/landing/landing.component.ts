import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-zonaSocios',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

    nombre!:any;
    id!:any;

    constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
        this.getUsuario();
        console.log(localStorage.getItem("nombre")+": "+localStorage.getItem("id"));
    }

    getUsuario(){
        if(localStorage.getItem('nombre')!=''){
            this.nombre  = localStorage.getItem('nombre') as string;
            this.id = localStorage.getItem('id') as string;
        }
    }

    cerrarSesion(){
        localStorage.removeItem('nombre');
        localStorage.removeItem('id');

        location.reload();
    }
}
