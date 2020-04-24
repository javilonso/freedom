import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import {PaginaprincipalComponent} from '../components/paginaprincipal/paginaprincipal.component';
import {CajaActividadComponent} from '../components/caja-actividad/caja-actividad.component';
import { HomeComponent } from '../components/home/home.component';
import { ActividadDetailComponent } from '../components/actividad-detail/actividad-detail.component';
import { NuevaactividadComponent } from '../components/nuevaactividad/nuevaactividad.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ActividadCreadasComponent } from '../components/actividad-creadas/actividad-creadas.component';
import { ActividadProximasComponent } from '../components/actividad-proximas/actividad-proximas.component'
import { ActividadCompletadasComponent } from '../components/actividad-completadas/actividad-completadas.component';
import {PuntuacionComponent} from '../components/puntuacion/puntuacion.component';
import { AuthGuard } from "../guard/auth.guard";
import { ContactsComponent } from '../components/contacts/contacts.component';

const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'principal',component:PaginaprincipalComponent, canActivate: [AuthGuard] },
                        {path:'actividad',component:CajaActividadComponent, canActivate: [AuthGuard] },
                        {path:'actividad-nueva',component:NuevaactividadComponent, canActivate: [AuthGuard] },
                        {path:'actividades-creadas',component:ActividadCreadasComponent, canActivate: [AuthGuard] },
                        {path:'actividades-proximas',component:ActividadProximasComponent, canActivate: [AuthGuard] },
                        {path:'actividades-completadas',component:ActividadCompletadasComponent, canActivate: [AuthGuard] },
                        {path:'puntuacion',component:PuntuacionComponent, canActivate: [AuthGuard] },
                        {path:'actividad-detail/:id',component:ActividadDetailComponent, canActivate: [AuthGuard] },
                        {path:'profile',component:ProfileComponent, canActivate: [AuthGuard] },
                        {path:'contactos',component:ContactsComponent, canActivate: [AuthGuard] },
                        {path:'', redirectTo:'/home', pathMatch:'full'},
                        {path: '**', redirectTo:'/home', pathMatch:'full'}];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
