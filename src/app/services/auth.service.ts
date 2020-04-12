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
  userData: any; // Save logged in user data


  auxuserData:any;
  fetcheddata;

  // userallData:any;
  // userFullName:string;
  // userPhoto:string;


  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        // this.fetchDataUser(user.uid);
        localStorage.setItem('user', JSON.stringify(this.userData));
        // console.log(localStorage)
        JSON.parse(localStorage.getItem('user'));
        console.log(localStorage);
      
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('datauser', null);
        JSON.parse(localStorage.getItem('user'));
        JSON.parse(localStorage.getItem('datauser'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {

        this.fetchDataUser(result.user.uid).then(
          data => {console.log(data);
           this.auxuserData=data;
           this.ngZone.run(() => {
            this.router.navigate(['/principal']);
          });
         });

        
        // this.fetchDataUser(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  AuxSignIn(id:string){
    this.fetchDataUser(id).then(
      data => {console.log(data);
       this.auxuserData=data;
       this.ngZone.run(() => {
        this.router.navigate(['/principal']);
      });
     });
  }


  public async fetchDataUser(uid){
    try {
    const snapshot = await this.afs.collection('users').doc(uid).get().toPromise().then(data =>
    this.fetcheddata=data)
    const data = snapshot.data();

    localStorage.setItem('datauser', JSON.stringify({data}));
    JSON.parse(localStorage.getItem('datauser'));
    // this.userallData=JSON.parse(localStorage.getItem('datauser'));
    // this.userFullName=JSON.parse(localStorage.getItem('datauser')).data.displayName;
    // this.userPhoto=JSON.parse(localStorage.getItem('datauser')).data.photoURL;

    return data;
  }
    catch(error){
      console.log(error)
    }
  }


   

  // Sign up with email/password
  SignUp(email, password, photo, fullname, username, phone, birth, city, dni) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        console.log(result);
        this.SetUserData(result.user, photo, fullname, username, phone, birth, city, dni);
      }).catch((error) => {
        window.alert(error.message)
        this.router.navigate(['/home']).then(() => {
          window.location.reload();
        });
      })
  }


  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
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
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('datauser');

      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
      
    })
  }

   // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

}