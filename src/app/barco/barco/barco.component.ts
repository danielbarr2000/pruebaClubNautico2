import { Component, OnInit } from '@angular/core';
import { BarcoService } from './service/barco.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent implements OnInit {

  articulos!: any;
  matricula!:any;

  constructor(private barcoService: BarcoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.matricula = params.get('matricula');
      console.log(params.get('matricula'))
    });
    
  

    this.barcoService.acceder().subscribe({
      next: (resp) => {
        this.articulos = resp;
        console.log(this.articulos);

      }, error: (err) => {
        console.log(err);

      }
    })
  }

  borrar(id:String){
    this.barcoService.borrar(id).subscribe();
    console.log("Borrado socio: "+id);

    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['barcos']);
    }, 1000);
  }
}
