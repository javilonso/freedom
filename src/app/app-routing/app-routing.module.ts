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

const routes: Routes = [{path:'home',component:HomeComponent},
                        {path:'principal',component:PaginaprincipalComponent},
                        // {path:'login',component:LoginComponent},
                        // {path:'register',component:RegisterComponent},
                        {path:'actividad',component:CajaActividadComponent},
                        {path:'nuevaactividad',component:NuevaactividadComponent},
                        {path:'actividades-creadas',component:ActividadCreadasComponent},
                        {path:'actividades-proximas',component:ActividadProximasComponent},
                        {path:'actividades-completadas',component:ActividadCompletadasComponent},
                        {path:'actividad-detail/:id',component:ActividadDetailComponent},
                        {path:'profile',component:ProfileComponent},
                        // {path:'contacto_nuevo/:id', component:NuevocontactoComponent},
                        {path:'', redirectTo:'/home', pathMatch:'full'},
                        {path: '**', redirectTo:'/home', pathMatch:'full'}];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
