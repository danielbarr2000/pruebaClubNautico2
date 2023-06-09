import { Component, OnInit } from '@angular/core';
import { SocioService } from './service/socio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {
  articulos: any;
  constructor(private socioService: SocioService, private router:Router) { }

  ngOnInit(): void {

    this.socioService.acceder().subscribe({
      next: (resp) => {
        this.articulos = resp;
        console.log(this.articulos);

      }, error: (err) => {
        console.log(err);

      }
    })

  }

  borrar(id:String){
    this.socioService.borrar(id).subscribe();
    console.log("Borrado socio: "+id);

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['socios']);
    }, 1000);
  }

}
