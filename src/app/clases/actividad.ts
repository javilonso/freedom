export class Actividad {
    id: string;  //string random generada en firebase para localizar la entrada en la base de datos
    nombre:string;
    participantes:number;
    username_participantes:string[];
    tel_participantes:string[];
    creador_nombre:string;
    creador_email:string;
    nivel:string;
    fecha:Date;
    lugar:string;
    deporte:string;
    descripcion:string;
    hora:string;

    constructor(id:string, nombre:string, participantes:number, creador_nombre:string,creador_email:string, nivel:string, fecha:Date, lugar:string, deporte:string, username_participantes:string[], tel_participantes:string[], descripcion:string, hora:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.participantes=participantes;
        this.username_participantes=username_participantes;
        this.tel_participantes=tel_participantes;
        this.creador_nombre=creador_nombre;
        this.creador_email=creador_email;
        this.nivel=nivel;
        this.fecha=fecha;
        this.lugar=lugar;
        this.deporte=deporte;
        this.descripcion=descripcion;
        this.hora=hora;
    }
    
};