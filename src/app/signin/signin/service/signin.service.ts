import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  nombre!: string;
  clave!: string;
  respuesta!: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setClave(clave: string) {
    this.clave = clave;
  }

  // Prueba 1
  compruebaUsuario() {
    this.http.post<any>("http://localhost:8082/socios/auth", { "nombre": this.nombre, "clave": this.clave }).subscribe(data => {
      if (data == true) {
        localStorage.setItem('nombre', this.nombre);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      } else {
        alert('Inicio de sesión incorrecto');
      }
    });
  }
}
