import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarcosService {

  baseUrl: string="http://localhost:8082/";

  constructor(private http: HttpClient) { }

  acceder() {
    return this.http.get(this.baseUrl+"barcos/get/user/"+localStorage.getItem('id'));
  }

  borrarBarco(id:string){
    return this.http.delete(this.baseUrl+"barcos/delete/"+id)
  }

  getSalidas(){
    return this.http.get(this.baseUrl+"salidas/get/usuario/"+localStorage.getItem("id"));
  }

  borrarSalida(id:number){
    return this.http.delete(this.baseUrl+"salidas/delete/"+id)
  }
}
