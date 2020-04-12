import { Component, OnInit, SimpleChange } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Basedatos} from '../../services/basedatos.service';
import {Actividad} from '../../clases/actividad';
import {AuthService} from '../../services/auth.service';
import { Subscription } from 'rxjs';

 
@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.scss']
})
export class PaginaprincipalComponent implements OnInit {

  public actividades: Actividad[];
  public aux_actividades: Actividad[] =[];
  public s_actividades: Subscription;
  public tryname:string;
  public tryphoto:string;

  
  constructor(public router: Router, public route: ActivatedRoute, private basedatosService: Basedatos, 
    public authService: AuthService) {   
  }



  ngOnInit(): void {
    
    
    this.s_actividades=this.basedatosService.getActividades().subscribe(data=>{
      this.aux_actividades=[];
      this.actividades=[];
      this.actividades=data;
      for(let i=0; i<this.actividades.length; i++){
        let a = JSON.stringify(this.actividades[i])
        let b = (JSON.parse(a)).fecha.seconds;
        if (b > (new Date().getTime() / 1000)){
            this.aux_actividades.push(this.actividades[i]);
          }
      }

      console.log(this.aux_actividades)
      this.actividades=this.aux_actividades;
      console.log("ccc")
      
      console.log(this.actividades);
    });
    // this.tryname=JSON.parse(localStorage.getItem('datauser')).data.displayName;
    // this.tryphoto=JSON.parse(localStorage.getItem('datauser')).data.photoURL;
    // this.basedatosService.userFullName=this.tryname;
    // this.basedatosService.userPhoto=this.tryphoto;
   
  }

  ngOnDestroy()
  {
  this.s_actividades.unsubscribe();
  }



  selectedDeporte:string;
  public buscador:string;

  public getData(){
    if(this.buscador!=''){
      this.actividades=this.actividades.filter(c=>c.nombre.toLowerCase().includes(this.buscador.toLowerCase()));
    }
    else{
      this.actividades=this.aux_actividades;
    }
  }


}
