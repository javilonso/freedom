import { Component, OnInit, ViewChild, SimpleChange } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Basedatos} from '../../services/basedatos.service';
import {Actividad} from '../../clases/actividad';
import {AuthService} from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.scss']
})
export class PaginaprincipalComponent implements OnInit {

  public actividades: Actividad[];
  public all_actividades: Actividad[] =[];
  public aux_actividades: Actividad[] =[];
  public filtered: Actividad[] =[];
  public s_actividades: Subscription;
  public tryname:string;
  public tryphoto:string;
  public isfilter:boolean = false;
  // public dificultad: number[] = [0,1,2,3,4,5];
  public listdeportes: string[] = ["Futbol", "Baloncesto", "Running", "Skate", "Trekking", "Ciclismo", "Patinaje", "Tenis"];
  public deportes: boolean[] = [false,false,false,false,false,false,false,false];

  @ViewChild('snav') sidenav: MatSidenav;


  selectedDeporte:string;
  public buscador:string;

  constructor(public router: Router, public route: ActivatedRoute, private basedatosService: Basedatos, 
    public authService: AuthService, private db: AngularFireDatabase) {}

  ngOnInit(): void {
    
    this.s_actividades=this.basedatosService.getActividades().subscribe(data=>{
      this.all_actividades=[];
      this.actividades=[];
      this.actividades=data;
      for(let i=0; i<this.actividades.length; i++){
        let a = JSON.stringify(this.actividades[i]);
        let b = (JSON.parse(a)).fecha.seconds;
        this.actividades[i].fecha = new Date(b*1000);
        if (b > (new Date().getTime() / 1000)){
            this.all_actividades.push(this.actividades[i]);
          }
      }
      this.actividades=this.all_actividades;
    });
  }

  ngOnDestroy(){}
  
  
  public getData(){
    if(this.buscador!=''){
      if (this.isfilter){
        this.actividades=this.filtered.filter(c=>c.nombre.toLowerCase().includes(this.buscador.toLowerCase()));
      }
      else{
        this.actividades=this.actividades.filter(c=>c.nombre.toLowerCase().includes(this.buscador.toLowerCase()));
      }
    }
    else{
      if (this.isfilter){
        this.actividades=this.filtered;
      }
      else{
        this.actividades=this.all_actividades;
      }
    }
  }

  //filtrar actividades
  filter():void {
    this.aux_actividades=[];
    this.filtered=[];
    this.buscador = '';
    if (this.deportes.indexOf(true) > -1){
      this.isfilter=true;
      for (let i in this.listdeportes) {
        if (this.deportes[i] == true){
          let aux = this.all_actividades.filter(act => act.deporte.toLowerCase() === this.listdeportes[i].toLowerCase());
          this.aux_actividades=this.aux_actividades.concat(aux);
        }
      }
      this.actividades=this.aux_actividades;
      this.filtered=this.aux_actividades;
    }
    else{
      this.isfilter=false;
      this.actividades = this.all_actividades;
    }     
  }

  sidenavfun():void{
    if (this.sidenav.opened){
      this.sidenav.close()
    }
  }

  enable():void{
    this.isfilter = false;
    for (let i in this.listdeportes){
      this.deportes[i] = false;
    }
    this.actividades=this.all_actividades;
  }

}