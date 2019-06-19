import { Registro } from './registro.model';

export class Pago {
    constructor(
        public id: number,
        public fechaRegistro: Date,
        public valor: number,
// tslint:disable-next-line: ban-types
        public usuarioRegistro: String,
        public registro: Registro
    ) { }
}
