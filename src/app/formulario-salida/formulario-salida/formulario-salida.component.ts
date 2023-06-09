import { Component, OnInit } from '@angular/core';
import { FormularioSalidaService } from './service/formulario-salida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-salida',
  templateUrl: './formulario-salida.component.html',
  styleUrls: ['./formulario-salida.component.css']
})
export class FormularioSalidaComponent implements OnInit {

  id:String="";
  fecha:String="";
  destino:any=null;
  patron:any=null;
  barco:any=null;

  constructor(private formService: FormularioSalidaService,private router:Router, private routervar:ActivatedRoute){}

  ngOnInit(): void {
    this.routervar.params.subscribe(params=>{
      this.barco=params['barco'];
      console.log(this.barco)
    });
  }

  enviar() {
    this.formService.setPropiedades(this.id,this.fecha,this.destino,this.patron,this.barco);
    this.formService.enviar();
    setTimeout(() => {
      console.log('sleep');
      this.router.navigate(['barcos']);
    }, 1000);
  }
}
