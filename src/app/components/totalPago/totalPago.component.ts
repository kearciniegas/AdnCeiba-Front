
import { Component } from '@angular/core';
import { Pago } from 'src/app/models/pago.model';
import {Registro} from 'src/app/models/registro.model';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";
import { Constants } from 'src/app/utils/constants.util';

@Component({
    selector: 'total-pago',
    templateUrl: './totalPago.component.html',
    styleUrls: ['./totalPago.component.css']
})
export class TotalPagoComponent {
    pago: Pago;
    mostrarPago(pago: Pago) {
        this.pago = pago;
        $('#' + Constants.ID_MODAL_PAGO_TOTAL).modal({ backdrop: 'static', keyboard: false });
    }
}
