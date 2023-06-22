import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditarbarcoService {

  barco!: any;

  matricula!: string;
  nombre!: string;
  nAmarre!: number;
  cuota!: number;
  idSocio!: any;

  baseUrl: string="http://localhost:8082/";

  constructor(private http: HttpClient) { }

  setPropiedades(matricula: string, nombre: string, nAmarre: number, cuota: number, idSocio: any) {

    this.matricula = matricula;
    this.nombre = nombre;
    this.nAmarre = nAmarre;
    this.cuota = cuota;
    this.idSocio = idSocio;
  }

  enviarDatos(matricula:any) {
    this.http.put<any>(this.baseUrl+"barcos/update/"+matricula, { "matricula": this.matricula, "nombre": this.nombre, "n_amarre": this.nAmarre, "cuota": this.cuota, "idSocio": this.idSocio }).subscribe(data => {
    });
  }

  recibirDatos(matricula: any): Observable<any> {
    return this.http.get<any>(this.baseUrl+"barcos/get/" + matricula);
  }
}
