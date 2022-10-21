export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    puestoE : string;

    constructor(nombreE: string, descripcionE: string, puestoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.puestoE = puestoE;
    }
}
