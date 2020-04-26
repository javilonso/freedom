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

  ngOnInit(): void {}

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  image: string = null

  //subir foto a firebase storage y obtener link
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

  //guardar link foto en usuario actual
  subirfoto(){
    this.basedatos.subirDNI(this.af.userData.uid, this.image);
    this.dialogRef.close();
    this.af.AuxSignIn(this.af.userData.uid);
  }
 
}

