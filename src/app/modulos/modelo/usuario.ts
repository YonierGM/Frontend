export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    documento: string;
    ocupacion: string

    constructor(id:number, nombre: string, apellido: string, email: string, documento: string, ocupacion: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.documento = documento;
        this.ocupacion = ocupacion;
    }
}