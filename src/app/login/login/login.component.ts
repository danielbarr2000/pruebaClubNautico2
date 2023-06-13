import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
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
export class LoginComponent {

    id = null;
    nombre!: string;
    clave!: string;
    clave2!: string;
    telefono!: string;

    msgs: Message[] = [];

    constructor(public layoutService: LayoutService, private loginService: LoginService, private router: Router, private service: MessageService) { }

    registrar() {
        if (this.nombre && this.clave && this.clave2 && this.telefono) {
            if (this.clave.length >= 5) {
                if (this.clave == this.clave2) {
                    console.log("Registrado correctamente");
                    localStorage.setItem('nombre', this.nombre);
                    this.enviar();
                } else {
                    this.errorClavesNoCoinciden();
                }
            } else {
                this.errorClaveNoSegura();
            }
        } else {
            this.errorCamposIncompletos();
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

    errorClavesNoCoinciden() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Las claves no coinciden' });
    }
    errorCamposIncompletos() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Debes rellenar todos los campos' });
    }
    errorClaveNoSegura() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'La clave debe tener por lo menos 5 caracteres' });
    }
}
