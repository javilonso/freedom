import { Component, OnInit, SimpleChange } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Basedatos} from '../../services/basedatos.service';
import {Actividad} from '../../clases/actividad';
import {AuthService} from '../../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-actividad-creadas',
  templateUrl: './actividad-creadas.component.html',
  styleUrls: ['./actividad-creadas.component.scss']
})
export class ActividadCreadasComponent implements OnInit {

  public actividades: Actividad[];
  public aux_actividades: Actividad[] = [];
  public s_actividades: Subscription;
  
  constructor(public router: Router, public route: ActivatedRoute, private basedatosService: Basedatos, 
    public authService: AuthService) {}

  ngOnInit(): void {
    this.s_actividades=this.basedatosService.getActividades().subscribe(data=>{
      this.aux_actividades=[];
      this.actividades=[];
      this.actividades=data;
      for(let i=0; i<this.actividades.length; i++){
        let a = JSON.stringify(this.actividades[i]);
        let b = (JSON.parse(a)).fecha.seconds;
        this.actividades[i].fecha = new Date(b*1000);
      }
      this.filtro();
    });
  }

   ngOnDestroy(){}

  //actividades creadas por el usuario actual
  filtro(){
    let j:number=0;
    for(let i=0; i<this.actividades.length; i++){
      if (this.actividades[i].creador_email==JSON.parse(localStorage.getItem('datauser')).data.email){
          this.aux_actividades[j]=this.actividades[i];
          j++;
    }
    }
  }


}
