import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcosService } from './service/barcos.service';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent {

  nombre!: any;
  articulos: any;
  constructor(private barcosService: BarcosService, public router: Router) { }

  ngOnInit(): void {

    this.getUsuario();
    this.barcosService.acceder().subscribe({
      next: (resp) => {
        this.articulos = resp;
        console.log(this.articulos);

      }, error: (err) => {
        console.log(err);

      }
    })
  }

  getUsuario() {
    if (localStorage.getItem('nombre') != '') {
      this.nombre = localStorage.getItem('nombre') as string
      console.log(this.nombre);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('nombre')
    this.router.navigate(['/']);
  }

  borrar(id: String) {
    this.barcosService.borrar(id).subscribe();
    console.log("Borrado socio: " + id);

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['barcos']);
    }, 1000);
  }
}
