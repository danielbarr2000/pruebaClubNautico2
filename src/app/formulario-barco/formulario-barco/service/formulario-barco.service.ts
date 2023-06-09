import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioBarcoService {

  matricula:String="";
  nombre:String="";
  nAmarre:any=null;
  cuota:any=null;
  idSocio:any=null;
  postId:any;
  
  constructor(private http: HttpClient) { }

  setPropiedades(matricula:String,nombre:String,nAmarre:any,cuota:any,idSocio:any){
    this.matricula=matricula;
    this.nombre=nombre;
    this.nAmarre=nAmarre;
    this.cuota=cuota;
    this.idSocio=idSocio;
  }

  enviar() {
    return this.http.post<any>("http://localhost:8082/barcos/post",{"matricula": this.matricula, "nombre":this.nombre, "n_amarre":this.nAmarre, "cuota":this.cuota, "idSocio":this.idSocio}).subscribe(data => {
      this.postId = data.id;
  });
  }
}
