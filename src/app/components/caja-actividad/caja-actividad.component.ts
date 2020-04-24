import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Actividad } from '../../clases/actividad';
import {Basedatos} from '../../services/basedatos.service';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import {ConfirmComponent} from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-caja-actividad',
  templateUrl: './caja-actividad.component.html',
  styleUrls: ['./caja-actividad.component.scss']
})
export class CajaActividadComponent implements OnInit {

  @Input() public activity: Actividad;

  public foto_actividad:string;
  public estado:string;
  public aux_user;
  puntos:number;
  result: boolean;

  constructor(private basedatosService: Basedatos, public authService: AuthService,  public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.aux_user = JSON.parse(localStorage.getItem('datauser')).data;
    
    if(this.activity.deporte=="Baloncesto"){
      this.foto_actividad="./assets/basket.svg"
    }
    else if(this.activity.deporte=="Ciclismo"){
      this.foto_actividad="./assets/bici.svg"
    }
    else if(this.activity.deporte=="Futbol"){
      this.foto_actividad="./assets/futbol.svg"
    }
    else if(this.activity.deporte=="Tenis"){
      this.foto_actividad="./assets/tenis.svg"
    }
    else if(this.activity.deporte=="Running"){
      this.foto_actividad="./assets/run.svg"
    }
    else if(this.activity.deporte=="Skate"){
      this.foto_actividad="./assets/skateboard.svg"
    }
    else if(this.activity.deporte=="Trekking"){
      this.foto_actividad="./assets/trekking.svg"
    }
    else if(this.activity.deporte=="Patinaje"){
      this.foto_actividad="./assets/skate.svg"
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

    this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
    this.basedatosService.ptsObs.subscribe((a) => {
      this.puntos=a;
    });

  }


  openConfirmEliminar() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      height: '250px',
      data: '¿Estás seguro que quieres eliminar la actividad '+this.activity.nombre+'?'
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result == true) {
        this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, 
                                               this.puntos, -50);
        this.basedatosService.deleteActividad(this.activity.id);
      }
    });
  }

  openConfirmAbandonar() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      height: '250px',
      data: '¿Estás seguro que deseas abandonar la actividad ' + this.activity.nombre + '?'
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result == true) {
        this.estado = "UNIRSE";
      this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, 
                                               this.puntos, -40);
      this.basedatosService.deleteUserInActividad(this.activity, 
        JSON.parse(localStorage.getItem('datauser')).data.mobilephone, 
        JSON.parse(localStorage.getItem('datauser')).data.username);
      }
    });
  }

  openAnimationUnirse() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '450px',
      height: '300px',
      data: 'UNIRSE'
    });
    this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, 
                                                   this.puntos, 40);

            this.basedatosService.addUserInActividad(this.activity, 
              JSON.parse(localStorage.getItem('datauser')).data.mobilephone,
              JSON.parse(localStorage.getItem('datauser')).data.username);

            this.estado = "ABANDONAR"; 

    this.delay(2000).then(any=>{
      dialogRef.close();
      });
  }

  //acciones sobre actividad para el usuario: unirse/abandonar/eliminar
  public accion()
  {
        if (!this.activity.tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone))
        {
          if (this.activity.fecha < new Date() ){
            alert("No se pueden abandonar actividades ya completadas!")
          }
          else{
            this.openAnimationUnirse();    
          }
          
        }
        else if(this.estado == "ELIMINAR"){
          if (this.activity.fecha < new Date() ){
            alert("No se pueden eliminar actividades ya completadas!")
          }
          else{
            this.openConfirmEliminar();
            
          }
        }
        else {
          this.openConfirmAbandonar();
        }
  }

  //acceder a detalles de la actividad
  goIn(){
    this.router.navigate(['/actividad-detail',this.activity.id]).then(() => {
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


}