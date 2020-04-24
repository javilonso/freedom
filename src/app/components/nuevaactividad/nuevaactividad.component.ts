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

  puntos:number;

  constructor(public router: Router, public route: ActivatedRoute, private basedatosService: Basedatos) { }

  ngOnInit(): void {
    this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
    this.basedatosService.ptsObs.subscribe((a) => {
      this.puntos=a;
  })
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

  hour =new FormControl('', Validators.pattern('[0-2][0-9]:[0-5][0-9]'));
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
        var nivel=this.selectedNivel;

        var hours = +this.hora.slice(0,2);
        var minutes = +this.hora.slice(3);
        this.data.setHours(hours, minutes);

        var fecha=this.data;
        if (fecha<new Date()){
          throw new Error('Tiene que ser una fecha futura');
        }

        var lugar=this.prueba;
        var deporte=this.Deporte;
        var descripcion=this.descript;
        var hora=this.hora;

        var finalActivity= new Actividad(id,nombre,participantes_number,creador_nombre,creador_email,
                              nivel,fecha,lugar,deporte,null,null,descripcion,hora, this.longitude, this.latitude);

        finalActivity.creador_email = JSON.parse(localStorage.getItem('datauser')).data.email;
        finalActivity.creador_nombre = JSON.parse(localStorage.getItem('datauser')).data.username;
        finalActivity.tel_participantes = [JSON.parse(localStorage.getItem('datauser')).data.mobilephone];
        finalActivity.username_participantes= [JSON.parse(localStorage.getItem('datauser')).data.username];

        this.basedatosService.addActividad(finalActivity).then(() => 
        this.nav()
        );

        this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, 
                                                   this.puntos, 50);
        
      }
      catch(error){
        this.data=null;
        alert('Hay campos incorrectos o vacíos.\n'+error);
      }
  }

  nav():void {
    this.router.navigate(['/principal']).then(() => {
      // window.location.reload();
    });
  }

  onAutocompleteSelected(result: PlaceResult) {
    this.prueba=result.formatted_address;
  }

  onLocationSelected(location: Location) {    
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  myFilter = (d: Date | null): boolean => {
    const day = new Date();
    day.setHours(0,0,0,0);
    return day <= d;
  }

}