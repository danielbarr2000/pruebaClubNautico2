import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  id: any = null;
  nombre: string = "";
  telefono: string = "";
  clave: string = "";
  postId: any;

  baseUrl: string="http://localhost:8082/";

  constructor(private http: HttpClient) { }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  setTelefono(telefono: string) {
    this.telefono = telefono;
  }
  setClave(clave: string) {
    this.clave = clave;
  }

  enviar() {
    this.http.post<any>(this.baseUrl+"socios/post", { "id": this.id, "nombre": this.nombre, "telefono": this.telefono, "clave": this.clave }).subscribe(data => {
      this.http.get<any>(this.baseUrl+"socios/get/nombre/" + this.nombre).subscribe(data => {
        localStorage.setItem('nombre', data.nombre);
        localStorage.setItem('id', data.idSocio);
      });
    });
  }
}
