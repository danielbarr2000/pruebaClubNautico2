import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-zonaSocios',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

    nombre!:any;

    constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
        this.getUsuario();
    }

    getUsuario(){
        if(localStorage.getItem('nombre')!=''){
            this.nombre  = localStorage.getItem('nombre') as string
            console.log(this.nombre);
        }
    }

    cerrarSesion(){
        localStorage.removeItem('nombre')
        location.reload();
    }
}
