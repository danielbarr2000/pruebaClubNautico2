import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrosalidaService {
  fecha!: string;
  destino!: string;
  patron!: string;
  matricula!: string;

  constructor(private http: HttpClient, public router: Router) { }

  recibirDatos(matricula: any): Observable<any> {
    return this.http.get<any>("http://localhost:8082/barcos/get/" + matricula);
  }

  setPropiedades(fecha: string, destino: string, patron: string, matricula: string) {
    this.fecha = fecha;
    this.destino = destino;
    this.patron = patron;
    this.matricula = matricula;
  }

  enviarDatos(){
    this.http.post<any>("http://localhost:8082/salidas/post", { "fecha": this.fecha, "destino": this.destino, "nombre_patron": this.patron, "matricula_barco": this.matricula}).subscribe(data => {
    });

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['barcos']);
    }, 1000);
  }
}
