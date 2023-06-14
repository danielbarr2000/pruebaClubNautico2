import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarcosService {

  constructor(private http: HttpClient) { }

  acceder() {
    return this.http.get("http://localhost:8082/barcos/get");
  }

  borrar(id:String){
    return this.http.delete("http://localhost:8082/barcos/delete/"+id)
  }
}
