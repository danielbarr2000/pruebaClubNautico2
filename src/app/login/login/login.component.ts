import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    id = null;
    nombre!: string;
    clave!: string;
    clave2!: string;
    telefono!: string;

    constructor(public layoutService: LayoutService, private loginService: LoginService, private router: Router) { }

    registrar() {
        if (this.clave == this.clave2) {
            console.log("Registrado correctamente");
            localStorage.setItem('nombre', this.nombre);

            this.enviar();
        } else {
            console.log("Las claves no coinciden");
        }
    }

    enviar() {
        this.loginService.setNombre(this.nombre);
        this.loginService.setTelefono(this.telefono);
        this.loginService.setClave(this.clave);
        this.loginService.enviar();

        setTimeout(() => {
            console.log('sleep');
            this.router.navigate(['/']);
        }, 1000);
    }
}
