import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { Subscription } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {Basedatos} from '../../services/basedatos.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-subirfoto',
  templateUrl: './subirfoto.component.html',
  styleUrls: ['./subirfoto.component.scss']
})

export class SubirfotoComponent implements OnInit {

  constructor(private afStorage: AngularFireStorage, private basedatos:Basedatos,
     private af: AuthService,public dialogRef: MatDialogRef<SubirfotoComponent>) { }

  ngOnInit(): void {
 
  }
  // public myname:string = this.authService.userFullName;
  // public aux:Actividad={id:"", nombre: "Futbol en casa", participantes: 5, creador: "yooo", 
  // nivel:3, fecha:null, lugar: "en casa", deporte: "futbol", nombres_participantes:[], email_participantes:[], descripcion:"esto es la descripcion"};

  uid: string;
  email: string;
  displayName: string;
  photoURL: string; //foto url del usuario para perfil
  username: string;
  mobilephone: string;
  birthday: string;
  city: string;
  dni: string;
  photoDNI:string;
  password:string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  image: string = null

  upload(event){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        this.downloadURL.subscribe(url => (this.image = url));
      })
    )
    .subscribe(); 
  }

  subirfoto(){
    this.basedatos.subirDNI(this.af.userData.uid, this.image);
    this.dialogRef.close();
    this.af.AuxSignIn(this.af.userData.uid);
  }
 
}

