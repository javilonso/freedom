import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Actividad } from '../../clases/actividad';
import {Basedatos} from '../../services/basedatos.service';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";




@Component({
  selector: 'app-caja-actividad',
  templateUrl: './caja-actividad.component.html',
  styleUrls: ['./caja-actividad.component.scss']
})
export class CajaActividadComponent implements OnInit {

  @Input() public activity: Actividad;
  public foto_actividad:string;
  public estado:string;

  constructor(private basedatosService: Basedatos, public authService: AuthService,  public router: Router,  ) { }
  public aux_user;

  ngOnInit(): void {
    this.aux_user = JSON.parse(localStorage.getItem('datauser')).data;
    

    if(this.activity.deporte=="Baloncesto"){
      this.foto_actividad="assets/basket.svg"
    }
    else if(this.activity.deporte=="Ciclismo"){
      this.foto_actividad="assets/bici.svg"
    }
    else if(this.activity.deporte=="Futbol"){
      this.foto_actividad="assets/futbol.svg"
    }
    else if(this.activity.deporte=="Tenis"){
      this.foto_actividad="assets/tenis.svg"
    }
    else if(this.activity.deporte=="Running"){
      this.foto_actividad="assets/run.svg"
    }
    else if(this.activity.deporte=="Skate"){
      this.foto_actividad="assets/skateboard.svg"
    }
    else if(this.activity.deporte=="Trekking"){
      this.foto_actividad="assets/trekking.svg"
    }
    else if(this.activity.deporte=="Patinaje"){
      this.foto_actividad="assets/skate.svg"
    }

    if(!this.activity.tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone)){
      this.estado = "UNIRSE";
    }
    else if(this.activity.creador_email === JSON.parse(localStorage.getItem('datauser')).data.email){
      this.estado = "ELIMINAR";
    }
    else{ 
      this.estado = "ABANDONAR";
    }
    console.log(this.estado)
  }

  public accion(){
    console.log(this.aux_user);

    if (!this.activity.tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone))
    {
      this.basedatosService.addUserInActividad(this.activity, 
        JSON.parse(localStorage.getItem('datauser')).data.mobilephone,
         JSON.parse(localStorage.getItem('datauser')).data.username);

      this.estado = "ABANDONAR";
    }
    else if(this.estado == "ELIMINAR"){
      let a = JSON.stringify(this.activity)
      let b = (JSON.parse(a)).fecha.seconds;
      if (b < (new Date().getTime() / 1000)){
        alert("No se pueden eliminar actividades ya completadas!")
      }
      else{
        this.basedatosService.deleteActividad(this.activity.id);
      }
    }
    else {
      this.estado = "UNIRSE";
      console.log(this.aux_user.displayName);
      this.basedatosService.deleteUserInActividad(this.activity, 
        JSON.parse(localStorage.getItem('datauser')).data.mobilephone, 
        JSON.parse(localStorage.getItem('datauser')).data.username);
    }
  }

  goIn(){
    this.router.navigate(['/actividad-detail',this.activity.id]).then(() => {
      window.location.reload();
    });
  }

}
