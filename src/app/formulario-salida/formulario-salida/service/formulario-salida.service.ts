import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioSalidaService {
  id:String="";
  fecha:String="";
  destino:any=null;
  patron:any=null;
  barco:any=null;
  postId:any=null;

  constructor(private http: HttpClient) { }
  setPropiedades(id:String,fecha:String,destino:any,patron:any,barco:any){
    this.id=id;
    this.fecha=fecha;
    this.destino=destino;
    this.patron=patron;
    this.barco=barco;
  }
  enviar() {
    return this.http.post<any>("http://localhost:8082/barcos/post",{"fecha":this.fecha, "destino":this.destino, "patron":this.patron, "barco":this.barco}).subscribe(data => {
      this.postId = data.id;
  });
  }
}
