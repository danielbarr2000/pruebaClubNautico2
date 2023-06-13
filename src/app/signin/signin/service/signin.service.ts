import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  listaUsuarios!:any;

  constructor(private http: HttpClient) { }

  // getUserById(nombre:String,clave:String){
  //   return this.http.get("http://localhost:8082/socios/get/");
  // }

  // iniciarSesion(){
  //   return this.http.get("http://localhost:8082/socios/get");
  // }
}
