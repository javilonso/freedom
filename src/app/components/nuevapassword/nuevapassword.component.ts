import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-nuevapassword',
  templateUrl: './nuevapassword.component.html',
  styleUrls: ['./nuevapassword.component.scss']
})
export class NuevapasswordComponent implements OnInit {
  public miemail:string;
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

}
