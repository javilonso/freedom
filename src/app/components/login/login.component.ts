import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {Basedatos} from '../../services/basedatos.service';
import { NuevapasswordComponent } from '../nuevapassword/nuevapassword.component';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {email: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router, public authService: AuthService,
    private basedatosService: Basedatos, public dialog: MatDialog) { }


  ngOnInit(): void {}

  onSubmit() {
    console.log('User: ', this.user);
    this.authService.SignIn(this.user.email, this.user.password);
    this.dialogRef.close();    
  }

  nuevaPassword() {
    this.dialog.open(NuevapasswordComponent, {width: '350px', height: '280px'});
  }
  
}