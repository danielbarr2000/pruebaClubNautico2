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
  articulos!: any;
  salidas!: any;

  constructor(private barcosService: BarcosService, public router: Router) { }

  ngOnInit(): void {

    this.getUsuario();
    this.barcosService.acceder().subscribe({
      next: (resp) => {
        this.articulos = resp;

      }, error: (err) => {
        console.log(err);
      }
    })

    this.barcosService.getSalidas().subscribe({
      next: (resp) => {
        this.salidas = resp;

      }, error: (err) => {
        console.log(err);
      }
    })

  }

  getUsuario() {
    if (localStorage.getItem('nombre') != '') {
      this.nombre = localStorage.getItem('nombre') as string
    }
  }

  cerrarSesion() {
    localStorage.removeItem('nombre')
    this.router.navigate(['/']);
  }

  borrarBarco(id: string) {
    this.barcosService.borrarBarco(id).subscribe();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  borrarSalida(id: number) {
    this.barcosService.borrarSalida(id).subscribe();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
