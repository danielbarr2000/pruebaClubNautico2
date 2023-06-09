import { Component, OnInit } from '@angular/core';
import { FormularioBarcoService } from './service/formulario-barco.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-barco',
  templateUrl: './formulario-barco.component.html',
  styleUrls: ['./formulario-barco.component.css']
})
export class FormularioBarcoComponent implements OnInit {

matricula:String="";
nombre:String="";
nAmarre:any=null;
cuota:any=null;
idSocio:any=null;

constructor(private formService: FormularioBarcoService,private router:Router, private routervar:ActivatedRoute){}

ngOnInit(): void {
  this.routervar.params.subscribe(params=>{
    this.idSocio=params['socio'];
    console.log(this.idSocio)
  });
}

enviar() {
  this.formService.setPropiedades(this.matricula,this.nombre,this.nAmarre,this.cuota,this.idSocio);

  this.formService.enviar();

  setTimeout(() => {
    console.log('sleep');
    this.router.navigate(['barcos']);
  }, 1000);
}
}
