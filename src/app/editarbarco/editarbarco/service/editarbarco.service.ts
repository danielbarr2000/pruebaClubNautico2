import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarbarcoService {

  matricula!: string;
  nombre!: string;
  nAmarre!: number;
  cuota!: number;
  idSocio!: any;

  constructor(private http: HttpClient) { }

  setPropiedades(matricula: string, nombre: string, nAmarre: number, cuota: number, idSocio: any) {
    this.matricula = matricula;
    this.nombre = nombre;
    this.nAmarre = nAmarre;
    this.cuota = cuota;
    this.idSocio = idSocio;
  }

  load(){
    
  }
}
