import { Component, OnInit } from '@angular/core';
import {Basedatos} from '../../services/basedatos.service';
import {AuthService} from '../../services/auth.service';
import { User } from 'src/app/interfaces/user';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmComponent} from '../confirm/confirm.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public users: User[];
  public s_users: Subscription;
  public puntos: number;
  public result: boolean;

  constructor(private basedatosService: Basedatos, public authService: AuthService,private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.s_users=this.basedatosService.getUsuarios().subscribe(data=>{
      let nombreuser=JSON.parse(localStorage.getItem('datauser')).data.displayName;
      this.users=data;
      let index:number;
      for (var a in this.users){
        if(this.users[a].displayName==nombreuser){
          index=+a;
        }
      }
      this.users.splice(+index,1);
    });
  }

  //llama a la funcion cloud mandarInvi() para mandar un email con los datos del user al otro usuario
  mandarInvitacion(nombre:string, email:string){

    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      height: '250px',
      data: '¿Estás seguro que deseas enviar un correo de invitación al usuario '+nombre+'?'
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result == true) {   
        var obj = { 
                  dest_email: email, 
                  dest_nombre: nombre, 
                  origen_username: JSON.parse(localStorage.getItem('datauser')).data.username, 
                  origen_email: JSON.parse(localStorage.getItem('datauser')).data.email, 
                  origen_tlf: JSON.parse(localStorage.getItem('datauser')).data.mobilephone, 
                  origen_foto: JSON.parse(localStorage.getItem('datauser')).data.photoURL };

        this.http.post('https://cors-anywhere.herokuapp.com/https://us-central1-freedom-a2cc5.cloudfunctions.net/mandarInvi', obj, { responseType: 'text' }).subscribe(
          res => {
            console.log(res);
          }
        )
        this.dialog.open(ConfirmComponent, {
          width: '300px',
          height: '200px',
          data: '¡INVITACIÓN ENVIADA!'
        });
      }
      else{
      }
    });
  }
  
}
