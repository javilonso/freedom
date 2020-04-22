import { Injectable, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import {Actividad} from '../clases/actividad';
import { User } from "../interfaces/user";
import {AuthService} from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})

export class Basedatos{

  public userFullName:string;
  public userPhoto:string;
  private actividades: AngularFirestoreCollection<Actividad>;
  private usuarios: AngularFirestoreCollection<User>;

  public mis_puntos: Subject<number> = new Subject<number>();
  public ptsObs = this.mis_puntos.asObservable();

  constructor(private firestore: AngularFirestore, public authService: AuthService, private http: HttpClient) 
  {
    this.actividades = this.firestore.collection('actividades');
    this.usuarios = this.firestore.collection('users');

    if(this.authService.isLoggedIn == true) {
      this.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
    }


  }


  public getActividades():Observable<Actividad[]>
  {
   return this.actividades.valueChanges();
  }

  public getUsuarios():Observable<User[]>
  {
    return this.usuarios.valueChanges();
  }

  public addActividad(data: Actividad):Promise<string>
  {
    data.id=this.firestore.createId();
    return this.actividades.doc(data.id).set({... data}).then(r=>{
    return data.id;
      });
   } 
  
  public getActividad(id:string){
    return this.actividades.doc(id).get().toPromise().then(r=>{
      return r.data() as Actividad;
      });  
  }

  public getUsuario(myuid:string){
    return this.usuarios.doc(myuid).get().toPromise().then(r=>{
      this.mis_puntos.next((r.data() as User).puntos);
      return r.data() as User;
      });  
  }

  public editActividad(actividad_editada:Actividad){
    return this.actividades.doc(actividad_editada.id).set(actividad_editada);
  }

  public addUserInActividad(actividad_escogida:Actividad, tel_user:string, username:string){

    let aux_tel:string[] = actividad_escogida.tel_participantes;
    aux_tel.push(tel_user);
    let aux_nombre:string[] = actividad_escogida.username_participantes;
    aux_nombre.push(username);

    this.actividades.doc(actividad_escogida.id).update({"tel_participantes": aux_tel,
      "username_participantes": aux_nombre,"participantes": actividad_escogida.participantes+1  }).then(()=>{

      })


  }

  public deleteUserInActividad(actividad_escogida:Actividad, tel_user:string, username:string){

    let aux_tel:string[] = actividad_escogida.tel_participantes;
    aux_tel.splice(aux_tel.indexOf(tel_user),1);
    let aux_nombre:string[] = actividad_escogida.username_participantes;;
    aux_nombre.splice(aux_nombre.indexOf(username),1);


    this.actividades.doc(actividad_escogida.id).update({"tel_participantes": aux_tel,
      "username_participantes": aux_nombre,"participantes": actividad_escogida.participantes-1 }).then(()=>{

    })

  }

  public puntosUserNewActivity(id:string, puntos:number, puntosextra:number)  {
    let result:number = puntos + puntosextra;
    this.usuarios.doc(id).update({"puntos": result}).then(()=>{
      
      this.mis_puntos.next(result)

      if((puntos <600 && result>=600) ||
            puntos <1200 && result>=1200 ||
              puntos <2000 && result>=2000)
      {
                this.mandarmedalla(result,1);
      }

      else if((result <600 && puntos>=600) ||
                result <1200 && puntos>=1200 ||
                  result <2000 && puntos>=2000)
      {
                this.mandarmedalla(result,0);
      }

    })
  }

  
  public getPuntos(id:string){
    this.getUsuario(JSON.parse(localStorage.getItem('datauser')).data.uid).then(data=>{
    this.mis_puntos.next(data.puntos);})
  }

  //llama a la funcion cloud para mandar un mail al user cuando sube/baja de nivel
  public mandarmedalla(puntos:number, cambio:number){

    let gif:string;
    let medalla:string;
    let texto:string;

    if (puntos<=599){
      medalla ="https://svgur.com/i/KM8.svg";
    }
    else if(puntos>599 && puntos<1200){
      medalla ="https://svgur.com/i/KLw.svg";
    }
    else if(puntos>1199 && puntos<2000){
      medalla ="https://svgur.com/i/KL4.svg";
    }
    else{
      medalla ="https://svgur.com/i/KM9.svg";
    }

    if (cambio==0){ //bajar puntos
      gif = "https://i.gifer.com/2NgG.gif";
      texto = "Has bajado de nivel"
    }
    else{ //subit puntos
      gif = "https://i.gifer.com/2DO.gif";
      texto = "Has subido de nivel"
    }

    var obj = { 
              dest_email: JSON.parse(localStorage.getItem('datauser')).data.email, 
              dest_nombre: JSON.parse(localStorage.getItem('datauser')).data.displayName, 
              dest_gif: gif, 
              dest_medalla_foto: medalla , 
              texto_nivel: texto, 
              dest_puntos: puntos 
            };

    this.http.post('https://cors-anywhere.herokuapp.com/https://us-central1-freedom-a2cc5.cloudfunctions.net/cambioMedalla', obj, { responseType: 'text' }).subscribe(
      res => {
        console.log(res);
      }
    )
}


  public subirDNI(id:string, urldni:string){
    this.usuarios.doc(id).update({"photoDNI": urldni});
  }


  public editUsuario(usuario_editado:User){
    return this.usuarios.doc(usuario_editado.uid).set(usuario_editado);
  }

  public deleteActividad(id:string){
    return this.actividades.doc(id).delete();
  }

  public deleteUsuario(username:string){
    return this.usuarios.doc(username).delete();
  }

  public setfullName(name:string){
    this.userFullName=name;
  }
  

}
