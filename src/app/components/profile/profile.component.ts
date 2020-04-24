import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Basedatos } from '../../services/basedatos.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User=JSON.parse(localStorage.getItem('datauser')).data;
  public fecha;

  constructor(public basedatosService: Basedatos,public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.fecha = new Date(null);
    this.fecha.setTime(JSON.parse(localStorage.getItem('datauser')).data.birthday.seconds*1000);
  }

  saveChanges():void {
    this.basedatosService.editUsuario(this.user).then(a => {
      this.authService.fetchDataUser(this.user.uid);
      this.router.navigate(['/principal'])}
      );
  }

  nav():void {
    this.router.navigate(['/principal']);
  }

}
