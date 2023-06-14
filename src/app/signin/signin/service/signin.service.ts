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

  //Metodo para comprobar que un usuario existe. Si devuelve true llama a getUsuario(), si no lanza un alert
  compruebaUsuario() {
    this.http.post<any>("http://localhost:8082/socios/auth", { "nombre": this.nombre, "clave": this.clave }).subscribe(data => {
      if (data == true) {
        this.getUsuario(this.nombre);
      } else {
        alert('Inicio de sesión incorrecto');
      }
    });
  }

  // Este metodo recibe un nombre de usuario comprobado y guarda su nombre e id en el localstorage. Luego te manda a la pagina principal
  getUsuario(nombre:string){
    this.http.get<any>("http://localhost:8082/socios/get/nombre/"+ nombre).subscribe(data => {
      localStorage.setItem('nombre', data.nombre);
      localStorage.setItem('id', data.idSocio);
      this.router.navigate(['/']);
    });
  }
}
