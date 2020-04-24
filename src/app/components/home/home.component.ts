import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';

import { AngularFireFunctions } from '@angular/fire/functions';
import {FirebaseApp} from '@angular/fire';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient
    ,private functions: AngularFireFunctions, private fbs: FirebaseApp) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '400px'});
  }

  openRegisterForm() {
    this.dialog.open(RegisterComponent, {width: '80%', height: '70%'});
  }

}
