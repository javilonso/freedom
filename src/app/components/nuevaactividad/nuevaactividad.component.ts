import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Actividad } from '../../clases/actividad';
import { Basedatos } from '../../services/basedatos.service';
import {Location} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;




@Component({
  selector: 'app-nuevaactividad',
  templateUrl: './nuevaactividad.component.html',
  styleUrls: ['./nuevaactividad.component.scss']
})
export class NuevaactividadComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute, private basedatosService: Basedatos) { }
  
  tryname:string;
  tryphoto:string;

  ngOnInit(): void {
    // this.tryname=JSON.parse(localStorage.getItem('datauser')).data.displayName;
    // this.tryphoto=JSON.parse(localStorage.getItem('datauser')).data.photoURL;
    // this.basedatosService.userFullName=this.tryname;
    // this.basedatosService.userPhoto=this.tryphoto;
  }
  
  actividad:string;
  Deporte:string;
  selectedNivel:string;
  data:Date;
  provincia:string;
  municipio:string;
  lugar:string;
  descript:string;

  public latitude: number;
  public longitude: number;
  public prueba;

  hour =new FormControl('', Validators.pattern('([0-1]?[0-9]|2[0-3]):[0-5][0-9]'));
  getErrorMessage() {
    return this.hour.hasError('pattern') ? 'Not a valid hour' : '';
  }
  hora:string;

  public crearActividad()
  {
    try{
    var id:string="";
    var nombre=this.actividad;
    var creador_nombre:string="";
    var creador_email:string="";
    var participantes_number=1;
    var participantes:string[]=[];
    var nivel=this.selectedNivel;
    var fecha=this.data;
    var lugar=this.prueba;
    var deporte=this.Deporte;
    var descripcion=this.descript;
    var hora=this.hora;


    var finalActivity= new Actividad(id,nombre,participantes_number,creador_nombre,creador_email,nivel,fecha,lugar,deporte,null,null,descripcion,hora);

    finalActivity.creador_email = JSON.parse(localStorage.getItem('datauser')).data.email;
    finalActivity.creador_nombre = JSON.parse(localStorage.getItem('datauser')).data.username;
    finalActivity.tel_participantes = [JSON.parse(localStorage.getItem('datauser')).data.mobilephone];
    finalActivity.username_participantes= [JSON.parse(localStorage.getItem('datauser')).data.username];

    this.basedatosService.addActividad(finalActivity).then(() => 
    this.nav()
    );
    }
    catch(error){
      alert("Revisa que todos los campos sean correctos")
    }
    	  
  }

  nav():void {
    this.router.navigate(['/principal']).then(() => {
      window.location.reload();
    });
  }


  onAutocompleteSelected(result: PlaceResult) {
    this.prueba=result.formatted_address;
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
}