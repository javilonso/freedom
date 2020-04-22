import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import {Basedatos} from '../../services/basedatos.service';
import {Actividad} from '../../clases/actividad';
import {Location} from '@angular/common';


@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.scss']
})
export class ActividadDetailComponent implements OnInit {

  public activity:Actividad;
  tryname:string;
  tryphoto:string;
  public foto_actividad:string;
  public telefonos:string[];
  latitud: number;
  longitud: number;
  zoom: number = 15;


  constructor(private basedatosService: Basedatos, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.basedatosService.getActividad(id).then(data=>{
      this.activity=data;
      this.setSportImage();
      
      if (this.activity.creador_email==JSON.parse(localStorage.getItem('datauser')).data.email){
        this.telefonos=this.activity.tel_participantes;
      }
      else{
        this.telefonos=["*Solo visible para el creador de la actividad"]
      }
      this.longitud=this.activity.longitud;
      this.latitud=this.activity.latitud;

      let a = JSON.stringify(this.activity);
      let b = (JSON.parse(a)).fecha.seconds;
      this.activity.fecha = new Date(b*1000);
    });
  }

  setSportImage(): void {
    if(this.activity.deporte=="Baloncesto"){
      this.foto_actividad="/assets/basket.svg"
    }
    else if(this.activity.deporte=="Ciclismo"){
      this.foto_actividad="/assets/bici.svg"
    }
    else if(this.activity.deporte=="Futbol"){
      this.foto_actividad="/assets/futbol.svg"
    }
    else if(this.activity.deporte=="Tenis"){
      this.foto_actividad="/assets/tenis.svg"
    }
    else if(this.activity.deporte=="Running"){
      this.foto_actividad="/assets/run.svg"
    }
    else if(this.activity.deporte=="Skate"){
      this.foto_actividad="/assets/skateboard.svg"
    }
    else if(this.activity.deporte=="Trekking"){
      this.foto_actividad="/assets/trekking.svg"
    }
    else if(this.activity.deporte=="Patinaje"){
      this.foto_actividad="/assets/skate.svg"
    }
  }

  goBack(): void {
    this.location.back();
  }

}