import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';
import {AuthService} from '../../services/auth.service';
import { Router , ActivatedRoute} from "@angular/router";
import {Basedatos} from '../../services/basedatos.service';
import {ActividadProximasComponent} from '../actividad-proximas/actividad-proximas.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {

  
  screenHeight: number;
  screenWidth: number;
  mode_sidenav:string = "side"

  opened = true;

  @ViewChild('snav') sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService, public authService: AuthService, public router: Router, public route: ActivatedRoute, 
    private basedatosService: Basedatos) { 
    this.getScreenSize();
  }

  nombreuser:string;
  photouser:string;

  //permite al menu lateral cambiar de vista dependiendo de la pantalla
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 768){
            this.mode_sidenav = "";
            this.opened = false;
        }
        else{
            this.mode_sidenav = "side";
            this.opened = true;
        }
  }

  ngOnInit(): void {
    this.nombreuser=JSON.parse(localStorage.getItem('datauser')).data.displayName;
      this.photouser=JSON.parse(localStorage.getItem('datauser')).data.photoURL;
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public logout(){
    this.authService.SignOut();
  }

  public redirectActividad(){
    this.router.navigate(['/nuevaactividad']).then(() => {
      window.location.reload();
    });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
}

public redirectProfile(){
  this.router.navigate(['/profile']).then(() => {
    window.location.reload();
  });
}

public redirectActCreada(){
  this.router.navigate(['/actividades-creadas']).then(() => {
    window.location.reload();
  });
}

public redirectActProxima(){
  this.router.navigate(['/actividades-proximas']).then(() => {
    window.location.reload();
  });
;
}

public redirectActCompleta(){
  this.router.navigate(['/actividades-completadas']).then(() => {
    window.location.reload();
  });
}

public redirectAct(){
  this.router.navigate(['/principal']).then(() => {
    window.location.reload();
  });
}

}
