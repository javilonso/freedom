import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//FIREBASE
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';



//COMPONENTS
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';
import { CajaActividadComponent } from './components/caja-actividad/caja-actividad.component';
import { NuevaactividadComponent } from './components/nuevaactividad/nuevaactividad.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { SubirfotoComponent } from './components/subirfoto/subirfoto.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActividadDetailComponent } from './components/actividad-detail/actividad-detail.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ActividadCreadasComponent } from './components/actividad-creadas/actividad-creadas.component';
import { ActividadCompletadasComponent } from './components/actividad-completadas/actividad-completadas.component';
import { ActividadProximasComponent } from './components/actividad-proximas/actividad-proximas.component';
import { NuevapasswordComponent } from './components/nuevapassword/nuevapassword.component';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';
import { ContactsComponent } from './components/contacts/contacts.component';

//MATERIAL
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatListModule} from'@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//SERVICIOS
import { Basedatos } from './services/basedatos.service';

//GOOGLE MAPS 
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';


//SERVER COMMUNICATION
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaginaprincipalComponent,
    CajaActividadComponent,
    NuevaactividadComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ActividadDetailComponent,
    SubirfotoComponent,
    ProfileComponent,
    ActividadCreadasComponent,
    ActividadCompletadasComponent,
    ActividadProximasComponent,
    NuevapasswordComponent,
    PuntuacionComponent,
    ContactsComponent,
    ConfirmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatListModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfJCfXNgcLBQSThRuZ4TQHVu7vJLX39ME',
      libraries: ['places']
    }),

  ],
  exports:[],
  providers: [Basedatos],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
