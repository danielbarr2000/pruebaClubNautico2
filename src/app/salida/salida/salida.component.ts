import { Component, OnInit } from '@angular/core';
import { SalidaService } from './service/salida.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  articulos: any;
  constructor(private salidaService: SalidaService, private router: Router) { }

  ngOnInit(): void {

    this.salidaService.acceder().subscribe({
      next: (resp) => {
        this.articulos = resp;
        console.log(this.articulos);

      }, error: (err) => {
        console.log(err);

      }
    })
  }

  borrar(id:String){
    this.salidaService.borrar(id).subscribe();
    console.log("Borrado socio: "+id);

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['salida']);
    }, 1000);
  }
}
