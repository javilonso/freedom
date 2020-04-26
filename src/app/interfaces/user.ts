export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string; //foto url del usuario para perfil
  username: string;
  mobilephone: string;
  birthday: string;
  city: string;
  dni: string;
  photoDNI:string; //url dni subido a firebase storage
  puntos:number; //puntos del usuario para impulsar gamificacion
}