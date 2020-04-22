import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import {AuthService} from '../../services/auth.service';
import {Basedatos} from '../../services/basedatos.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombreuser:string;
  photouser:string;
  mispuntos:number;
  medallauser:string;

  constructor(public router: Router, public route: ActivatedRoute, 
    private sidenavService: SidenavService, public authService: AuthService, private basedatosService: Basedatos) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn == true) {
      this.nombreuser=JSON.parse(localStorage.getItem('datauser')).data.displayName;
      this.photouser=JSON.parse(localStorage.getItem('datauser')).data.photoURL;

      this.basedatosService.ptsObs.subscribe((a) => {
        this.mispuntos=a;
        if (this.mispuntos >= 2000){
          this.medallauser='/assets/medal4.svg'
        }
        else if(this.mispuntos >=1200 && this.mispuntos<2000){
            this.medallauser='/assets/medal3.svg'
        }
        else if(this.mispuntos>=600 && this.mispuntos<1200){
            this.medallauser='/assets/medal2.svg'
        }
        else if(this.mispuntos<600){
            this.medallauser='/assets/medal1.svg'
        }
      })

    }
     
  }

  public redirectProfile(){
    this.router.navigate(['/profile']).then(() => {
    });
  }
  
  toggleSidenav() {
    this.sidenavService.toggle();
  }

  public logout(){
    this.authService.SignOut();
  }
  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

}
