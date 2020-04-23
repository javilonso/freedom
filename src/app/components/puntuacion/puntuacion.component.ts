import { Component, OnInit } from '@angular/core';
import { Basedatos } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent implements OnInit {

  mispuntos:number;
  pintarpuntos:number;
  constructor(private basedatosService:Basedatos) { }

  ngOnInit(): void {
    this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
    this.basedatosService.ptsObs.subscribe((a) => {
      this.mispuntos=a;
      if(this.mispuntos>2000){
        this.pintarpuntos=100;
      }
      else{
        this.pintarpuntos=this.mispuntos/20;
      }
    })
  }

  medal2():boolean{
    if (this.mispuntos<600){
      return false;
    }
    else{
      return true;
    }
  }

  medal3():boolean{
    if (this.mispuntos<1200){
      return false;
    }  
    else{
      return true;
    }
  }

  medal4():boolean{
    if (this.mispuntos<2000){
      return false;
    }  
    else{
      return true;
    }
  }

}
