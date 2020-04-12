import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {Actividad} from '../clases/actividad';
import { User } from "../interfaces/user";
import {AuthService} from '../services/auth.service';




@Injectable({
 providedIn: 'root'
})

export class Basedatos{

  public userFullName:string;
  public userPhoto:string;

  private actividades: AngularFirestoreCollection<Actividad>;
  private usuarios: AngularFirestoreCollection<User>;


  constructor(private firestore: AngularFirestore, public authService: AuthService) 
  {
  this.actividades = this.firestore.collection('actividades');
  this.usuarios = this.firestore.collection('users');
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
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
      return r.data() as Actividad;
      });  
  }

  public getUsuario(myuid:string){
    return this.usuarios.doc(myuid).get().toPromise().then(r=>{
      //Si quisieras forzar que se ejecute constructor de Contacto:
      //return new Contacto(r.data() as IContacto);
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

    this.actividades.doc(actividad_escogida.id).update({"tel_participantes": aux_tel });
    this.actividades.doc(actividad_escogida.id).update({"username_participantes": aux_nombre });
    this.actividades.doc(actividad_escogida.id).update({"participantes": actividad_escogida.participantes+1});

  }


  public deleteUserInActividad(actividad_escogida:Actividad, tel_user:string, username:string){

    let aux_tel:string[] = actividad_escogida.tel_participantes;
    aux_tel.splice(aux_tel.indexOf(tel_user),1);

    let aux_nombre:string[] = actividad_escogida.username_participantes;;
    aux_nombre.splice(aux_nombre.indexOf(username),1);


    this.actividades.doc(actividad_escogida.id).update({"tel_participantes": aux_tel });
    this.actividades.doc(actividad_escogida.id).update({"username_participantes": aux_nombre });
    this.actividades.doc(actividad_escogida.id).update({"participantes": actividad_escogida.participantes-1});
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
