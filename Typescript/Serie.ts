export class Serie{
    id: number;
    nombre: string;
    canal : string;
    temporadas: number;
    sinopsis: string;
    web: string;
    imagen: string;

    constructor(    id: number,
        nombre: string,
        canal : string,
        temporadas: number,
        sinopsis: string,
        web: string,
        imagen: string,){
            this.id = id;
            this.nombre = nombre;
            this.canal = canal;
            this.temporadas = temporadas;
            this.sinopsis = sinopsis;
            this.web = web;
            this.imagen = imagen;
        }
}