// export class Marcador {
//     constructor(public lat: number, public lon: number){

//     }
// }


export class Marcador {

    public lat: number;
    public lon: number;

    public titulo: string = 'Sin Título';
    public desc: string = 'Sin Descripción';
    constructor( lat: number,  lon: number){

        this.lat = lat;
        this.lon = lon;
    }
}