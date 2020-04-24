import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from "../../services/auth.service";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { User } from "../../interfaces/user";
import { Actividad } from '../../clases/actividad';
import {Basedatos} from '../../services/basedatos.service';
import { Subscription } from 'rxjs';
import {SubirfotoComponent} from '../subirfoto/subirfoto.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  uid: string;
  email; 
  myemail:string;
  username;
  myusername:string;
  displayName: string; 
  photoURL: string = "https://image.flaticon.com/icons/png/512/64/64572.png"; 
  checkphotoURL: string; //foto url del usuario para perfil
  
  mobilephone: string;
  birthday: string;
  city: string; 
  dni: string;
  photoDNI:string;
  password:string;

  startDate:Date;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, 
    public authService: AuthService, private basedatosService: Basedatos,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.startDate=new Date;
    this.startDate.setFullYear(this.startDate.getFullYear()-18);
  }

  crearUsuario(){
    try{
      this.authService.SignUp(this.myemail, this.password, this.photoURL, this.displayName, this.myusername, this.mobilephone, this.birthday, this.city, this.dni); 
      this.openRegisterForm();
    }
    catch(error){
    }
  }

  openRegisterForm() {
    this.dialog.open(SubirfotoComponent, {width: '80%', height: '250px'});
    this.dialogRef.close();
  }

  myFilter = (d: Date | null): boolean => {
    const day = new Date();
    day.setFullYear(day.getFullYear()-18);
    day.setHours(0,0,0,0);
    return day > d;
  }

}