import { Injectable, NgZone } from '@angular/core';
import {User } from '../interfaces/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Guardar info usuario al loguearse
  auxuserData:any;
  fetcheddata;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {    
    /* Usamos local storage para guardar info usuario,
    Se borra al hacer log out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData=user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));

      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('datauser', null);
        JSON.parse(localStorage.getItem('user'));
        JSON.parse(localStorage.getItem('datauser'));
      }
    })
  }

  // Log in con email/contrasena
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {

        this.fetchDataUser(result.user.uid).then(
          data => {
           this.auxuserData=data;
           this.ngZone.run(() => {
            this.router.navigate(['/principal']);
          });
         });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  //Usado tras subir foto dni a BBDD
  AuxSignIn(id:string){
    this.fetchDataUser(id).then(
      data => {
       this.auxuserData=data;
       this.ngZone.run(() => {
        this.router.navigate(['/principal']);
      });
     });
  }

  /*Guardar info usuario en fichero local, 
  al salir se borra*/
  public async fetchDataUser(uid){
    try {
    const snapshot = await this.afs.collection('users').doc(uid).get().toPromise().then(data =>
    this.fetcheddata=data)

    const data = snapshot.data();
    localStorage.setItem('datauser', JSON.stringify({data}));
    JSON.parse(localStorage.getItem('datauser'));
    
    return data;
  }
    catch(error){
      console.log(error)
    }
  }

  // Registro con email/contrasena
  SignUp(email, password, photo, fullname, username, phone, birth, city, dni) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {

        this.SetUserData(result.user, photo, fullname, username, phone, birth, city, dni);
      }).catch((error) => {
        window.alert(error.message)
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      })
  }


  /* Salvar toda la info del usuario en firebase tras el registro */
  SetUserData(user,photo, fullname, username, phone, birth, city, dni) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: fullname,
      photoURL: photo,
      username: username,
      mobilephone: phone,
      birthday: birth,
      city: city,
      dni: dni,
      photoDNI:"",
      puntos:0,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Cerrar sesion
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('datauser');

      this.router.navigate(['/home']).then(() => {
        // window.location.reload();
      });
      
    })
  }

   // Resetear contrasena olvidada
   ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

   // Usado en Guard para restringir el routing si user no logueado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

}