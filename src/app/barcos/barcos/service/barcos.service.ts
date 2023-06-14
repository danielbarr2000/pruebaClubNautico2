import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarcosService {

  constructor(private http: HttpClient) { }

  acceder() {
    return this.http.get("http://localhost:8082/barcos/get/user/"+localStorage.getItem('id'));
  }

  borrar(id:string){
    return this.http.delete("http://localhost:8082/barcos/delete/"+id)
  }

  getSalidas(){
    return this.http.get("http://localhost:8082/salidas/get/usuario/"+localStorage.getItem("id"));
  }

  borrarSalida(id:string){
    return this.http.delete("http://localhost:8082/salidas/delete/"+id)
  }
}
