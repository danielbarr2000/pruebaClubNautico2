import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioSocioService {
  id:any=null;
  nombre:String="";
  telefono:String="";
  postId:any;
  
  constructor(private http: HttpClient) { }

  setNombre(nombre:String){
    this.nombre=nombre;
  }
  setTelefono(telefono:String){
    this.telefono=telefono;
  }

  enviar() {
    return this.http.post<any>("http://localhost:8082/socios/post",{"id": this.id, "nombre":this.nombre, "telefono":this.telefono}).subscribe(data => {
      this.postId = data.id;
  });
  }
}
