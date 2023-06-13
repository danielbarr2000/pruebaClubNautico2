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
  setPropiedades(fecha:String,destino:any,patron:any,barco:any){
    this.fecha=fecha;
    this.destino=destino;
    this.patron=patron;
    this.barco=barco;
  }
  enviar() {
    return this.http.post<any>("http://localhost:8082/salidas/post",{"fecha":this.fecha, "destino":this.destino, "nombre_patron":this.patron, "matricula_barco":this.barco}).subscribe(data => {
      this.postId = data.id;
  });
  }
}
