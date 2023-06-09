import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }

  acceder() {
    return this.http.get("http://localhost:8082/socios/get");
  }

  borrar(id:String){
    return this.http.delete("http://localhost:8082/socios/delete/"+id)
  }
}
